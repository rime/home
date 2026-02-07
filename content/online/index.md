+++
title = "體驗"
[extra]
icon = "fa fa-cloud"
+++

[朙月拼音](https://github.com/rime/rime-luna-pinyin)與[五筆畫](https://github.com/rime/rime-stroke)方案，基於 [fcitx5-rime.js](https://github.com/rimeinn/fcitx5-rime.js) 。

<script type="module">
  import { loadZip } from './Fcitx5.js'
  await loadZip('./rime.zip')
  let timer = null
  window.fcitx.setSystemInputMethodInUseCallback(() => {
    const message = document.querySelector('#message')
    message.textContent = '請禁用系統輸入法'
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      message.textContent = ''
      timer = null
    }, 5000)
  })
</script>
<div class="has-success">
  <textarea class="form-control" spellcheck="false" style="width: 100%; height: 300px"></textarea>
  <div id="message"></div>
</div>
