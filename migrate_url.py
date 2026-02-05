import os
import re
import yaml # pip install pyyaml
import shutil
from datetime import datetime
from urllib.parse import unquote

# --- 配置區 ---
HEXO_ROOT = '.'  # 假設腳本在 Hexo 根目錄運行
HEXO_POSTS_DIR = os.path.join(HEXO_ROOT, 'blog', 'source', '_posts')
Zola_CONTENT_DIR = os.path.join(HEXO_ROOT, 'content', 'blog')
HEXO_PERMALINK_PREFIX = 'blog'

# 定義全局資源映射關係
# 格式: '鏈接前綴': '本地源文件夾路徑'
ASSET_MAPPINGS = {
    '/images/': os.path.join(HEXO_ROOT, 'blog', 'source', 'images'),
    '/media/':  os.path.join(HEXO_ROOT, 'blog', 'source', 'media'),
}
# -------------

if not os.path.exists(Zola_CONTENT_DIR):
    os.makedirs(Zola_CONTENT_DIR)

front_matter_pattern = re.compile(r'^(?:---\s*\n)?(.*?)\n---\s*\n', re.DOTALL)

# 用於匹配 Markdown 圖片/鏈接 和 HTML img 標籤中的路徑
# 捕獲組1: 完整路徑 (e.g., /images/2023/test.jpg)
LINK_REGEX = re.compile(r'(?:\]\(|src=["\'])(/(?:images|media)/[^"\')\s]+)(?:\)|["\'])')

def process_assets(content, post_target_dir):
    """
    掃描內容中的資源鏈接，複製文件，並重寫路徑。
    """
    # 找出所有匹配的資源路徑 (去重)
    found_paths = set(re.findall(LINK_REGEX, content))

    new_content = content

    for relative_url in found_paths:
        # 解碼 URL (處理中文文件名，如 /images/%E5%9C%96.jpg)
        decoded_url = unquote(relative_url)

        # 判斷是屬於哪個資源目錄
        source_file_path = None
        for prefix, source_dir in ASSET_MAPPINGS.items():
            if decoded_url.startswith(prefix):
                # 去掉前綴，獲取文件在文件夾內的相對路徑
                # e.g. /images/2023/pic.jpg -> 2023/pic.jpg
                sub_path = decoded_url[len(prefix):]
                # 組合出硬盤上的絕對路徑
                # Windows/Linux 路徑兼容處理
                sub_path_os = sub_path.replace('/', os.sep)
                candidate_path = os.path.join(source_dir, sub_path_os)

                if os.path.exists(candidate_path):
                    source_file_path = candidate_path
                    break

        if source_file_path:
            # 獲取文件名 (e.g., pic.jpg)
            filename = os.path.basename(source_file_path)

            # 目標路徑
            target_path = os.path.join(post_target_dir, filename)

            # 複製文件
            try:
                shutil.copy2(source_file_path, target_path)

                # --- 關鍵：重寫內容中的鏈接 ---
                # 將所有出現的 "/images/xxxx/pic.jpg" 替換為 "pic.jpg"
                new_content = new_content.replace(relative_url, filename)

            except Exception as e:
                print(f"    [資源錯誤] 無法複製 {filename}: {e}")
        else:
            print(f"    [警告] 找不到資源文件: {decoded_url}")

    return new_content

def migrate():
    count = 0
    for filename in os.listdir(HEXO_POSTS_DIR):
        if not filename.endswith('.md'):
            continue

        src_path = os.path.join(HEXO_POSTS_DIR, filename)

        with open(src_path, 'r', encoding='utf-8') as f:
            content = f.read()

        match = front_matter_pattern.match(content)
        if match:
            fm_text = match.group(1)
            body = content[match.end():]

            try:
                data = yaml.safe_load(fm_text)

                # 1. 日期處理
                date = data.get('date')
                if not date: continue
                if isinstance(date, str):
                    try:
                        date = datetime.fromisoformat(date.replace('Z', '+00:00'))
                    except ValueError:
                        date = datetime.strptime(date[:10], '%Y-%m-%d')

                year = date.strftime('%Y')
                month = date.strftime('%m')
                day = date.strftime('%d')

                # 2. Slug 處理
                slug = data.get('slug')
                if not slug:
                    slug = os.path.splitext(filename)[0]

                # 3. 舊 URL 處理 (Aliases)
                old_hexo_path = f"{HEXO_PERMALINK_PREFIX}/{year}/{month}/{day}/{slug}/"
                data['aliases'] = [old_hexo_path]

                # 4. 建立 Zola 目錄 (Leaf Bundle)
                post_dir = os.path.join(Zola_CONTENT_DIR, slug)
                if not os.path.exists(post_dir):
                    os.makedirs(post_dir)

                # 5. 處理 Hexo 同名 Asset Folder (如果以前就有用這個功能)
                # 優先級：先搬舊的 Asset Folder，再搬全局 Images
                hexo_asset_dir = os.path.join(HEXO_POSTS_DIR, os.path.splitext(filename)[0])
                if os.path.isdir(hexo_asset_dir):
                    for asset in os.listdir(hexo_asset_dir):
                        s = os.path.join(hexo_asset_dir, asset)
                        d = os.path.join(post_dir, asset)
                        if os.path.isfile(s): shutil.copy2(s, d)

                # 6. --- 核心：處理全局資源 (/images, /media) 並重寫 body ---
                new_body = process_assets(body, post_dir)

                # 7. 生成新文件
                new_fm = yaml.dump(data, allow_unicode=True, default_flow_style=False)
                new_content = f"---\n{new_fm}---\n{new_body}"

                output_file = os.path.join(post_dir, "index.md")
                with open(output_file, 'w', encoding='utf-8') as out:
                    out.write(new_content)

                print(f"已遷移: {slug} (資源已處理)")
                count += 1

            except Exception as e:
                print(f"Error {filename}: {e}")

    print(f"完成！共處理 {count} 篇。資源已全部本地化。")

if __name__ == '__main__':
    migrate()
