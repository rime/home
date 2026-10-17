+++
title = "下載及安裝"
date = "2024-06-01 00:00:00"
[extra]
icon = "fa fa-download"
+++

RIME／中州韻輸入法引擎，是一個跨平臺的輸入法算法框架。\
基於這一框架，Rime 開發者與其他開源社區的參與者在 Windows、macOS、Linux、Android 等平臺上創造了不同的輸入法前端實現。

# <a name="windows">Windows</a>

## 小狼毫 <small>Weasel</small>

{{ <download_item id="weasel" /> }}

{{ <download_item id="weasel_win7_compat" /> }}

{{ <download_item id="weasel_winxp_compat" /> }}

# <a name="mac">macOS</a>

## 鼠鬚管 <small>Squirrel</small>

{{ <download_item id="squirrel" /> }}

{{ <download_item id="squirrel_macos10_9_compat" /> }}

其他安裝方式：

  * Install via [Homebrew](https://brew.sh): `brew install squirrel-app`

相關軟件：

  * *（第三方軟件）* [Squirrel Configuration Tool (SCT)](https://github.com/neolee/sct) 是由 [Neo Lee](https://github.com/neolee) 開發的圖形化配置工具。


## 小企鹅 <small>fcitx5-macos</small>

*（第三方軟件）* [fcitx5-macos](https://github.com/fcitx-contrib/fcitx5-macos) 是 Fcitx 輸入法的 macOS 移植。〔[下載傳送門](https://github.com/fcitx-contrib/fcitx5-macos-installer/blob/master/README.zh-CN.md)〕需要下載中州韻版安裝器。

# <a name="linux">Linux</a>

## ibus-rime

基於 IBus 輸入法框架。
請 [查看](https://github.com/rime/home/wiki/RimeWithIBus) 各 Linux 發行版安裝說明，或從源碼編譯安裝。

## fcitx5-rime

*（第三方軟件）* 基於 Fcitx5 輸入法框架的 [fcitx5-rime](https://github.com/fcitx/fcitx5-rime)，由 Fcitx 團隊開發和維護。查看 [安裝方式](https://fcitx-im.org/wiki/Install_Fcitx_5/zh-cn) 

# <a name="android">Android</a>

## 同文 <small>Tongwen Rime Input Method Editor</small>

*（第三方軟件）* [同文安卓輸入法平臺](https://github.com/osfans/trime) 是由 [osfans](https://github.com/osfans) 創作的基於 Rime 引擎的 Android 輸入法。〔[下載傳送門](https://github.com/osfans/trime/releases)〕

## 小企鹅 <small>fcitx5-android</small>

*（第三方軟件）* [fcitx5-android](https://github.com/fcitx5-android/fcitx5-android) 是由 Fcitx 團隊製作的 Android 輸入法。〔[下載傳送門](https://github.com/fcitx5-android/fcitx5-android/releases)〕需要下載 app 本體及 plugin.rime 插件。

# <a name="web">在線輸入法</a>

## My RIME

*（第三方軟件）* [My RIME](https://github.com/LibreService/my_rime)：自由開源在線中文輸入法。

---

## 下一步：選擇輸入方案

### 使用方案選單

下載、安裝完成後，試試：\
按組合鍵 <code>Ctrl+`</code> 或 <code>F4</code> 鍵喚出輸入方案選單，由此調整 Rime 輸入法最常用的選項。

您可通過方案選單切換已經安裝的輸入方案。〔[說明書](https://github.com/rime/home/wiki/UserGuide)〕

### 安裝更多輸入方案

通過 [/plum/](https://github.com/rime/plum) 配置管理器獲取並安裝輸入方案。詳見〔[配方](/recipes)〕。

---

## 再一步：學習如何 DIY

這篇《[定製指南](https://github.com/rime/home/wiki/CustomizationGuide)》，相信能解答您的不少疑問。

熟悉了基本的定製方法以後，如果需要製作自己的輸入方案，請進階閱讀《[Rime 輸入方案設計書](https://github.com/rime/home/wiki/RimeWithSchemata)》。

---

## 敬告 Rime 用家

請您知曉：

※ 本品是按照 GPL 授權條款發佈的自由軟件，您可嘗試按照本站提供的指南自行編譯安裝。\
※ 輸入法屬於系統底層軟件，部分安全防護軟件在安裝或註冊服務時可能彈出提示，需選擇「允許」方可正常安裝。\
※ 若安全防護軟件報告威脅，請務必先確認安裝檔來自官方發佈頁（可比對 Checksum 校驗值）；若疑慮未能排除，請暫停安裝並向維護者反饋，切勿在來源未明時忽略警示。
