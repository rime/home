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
    start: '2026/02/11 GMT+0800',
    length: 1,
    notice: '《汉语拼音方案》是中国人名、地名和中文文献罗马字母拼写法的统一规范，并用于汉字不便或不能使用的领域。'
  },
  {
    start: '2025/04/01 GMT+0800',
    length: 1,
    mode: 'fool-mode',
    notice: 'R²ime 高階開發者測試版震驚出爐！在線試用，可由 rime.io 安裝配方 ',
    linkIcon: 'fa fa-flask',
    linkUrl: 'https://rime.io'
  },
  {
    start: '2025/04/02 GMT+0800',
    length: 3,
    notice: '鼠鬚管　爲物雖微情不淺　新詩醉墨時一揮　別後寄我無辭遠　',
    linkIcon: 'fa fa-music',
    linkUrl: '/blog/2025/03/01/theme-music/#其三-鼠鬚管'
  },
];

(function maybeDisplayNotice() {
  let today = new Date();
  for (let entry of notices) {
    let startDate = new Date(entry.start);
    if (today < startDate) {
      continue;
    }
    let endDate = startDate;
    endDate.setDate(endDate.getDate() + entry.length);
    if (today > endDate) {
      continue;
    }
    if (entry.mode) {
      $(document.body).addClass(entry.mode);
    }
    if (entry.notice) {
      $('.front-matter .slogan').hide();
      let notice = $('.front-matter .notice');
      notice.append($('<span/>').text(entry.notice));
      if (entry.linkUrl) {
        notice.append($('<a/>').attr({
          'href': entry.linkUrl,
          'class': entry.linkIcon || 'fa fa-link',
        }));
      }
    }
    return;
  }
})();
