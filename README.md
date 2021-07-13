# AC_User-Authentication

<br>

此專案為簡易的帳號密碼檢查機制，透過預設的使用者資料作驗證，成功後並導入登入畫面。

## 產品功能

<br>

* 使用者在表單裡輸入帳密：email & password
* 發送表單，把帳密傳送給伺服器
* 伺服器拿到資料，開始比對內建的使用者名單
* 如果找不到 username，或是 password 錯誤，就彈回登入頁並且在介面上顯示「Username 或Password 錯誤」
* 如果 username + password 組合正確，使用者就進入自己的 welcome page，在此頁面上會顯示登入使用者的 firstName

<br>

## 建置環境

<br>

* node.js : 10.15.0
* express: 4.17.1
* express-handlebars: 5.3.2
* mongoose: ^5.12.0
* mongoDB: ^4.2.14

<br>

## 安裝流程

<br>

1. 開啟終端機(terminal)，利用 git clone 將專案下載至本機
```
git clone https://github.com/Linus-Peng1/AC_User-Authentication.git
```
2. 進入存放此專案資料夾
```
cd restaurant-list
```
3. 安裝套件
```
npm install
```
4. 加入種子資料
```
npm run seed
```

5. 啟動網頁伺服器
```
npm run dev
```
6. 出現下列訊息，表示啟動成功，可點選連結開啟網頁

App is running on http://localhost:3000/login
