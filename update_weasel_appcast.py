import requests
import time
import tomlkit
from datetime import datetime, timedelta, timezone

datas = []
for url in [
    "https://api.github.com/repos/rime/weasel/releases/tags/latest",
    "https://api.github.com/repos/rime/weasel/releases/latest",
]:
    response = requests.get(url)
    if response.ok:
        datas.append(response.json())
filenames = []
urls = []
update_time = []
tags_name = []
for data in datas:
    if data["prerelease"] == False:
        release_json = data
    for asset in data['assets']:
        if asset['name'].endswith('.exe'):
            filenames.append(asset['name'])
            urls.append(asset['browser_download_url'])
            update_time.append(data['published_at'])
            tags_name.append(data['tag_name'])
# compare update_time and get the latest one
latest_time = update_time[0]
latest_index = 0
for i in range(1, len(update_time)):
    if update_time[i] > latest_time:
        latest_time = update_time[i]
        latest_index = i
# get version number
version = filenames[latest_index].replace("weasel-", "").replace("-installer.exe", "")
# download url
download_url = urls[latest_index]
# get local time in format like "Thu, 01 Jan 1970 00:00:00 +0000"
# define a function to format time
def format_time(time_str):
    utc_offset_sec = -time.timezone if time.localtime().tm_isdst == 0 else -time.altzone
    utc_offset = timedelta(seconds=utc_offset_sec)
    current_tz = timezone(utc_offset)
    utc_time = datetime.strptime(time_str, "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=timezone.utc)
    local_time = utc_time.astimezone(current_tz)
    formatted_time = local_time.strftime("%a, %d %b %Y %H:%M:%S %z")
    return formatted_time
formatted_time = format_time(update_time[latest_index])

# get release notes link
if tags_name[latest_index] == "latest":
    release_notes_url = "http://github.com/rime/weasel/releases/tag/latest/index.html"
else:
    release_notes_url = "http://rime.github.io/testing/weasel/index.html"
# format xml file content
template = f"""<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle">
<channel>
    <title>【小狼毫】輸入法測試頻道</title>
    <link>http://rime.github.io/testing/weasel/appcast.xml</link>
    <description>小狼毫測試版 Appcast 更新頻道</description>
    <language>zh</language>
    <item>
      <title>小狼毫 {version}</title>
      <sparkle:releaseNotesLink>{release_notes_url}</sparkle:releaseNotesLink>
      <pubDate>{formatted_time}</pubDate>
      <enclosure url="{download_url}"
                 sparkle:version="{version}"
                 type="application/octet-stream"/>
    </item>
  </channel>
</rss>
"""
print(f"./content/testing/weasel/appcast.xml:\n{template}")
# write template to ./content/testing/weasel/appcast.xml
with open("./content/testing/weasel/appcast.xml", "w", encoding='utf-8') as f:
    f.write(template)
    print("./content/testing/weasel/appcast.xml updated\n")
# update release appcast.xml automatically, and update other files if needed
if 'release_json' in locals() or 'release_json' in globals():
    import re
    release_formatted_time = format_time(release_json['published_at'])
    # get release url
    for asset in release_json['assets']:
        if asset['name'].endswith('.exe'):
            release_url = asset['browser_download_url']
            break
    if 'release_url' not in locals():
        print("release_url not found, using default url")
        release_url = f"https://github.com/rime/weasel/releases/download/{release_json['tag_name']}/weasel-{release_json['tag_name']}.0-installer.exe"
    # update appcast.xml
    template_release = f"""<?xml version="1.0" encoding="utf-8"?>
    <rss version="2.0" xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle">
    <channel>
        <title>【小狼毫】輸入法更新頻道</title>
        <link>http://rime.github.io/release/weasel/appcast.xml</link>
        <description>小狼毫 Appcast 更新頻道</description>
        <language>zh</language>
        <item>
        <title>小狼毫 {release_json["tag_name"]}</title>
        <sparkle:releaseNotesLink>http://rime.github.io/release/weasel/index.html</sparkle:releaseNotesLink>
        <pubDate>{release_formatted_time}</pubDate>
        <enclosure url="{release_url}"
                    sparkle:version="{release_json["tag_name"]}"
                    type="application/octet-stream"/>
        </item>
    </channel>
    </rss>"""
    print(f"./content/release/weasel/appcast.xml:\n{template_release}")
    with open("./content/release/weasel/appcast.xml", "w", encoding='utf-8') as f:
        f.write(template_release)
        print("./content/release/weasel/appcast.xml updated\n")
    # get changelog.md
    changelog_url = f"https://raw.githubusercontent.com/rime/weasel/refs/tags/{release_json['tag_name']}/CHANGELOG.md"
    changelog_txt = requests.get(changelog_url).text
    match = re.search(r'(\d+\.\d+\.\d+)', changelog_txt)
    if not match:
        print("No version number found in CHANGELOG.md")
        exit(0)
    changelog_version = match.group(1)

    if changelog_version != release_json['tag_name']:
        print("latest version in CHANGELOG.md is not released yet")
        exit(0)
    # version tag in CHANGELOG.md has been released
    print("latest version in CHANGELOG.md has been released")
    index_md = f"""---\ntitle: 【小狼毫】更新日誌\ndate: {release_formatted_time}\n---\n\n{changelog_txt}"""
    # update ./content/release/weasel/index.md
    with open("./content/release/weasel/index.md", "w", encoding='utf-8') as f:
        f.write(index_md)
        print("./content/release/weasel/index.md updated")
    # update ./content/testing/weasel/index.md
    with open("./content/testing/weasel/index.md", "w", encoding='utf-8') as f:
        f.write(index_md)
        print("./content/testing/weasel/index.md updated")
    # modify ./data/downloads.toml, key weasel/version and weasel/url
    with open("./data/downloads.toml", "r", encoding='utf-8') as f:
        doc = tomlkit.parse(f.read())
    if "weasel" not in doc:
        print("錯誤: 找不到 [weasel] 區塊")
        exit(0)
    new_version = release_json['tag_name']
    print(f"當前版本: {doc['weasel']['version']} -> 更新爲: {new_version}")
    doc["weasel"]["version"] = new_version
    doc["weasel"]["url"] = release_url
    with open("./data/downloads.toml", "w", encoding='utf-8') as f:
        f.write(doc.as_string())
        print("./data/downloads.toml updated")
