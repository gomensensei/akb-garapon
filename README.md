# ガラポンチャレンジ記録

AKB48 劇場公演のガラポンチャレンジを記録し、資料カード画像として保存できる非公式ファンツールです。

## 主な機能

- 姓名、日期、公演、抽選回数、当たり数、当選内容、2ショット撮影メンバーを任意入力で保存
- 抽選回数 × 500円で消費総額を自動計算
- localStorage による端末内長期保存
- iPhone / Safari では画像プレビューを開き、長押し保存を案内
- ガラポン抽選模擬器を追加。ハンドルをドラッグして回転でき、ゆっくり回すと抽選玉が出ます。高速回転では玉が出ません。
- 模擬器は初期状態で白玉250、赤玉30、緑玉20。直近50回のみ保存し、当選確率を自動表示します。
- 模擬器は純粋なゲーム用であり、実際の抽選確率や運営方式の参考にはなりません。
- 公開可フラグを保存し、将来のアカウント制・サーバー保存に備えた `backendAdapter` を予約
- 公開可データから以下を集計
  - 人数
  - 抽選玉
  - 消費総額
  - 当たり
  - 当選確率
  - 平均消費額
  - 当選内容比率
  - 公演別当選確率
  - Member Heatmap
  - 公演別 ROI
  - 時間軸分析
- 日本語、繁體中文、简体中文、English、한국어、ไทย、Indonesia 対応
- 端末言語の自動判定と右上言語切替

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

## GitHub Pages への設置

1. 上記ファイルを GitHub リポジトリにアップロードします。
2. Settings → Pages を開きます。
3. Branch を `main`、folder を `/root` に設定します。
4. 数分後に公開 URL が発行されます。

## サーバー保存を追加する場合

現在は完全な静的サイトです。実際にアカウント制やクラウド保存を行う場合は、`app.js` 内の `backendAdapter` を Supabase / Firebase / 自前 API に差し替えてください。

```js
const backendAdapter = {
  async saveRecord(record) {},
  async deleteRecord(recordId) {},
  async syncPublicRecord(record) {},
};
```

公開統計へ同期する対象は、必ず `record.isPublic === true` の記録だけにしてください。

## 非公式表記

本サイトはファンである ゴメン先生 (gomensensei) が作成した非公式のものであり、AKB48運営とは一切関係ありません。各権利者に帰属します。
