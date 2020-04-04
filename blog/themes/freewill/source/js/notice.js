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
