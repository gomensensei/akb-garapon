# AKB48 Theater Garapon Log | AKB48 劇場 Garapon 紀錄 | AKB48 劇場ガラポン記録

![Version](https://img.shields.io/badge/Version-2026.07.03-pink)
![License](https://img.shields.io/badge/License-Non--Commercial-blue)
![Platform](https://img.shields.io/badge/Platform-Web-orange)
![Cloud Save](https://img.shields.io/badge/Cloud%20Save-Optional-lightblue)
![Mobile](https://img.shields.io/badge/Mobile-Optimized-ff69b4)

---

## Project Overview | 專案簡介 | プロジェクト概要

**[ZH]** AKB48 Theater Garapon Log 是一個非官方劇場 garapon 紀錄工具。你可以保存公演、日期、抽選回數、花費、當選內容、2-shot 成員與公開統計同意，並輸出成資料卡圖片。它不是用來預測真實機率，而是用來保存每一次劇場抽選的回憶。

**[EN]** AKB48 Theater Garapon Log is an unofficial fan-made recorder for theater garapon attempts. Save performance, date, draw count, spending, prize result, 2-shot member, and public-stat consent, then export a clean record card image. It does not predict real odds; it preserves theater draw memories.

**[JP]** AKB48 Theater Garapon Log は、劇場ガラポンの記録を残すための非公式ファンツールです。公演、日付、抽選回数、費用、当選内容、2-shot メンバー、公開統計への同意を保存し、資料カード画像として出力できます。実際の確率予測ではなく、劇場での抽選体験を残すためのツールです。

---

## Main Features | 功能說明 | 主な機能

### 1. Garapon Record Input
* **[ZH]** 輸入姓名、日期、公演、回數、花費、當選數、獎項與成員。
* **[EN]** Enter name, date, performance, draw count, spending, wins, prize, and member.
* **[JP]** 名前、日付、公演、回数、費用、当選数、賞品、メンバーを入力できます。

### 2. Auto Cost Calculation
* **[ZH]** 以每次 500 円自動計算總花費。
* **[EN]** Calculates total spend at 500 yen per draw.
* **[JP]** 1回500円として消費額を自動計算します。

### 3. Record Card Export
* **[ZH]** 可把目前輸入或已保存紀錄輸出成圖片，方便分享或回看。
* **[EN]** Export current or saved records as clean image cards.
* **[JP]** 入力中または保存済みの記録を画像カードとして出力できます。

### 4. Game-only Garapon Simulator
* **[ZH]** 內建純遊戲用模擬器，可慢慢轉動手柄並保存最近結果。
* **[EN]** Includes a game-only simulator with handle drag interaction and recent result history.
* **[JP]** ハンドル操作付きのゲーム用シミュレーターと履歴表示を搭載しています。

### 5. Public-ready Analytics
* **[ZH]** 已同意公開的紀錄可用於中獎率、公演摘要、ROI、時間軸與 member heatmap。
* **[EN]** Consented records can power win rate, performance summaries, ROI, timeline, and member heatmaps.
* **[JP]** 公開同意済み記録から、当選率、公演別サマリー、ROI、時間軸、member heatmap を表示できます。

### 6. Optional Tool48 Account / Cloud Backup
* **[ZH]** 本機保存優先；登入後可自動把紀錄備份到 cloud。
* **[EN]** Local save comes first; signed-in users can auto-back up records to cloud.
* **[JP]** ローカル保存優先です。ログイン後は記録を cloud に自動バックアップできます。

---

## Technical Highlights | 技術亮點 | 技術的特徴

* **Local-first Records**: `localStorage` remains the primary no-login workflow.
* **Supabase Adapter Layer**: Cloud behavior is routed through a front-end adapter and publishable key only.
* **Canvas Export**: Generates record-card images for mobile and desktop.
* **Responsive Dashboard**: Charts and ranking panels collapse cleanly on mobile.
* **Privacy-first Design**: We will not disclose personal data without explicit consent.

---

## Quick Start | 快速開始 | クイックスタート

1. Keep all project files in the same folder.
2. Open `index.html`, or start a local server if browser file access is restricted.
3. Choose a language, input a record, save locally, and export a card.

```bash
python -m http.server 4179
```

Open:

```text
http://127.0.0.1:4179/
```

---

## File Structure | 檔案結構 | ファイル構成

* `index.html` - Main page, tabs, forms, account popover, simulator, charts.
* `style.css` - Layout, mobile rules, glass UI, simulator visuals.
* `app.js` - i18n, local records, cloud adapter, export, simulator, analytics.
* `core.css` / `core.js` - Shared visual and native-feel helpers.
* `members.json` - Member data for 2-shot selection.
* `assets/js/supabase-config.js` - Public Supabase URL and publishable key.
* `assets/js/auth.js` - Account helper layer.

---

## Maintenance | 維護 | メンテナンス

* Update performances, prize labels, and analytics text in `app.js`.
* Update member data in `members.json`.
* Keep local JSON export/import and local save working without login.
* Cloud writes need both RLS policies and table/schema grants.
* Public statistics must only use records where the user explicitly consented.

---

## Disclaimer | 免責聲明 | 免責事項

**[ZH]** 本專案為非官方、非商業粉絲工具，只供個人紀錄、fan 交流與資料整理使用。它與 AKB48、DH、劇場營運或任何官方單位無從屬、授權、合作或代表關係。所有名稱、商標、圖片及相關權利屬其各自權利持有人。

**[EN]** This is an unofficial, non-commercial fan-made tool for personal records, fan communication, and information organisation only. It is not affiliated with, endorsed by, partnered with, or representative of AKB48, DH, theater management, or any official organisation. All names, trademarks, images, and related rights belong to their respective rights holders.

**[JP]** 本プロジェクトは、個人記録、ファン交流、情報整理を目的とした非公式・非商用ファンツールです。AKB48、DH、劇場運営、その他公式団体とは関係ありません。名称、商標、画像、関連する権利は各権利者に帰属します。

---

## Created by | 製作 | 制作

**ゴメン先生 (gomensensei)**
