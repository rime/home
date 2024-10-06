import requests
import time
from datetime import datetime, timedelta, timezone

datas = []
for url in ["https://api.github.com/repos/rime/weasel/releases/tags/latest", "https://api.github.com/repos/rime/weasel/releases/latest"]:
    response = requests.get(url)
    if response.ok:
        datas.append(response.json())
filenames = []
urls = []
update_time = []
tags_name = []
for data in datas:
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
version = filenames[latest_index].replace("-installer.exe", "")
version = version.replace("weasel-", "")
# download url
download_url = urls[latest_index]
# get local time in format like "Thu, 01 Jan 1970 00:00:00 +0000"
utc_offset_sec = -time.timezone if time.localtime().tm_isdst == 0 else -time.altzone
utc_offset = timedelta(seconds=utc_offset_sec)
current_tz = timezone(utc_offset)
utc_time = datetime.strptime(update_time[latest_index], "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=timezone.utc)
local_time = utc_time.astimezone(current_tz)
formatted_time = local_time.strftime("%a, %d %b %Y %H:%M:%S %z")
# get release notes link
if tags_name[latest_index] == "latest":
    releaseNotesLink = "https://github.com/rime/weasel/releases/tag/latest"
else:
    releaseNotesLink = "http://rime.github.io/testing/weasel/"
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
      <sparkle:releaseNotesLink>{releaseNotesLink}</sparkle:releaseNotesLink>
      <pubDate>{formatted_time}</pubDate>
      <enclosure url="{download_url}"
                 sparkle:version="{version}"
                 type="application/octet-stream"/>
    </item>
  </channel>
</rss>
"""
print("output appcast.xml content:")
print(template)
# write template to ./source/testing/weasel/appcast.xml
with open("./source/testing/weasel/appcast.xml", "w", encoding='utf-8') as f:
    f.write(template)
    f.close()
