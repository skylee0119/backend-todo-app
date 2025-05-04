# backend-todo-app
## Setup
```bash
mkdir backend-todo-app
cd backend-todo-app
npm init -y
npm install express mysql2 body-parser cors
```

## Build & Run API
Create `server.js`
```bash
node server.js
```

## Set Environment Variables
Create `.env`
```
DB_HOST=140.136.153.163
DB_USER=testuser
DB_PASS=testuser!QAZ2wsx#EDC
DB_NAME=testdb
```
Install `dotenv`
```bash
npm install dotenv
```
Modify `server.js`
```js
// add
require('dotenv').config();
```

## Upload project to GitHub
```bash
git init
git status
git add .
git commit -m "init express api"
git branch -M main
git remote add origin https://github.com/GitHub_account/GitHub_repo.git
git push -u origin main
```

---
# Deployment
## Render - Deploy Your Backend Project
> Render 是一個全託管（fully-managed）的雲端平台，專門用來部署 Web 應用程式、API、背景作業、靜態網站、Docker 映像、資料庫等服務，且不需要你自己架設伺服器或操作雲主機（如 AWS EC2）。
> 它的定位有點像是：
> 「Heroku 的現代化替代品」+「可與 Vercel 搭配的後端部署平台」
- 官方網站：https://render.com/
- 文件教學：https://render.com/docs
- [https://backend-todo-app-xwrh.onrender.com](https://backend-todo-app-xwrh.onrender.com)

![image](https://github.com/user-attachments/assets/949755ae-15a4-4b44-b0aa-d3f10d107c98)

### ✨ Render 特色與優勢
✅ 支援多種應用部署類型：
- Web Services（Node.js / Python / Go / Ruby / Rust / PHP）
- Static Sites（可選擇自動或手動 build）
- Background Workers（非同步任務）
- Cron Jobs（定期執行任務）
- PostgreSQL 資料庫（免費配額）

✅ 全自動化功能：
- 自動從 GitHub / GitLab 部署
- 自動建置（build）與啟動（run）
- 免費提供 HTTPS（Let's Encrypt）
- 環境變數 GUI 管理
- 自動備份資料庫

### 🚀 Render 的部署流程簡述（Web Service）
1. 上傳專案到 GitHub（後端程式碼）
2. 設定 package.json（加上啟動指令）
  ```json
  "scripts": {
    "start": "node server.js"
  }
  ```
3. 前往 Render.com，登入後選擇 "New + " → "Web Service"
4. 連結 GitHub 並選擇 repo
5. 設定
  ```
  Build Command：npm install
  Start Command：npm start
  Environment：Node
  Port：預設 5000（Render 自動偵測）
  ```
  ![image](https://github.com/user-attachments/assets/4f11abd9-fb84-47d9-9ffb-6e453d034e2d)
6. 等待部署完成後，Render 自動給你一個 URL（如 https://xxx.onrender.com）

![image](https://github.com/user-attachments/assets/e7b84400-4f98-43a4-96b3-2a3231746167)



