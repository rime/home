+++
title = "新譜的 Rime 輸入法配置管理器"
date = "2018-04-22 22:28:54"
aliases = ["blog/2018/04/22/rime-configuration-manager/"]

[taxonomies]
tags = ["plum", "工具", "作品"]
+++

〔首發於 [V2EX](https://www.v2ex.com/t/445778)〕

某最近的一個小作品，分享給 Rime 用家。

[東風破 /plum/](https://github.com/rime/plum) 是個輕量級的、由 bash 腳本開發的 Rime 輸入法配置管理工具。\
有望通過提供單行安裝腳本，收集、包裝「配方」，解決 Rime 用家通過統一介面、簡便地獲取輸入方案這個難題。
並爲積累了一定經驗的用家提供了一個管理和分享配置的渠道。

<!-- more -->

## 背景

[Rime 輸入法](https://rime.im) 用 YAML 格式的配置文件完成程序的配置。用來實現一種特定輸入法的配置稱爲「輸入方案」。\
無論鼠鬚管還是小狼毫，至今都沒有一個圖形化配置工具能完成大部份配置作業。Rime 用家分享輸入方案、管理個人配置不便的問題也一直未妥善解決。

之前的不少嘗試，結果都不夠滿意。如小狼毫的「輸入法設定」程序、[SCU](https://github.com/neolee/SCU) 將常用配置圖形化，然而能夠控制的配置範圍有限；\
[Rime Kit](https://github.com/lotem/rimekit) 構想了一個面向社區的開放式配置分享／分發工具，但因初期開發工程艱鉅、運行環境太笨重等原因而擱淺。

## 出品

趁這次清明假期，閉門造車，終於寫成了這套腳本，並將原本隨輸入法軟件發佈的輸入方案納入這一體系。\
目前該工具只設按「配方」從 GitHub 獲取代碼的功能，和一個命令行介面的交互菜單。

初始安裝：

`curl -fsSL https://git.io/rime-install | bash`

命令行示例：

`bash rime-install :preset combo-pinyin jyutping wubi`

交互菜單用例截圖：\
![](https://github.com/rime/home/raw/master/images/rime-install-select.png)

## 前景

照例先畫個大餅。但這次看上去比較現實，計劃中的功能都可以用腳本完成：\
例如「配方」可以用類似 ebuild、PKGBUILD 的 bash 腳本來配置安裝內容和步驟；\
參數化「配方」，比如給某個指定的輸入方案打補靪。

按：打補靪，指通過修改配置文件中的部份配置項添加功能或改變輸入法的行爲。

終極效果是用家只須維護一份配方列表，就能按照配方一一抓取輸入方案、補靪、個人配置等，繼而部署整套用戶數據。\
今後若有能人，在此基礎上製做以配方爲操作單位的圖形化配置介面，也將事倍功半…

（…事半功倍？）事半功倍！
