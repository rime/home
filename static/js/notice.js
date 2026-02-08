const notices = [
    {
        start: '2018/05/19 GMT+0800',
        length: 7,
        mode: 'rip-mode',
        notice: '鄭張尚芳先生千古'
    },
    {
        start: '2019/04/01 GMT+0800',
        length: 1,
        mode: 'fool-mode',
        notice: 'Rime 輸入法現已集成到 Googie 原生 Ambroid 及 ioOS 平臺，可由 rime.io 下載安裝配方'
    },
    {
        start: '2020/04/04 GMT+0800',
        length: 1,
        mode: 'rip-mode',
        notice: '清明追思 家國永念'
    },
    {
        start: '2022/11/30 GMT+0800',
        length: 7,
        mode: 'rip-mode',
        notice: '人的生命是有限的　知識是那麼浩瀚　即使你怎麼盡全力地努力　也只能得到一點點'
    },
    {
        start: '2025/02/11 GMT+0800',
        length: 1,
        notice: '《汉语拼音方案》是中国人名、地名和中文文献罗马字母拼写法的统一规范，并用于汉字不便或不能使用的领域。'
    },
    {
        start: '2025/04/01 GMT+0800',
        length: 1,
        mode: 'fool-mode',
        notice: 'R²ime 高階開發者測試版震驚出爐！在線試用，可由 rime.io 安裝配方',
        linkIcon: 'fa fa-flask',
        linkUrl: 'https://rime.io'
    },
    {
        start: '2025/04/02 GMT+0800',
        length: 3,
        notice: '鼠鬚管　爲物雖微情不淺　新詩醉墨時一揮　別後寄我無辭遠',
        linkIcon: 'fa fa-music',
        linkUrl: '/blog/2025/03/01/theme-music/#其三-鼠鬚管'
    },
    {
        // 拼音生日獻禮——漢語拼音方案批准日（1958年2月11日）
        start: '2026/02/11 GMT+0800',
        length: 3, // 慶祝三天
        sequence: [
            { pinyin: "jinian", hanzi: "紀念" },
            { pinyin: " ", hanzi: " " }, // 空格
            { pinyin: "hanyu", hanzi: "漢語" },
            { pinyin: "pinyin", hanzi: "拼音" },
            { pinyin: " ", hanzi: " " },
            { pinyin: "banbu", hanzi: "頒布" },
            { pinyin: " ", hanzi: " " },
            { pinyin: "68", hanzi: "68" },
            { pinyin: "zhounian", hanzi: "週年" }
        ],
        strudel: 'https://strudel.cc/#Ci8vIOa8ouiqnuaLvOmfs%2BWtl%2BavjeatjCAoMTk1OCkgLSDmi7zpn7PnlJ%2Fml6Xnjbvnpq4KCm5vdGUoYAogIFtjNEAxLjUgZDRAMC41XSBbZTQgYzRdCiAgW2U0IGc0QDAuNSBhNEAwLjVdIGc0CiAgW2E0QDEuNSBnNEAwLjVdIFtlNCBnNF0KICBbZDQgZTRdIGQ0CgogIFtnNCBlNF0gW2c0QDEuNSBnNEAwLjVdIAogIFtjNSBnNF0gYTQKICBbZzRAMC43NSBnNEAwLjI1IGE0XSBbZTQgYzRdCiAgW2Q0IGU0XSBjNAogIAogIH4gfiB%2BYCkKICAucygicGlhbm8iKSAgICAgICAvLyDpn7PoibIKICAuY2xpcCgxKSAgICAgICAgICAvLyDorpPogbLpn7Pnn63kv4PmnInlipvvvIzkuI3mi5bms6XluLbmsLQKICAubHBmKDIwMDApICAgICAgICAvLyDmv77ms6LlmajvvIzorpPogbLpn7PmuqvmmpbkuIDpu54KICAucm9vbSgwLjUpICAgICAgICAvLyDliqDkuIDpu57pu57lm57pn7MKICAuc2xvdygxMikgICAgICAgICAgLy8g6Kit5a6a6YCf5bqm'
    },
];

(function maybeDisplayNotice() {
    let today = new Date();
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    for (let entry of notices) {
        let startDate = new Date(entry.start);
        if (today < startDate) continue;
        let endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + entry.length);
        if (today > endDate) continue;

        if (entry.mode) $(document.body).addClass(entry.mode);

        let parentHeader = $('.front-matter');
        let noticeContainer = parentHeader.find('.notice');
        parentHeader.find('.slogan').hide();

        // 清空並移除可能的殘留類名
        noticeContainer.empty().removeClass('typewriter-mode');

        // === A. 打字機模式 ===
        if (entry.sequence) {
            noticeContainer.addClass('typewriter-mode');

            let typeWriterSpan = $('<span id="rime-typewriter"></span>');
            let cursorSpan = $('<span class="notice-cursor">‸</span>');

            noticeContainer.append(typeWriterSpan).append(cursorSpan);

            let container = typeWriterSpan;

            async function startTyping() {
                await sleep(800);
                for (let item of entry.sequence) {
                    let bufferSpan = $('<span class="rime-preview"></span>');
                    container.append(bufferSpan);
                    for (let char of item.pinyin) {
                        bufferSpan.text(bufferSpan.text() + char);
                        await sleep(80 + Math.random() * 50);
                    }
                    await sleep(200);
                    bufferSpan.remove();
                    container.append(document.createTextNode(item.hanzi));
                    await sleep(300);
                }
            }
            startTyping();
        }
        // === B. 普通文字模式 ===
        else if (entry.notice) {
            noticeContainer.text(entry.notice);

            if (entry.linkUrl) {
                noticeContainer.append($('<a/>').attr({
                    'href': entry.linkUrl,
                    'class': entry.linkIcon || 'fa fa-link',
                    'target': '_blank'
                }));
            }
        }

        // === C. 播放器邏輯 ===
        if (entry.strudel) {
            let iframe = $('<iframe></iframe>');
            iframe.attr({
                'src': entry.strudel,
                'allow': 'autoplay; clipboard-write',
                'class': 'strudel-frame'
            });
            noticeContainer.append(iframe);
        }

        return;
    }
})();
