# ガラポンチャレンジ記録 / Garapon Challenge Log

AKB48 劇場公演のガラポンチャレンジを記録する非公式ファンツールです。GitHub Pages にそのまま置ける Vanilla JS 構成です。

## 機能

- 姓名、日期、公演、転珠次數、中獎數、中獎項目、2ショット撮影メンバーを任意入力
- 1回 500円として花費總額を自動計算
- 本地長期紀錄：`localStorage` に保存
- 資料カード PNG 出力
- iPhone / Safari では画像プレビューをモーダル表示し、長押し保存を案内
- 「公開可」チェック付き。現在は本機内だけで公開統計を表示
- 公開許可データを KPI、pie chart、vertical bar chart、radar chart、ranking で表示
- 繁體中文、簡體中文、英文、日本語、韓文、泰文、印尼文対応
- 装置言語自動判定 + 右上言語切替
- 2ショット撮影メンバーは `members.json` から生成
- 3D mouse tracking は微幅設定済み

## ファイル構成

```text
index.html
style.css
app.js
core.css
core.js
members.json
README.md
```

## GitHub Pages への置き方

1. 上記ファイルを同じフォルダに置く。
2. GitHub repository にアップロードする。
3. Settings → Pages → Branch を `main` / root に設定する。
4. 公開 URL にアクセスする。

## 将来の server save / account 化について

`app.js` 内に `backendAdapter` を用意しています。

```js
const backendAdapter = {
  async saveRecord(record) {},
  async deleteRecord(recordId) {},
  async syncPublicRecord(record) {},
};
```

日後登入帳號、公開數據上傳、server-side aggregation を実装する場合は、この adapter を API 呼び出しに差し替えてください。公開統計には `record.isPublic === true` の記録だけを送信する想定です。

## 注意

本サイトはファンである ゴメン先生 (gomensensei) が作成した非公式のものであり、AKB48運営とは一切関係ありません。各権利者に帰属します。
