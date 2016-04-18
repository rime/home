title: 下載及安裝
icon: fa fa-download
date: 2015-03-14 17:33:41
s: download
---

RIME／中州韻輸入法引擎，是一個跨平臺的輸入法算法框架。
基於這一框架，Rime 開發者與其他開源社區的參與者在 Windows、Mac OS X、Linux、Android 平臺上創造了不同的輸入法前端實現。

# <a name="windows">Windows</a>

## 小狼毫 <small>Weasel</small>

  * [小狼毫 0.9.30](https://bintray.com/lotem/rime/Weasel)〔[下載](http://dl.bintray.com/lotem/rime/weasel-0.9.30.0-installer.exe?direct)〕〔[更新日誌](/release/weasel/)〕，適用於 Windows XP SP3, 32/64位 Windows 7
  * [小狼毫擴展方案集](https://bintray.com/lotem/rime/weasel-expansion)〔[下載](http://dl.bintray.com/lotem/rime/weasel-expansion-0.9.18.0.exe?direct)〕

# <a name="mac">Mac OS X</a>

## 鼠鬚管 <small>Squirrel</small>

  * [鼠鬚管 0.9.26.2](https://bintray.com/lotem/rime/Squirrel)〔[下載](http://dl.bintray.com/lotem/rime/Squirrel-0.9.26.2.zip)〕〔[更新日誌](/release/squirrel/)〕，適用於64位 Mac OS X 10.7+
  * [neolee/SCU](https://github.com/neolee/SCU) 是由 [Neo Lee](https://github.com/neolee) 開發的圖形化配置工具。

其他安裝方式：

  * Install via [Homebrew Cask](http://caskroom.io/): `brew cask install squirrel`
  * Install via [Boxen](https://boxen.github.com/): [boxen/puppet-squirrel](https://github.com/boxen/puppet-squirrel)

## XIME <small>XIME Input Method Editor</small>

[stackia/XIME](https://github.com/stackia/XIME) 是由 [Stackie Jia](https://github.com/stackia) 創作的基於 Rime 引擎的 OS X 輸入法。

# <a name="linux">Linux</a>

## ibus-rime

基於 IBus 輸入法框架。
請查看各 Linux 發行版 [安裝說明](https://github.com/rime/home/wiki/RimeWithIBus)，或下載 tar 包從源碼編譯安裝：

  * [ibus-rime 1.2](http://dl.bintray.com/lotem/rime/ibus-rime-1.2.tar.gz)
  * [librime 1.2](http://dl.bintray.com/lotem/rime/librime-1.2.tar.gz)
  * [brise 0.35](http://dl.bintray.com/lotem/rime/brise-0.35.tar.gz)

舊版本：適用於不支持 C++11 的編譯器（gcc<4.8）

  * [ibus-rime 1.0](http://dl.bintray.com/lotem/rime/ibus-rime-1.0.tar.gz)
  * [librime 1.0](http://dl.bintray.com/lotem/rime/librime-1.0.tar.gz)
  * [brise 0.30](http://dl.bintray.com/lotem/rime/brise-0.30.tar.gz)

## fcitx-rime

基於 Fcitx 輸入法框架的 [fcitx-rime](https://github.com/fcitx/fcitx-rime)，由 Fcitx 團隊開發和維護。

# <a name="android">Android</a>

## 同文 <small>Tongwen Rime Input Method Editor</small>

[同文安卓輸入法平臺](https://github.com/osfans/trime) 〔[下載](https://github.com/osfans/trime/releases)〕是由 [osfans](https://github.com/osfans) 創作的基於 Rime 引擎的 Android 輸入法。

<hr/>

## 下一步：使用方案選單

下載、安裝完成後，試試：
按組合鍵 <code>Ctrl+`</code> 喚出輸入方案選單，由此調整 Rime 輸入法最常用的選項。

與 Rime 一同發行的輸入方案有：
朙月拼音、語句流、倉頡、地球拼音、注音、速成、五筆、雙拼、粵拼、吳語、中古漢語拼音、五筆畫、Emoji、國際音標、宮保拼音……
您可從方案選單切換到朙月拼音、倉頡等默認啓用的輸入方案。〔[說明書](https://github.com/rime/home/wiki/UserGuide)〕

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
