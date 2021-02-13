title: 下載及安裝
comments: false
icon: fa fa-download
date: 2021-02-06 21:00:00
s: download
---

RIME／中州韻輸入法引擎，是一個跨平臺的輸入法算法框架。
基於這一框架，Rime 開發者與其他開源社區的參與者在 Windows、macOS、Linux、Android 等平臺上創造了不同的輸入法前端實現。

# <a name="windows">Windows</a>

## 小狼毫 <small>Weasel</small>

  * [小狼毫 0.14.3](https://bintray.com/rime/weasel/release)〔[下載](https://dl.bintray.com/rime/weasel/weasel-0.14.3.0-installer.exe)〕〔[更新日誌](/release/weasel/)〕〔[歷史版本](https://bintray.com/rime/weasel/release)〕〔[0.9.x 版本](https://bintray.com/lotem/rime/Weasel)〕〔[測試頻道](https://bintray.com/rime/weasel/testing)〕
    適用於 Windows 7, Windows 8/8.1, Windows 10

  * [小狼毫 0.12.0](https://bintray.com/rime/weasel/release/0.12.0)〔[下載](https://dl.bintray.com/rime/weasel/weasel-0.12.0.0-installer.exe)〕
    適用於 Windows XP SP3

  * [語言模型數據包](https://bintray.com/rime/weasel/data)〔[配方](https://github.com/lotem/rime-octagram-data)〕

# <a name="mac">macOS</a>

## 鼠鬚管 <small>Squirrel</small>

  * [鼠鬚管 0.15.2](https://bintray.com/rime/squirrel/release)〔[下載](https://dl.bintray.com/rime/squirrel/Squirrel-0.15.2.zip)〕〔[更新日誌](/release/squirrel/)〕〔[歷史版本](https://bintray.com/rime/squirrel/release)〕〔[0.9.x 版本](https://bintray.com/lotem/rime/Squirrel)〕〔[測試頻道](https://bintray.com/rime/squirrel/testing)〕
    適用於 macOS 10.9+

其他安裝方式：

  * Install via [Homebrew](https://brew.sh): `brew install --cask squirrel`

相關軟件：

  * *（第三方軟件）* [neolee/SCU](https://github.com/neolee/SCU) 是由 [Neo Lee](https://github.com/neolee) 開發的圖形化配置工具。（可能不匹配鼠鬚管的最新版本）


## XIME <small>XIME Input Method Editor</small>

*（第三方軟件）* [stackia/XIME](https://github.com/stackia/XIME) 是由 [Stackie Jia](https://github.com/stackia) 創作的基於 Rime 引擎的 macOS 輸入法。

# <a name="linux">Linux</a>

## ibus-rime

基於 IBus 輸入法框架。
請 [查看](https://github.com/rime/home/wiki/RimeWithIBus) 各 Linux 發行版安裝說明，或從源碼編譯安裝。

## fcitx-rime

*（第三方軟件）* 基於 Fcitx 輸入法框架的 [fcitx-rime](https://github.com/fcitx/fcitx-rime)，由 Fcitx 團隊開發和維護。

# <a name="android">Android</a>

## 同文 <small>Tongwen Rime Input Method Editor</small>

*（第三方軟件）* [同文安卓輸入法平臺](https://github.com/osfans/trime) 〔[下載傳送門](https://github.com/osfans/trime/releases)〕是由 [osfans](https://github.com/osfans) 創作的基於 Rime 引擎的 Android 輸入法。

<hr/>

## 下一步：選擇輸入方案

### 使用方案選單

下載、安裝完成後，試試：
按組合鍵 <code>Ctrl+`</code> 或 <code>F4</code> 鍵喚出輸入方案選單，由此調整 Rime 輸入法最常用的選項。

您可通過方案選單切換已經安裝的輸入方案。〔[說明書](https://github.com/rime/home/wiki/UserGuide)〕

### 安裝更多輸入方案

通過 [/plum/](https://github.com/rime/plum) 配置管理器獲取並安裝輸入方案：〔[庫藏一覽](https://github.com/rime/plum#packages)〕

  - 現代標準漢語：[朙月拼音](https://github.com/rime/rime-luna-pinyin)、[地球拼音](https://github.com/rime/rime-terra-pinyin)、[注音](https://github.com/rime/rime-bopomofo)
  - 拼音的變體：[雙拼](https://github.com/rime/rime-double-pinyin)、[宮保拼音](https://github.com/rime/rime-combo-pinyin)、[打字速記法](https://github.com/rime/rime-stenotype)
  - 漢語方言：[粵拼](https://github.com/rime/rime-jyutping)、吳語（[上海話](https://github.com/rime/rime-wugniu)、[蘇州話](https://github.com/rime/rime-soutzoe)）
  - 歷史音韻：[中古漢語拼音](https://github.com/rime/rime-middle-chinese)
  - 字形輸入法：[五筆畫](https://github.com/rime/rime-stroke)、[倉頡](https://github.com/rime/rime-cangjie)、[速成](https://github.com/rime/rime-quick)、[五筆](https://github.com/rime/rime-wubi)
  - 符號輸入：[繪文字](https://github.com/rime/rime-emoji)、[國際音標](https://github.com/rime/rime-ipa)

<hr/>

## 再一步：學習如何 DIY

這篇《[定製指南](https://github.com/rime/home/wiki/CustomizationGuide)》，相信能解答您的不少疑問。

熟悉了基本的定製方法以後，如果需要製作自己的輸入方案，請進階閱讀《[Rime 輸入方案設計書](https://github.com/rime/home/wiki/RimeWithSchemata)》。

<hr/>

## 敬告 Rime 用家

請您知曉：

※ 本品是按照 GPL 授權條款發佈的自由軟件，您可嘗試按照本站提供的指南自行編譯安裝。
※ 輸入法是一種有較高權限的系統軟件，所以一些 Windows 安全防護軟件會在輸入法安裝過程中彈出提示，需要選擇「允許繼續操作」方可正確安裝。
※ 〔小狼毫〕的開發與發佈均在受保護的環境中完成。如果使用過程中，您系統中某種“安全”軟件稱「發現木馬」，那麼此種情形將考驗您的判斷力。
