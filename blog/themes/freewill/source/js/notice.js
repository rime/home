const notices = [
  {
    start: '2018/05/19 GMT+0800',
    length: 7,
    mode: 'rip-mode',
    notice: '鄭張尚芳先生千古'
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
