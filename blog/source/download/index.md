title: 下載及安裝
comments: false
icon: fa fa-download
date: 2024-06-01 00:00:00
s: download
---

RIME／中州韻輸入法引擎，是一個跨平臺的輸入法算法框架。
基於這一框架，Rime 開發者與其他開源社區的參與者在 Windows、macOS、Linux、Android 等平臺上創造了不同的輸入法前端實現。

# <a name="windows">Windows</a>

## 小狼毫 <small>Weasel</small>

  * [小狼毫 0.17.0](https://github.com/rime/weasel/releases/latest)〔[下載](https://github.com/rime/weasel/releases/download/0.17.0/weasel-0.17.0.0-installer.exe)〕〔[更新日誌](/release/weasel/)〕〔[歷史版本](https://github.com/rime/weasel/releases)〕
    適用於 Windows 8.1, Windows 10, Windows 11

  * [小狼毫 0.14.3](https://github.com/rime/weasel/releases/tag/0.14.3)〔[下載](https://github.com/rime/weasel/releases/download/0.14.3/weasel-0.14.3.0-installer.exe)〕
    適用於 Windows 7, Windows 8/8.1, Windows 10（不再更新）

  * [小狼毫 0.9.30](https://github.com/rime/weasel/releases/tag/0.9.30)〔[下載](https://github.com/rime/weasel/releases/download/0.9.30/weasel-0.9.30.0-installer.exe)〕
    適用於 Windows XP SP3（不再更新）

# <a name="mac">macOS</a>

## 鼠鬚管 <small>Squirrel</small>

  * [鼠鬚管 1.0.3](https://github.com/rime/squirrel/releases/latest)〔[下載](https://github.com/rime/squirrel/releases/download/1.0.3/Squirrel-1.0.3.pkg)〕〔[更新日誌](/release/squirrel/)〕〔[歷史版本](https://github.com/rime/squirrel/releases)〕
    適用於 macOS 13.0+

  * [鼠鬚管 0.16.2](https://github.com/rime/squirrel/releases/0.16.2)〔[下載](https://github.com/rime/squirrel/releases/download/0.16.2/Squirrel-0.16.2.zip)〕
    適用於 macOS 10.9+ (不再更新)

其他安裝方式：

  * Install via [Homebrew](https://brew.sh): `brew install --cask squirrel`

相關軟件：

  * *（第三方軟件）* [neolee/SCU](https://github.com/neolee/SCU) 是由 [Neo Lee](https://github.com/neolee) 開發的圖形化配置工具。（可能不匹配鼠鬚管的最新版本）


## 小企鹅 <small>fcitx5-macos</small>

*（第三方軟件）* [fcitx5-macos](https://github.com/fcitx-contrib/fcitx5-macos) 是 Fcitx 輸入法的 macOS 移植。〔[下載傳送門](https://github.com/fcitx-contrib/fcitx5-macos-installer/blob/master/README.zh-CN.md)〕需要下載中州韻版安裝器。


## XIME <small>XIME Input Method Editor</small>

*（第三方軟件）* [stackia/XIME](https://github.com/stackia/XIME) 是由 [Stackie Jia](https://github.com/stackia) 創作的基於 Rime 引擎的 macOS 輸入法。

# <a name="linux">Linux</a>

## ibus-rime

基於 IBus 輸入法框架。
請 [查看](https://github.com/rime/home/wiki/RimeWithIBus) 各 Linux 發行版安裝說明，或從源碼編譯安裝。

## fcitx-rime

*（第三方軟件）* 基於 Fcitx 輸入法框架的 [fcitx-rime](https://github.com/fcitx/fcitx-rime)，由 Fcitx 團隊開發和維護。

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

<hr/>

## 下一步：選擇輸入方案

### 使用方案選單

下載、安裝完成後，試試：
按組合鍵 <code>Ctrl+`</code> 或 <code>F4</code> 鍵喚出輸入方案選單，由此調整 Rime 輸入法最常用的選項。

您可通過方案選單切換已經安裝的輸入方案。〔[說明書](https://github.com/rime/home/wiki/UserGuide)〕

### 安裝更多輸入方案

通過 [/plum/](https://github.com/rime/plum) 配置管理器獲取並安裝輸入方案。詳見〔[配方](/recipes)〕。

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
