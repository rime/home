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
      $('.front-matter .notice').text(entry.notice);
    }
    return;
  }
})();
