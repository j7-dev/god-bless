## 一句話說明

一隻在 node 下運行的 js，可以幫你把打包後的 index.html 檔案插入你想要的註解

## 使用方法

1. 將此專案 git clone 到你的專案目錄
2. 將 `&& node ./god-bless/index.js` 插入到你的 package.json 的 scripts 裡面，例如 `build` 後面，或者 CICD 的 scripts 中
