import runpy
import unittest
from contextlib import chdir, redirect_stdout
from io import StringIO
from pathlib import Path
from tempfile import TemporaryDirectory
from unittest.mock import Mock, patch

import requests


SCRIPT = Path(__file__).resolve().parents[1] / "update_weasel_appcast.py"
RELEASES_URL = "https://api.github.com/repos/rime/weasel/releases"


def release_response(tag, version, prerelease):
    installer = f"weasel-{version}-installer.exe"
    response = Mock(ok=True)
    response.json.return_value = {
        "tag_name": tag,
        "prerelease": prerelease,
        "published_at": "2026-01-01T00:00:00Z",
        "assets": [{
            "name": installer,
            "browser_download_url": f"https://github.com/rime/weasel/releases/download/{tag}/{installer}",
        }],
    }
    return response


class UpdateWeaselAppcastTests(unittest.TestCase):
    def test_changelog_http_503_leaves_outputs_unchanged(self):
        tag = "0.17.5"
        changelog_url = f"https://raw.githubusercontent.com/rime/weasel/refs/tags/{tag}/CHANGELOG.md"
        unavailable = requests.Response()
        unavailable.url = changelog_url
        unavailable.status_code = 503
        unavailable._content = b"Service Unavailable"
        responses = {
            f"{RELEASES_URL}/tags/latest": release_response("latest", "0.17.5.1", True),
            f"{RELEASES_URL}/latest": release_response(tag, "0.17.5.0", False),
            changelog_url: unavailable,
        }
        existing_files = {
            Path(name): b"previous release content\n" for name in (
                "content/testing/weasel/appcast.xml",
                "content/release/weasel/appcast.xml",
                "content/release/weasel/index.md",
                "content/testing/weasel/index.md",
                "data/downloads.toml",
            )
        }

        with TemporaryDirectory() as root, chdir(root):
            for path, content in existing_files.items():
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_bytes(content)

            with (
                patch("requests.get", side_effect=lambda url, **_: responses[url]),
                redirect_stdout(StringIO()),
            ):
                with self.assertRaises(requests.HTTPError) as error:
                    runpy.run_path(str(SCRIPT), run_name="__main__")

            self.assertEqual(error.exception.response.status_code, 503)
            actual_files = {
                path: path.read_bytes() for path in Path(".").rglob("*") if path.is_file()
            }
            self.assertEqual(actual_files, existing_files)
