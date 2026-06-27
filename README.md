# AKB48 Theater Garapon Log | AKB48 劇場ガラポン記錄工具 | AKB48 劇場ガラポン記録メーカー

![Version](https://img.shields.io/badge/Version-2026.06.28-pink)
![License](https://img.shields.io/badge/License-Non--Commercial-blue)
![Platform](https://img.shields.io/badge/Platform-Web-orange)
![Mobile](https://img.shields.io/badge/Mobile-Optimized-ff69b4)

---

## 專案簡介 | Project Overview | プロジェクト概要

**[ZH]**  
這是一個專為 AKB48 劇場ガラポン挑戰而設計的非官方粉絲小工具。  
使用者可以記錄公演、日期、抽選回數、消費金額、當選內容與 2-shot 成員，並輸出成清晰的資料卡圖片。  
它的目的不是預測真實中獎率，而是讓每一次劇場抽選、每一次當選或落選，都可以用更容易回看和分享的方式保存下來。

**[EN]**  
AKB48 Theater Garapon Log is an unofficial fan-made web tool for recording theater Garapon attempts.  
Users can save performance details, date, draw count, spending, prize results, and 2-shot members, then export the entry as a clean record card image.  
It is not designed to predict real odds; it is built to help fans preserve and revisit their theater draw memories.

**[JP]**  
AKB48 Theater Garapon Log は、劇場ガラポンチャレンジの記録を残すために作られた非公式ファンツールです。  
公演、日付、抽選回数、消費金額、当選内容、2ショット撮影メンバーを記録し、見やすい資料カード画像として保存できます。  
実際の当選確率を予測するものではなく、劇場での抽選体験を後から振り返りやすい形で残すためのツールです。

---

## 核心亮點 | Technical Highlights | 技術的特徴

### 1. ガラポン記錄輸入 | Garapon Record Input | ガラポン記録入力

* **[ZH]** 可輸入姓名、日期、公演、抽選回數、當選數、當選內容與 2-shot 成員。
* **[EN]** Supports name, date, performance, draw count, win count, prize type, and 2-shot member.
* **[JP]** 名前、日付、公演、抽選回数、当選数、当選内容、2ショット撮影メンバーを入力できます。

### 2. 自動消費計算 | Automatic Spend Calculation | 消費金額の自動計算

* **[ZH]** 抽選回數會以每次 500 円自動計算總消費。
* **[EN]** Total spending is automatically calculated at 500 yen per draw.
* **[JP]** 抽選回数に応じて、1回500円として消費総額を自動計算します。

### 3. 資料卡圖片輸出 | Record Card Export | 資料カード画像保存

* **[ZH]** 可將目前輸入或已保存紀錄輸出成圖片，方便保存或分享。
* **[EN]** The current entry or saved records can be exported as clean image cards.
* **[JP]** 入力中または保存済みの記録を、見やすい画像カードとして出力できます。

### 4. 手機友善操作 | Mobile-friendly Experience | スマートフォン最適化

* **[ZH]** 手機版已壓縮標題區、將主要分頁改成一行、並提高表單密度，第一屏可以更快看到實際輸入項目。
* **[EN]** The mobile layout uses a compact header, single-row tabs, and a denser two-column form so core inputs appear earlier.
* **[JP]** モバイル版ではヘッダー、タブ、入力フォームの密度を調整し、主要項目がすぐ見えるように最適化しています。

### 5. 遊戲用抽選模擬器 | Game-only Draw Simulator | ゲーム用抽選シミュレーター

* **[ZH]** 內建一個純遊戲用的ガラポン模擬器，可拖動手柄慢慢轉動並產生結果。
* **[EN]** Includes a game-only Garapon simulator where users drag the handle slowly to release a result.
* **[JP]** ハンドルをゆっくり回して結果を出す、ゲーム用のガラポンシミュレーターを搭載しています。

### 6. 公開許可數據統計 | Public-ready Statistics | 公開許可データ集計

* **[ZH]** 本機中標記為願意公開的紀錄可用於統計，包括中獎率、公演別摘要、ROI、時間軸與成員 heatmap。
* **[EN]** Locally stored public-ready records can power win-rate, performance summary, ROI, timeline, and member heatmap views.
* **[JP]** 公開可として保存されたローカル記録から、当選率、公演別サマリー、ROI、時間軸、メンバー heatmap を集計できます。

### 7. 多語言介面 | Multi-language UI | 多言語対応

支援語言包括：

* 日本語
* 繁體中文
* 简体中文
* English
* 한국어
* ไทย
* Bahasa Indonesia

---

## 功能說明 | Features | 機能

### 基本記錄 | Basic Record | 基本記録

* **[ZH]** 所有欄位均可按需要填寫，不強制登入或連接伺服器。
* **[EN]** All fields are optional, and the tool does not require login or server access.
* **[JP]** すべての項目は任意入力で、ログインやサーバー接続は不要です。

### 本機保存 | Local Storage | 端末内保存

* **[ZH]** 紀錄會先保存於瀏覽器 localStorage，適合個人長期回看。
* **[EN]** Records are stored locally in browser localStorage for personal revisiting.
* **[JP]** 記録はブラウザの localStorage に保存され、端末内で振り返ることができます。

### 模擬器結果歷史 | Simulator History | シミュレーター履歴

* **[ZH]** 模擬器會保留最近 50 次結果，並顯示抽選回數與中獎率。
* **[EN]** The simulator keeps the latest 50 results and shows draw count plus win rate.
* **[JP]** シミュレーターは直近50回の結果を保持し、抽選回数と当選率を表示します。

### Safari / iPhone 儲存支援 | Safari / iPhone Save Support | Safari / iPhone 保存対応

* **[ZH]** 在 iPhone / Safari 上會開啟圖片預覽，使用者可長按圖片保存。
* **[EN]** On iPhone / Safari, an image preview opens so users can long-press to save it.
* **[JP]** iPhone / Safari では画像プレビューを表示し、長押しで保存できます。

---

## 快速開始 | Quick Start | クイックスタート

### 直接開啟 | Open Directly | 直接開く

1. 將整個專案資料夾保留在同一位置。
2. 開啟 `index.html`。
3. 選擇語言後即可開始記錄ガラポン結果。

1. Keep all project files in the same folder.
2. Open `index.html`.
3. Select a language and start logging Garapon attempts.

1. プロジェクト内のファイルを同じフォルダに置いたままにします。
2. `index.html` を開きます。
3. 言語を選択してガラポン記録を開始します。

### 本地伺服器方式 | Local Server | ローカルサーバー

如果瀏覽器限制本機檔案讀取，可在專案資料夾內啟動簡易伺服器：

If the browser restricts local-file behavior, start a simple local server inside the project folder:

ローカルファイルの動作が制限される場合は、プロジェクトフォルダ内で簡易サーバーを起動してください。

```bash
python -m http.server 4179
```

然後開啟：

Then open:

その後、以下を開きます：

```text
http://127.0.0.1:4179/
```

---

## 使用技術 | Built With | 使用技術

* HTML5
* CSS3
* JavaScript
* Canvas / Image Export Workflow
* localStorage
* Pure Front-end Architecture

---

## 檔案結構 | File Structure | ファイル構成

* `index.html`  
  **[ZH]** 主頁面、分頁、表單、模擬器與統計區結構  
  **[EN]** Main page, tabs, form, simulator, and statistics structure  
  **[JP]** メインページ、タブ、フォーム、シミュレーター、統計エリアの構造

* `style.css`  
  **[ZH]** 主要畫面樣式、手機版優化、模擬器外觀與統計卡片密度  
  **[EN]** Main layout styles, mobile refinements, simulator visuals, and statistics density  
  **[JP]** メインレイアウト、モバイル最適化、シミュレーター外観、統計カード密度

* `app.js`  
  **[ZH]** 記錄保存、語言切換、圖片輸出、統計計算與模擬器邏輯  
  **[EN]** Record storage, language switching, image export, statistics, and simulator logic  
  **[JP]** 記録保存、言語切替、画像出力、統計計算、シミュレーター処理

* `core.css`  
  **[ZH]** 共用 UI 基礎樣式、玻璃效果與原生手感設定  
  **[EN]** Shared UI base styles, glass effects, and native-feel settings  
  **[JP]** 共通 UI 基礎スタイル、ガラス効果、ネイティブ風操作感

* `core.js`  
  **[ZH]** 共用互動效果與 UI 手感  
  **[EN]** Shared interaction effects and UI feel  
  **[JP]** 共通インタラクション効果と UI 操作感

* `members.json`  
  **[ZH]** AKB48 成員資料，用於 2-shot 成員選擇  
  **[EN]** AKB48 member data used for 2-shot member selection  
  **[JP]** 2ショット撮影メンバー選択に使用する AKB48 メンバーデータ

* `README.md`  
  **[ZH]** 專案說明文件  
  **[EN]** Project documentation  
  **[JP]** プロジェクト説明書

---

## 維護指南 | Maintenance | メンテナンス

### 如何更新公演選項？ | Updating Performances | 公演選択肢の更新

* **[ZH]** 修改 `app.js` 內的 `PERFORMANCES` 陣列。
* **[EN]** Edit the `PERFORMANCES` array inside `app.js`.
* **[JP]** `app.js` 内の `PERFORMANCES` 配列を編集してください。

### 如何更新當選項目？ | Updating Prizes | 当選内容の更新

* **[ZH]** 修改 `app.js` 內的 `PRIZES` 陣列，以及各語言的 `twoShot` / `sendOff` 文字。
* **[EN]** Edit the `PRIZES` array in `app.js`, plus translated labels such as `twoShot` and `sendOff`.
* **[JP]** `app.js` 内の `PRIZES` 配列と、`twoShot` / `sendOff` などの翻訳文を編集してください。

### 如何更新成員資料？ | Updating Members | メンバーデータの更新

* **[ZH]** 修改 `members.json`，保持每位成員的 `id` 與名稱欄位一致。
* **[EN]** Edit `members.json`, keeping each member `id` and name fields consistent.
* **[JP]** `members.json` を編集し、各メンバーの `id` と名前フィールドを維持してください。

### 如何更新文字？ | Updating Text | テキスト更新

* **[ZH]** 多語言文字集中在 `app.js` 的 `I18N` 字典。
* **[EN]** Multilingual text is stored in the `I18N` dictionary inside `app.js`.
* **[JP]** 多言語テキストは `app.js` 内の `I18N` 辞書にあります。

### 如何調整手機版？ | Updating Mobile Layout | モバイル表示の調整

* **[ZH]** 手機版主要樣式集中在 `style.css` 的 `@media (max-width: 640px)` 區段。
* **[EN]** Mobile-specific styles are mainly in the `@media (max-width: 640px)` section of `style.css`.
* **[JP]** モバイル向けスタイルは主に `style.css` の `@media (max-width: 640px)` セクションにあります。

### 如何接入伺服器保存？ | Adding Server Storage | サーバー保存の追加

* **[ZH]** 目前是純前端工具。如需雲端保存，可替換 `app.js` 內的 `backendAdapter`。
* **[EN]** This is currently a pure front-end tool. To add cloud storage, replace `backendAdapter` in `app.js`.
* **[JP]** 現在は純フロントエンドツールです。クラウド保存を追加する場合は `app.js` の `backendAdapter` を差し替えてください。

```js
const backendAdapter = {
  async saveRecord(record) {},
  async deleteRecord(recordId) {},
  async syncPublicRecord(record) {},
};
```

公開統計へ同期する対象は、必ず `record.isPublic === true` の記録だけにしてください。  
Only records with `record.isPublic === true` should be synced into public statistics.  
公開統計に同期する対象は、必ず `record.isPublic === true` の記録のみにしてください。

---

## 免責聲明 | Disclaimer | 免責事項

**[ZH]**  
本專案為非官方、非商業粉絲創作，僅供粉絲交流、記錄與個人使用。  
本工具與 AKB48、株式会社DH、劇場營運或任何官方單位沒有從屬、授權、合作或代表關係。  
所有團體名稱、商標、標誌及相關權利均屬其各自權利持有人。請勿將本專案用於任何商業用途。

**[EN]**  
This project is an unofficial, non-commercial fan-made work for fan communication, personal records, and personal use only.  
It is not affiliated with, endorsed by, partnered with, or representative of AKB48, DH Co., Ltd., theater management, or any official organization.  
All group names, trademarks, logos, and related rights belong to their respective rights holders. Please do not use this project for commercial purposes.

**[JP]**  
本プロジェクトは、ファン交流、個人的な記録、個人利用を目的とした非公式・非営利のファン制作物です。  
AKB48、株式会社DH、劇場運営、その他公式団体とは一切関係がなく、承認・提携・代表するものではありません。  
グループ名、商標、ロゴ、その他関連する権利は、それぞれの権利者に帰属します。本プロジェクトを商用目的で使用しないでください。

---

## 製作者 | Created by | 制作

**ゴメン先生 (gomensensei)**

---

## Note

**[ZH]**  
這不只是一筆抽選紀錄。  
它是一場公演、一個手柄轉動的瞬間、一次只有劇場粉絲才懂的心跳。

**[EN]**  
This is more than a draw log.  
It is a performance, a handle turn, and a tiny heartbeat that only theater fans truly understand.

**[JP]**  
これは単なる抽選記録ではありません。  
それは一つの公演であり、ハンドルを回す瞬間であり、劇場ファンだけが分かる小さな高鳴りです。
