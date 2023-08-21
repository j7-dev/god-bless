/* eslint-disable @typescript-eslint/no-shadow */
const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const buildDir = `${rootDir}/build`;

// 讀取bless.txt的內容
fs.readFile(`${rootDir}/god-bless/bless.txt`, "utf8", (err, data) => {
  if (err) {
    console.error("❌ 讀取檔案時發生錯誤：", err);
    return;
  }

  // 讀取index.html的內容
  fs.readFile(`${buildDir}/index.html`, "utf8", (err, htmlData) => {
    if (err) {
      console.error("❌ 讀取檔案時發生錯誤：", err);
      return;
    }

    // 在index.html的最上方插入bless.txt的內容
    const updatedHtml = `${data}\n${htmlData}`;

    // 寫回更新後的內容到index.html
    fs.writeFile(`${buildDir}/index.html`, updatedHtml, "utf8", (err) => {
      if (err) {
        console.error("❌ 寫入檔案時發生錯誤：", err);
      } else {
        console.log("✅ 成功插入內容到index.html");
      }
    });
  });
});
