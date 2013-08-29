# -*- coding: utf-8 -*-
title: 拼寫運算調試器
date: 2013-08-28 20:01:17
tags:
---

# 問題

拼音類輸入法，都有一個由固定數目音節碼組成的的音節表。
如漢語拼音以數百音節表達萬餘漢字。

Rime 希望用家能自定義音節表，以及音節碼與文字的對應關係。
這通過編寫 Rime 詞典中的碼表來實現。如粵語、吳語等方言拼音的詞典，音節碼採用特定於該方言的拼寫方式。

在使用中，可以通過不同的按鍵序列鍵入這些音節。
如拼音輸入法以音節中的聲母或首字母略代整個音節，稱「簡拼」；將聲、韻各以一字母代之，稱「雙拼」。

Rime 希望這些不同的輸入形式是用家可以自定義的。如每一種雙拼方案，將按鍵映射到音節碼的方式皆不同。

# 方案

[拼寫運算／Spelling Algebra](http://code.google.com/p/rimeime/wiki/SpellingAlgebra) 是 Rime 輸入法的一項獨創技術。
其思想是用一組規則描述輸入碼到音節碼的對應關係。

拼寫運算規則基於正則表達式／regular expression，基本運算有轉寫、變形、派生、消除等。通過組合這幾種操作，完成由音節碼集合到輸入碼集合的投影。

雖然有[文檔](http://code.google.com/p/rimeime/wiki/SpellingAlgebra) 對算法作了解釋，又有 Rime 預設的輸入方案提供了多個用例，但是因爲算法本身十分複雜和抽象，編制拼寫運算規則及除錯仍有不小難度。

# 工具

早早便發願，做一臺「拼寫運算調試器」。

用他來演繹拼寫運算的過程，輸入碼如何推導出來便可一目瞭然。
又可用來做演示，幫助大家直觀地理解拼寫運算的原理和功用。

近日，「拼寫運算調試器」預覽版出爐，預備將其納入「Rime 工具箱」，與輸入法設定工具一同發佈。

[下載預覽版](http://pan.baidu.com/share/link?shareid=3588770550&uk=2550415312)

  * __node-webkit-v0.7.1-win-ia32.zip__ : node-webkit Windows 版本，或由 [node-webkit 主頁](https://github.com/rogerwang/node-webkit#downloads) 下載其他版本
  * __rimekit-1.0-preview20130827.nw__ : 用 node-webkit 的 `nw` 程序打開

![Rime 工具箱](/images/rimekit-00.png)

# 用法

以下一組屏幕截圖，演示本品常見的使用場景。

![從輸入方案載入拼寫運算規則](/images/sadebugger-01.png)

![用於格式化編碼行](/images/sadebugger-02.png)

![音節表上的投影運算](/images/sadebugger-03.png)

![高亮顯示當前運算產生的變更](/images/sadebugger-04.png)

![碼表式輸入法通常不做拼寫運算](/images/sadebugger-05.png)

![回顯按鍵字符與倉頡字母並列](/images/sadebugger-06.png)

# 技術

Rime Kit 源代碼：
https://github.com/lotem/rimekit

開源許可證：MIT

本品使用的開發技術有：

  * [AngularJS](http://angularjs.org)
  * [CoffeeScript](http://coffeescript.org/)
  * [Grunt](http://gruntjs.com/)
  * HTML & CSS
  * [Node.js](http://nodejs.org/)
  * [node-webkit](https://github.com/rogerwang/node-webkit)

還引用了以下第三方程序庫：

  * [Bootstrap CSS](http://getbootstrap.com/)
  * [UI Bootstrap](http://angular-ui.github.io/bootstrap/)
  * [jsdiff](https://github.com/kpdecker/jsdiff)
  * [yaml.js](https://github.com/jeremyfa/yaml.js)

實現拼寫運算的代碼參考了 [librime](https://github.com/lotem/librime) 。

由於 node-webkit 應用容器具有跨平臺的特點，本品亦可用於 Mac, Linux 和 Windows 操作系統。
