'use strict';

const GARAPON_CONFIG = {
  storageKey: 'gomensensei.garapon.records.v2',
  legacyStorageKey: 'gomensensei.garapon.records.v1',
  languageKey: 'gomensensei.garapon.language.v1',
  yenPerSpin: 500,
  canvas: { width: 720, height: 960 },
  simulatorStorageKey: 'gomensensei.garapon.simulator.v1',
  simulatorDefaults: { white: 250, red: 30, green: 20, maxHistory: 50 },
};

const PERFORMANCES = [
  { id: 'reset', label: 'ＲＥＳＥＴ公演' },
  { id: 'kokokarada', label: 'ここからだ公演' },
  { id: 'tewotsunaginagara', label: '手をつなぎながら公演' },
  { id: 'sokonimirai', label: 'そこに未来はある公演' },
];

const PRIZES = [
  { id: '', labelJa: '' },
  { id: 'twoShot', labelJa: '2ショット撮影' },
  { id: 'sendOff', labelJa: 'お見送り撮影権' },
];

const jaBase = {
  appTitle: 'ガラポンチャレンジ記録',
  appSubtitle: '劇場ガラポンを、あとから見返せる記録に。',
  eyebrow: 'AKB48 Theater Fan Tool',
  heroTitle: 'ガラポンの記録を、あとから見返せる形に。',
  heroLead: '姓名・公演・回数・当選内容を保存し、資料カードとして画像化できます。すべて任意入力、保存はまず端末内だけです。公開データが十分に集まれば、公演別当選確率、メンバー heatmap、平均消費額、ROI、時間軸分析まで見えるようになります。よければ公開可で記録を残し、ファン同士の参考データづくりに参加してください。',
  tabInput: '入力', tabRecords: '保存記録', tabPublic: '公開データ',
  formEyebrow: 'Challenge Log', formTitle: '記録を入力', clearForm: 'クリア',
  nameLabel: '姓名', namePlaceholder: 'ゴメン先生', dateLabel: '日期', performanceLabel: '公演',
  spinCountLabel: '抽選回数', costTotalLabel: '消費総額', costHint: '1回 500円で自動計算',
  winCountLabel: '当たり', prizeLabel: '当選内容', memberLabel: '2ショット撮影メンバー',
  publicConsentTitle: 'この記録を将来の公開統計に使ってもよい',
  publicConsentText: '現在は端末内だけに保存されます。将来ログイン／サーバー保存を実装するための予約項目です。公開可の記録だけが集計候補になります。',
  saveRecord: '保存する', updateRecord: '更新する', downloadCurrent: '資料カードを作成',
  previewEyebrow: 'Live Preview', previewTitle: '資料カード',
  safariInlineNote: 'iPhone / Safari では画像プレビューが開きます。長押しして保存してください。',
  recordsEyebrow: 'Local Storage', recordsTitle: '保存された記録', exportJson: 'JSONを書き出し', importJson: 'JSONを読み込み', deleteAll: '全削除',
  publicEyebrow: 'Public-ready Analytics', publicTitle: '公開許可データの集計', serverNote: '現在はローカル保存された「公開可」記録のみ集計します。',
  pieTitle: '当選内容比率', barTitle: '公演別・抽選玉', radarTitle: '全体バランス', winRateChartTitle: '公演別当選確率', timelineTitle: '時間軸分析',
  memberHeatmapTitle: 'Member Heatmap', memberRankingTitle: '2ショット撮影メンバー', performanceRankingTitle: '公演別サマリー', winRateRankingTitle: '公演別当選確率', roiRankingTitle: '公演別 ROI',
  imageDialogTitle: '画像プレビュー', iosSafariMessage: 'iPhone / Safari では画像プレビューが開きます。長押しして保存してください。',
  selectPlaceholder: '選択しない', memberPlaceholder: '選択しない', noRecords: 'まだ記録がありません。', noPublicRecords: '公開可の記録がまだありません。',
  edit: '編集', duplicate: '複製', download: '画像', delete: '削除', confirmDelete: 'この記録を削除しますか？', confirmDeleteAll: 'すべてのローカル記録を削除しますか？',
  saved: '保存しました。', updated: '更新しました。', imported: '読み込みました。', importFailed: 'JSONを読み込めませんでした。',
  publicBadge: '公開可', privateBadge: '非公開', spinsUnit: '回', winsUnit: '件',
  people: '人数', records: '記録', lotteryBalls: '抽選玉', cost: '消費総額', wins: '当たり', winRate: '当選確率', avgSpend: '平均消費額', prizes: '当選内容', members: '2ショット', roi: 'ROI',
  anonymous: '名前未入力', noPerformance: '公演未選択', noPrize: '当選内容未選択', noMember: 'メンバー未選択',
  cardTitle: 'ガラポンチャレンジ記録', twoShot: '2ショット撮影', sendOff: 'お見送り撮影権',
  perThousand: '¥1,000あたり', perHit: '1当たりあたり', notAvailable: '—',
};

const I18N = {
  ja: jaBase,
  'zh-Hant': {
    ...jaBase,
    appTitle: 'ガラポンチャレンジ記錄', appSubtitle: '將劇場ガラポン整理成可回看的紀錄。', eyebrow: 'AKB48 劇場粉絲工具',
    heroTitle: '將ガラポン紀錄，整理成日後可回看的資料卡。',
    heroLead: '可保存姓名、公演、回數及當選內容，並製成資料卡圖片。所有欄位均屬任意填寫，紀錄目前會先保存在用戶裝置內。若公開資料累積至足夠規模，日後可分析公演中獎率、member heatmap、平均每人消費、各公演 ROI 及時間軸變化。若方便，請選擇願意公開紀錄，一同建立更有參考價值的粉絲數據。',
    tabInput: '輸入', tabRecords: '已保存紀錄', tabPublic: '公開數據', formTitle: '輸入紀錄', clearForm: '清空',
    nameLabel: '姓名', dateLabel: '日期', performanceLabel: '公演', spinCountLabel: '抽選回數', costTotalLabel: '消費總額', costHint: '每次 500 円，自動計算', winCountLabel: '當選數', prizeLabel: '當選內容', memberLabel: '2ショット撮影成員',
    publicConsentTitle: '我願意將此紀錄用於將來公開統計', publicConsentText: '目前只會保存在本機。此欄位預留予日後登入帳號及伺服器保存之用，只有願意公開的紀錄才會成為統計候選資料。',
    saveRecord: '保存', updateRecord: '更新', downloadCurrent: '製作資料卡', previewTitle: '資料卡', recordsTitle: '已保存紀錄', exportJson: '匯出 JSON', importJson: '匯入 JSON', deleteAll: '全部刪除',
    publicTitle: '公開許可數據統計', serverNote: '目前只統計本機中標記為「願意公開」的紀錄。', pieTitle: '當選內容比例', barTitle: '公演別・抽選玉', radarTitle: '整體平衡', winRateChartTitle: '公演中獎率', timelineTitle: '時間軸分析',
    memberHeatmapTitle: 'Member Heatmap', memberRankingTitle: '2ショット撮影成員', performanceRankingTitle: '公演別摘要', winRateRankingTitle: '公演中獎率', roiRankingTitle: '各公演 ROI',
    imageDialogTitle: '圖片預覽', selectPlaceholder: '不選擇', memberPlaceholder: '不選擇', noRecords: '尚未有紀錄。', noPublicRecords: '尚未有可公開紀錄。',
    edit: '編輯', duplicate: '複製', download: '圖片', delete: '刪除', confirmDelete: '確定刪除此紀錄？', confirmDeleteAll: '確定刪除全部本機紀錄？', saved: '已保存。', updated: '已更新。', imported: '已匯入。', importFailed: '無法讀取 JSON。',
    publicBadge: '願意公開', privateBadge: '非公開', spinsUnit: '次', winsUnit: '項', people: '人數', records: '紀錄', lotteryBalls: '抽選玉', cost: '消費總額', wins: '當選數', winRate: '中獎率', avgSpend: '平均每人消費', prizes: '當選內容', members: '2ショット', roi: 'ROI',
    anonymous: '未輸入姓名', noPerformance: '未選擇公演', noPrize: '未選擇當選內容', noMember: '未選擇成員', cardTitle: 'ガラポンチャレンジ記錄', perThousand: '每 ¥1,000', perHit: '每項當選成本', notAvailable: '—',
  },
  'zh-Hans': {
    ...jaBase,
    appTitle: 'ガラポンチャレンジ记录', appSubtitle: '将剧场 Garapon 整理成可回看的记录。', eyebrow: 'AKB48 剧场粉丝工具',
    heroTitle: '将 Garapon 记录整理成日后可回看的资料卡。',
    heroLead: '可保存姓名、公演、回数及中奖内容，并制作成资料卡图片。所有栏位均可选填，记录目前会先保存在用户设备内。若公开资料累积至足够规模，日后可分析公演中奖率、member heatmap、平均每人消费、各公演 ROI 及时间轴变化。若方便，请选择愿意公开记录，一同建立更有参考价值的粉丝数据。',
    tabInput: '输入', tabRecords: '已保存记录', tabPublic: '公开数据', formTitle: '输入记录', clearForm: '清空', spinCountLabel: '抽选回数', costTotalLabel: '消费总额', costHint: '每次 500 円，自动计算', winCountLabel: '中奖数', prizeLabel: '中奖内容', memberLabel: '2ショット撮影成员',
    publicConsentTitle: '我愿意将此记录用于将来公开统计', publicConsentText: '目前只会保存在本机。此栏位预留给日后账号登录及服务器保存，只有愿意公开的记录才会成为统计候选资料。',
    saveRecord: '保存', updateRecord: '更新', downloadCurrent: '制作资料卡', previewTitle: '资料卡', recordsTitle: '已保存记录', exportJson: '导出 JSON', importJson: '导入 JSON', deleteAll: '全部删除',
    publicTitle: '公开许可数据统计', serverNote: '目前只统计本机中标记为“愿意公开”的记录。', pieTitle: '中奖内容比例', barTitle: '公演别・抽选玉', radarTitle: '整体平衡', winRateChartTitle: '公演中奖率', timelineTitle: '时间轴分析', memberHeatmapTitle: 'Member Heatmap', memberRankingTitle: '2ショット撮影成员', performanceRankingTitle: '公演别摘要', winRateRankingTitle: '公演中奖率', roiRankingTitle: '各公演 ROI',
    imageDialogTitle: '图片预览', selectPlaceholder: '不选择', memberPlaceholder: '不选择', noRecords: '尚未有记录。', noPublicRecords: '尚未有可公开记录。',
    edit: '编辑', duplicate: '复制', download: '图片', delete: '删除', publicBadge: '愿意公开', privateBadge: '非公开', spinsUnit: '次', winsUnit: '项', people: '人数', records: '记录', lotteryBalls: '抽选玉', cost: '消费总额', wins: '中奖数', winRate: '中奖率', avgSpend: '平均每人消费', prizes: '中奖内容', members: '2-shot', roi: 'ROI', anonymous: '未输入姓名', noPerformance: '未选择公演', noPrize: '未选择中奖内容', noMember: '未选择成员', cardTitle: 'ガラポンチャレンジ记录', perThousand: '每 ¥1,000', perHit: '每项中奖成本',
  },
  en: {
    ...jaBase,
    appTitle: 'Garapon Challenge Log', appSubtitle: 'Keep theater Garapon attempts easy to revisit.', eyebrow: 'AKB48 Theater Fan Tool',
    heroTitle: 'Turn your Garapon attempts into a clean record card.',
    heroLead: 'Save name, performance, counts and prizes, then export a clean record card. Every field is optional, and records are stored on your device first. If enough public data is collected, the tool can show win rate by performance, member heatmaps, average spend per person, ROI by performance and timeline analysis. Mark records as public-ready if you want to help build useful fan data.',
    tabInput: 'Input', tabRecords: 'Saved records', tabPublic: 'Public data', formTitle: 'Enter record', clearForm: 'Clear', nameLabel: 'Name', dateLabel: 'Date', performanceLabel: 'Performance', spinCountLabel: 'Draw count', costTotalLabel: 'Total spend', costHint: 'Auto-calculated at ¥500 each', winCountLabel: 'Wins', prizeLabel: 'Prize', memberLabel: '2-shot member',
    publicConsentTitle: 'Allow this record to be used in future public statistics', publicConsentText: 'For now this only saves on your device. This is reserved for future account login and server saving; only public-ready records should be aggregated.',
    saveRecord: 'Save', updateRecord: 'Update', downloadCurrent: 'Create card', previewTitle: 'Record card', recordsTitle: 'Saved records', exportJson: 'Export JSON', importJson: 'Import JSON', deleteAll: 'Delete all',
    publicTitle: 'Public-consent statistics', serverNote: 'Currently calculated only from local records marked as public-ready.', pieTitle: 'Prize ratio', barTitle: 'Draw balls by performance', radarTitle: 'Overall balance', winRateChartTitle: 'Win rate by performance', timelineTitle: 'Timeline analysis', memberHeatmapTitle: 'Member Heatmap', memberRankingTitle: '2-shot members', performanceRankingTitle: 'Performance summary', winRateRankingTitle: 'Win rate by performance', roiRankingTitle: 'ROI by performance',
    imageDialogTitle: 'Image preview', selectPlaceholder: 'No selection', memberPlaceholder: 'No selection', noRecords: 'No records yet.', noPublicRecords: 'No public-ready records yet.',
    edit: 'Edit', duplicate: 'Duplicate', download: 'Image', delete: 'Delete', publicBadge: 'Public-ready', privateBadge: 'Private', spinsUnit: 'draws', winsUnit: 'wins', people: 'People', records: 'Records', lotteryBalls: 'Draw balls', cost: 'Total spend', wins: 'Wins', winRate: 'Win rate', avgSpend: 'Avg spend / person', prizes: 'Prizes', members: '2-shot', roi: 'ROI', anonymous: 'No name', noPerformance: 'No performance', noPrize: 'No prize selected', noMember: 'No member selected', cardTitle: 'Garapon Challenge Log', twoShot: '2-shot photo', sendOff: 'Send-off photo right', perThousand: 'per ¥1,000', perHit: 'Spend per win',
  },
  ko: {
    ...jaBase,
    appTitle: '가라폰 챌린지 기록', appSubtitle: '극장 가라폰을 다시 볼 수 있는 기록으로.', eyebrow: 'AKB48 극장 팬 도구', heroTitle: '가라폰 기록을 나중에 다시 볼 수 있는 카드로.', heroLead: '이름, 공연, 횟수와 당첨 내용을 저장하고 자료 카드 이미지로 만들 수 있습니다. 모든 항목은 선택 입력이며 우선 기기 안에만 저장됩니다. 공개 데이터가 충분히 모이면 공연별 당첨 확률, member heatmap, 1인 평균 소비액, 공연별 ROI, 시간축 분석까지 볼 수 있습니다. 가능하다면 공개 가능으로 기록을 남겨 팬 데이터 만들기에 참여해 주세요.',
    tabInput: '입력', tabRecords: '저장 기록', tabPublic: '공개 데이터', formTitle: '기록 입력', clearForm: '초기화', nameLabel: '이름', dateLabel: '날짜', performanceLabel: '공연', spinCountLabel: '추첨 횟수', costTotalLabel: '총 소비액', costHint: '1회 500엔 자동 계산', winCountLabel: '당첨', prizeLabel: '당첨 내용', memberLabel: '2ショット撮影 멤버', publicConsentTitle: '이 기록을 향후 공개 통계에 사용해도 좋습니다', publicConsentText: '현재는 기기 안에만 저장됩니다. 향후 계정 로그인 및 서버 저장을 위한 예약 항목입니다.', saveRecord: '저장', updateRecord: '업데이트', downloadCurrent: '자료 카드 만들기', previewTitle: '자료 카드', recordsTitle: '저장된 기록', publicTitle: '공개 허용 데이터 집계', pieTitle: '당첨 내용 비율', barTitle: '공연별 추첨 볼', radarTitle: '전체 밸런스', winRateChartTitle: '공연별 당첨 확률', timelineTitle: '시간축 분석', memberHeatmapTitle: 'Member Heatmap', memberRankingTitle: '2ショット撮影 멤버', performanceRankingTitle: '공연별 요약', winRateRankingTitle: '공연별 당첨 확률', roiRankingTitle: '공연별 ROI', people: '인원', records: '기록', lotteryBalls: '추첨 볼', cost: '총 소비액', wins: '당첨', winRate: '당첨 확률', avgSpend: '1인 평균 소비액', prizes: '당첨 내용', members: '2-shot', roi: 'ROI', anonymous: '이름 없음', noPerformance: '공연 미선택', noPrize: '당첨 내용 미선택', noMember: '멤버 미선택', spinsUnit: '회', winsUnit: '건', publicBadge: '공개 가능', privateBadge: '비공개',
  },
  th: {
    ...jaBase,
    appTitle: 'บันทึก Garapon Challenge', appSubtitle: 'เก็บ Garapon โรงละครไว้ดูย้อนหลัง', eyebrow: 'AKB48 Theater Fan Tool', heroTitle: 'เปลี่ยนบันทึก Garapon เป็นการ์ดที่ดูย้อนหลังได้', heroLead: 'บันทึกชื่อ การแสดง จำนวนครั้ง และรางวัล แล้วส่งออกเป็นภาพได้ ทุกช่องไม่บังคับ และข้อมูลจะถูกเก็บในเครื่องก่อน หากมีข้อมูลสาธารณะมากพอ ระบบจะวิเคราะห์อัตราถูกรางวัลตามการแสดง, member heatmap, ค่าใช้จ่ายเฉลี่ยต่อคน, ROI และไทม์ไลน์ได้ โปรดเลือกเผยแพร่ได้หากต้องการช่วยสร้างข้อมูลอ้างอิงให้แฟน ๆ', tabInput: 'กรอกข้อมูล', tabRecords: 'บันทึกที่เก็บไว้', tabPublic: 'ข้อมูลสาธารณะ', formTitle: 'กรอกบันทึก', clearForm: 'ล้าง', nameLabel: 'ชื่อ', dateLabel: 'วันที่', performanceLabel: 'การแสดง', spinCountLabel: 'จำนวนสุ่ม', costTotalLabel: 'ค่าใช้จ่ายรวม', costHint: 'คำนวณอัตโนมัติ 500 เยนต่อครั้ง', winCountLabel: 'ถูกรางวัล', prizeLabel: 'รายการรางวัล', memberLabel: 'สมาชิก 2ショット撮影', publicConsentTitle: 'อนุญาตให้ใช้บันทึกนี้ในสถิติสาธารณะในอนาคต', publicConsentText: 'ตอนนี้บันทึกเฉพาะในเครื่อง ช่องนี้เตรียมไว้สำหรับบัญชีและการบันทึกบนเซิร์ฟเวอร์ในอนาคต', saveRecord: 'บันทึก', updateRecord: 'อัปเดต', downloadCurrent: 'สร้างการ์ด', previewTitle: 'การ์ดบันทึก', recordsTitle: 'บันทึกที่เก็บไว้', publicTitle: 'สถิติข้อมูลที่อนุญาตเผยแพร่', pieTitle: 'สัดส่วนรางวัล', barTitle: 'ลูกสุ่มตามการแสดง', radarTitle: 'ภาพรวม', winRateChartTitle: 'อัตราถูกรางวัลตามการแสดง', timelineTitle: 'วิเคราะห์ตามเวลา', memberHeatmapTitle: 'Member Heatmap', performanceRankingTitle: 'สรุปตามการแสดง', winRateRankingTitle: 'อัตราถูกรางวัลตามการแสดง', roiRankingTitle: 'ROI ตามการแสดง', people: 'จำนวนคน', records: 'บันทึก', lotteryBalls: 'ลูกสุ่ม', cost: 'ค่าใช้จ่ายรวม', wins: 'ถูกรางวัล', winRate: 'อัตราถูกรางวัล', avgSpend: 'ค่าใช้จ่ายเฉลี่ย/คน', prizes: 'รางวัล', members: '2-shot', roi: 'ROI', spinsUnit: 'ครั้ง', winsUnit: 'รางวัล',
  },
  id: {
    ...jaBase,
    appTitle: 'Catatan Garapon Challenge', appSubtitle: 'Simpan Garapon teater agar mudah dilihat lagi.', eyebrow: 'AKB48 Theater Fan Tool', heroTitle: 'Ubah catatan Garapon menjadi kartu yang mudah dilihat lagi.', heroLead: 'Simpan nama, pertunjukan, jumlah putaran dan hadiah, lalu ekspor menjadi gambar. Semua kolom opsional, dan data disimpan lokal terlebih dahulu. Jika data publik terkumpul cukup banyak, alat ini dapat menampilkan win rate per pertunjukan, member heatmap, rata-rata pengeluaran per orang, ROI per pertunjukan dan analisis timeline. Tandai public-ready jika ingin membantu membangun data fans yang berguna.', tabInput: 'Input', tabRecords: 'Catatan tersimpan', tabPublic: 'Data publik', formTitle: 'Masukkan catatan', clearForm: 'Bersihkan', nameLabel: 'Nama', dateLabel: 'Tanggal', performanceLabel: 'Pertunjukan', spinCountLabel: 'Jumlah undian', costTotalLabel: 'Total biaya', costHint: 'Otomatis dihitung ¥500 per undian', winCountLabel: 'Menang', prizeLabel: 'Hadiah', memberLabel: 'Member 2ショット撮影', publicConsentTitle: 'Izinkan catatan ini dipakai untuk statistik publik di masa depan', publicConsentText: 'Saat ini hanya disimpan di perangkat. Kolom ini disiapkan untuk login akun dan penyimpanan server nanti.', saveRecord: 'Simpan', updateRecord: 'Perbarui', downloadCurrent: 'Buat kartu', previewTitle: 'Kartu catatan', recordsTitle: 'Catatan tersimpan', publicTitle: 'Statistik data yang boleh publik', pieTitle: 'Rasio hadiah', barTitle: 'Bola undian per pertunjukan', radarTitle: 'Keseimbangan keseluruhan', winRateChartTitle: 'Win rate per pertunjukan', timelineTitle: 'Analisis timeline', memberHeatmapTitle: 'Member Heatmap', performanceRankingTitle: 'Ringkasan pertunjukan', winRateRankingTitle: 'Win rate per pertunjukan', roiRankingTitle: 'ROI per pertunjukan', people: 'Orang', records: 'Catatan', lotteryBalls: 'Bola undian', cost: 'Total biaya', wins: 'Menang', winRate: 'Win rate', avgSpend: 'Rata-rata/orang', prizes: 'Hadiah', members: '2-shot', roi: 'ROI', spinsUnit: 'kali', winsUnit: 'menang',
  },
};

Object.assign(I18N.ja, {
  tabSimulator: '抽選模擬器', simEyebrow: 'Garapon Simulator', simTitle: 'ガラポン抽選模擬器',
  simGameOnly: '純粋なゲーム用シミュレーターです。実際の抽選確率や運営方式とは関係ありません。',
  simHint: 'ハンドルをつかんでゆっくり回してください。速すぎると玉は出ません。',
  simHintFast: '速すぎます。ゆっくり回すと抽選玉が出ます。', simHintWin: '{ball}が出ました。', simHintEmpty: '抽選玉が残っていません。リセットしてください。',
  simTotalTurns: '抽選回数', simWinRate: '当選確率', whiteBall: '白玉', redBall: '赤玉', greenBall: '緑玉', simReset: '模擬器をリセット',
  simHistoryTitle: '直近50回の結果', simHistoryNote: '最新が上に表示されます。', simNoHistory: 'まだ抽選していません。', simWin: '当たり', simLose: 'はずれ',
});
Object.assign(I18N['zh-Hant'], {
  tabSimulator: '抽選模擬器', simEyebrow: 'Garapon Simulator', simTitle: 'ガラポン抽選模擬器',
  simGameOnly: '純粹遊戲用模擬器，並不代表實際抽選機率或營運方式。',
  simHint: '請按住手柄慢慢轉動。轉得太快時，抽選玉不會跌出。',
  simHintFast: '轉得太快了。慢慢轉動才會跌出抽選玉。', simHintWin: '跌出了{ball}。', simHintEmpty: '抽選玉已用完，請重設模擬器。',
  simTotalTurns: '抽選回數', simWinRate: '當選確率', whiteBall: '白玉', redBall: '紅玉', greenBall: '綠玉', simReset: '重設模擬器',
  simHistoryTitle: '最近50次結果', simHistoryNote: '最新紀錄會顯示在最上方。', simNoHistory: '尚未進行抽選。', simWin: '当たり', simLose: '未中',
});
Object.assign(I18N['zh-Hans'], {
  tabSimulator: '抽选模拟器', simEyebrow: 'Garapon Simulator', simTitle: 'ガラポン抽选模拟器',
  simGameOnly: '纯粹游戏用模拟器，并不代表实际抽选概率或运营方式。', simHint: '请按住手柄慢慢转动。转得太快时，抽选玉不会掉出。',
  simHintFast: '转得太快了。慢慢转动才会掉出抽选玉。', simHintWin: '掉出了{ball}。', simHintEmpty: '抽选玉已用完，请重设模拟器。',
  simTotalTurns: '抽选次数', simWinRate: '中奖概率', whiteBall: '白玉', redBall: '红玉', greenBall: '绿玉', simReset: '重设模拟器',
  simHistoryTitle: '最近50次结果', simHistoryNote: '最新记录会显示在最上方。', simNoHistory: '尚未进行抽选。', simWin: '中奖', simLose: '未中',
});
Object.assign(I18N.en, {
  tabSimulator: 'Draw simulator', simEyebrow: 'Garapon Simulator', simTitle: 'Garapon draw simulator',
  simGameOnly: 'This is a game-only simulator. It does not represent real draw odds or official operation.', simHint: 'Grab the handle and turn slowly. If you spin too fast, no ball will drop.',
  simHintFast: 'Too fast. Turn slowly to release a ball.', simHintWin: '{ball} dropped.', simHintEmpty: 'No balls left. Please reset the simulator.',
  simTotalTurns: 'Draw count', simWinRate: 'Win rate', whiteBall: 'White ball', redBall: 'Red ball', greenBall: 'Green ball', simReset: 'Reset simulator',
  simHistoryTitle: 'Latest 50 results', simHistoryNote: 'Newest result appears at the top.', simNoHistory: 'No draws yet.', simWin: 'Win', simLose: 'Lose',
});
Object.assign(I18N.ko, {
  tabSimulator: '추첨 시뮬레이터', simEyebrow: 'Garapon Simulator', simTitle: '가라폰 추첨 시뮬레이터',
  simGameOnly: '순수 게임용 시뮬레이터이며 실제 추첨 확률이나 운영 방식과 관계없습니다.', simHint: '손잡이를 잡고 천천히 돌려 주세요. 너무 빠르면 공이 나오지 않습니다.',
  simHintFast: '너무 빠릅니다. 천천히 돌리면 추첨 공이 나옵니다.', simHintWin: '{ball}이 나왔습니다.', simHintEmpty: '남은 공이 없습니다. 시뮬레이터를 리셋해 주세요.',
  simTotalTurns: '추첨 횟수', simWinRate: '당첨 확률', whiteBall: '흰 공', redBall: '빨간 공', greenBall: '초록 공', simReset: '시뮬레이터 리셋',
  simHistoryTitle: '최근 50회 결과', simHistoryNote: '최신 결과가 위에 표시됩니다.', simNoHistory: '아직 추첨하지 않았습니다.', simWin: '당첨', simLose: '꽝',
});
Object.assign(I18N.th, {
  tabSimulator: 'เครื่องจำลองสุ่ม', simEyebrow: 'Garapon Simulator', simTitle: 'เครื่องจำลอง Garapon',
  simGameOnly: 'เป็นเครื่องจำลองเพื่อความสนุกเท่านั้น ไม่ใช่อัตราจริงหรือวิธีดำเนินงานจริง', simHint: 'จับด้ามแล้วหมุนช้า ๆ ถ้าหมุนเร็วเกินไป ลูกจะไม่ตกออกมา',
  simHintFast: 'เร็วเกินไป หมุนช้า ๆ เพื่อให้ลูกตกออกมา', simHintWin: '{ball} ออกมาแล้ว', simHintEmpty: 'ไม่มีลูกเหลือแล้ว กรุณารีเซ็ต',
  simTotalTurns: 'จำนวนสุ่ม', simWinRate: 'อัตราถูกรางวัล', whiteBall: 'ลูกขาว', redBall: 'ลูกแดง', greenBall: 'ลูกเขียว', simReset: 'รีเซ็ตเครื่องจำลอง',
  simHistoryTitle: 'ผลล่าสุด 50 ครั้ง', simHistoryNote: 'ผลล่าสุดจะแสดงด้านบน', simNoHistory: 'ยังไม่ได้สุ่ม', simWin: 'ถูกรางวัล', simLose: 'ไม่ถูกรางวัล',
});
Object.assign(I18N.id, {
  tabSimulator: 'Simulator undian', simEyebrow: 'Garapon Simulator', simTitle: 'Simulator undian Garapon',
  simGameOnly: 'Simulator ini hanya untuk permainan dan tidak mewakili peluang undian atau cara operasi sebenarnya.', simHint: 'Pegang tuas dan putar perlahan. Jika terlalu cepat, bola tidak akan keluar.',
  simHintFast: 'Terlalu cepat. Putar perlahan agar bola keluar.', simHintWin: '{ball} keluar.', simHintEmpty: 'Bola habis. Silakan reset simulator.',
  simTotalTurns: 'Jumlah undian', simWinRate: 'Win rate', whiteBall: 'Bola putih', redBall: 'Bola merah', greenBall: 'Bola hijau', simReset: 'Reset simulator',
  simHistoryTitle: '50 hasil terbaru', simHistoryNote: 'Hasil terbaru muncul paling atas.', simNoHistory: 'Belum ada undian.', simWin: 'Menang', simLose: 'Kalah',
});

const CLOUD_I18N = {
  cloudEyebrow: 'Optional Cloud Save',
  cloudTitle: 'Account sync',
  cloudChecking: 'Checking account status...',
  cloudNicknameLabel: 'Nickname',
  cloudNicknamePlaceholder: 'gomensensei',
  cloudEmailLabel: 'Account email',
  cloudPasswordLabel: 'Password',
  cloudPasswordPlaceholder: '6+ characters',
  cloudSignIn: 'Sign in',
  cloudCreateAccount: 'Create account',
  cloudSyncLocal: 'Sync local records',
  cloudLoadRecords: 'Load cloud records',
  cloudSignOut: 'Sign out',
  cloudUnconfigured: 'Cloud save is not configured. Local records still work.',
  cloudLoginRequired: 'Sign in to sync records across devices.',
  cloudReady: 'Signed in. Local records still stay on this device unless you sync them.',
  cloudSyncing: 'Syncing local records...',
  cloudLoading: 'Loading cloud records...',
  cloudSynced: 'Cloud sync complete: {count} record(s) saved.',
  cloudLoaded: 'Loaded {count} cloud record(s).',
  cloudFailed: 'Cloud action failed. Local records were not changed.',
  cloudNoRecords: 'No local records to sync.',
  cloudBadge: 'Cloud',
  accountNavGuest: 'Account',
  cloudAutoSaving: 'Saving to cloud...',
  cloudAutoSaved: 'Saved to cloud.',
  publicCloudSource: 'Showing approved anonymous cloud submissions only.',
  publicLocalSource: 'Currently calculated only from local records marked as public-ready.',
  publicNotEnough: 'Not enough anonymous public data yet. Detailed breakdowns appear from 10 approved records.',
};
Object.keys(I18N).forEach((lang) => Object.assign(I18N[lang], CLOUD_I18N));
Object.assign(I18N['zh-Hant'], {
  cloudEyebrow: '可選雲端保存',
  cloudTitle: '帳號同步',
  cloudChecking: '檢查登入狀態中...',
  cloudNicknameLabel: 'Nickname',
  cloudNicknamePlaceholder: '例如：gomensensei',
  cloudEmailLabel: '帳號 email',
  cloudPasswordLabel: '密碼',
  cloudPasswordPlaceholder: '最少 6 個字',
  cloudSignIn: '登入',
  cloudCreateAccount: '建立帳號',
  cloudSyncLocal: '同步本機紀錄',
  cloudLoadRecords: '載入雲端紀錄',
  cloudSignOut: '登出',
  cloudUnconfigured: '雲端保存尚未設定，本機紀錄仍然可用。',
  cloudLoginRequired: '登入後可以跨裝置同步紀錄。',
  cloudReady: '已登入。本機紀錄仍會留喺呢部裝置，按同步先會上雲端。',
  cloudSyncing: '同步本機紀錄中...',
  cloudLoading: '載入雲端紀錄中...',
  cloudSynced: '雲端同步完成：已保存 {count} 筆紀錄。',
  cloudLoaded: '已載入 {count} 筆雲端紀錄。',
  cloudFailed: '雲端操作失敗。本機紀錄未被改動。',
  cloudNoRecords: '未有本機紀錄可以同步。',
  cloudBadge: '雲端',
  publicCloudSource: '只顯示已通過嘅匿名雲端提交統計。',
  publicLocalSource: '目前只統計本機標記為願意公開嘅紀錄。',
  publicNotEnough: '匿名公開資料未夠。10 筆或以上 approved 紀錄先會顯示詳細分類。'
});
Object.assign(I18N['zh-Hans'], {
  cloudEyebrow: '可选云端保存',
  cloudTitle: '账号同步',
  cloudChecking: '检查登录状态中...',
  cloudNicknameLabel: 'Nickname',
  cloudNicknamePlaceholder: '例如：gomensensei',
  cloudEmailLabel: '账号 email',
  cloudPasswordLabel: '密码',
  cloudPasswordPlaceholder: '至少 6 个字符',
  cloudSignIn: '登录',
  cloudCreateAccount: '建立账号',
  cloudSyncLocal: '同步本机记录',
  cloudLoadRecords: '载入云端记录',
  cloudSignOut: '登出',
  cloudUnconfigured: '云端保存尚未设置，本机记录仍然可用。',
  cloudLoginRequired: '登录后可以跨设备同步记录。',
  cloudReady: '已登录。本机记录仍会留在这部设备，按同步才会上云端。',
  cloudSyncing: '同步本机记录中...',
  cloudLoading: '载入云端记录中...',
  cloudSynced: '云端同步完成：已保存 {count} 笔记录。',
  cloudLoaded: '已载入 {count} 笔云端记录。',
  cloudFailed: '云端操作失败。本机记录未被改动。',
  cloudNoRecords: '没有本机记录可以同步。',
  cloudBadge: '云端',
  publicCloudSource: '只显示已通过的匿名云端提交统计。',
  publicLocalSource: '目前只统计本机标记为愿意公开的记录。',
  publicNotEnough: '匿名公开资料不足。10 笔或以上 approved 记录才会显示详细分类。'
});
Object.assign(I18N.ja, {
  cloudEyebrow: '任意クラウド保存',
  cloudTitle: 'アカウント同期',
  cloudChecking: 'ログイン状態を確認中...',
  cloudNicknameLabel: 'ニックネーム',
  cloudNicknamePlaceholder: '例: gomensensei',
  cloudEmailLabel: 'アカウント用メール',
  cloudPasswordLabel: 'パスワード',
  cloudPasswordPlaceholder: '6文字以上',
  cloudSignIn: 'ログイン',
  cloudCreateAccount: 'アカウント作成',
  cloudSyncLocal: 'ローカル記録を同期',
  cloudLoadRecords: 'クラウド記録を読み込み',
  cloudSignOut: 'ログアウト',
  cloudUnconfigured: 'クラウド保存は未設定ですが、ローカル記録は使えます。',
  cloudLoginRequired: 'ログインすると端末間で記録を同期できます。',
  cloudReady: 'ログイン中です。ローカル記録は同期ボタンを押すまで端末内に残ります。',
  cloudSyncing: 'ローカル記録を同期中...',
  cloudLoading: 'クラウド記録を読み込み中...',
  cloudSynced: 'クラウド同期完了：{count} 件を保存しました。',
  cloudLoaded: '{count} 件のクラウド記録を読み込みました。',
  cloudFailed: 'クラウド操作に失敗しました。ローカル記録は変更されていません。',
  cloudNoRecords: '同期できるローカル記録がありません。',
  cloudBadge: 'クラウド',
  publicCloudSource: '承認済みの匿名クラウド投稿のみを集計しています。',
  publicLocalSource: '現在はローカルの公開可記録のみを集計しています。',
  publicNotEnough: '匿名公開データがまだ足りません。承認済み記録が10件以上で詳細分類を表示します。'
});
Object.assign(I18N.ko, {
  cloudEyebrow: '선택형 클라우드 저장',
  cloudTitle: '계정 동기화',
  cloudChecking: '로그인 상태 확인 중...',
  cloudNicknameLabel: '닉네임',
  cloudNicknamePlaceholder: '예: gomensensei',
  cloudEmailLabel: '계정 이메일',
  cloudPasswordLabel: '비밀번호',
  cloudPasswordPlaceholder: '6자 이상',
  cloudSignIn: '로그인',
  cloudCreateAccount: '계정 만들기',
  cloudSyncLocal: '로컬 기록 동기화',
  cloudLoadRecords: '클라우드 기록 불러오기',
  cloudSignOut: '로그아웃',
  cloudUnconfigured: '클라우드 저장이 설정되지 않았지만 로컬 기록은 계속 사용할 수 있습니다.',
  cloudLoginRequired: '로그인하면 여러 기기에서 기록을 동기화할 수 있습니다.',
  cloudReady: '로그인했습니다. 동기화 버튼을 누르기 전까지 로컬 기록은 이 기기에 남습니다.',
  cloudSyncing: '로컬 기록 동기화 중...',
  cloudLoading: '클라우드 기록 불러오는 중...',
  cloudSynced: '클라우드 동기화 완료: {count}개 기록 저장.',
  cloudLoaded: '클라우드 기록 {count}개를 불러왔습니다.',
  cloudFailed: '클라우드 작업에 실패했습니다. 로컬 기록은 변경되지 않았습니다.',
  cloudNoRecords: '동기화할 로컬 기록이 없습니다.',
  cloudBadge: '클라우드',
  publicCloudSource: '승인된 익명 클라우드 제출만 집계합니다.',
  publicLocalSource: '현재는 로컬에서 공개 가능으로 표시된 기록만 집계합니다.',
  publicNotEnough: '익명 공개 데이터가 아직 부족합니다. 승인된 기록 10개 이상부터 상세 분류가 표시됩니다.'
});
Object.assign(I18N.th, {
  cloudEyebrow: 'บันทึกบนคลาวด์แบบเลือกใช้',
  cloudTitle: 'ซิงค์บัญชี',
  cloudChecking: 'กำลังตรวจสอบสถานะเข้าสู่ระบบ...',
  cloudNicknameLabel: 'Nickname',
  cloudNicknamePlaceholder: 'เช่น gomensensei',
  cloudEmailLabel: 'อีเมลบัญชี',
  cloudPasswordLabel: 'รหัสผ่าน',
  cloudPasswordPlaceholder: 'อย่างน้อย 6 ตัวอักษร',
  cloudSignIn: 'เข้าสู่ระบบ',
  cloudCreateAccount: 'สร้างบัญชี',
  cloudSyncLocal: 'ซิงค์ข้อมูลในเครื่อง',
  cloudLoadRecords: 'โหลดข้อมูลจากคลาวด์',
  cloudSignOut: 'ออกจากระบบ',
  cloudUnconfigured: 'ยังไม่ได้ตั้งค่าคลาวด์ แต่ข้อมูลในเครื่องยังใช้ได้',
  cloudLoginRequired: 'เข้าสู่ระบบเพื่อซิงค์ข้อมูลข้ามอุปกรณ์',
  cloudReady: 'เข้าสู่ระบบแล้ว ข้อมูลในเครื่องจะขึ้นคลาวด์เมื่อกดซิงค์',
  cloudSyncing: 'กำลังซิงค์ข้อมูลในเครื่อง...',
  cloudLoading: 'กำลังโหลดข้อมูลจากคลาวด์...',
  cloudSynced: 'ซิงค์คลาวด์เสร็จแล้ว: บันทึก {count} รายการ',
  cloudLoaded: 'โหลดข้อมูลคลาวด์ {count} รายการแล้ว',
  cloudFailed: 'การทำงานบนคลาวด์ล้มเหลว ข้อมูลในเครื่องไม่ถูกเปลี่ยน',
  cloudNoRecords: 'ไม่มีข้อมูลในเครื่องให้ซิงค์',
  cloudBadge: 'คลาวด์',
  publicCloudSource: 'แสดงเฉพาะสถิติจากข้อมูลคลาวด์แบบไม่ระบุตัวตนที่อนุมัติแล้ว',
  publicLocalSource: 'ขณะนี้คำนวณจากข้อมูลในเครื่องที่ทำเครื่องหมาย public-ready เท่านั้น',
  publicNotEnough: 'ข้อมูลสาธารณะแบบไม่ระบุตัวตนยังไม่พอ รายละเอียดจะแสดงเมื่อมีข้อมูลอนุมัติ 10 รายการขึ้นไป'
});
Object.assign(I18N.id, {
  cloudEyebrow: 'Cloud Save Opsional',
  cloudTitle: 'Sinkron akun',
  cloudChecking: 'Memeriksa status akun...',
  cloudNicknameLabel: 'Nickname',
  cloudNicknamePlaceholder: 'contoh: gomensensei',
  cloudEmailLabel: 'Email akun',
  cloudPasswordLabel: 'Password',
  cloudPasswordPlaceholder: 'minimal 6 karakter',
  cloudSignIn: 'Masuk',
  cloudCreateAccount: 'Buat akun',
  cloudSyncLocal: 'Sinkron catatan lokal',
  cloudLoadRecords: 'Muat catatan cloud',
  cloudSignOut: 'Keluar',
  cloudUnconfigured: 'Cloud save belum dikonfigurasi. Catatan lokal tetap bisa digunakan.',
  cloudLoginRequired: 'Masuk untuk menyinkronkan catatan antar perangkat.',
  cloudReady: 'Sudah masuk. Catatan lokal tetap di perangkat ini sampai Anda menekan sinkron.',
  cloudSyncing: 'Menyinkronkan catatan lokal...',
  cloudLoading: 'Memuat catatan cloud...',
  cloudSynced: 'Sinkron cloud selesai: {count} catatan tersimpan.',
  cloudLoaded: 'Memuat {count} catatan cloud.',
  cloudFailed: 'Aksi cloud gagal. Catatan lokal tidak berubah.',
  cloudNoRecords: 'Tidak ada catatan lokal untuk disinkronkan.',
  cloudBadge: 'Cloud',
  publicCloudSource: 'Hanya menampilkan statistik dari kiriman cloud anonim yang disetujui.',
  publicLocalSource: 'Saat ini dihitung hanya dari catatan lokal yang ditandai public-ready.',
  publicNotEnough: 'Data publik anonim belum cukup. Detail muncul mulai dari 10 catatan approved.'
});
Object.assign(I18N['zh-Hant'], { accountNavGuest: '帳號', cloudAutoSaving: '保存到雲端中...', cloudAutoSaved: '已保存到雲端。' });
Object.assign(I18N['zh-Hans'], { accountNavGuest: '账号', cloudAutoSaving: '保存到云端中...', cloudAutoSaved: '已保存到云端。' });
Object.assign(I18N.ja, { accountNavGuest: 'アカウント', cloudAutoSaving: 'クラウドに保存中...', cloudAutoSaved: 'クラウドに保存しました。' });
Object.assign(I18N.ko, { accountNavGuest: '계정', cloudAutoSaving: '클라우드에 저장 중...', cloudAutoSaved: '클라우드에 저장했습니다.' });
Object.assign(I18N.th, { accountNavGuest: 'บัญชี', cloudAutoSaving: 'กำลังบันทึกบนคลาวด์...', cloudAutoSaved: 'บันทึกบนคลาวด์แล้ว' });
Object.assign(I18N.id, { accountNavGuest: 'Akun', cloudAutoSaving: 'Menyimpan ke cloud...', cloudAutoSaved: 'Tersimpan ke cloud.' });

let appState = { lang: 'ja', members: [], records: [], simulator: null, session: null, cloudPublicRecords: [], cloudStatsLoaded: false, lastCloudLoadUserId: '' };
let simulatorRuntime = { dragging: false, angle: 0, lastAngle: 0, lastTime: 0, accumulatedSlowDelta: 0, smoothedSpeed: 0, lastDropAt: 0, lastFastNoticeAt: 0 };

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const els = {
  languageSelect: $('#languageSelect'), accountNavLink: $('#accountNavLink'), recordForm: $('#recordForm'), editingId: $('#editingId'), nameInput: $('#nameInput'), dateInput: $('#dateInput'), performanceSelect: $('#performanceSelect'), spinCountInput: $('#spinCountInput'), costOutput: $('#costOutput'), winCountInput: $('#winCountInput'), prizeSelect: $('#prizeSelect'), memberSelect: $('#memberSelect'), publicConsentInput: $('#publicConsentInput'), clearFormBtn: $('#clearFormBtn'), downloadCurrentBtn: $('#downloadCurrentBtn'), previewCanvas: $('#previewCanvas'), recordList: $('#recordList'), exportJsonBtn: $('#exportJsonBtn'), importJsonInput: $('#importJsonInput'), deleteAllBtn: $('#deleteAllBtn'), kpiGrid: $('#kpiGrid'), pieCanvas: $('#pieCanvas'), barCanvas: $('#barCanvas'), radarCanvas: $('#radarCanvas'), winRateCanvas: $('#winRateCanvas'), timelineCanvas: $('#timelineCanvas'), memberHeatmap: $('#memberHeatmap'), memberRanking: $('#memberRanking'), performanceRanking: $('#performanceRanking'), winRateRanking: $('#winRateRanking'), roiRanking: $('#roiRanking'), imageDialog: $('#imageDialog'), dialogImage: $('#dialogImage'), closeDialogBtn: $('#closeDialogBtn'), garaponMachine: $('#garaponMachine'), garaponDrum: $('#garaponDrum'), garaponHandle: $('#garaponHandle'), lastBall: $('#lastBall'), simHint: $('#simHint'), simTotalTurns: $('#simTotalTurns'), simWinRate: $('#simWinRate'), resetSimulatorBtn: $('#resetSimulatorBtn'), simRecordList: $('#simRecordList'), cloudPanel: $('#cloudPanel'), cloudStatus: $('#cloudStatus'), cloudMessage: $('#cloudMessage'), syncLocalBtn: $('#syncLocalBtn'), loadCloudBtn: $('#loadCloudBtn'), publicSourceNote: $('#publicSourceNote')
};

// Future backend adapter reservation.
// 現時只寫入 localStorage。日後可在此接 Supabase / Firebase / 自家 API。
// 注意：只有 record.isPublic === true 的紀錄才應同步到公開統計資料表。
const backendAdapter = {
  async saveRecord(record) { return { ok: true, mode: 'local-only', record }; },
  async deleteRecord(record) {
    const client = getSupabaseClient();
    const user = getAuthUser();
    if (!client || !user || !record?.cloudRecordId) return { ok: true, mode: 'local-only', record };
    const { error } = await client.from('garapon_records').delete().eq('id', record.cloudRecordId);
    if (error) throw error;
    await markPublicSubmissionDeleted(record.cloudRecordId);
    return { ok: true, mode: 'cloud-deleted', record };
  },
  async syncPublicRecord(record) {
    if (!record?.cloudRecordId) return { ok: true, skipped: true };
    return record.isPublic ? createPublicSubmission(record) : markPublicSubmissionDeleted(record.cloudRecordId);
  },
};

function getSupabaseClient() {
  return window.Tool48Supabase?.getClient ? window.Tool48Supabase.getClient() : null;
}

function getAuthUser() {
  return window.Tool48Auth?.getUser ? window.Tool48Auth.getUser() : null;
}

function getAuthDisplayName() {
  const user = getAuthUser();
  return user?.user_metadata?.display_name || user?.email || '';
}

function renderAccountNav() {
  if (!els.accountNavLink) return;
  const label = getAuthDisplayName() || t('accountNavGuest');
  els.accountNavLink.textContent = label;
  els.accountNavLink.title = label;
}

function setCloudMessage(message) {
  if (els.cloudMessage) els.cloudMessage.textContent = message || '';
}

function toDbRecord(record, userId) {
  return {
    user_id: userId,
    event_date: record.date || null,
    performance_id: record.performanceId || null,
    spin_count: record.spinCount || 0,
    cost_yen: record.costTotal || 0,
    win_count: record.winCount || 0,
    prize_type: record.prizeId || null,
    member_id: record.twoShotMemberId || null,
    name_private: record.name || null,
    private_note: null,
    public_consent: Boolean(record.isPublic),
    public_status: record.isPublic ? 'approved' : 'private',
    source: 'web',
  };
}

function fromDbRecord(row) {
  return {
    id: `cloud_${row.id}`,
    cloudRecordId: row.id,
    name: row.name_private || '',
    date: row.event_date || '',
    performanceId: row.performance_id || '',
    spinCount: row.spin_count ?? null,
    costTotal: row.cost_yen ?? null,
    winCount: row.win_count ?? null,
    prizeId: row.prize_type || '',
    twoShotMemberId: row.member_id || '',
    isPublic: Boolean(row.public_consent),
    createdAt: row.created_at || new Date().toISOString(),
    updatedAt: row.updated_at || row.created_at || new Date().toISOString(),
    schemaVersion: 2,
  };
}

function publicPayloadFromRecord(record) {
  return {
    event_date: record.date || null,
    performance_id: record.performanceId || null,
    spin_count: record.spinCount || 0,
    cost_yen: record.costTotal || 0,
    win_count: record.winCount || 0,
    prize_type: record.prizeId || null,
    member_id: record.twoShotMemberId || null,
  };
}

function recordFromPublicPayload(payload) {
  return {
    id: generateId(),
    name: '',
    date: payload?.event_date || '',
    performanceId: payload?.performance_id || '',
    spinCount: payload?.spin_count ?? null,
    costTotal: payload?.cost_yen ?? null,
    winCount: payload?.win_count ?? null,
    prizeId: payload?.prize_type || '',
    twoShotMemberId: payload?.member_id || '',
    isPublic: true,
    schemaVersion: 2,
  };
}

function getRecordSignature(record) {
  return [record.date || '', record.performanceId || '', record.spinCount || 0, record.winCount || 0, record.prizeId || '', record.twoShotMemberId || '', record.createdAt || ''].join('|');
}

async function saveRecordToCloud(record) {
  const client = getSupabaseClient();
  const user = getAuthUser();
  if (!client || !user) throw new Error(t('cloudLoginRequired'));
  const payload = toDbRecord(record, user.id);
  let result;
  if (record.cloudRecordId) {
    result = await client.from('garapon_records').update(payload).eq('id', record.cloudRecordId).select('id').single();
  } else {
    result = await client.from('garapon_records').insert(payload).select('id').single();
  }
  if (result.error) throw result.error;
  record.cloudRecordId = result.data.id;
  await backendAdapter.syncPublicRecord(record);
  return record;
}

async function createPublicSubmission(record) {
  const client = getSupabaseClient();
  const user = getAuthUser();
  if (!client || !user || !record.cloudRecordId) return { ok: true, skipped: true };
  await markPublicSubmissionDeleted(record.cloudRecordId);
  const { error } = await client.from('public_submissions').insert({
    source_table: 'garapon_records',
    source_id: record.cloudRecordId,
    user_id: user.id,
    tool_slug: 'garapon',
    public_payload: publicPayloadFromRecord(record),
    status: 'approved',
    approved_at: new Date().toISOString(),
  });
  if (error) throw error;
  return { ok: true, mode: 'public-submission-created' };
}

async function markPublicSubmissionDeleted(cloudRecordId) {
  const client = getSupabaseClient();
  const user = getAuthUser();
  if (!client || !user || !cloudRecordId) return { ok: true, skipped: true };
  const { error } = await client.from('public_submissions')
    .update({ status: 'deleted' })
    .eq('source_table', 'garapon_records')
    .eq('source_id', cloudRecordId)
    .eq('user_id', user.id);
  if (error) throw error;
  return { ok: true, mode: 'public-submission-deleted' };
}

async function syncLocalRecordsToCloud() {
  if (!appState.records.length) { setCloudMessage(t('cloudNoRecords')); return; }
  setCloudMessage(t('cloudSyncing'));
  try {
    const client = getSupabaseClient();
    const user = getAuthUser();
    if (!client || !user) throw new Error(t('cloudLoginRequired'));
    const existing = await client.from('garapon_records').select('id,event_date,performance_id,spin_count,win_count,prize_type,member_id,created_at');
    if (existing.error) throw existing.error;
    const existingBySignature = new Map((existing.data || []).map((row) => [getRecordSignature(fromDbRecord(row)), row.id]));
    let savedCount = 0;
    for (const record of appState.records) {
      if (!record.cloudRecordId && existingBySignature.has(getRecordSignature(record))) record.cloudRecordId = existingBySignature.get(getRecordSignature(record));
      await saveRecordToCloud(record);
      savedCount += 1;
    }
    persistRecords();
    renderRecords();
    await refreshCloudPublicStats();
    setCloudMessage(t('cloudSynced', { count: savedCount }));
  } catch (error) {
    console.warn('Garapon cloud sync failed', error);
    setCloudMessage(error.message || t('cloudFailed'));
  }
}

async function loadCloudRecords(options = {}) {
  const silent = Boolean(options.silent);
  if (!silent) setCloudMessage(t('cloudLoading'));
  try {
    const client = getSupabaseClient();
    const user = getAuthUser();
    if (!client || !user) throw new Error(t('cloudLoginRequired'));
    const { data, error } = await client.from('garapon_records')
      .select('id,event_date,performance_id,spin_count,cost_yen,win_count,prize_type,member_id,name_private,public_consent,created_at,updated_at')
      .order('created_at', { ascending: false });
    if (error) throw error;
    const incoming = (data || []).map(fromDbRecord);
    const byCloudId = new Map(appState.records.filter((record) => record.cloudRecordId).map((record) => [record.cloudRecordId, record]));
    const bySignature = new Map(appState.records.map((record) => [getRecordSignature(record), record]));
    incoming.forEach((record) => {
      const existing = byCloudId.get(record.cloudRecordId);
      if (existing) Object.assign(existing, record, { id: existing.id });
      else if (bySignature.has(getRecordSignature(record))) Object.assign(bySignature.get(getRecordSignature(record)), record, { id: bySignature.get(getRecordSignature(record)).id });
      else appState.records.unshift(record);
    });
    persistRecords();
    renderRecords();
    renderPublicStats();
    setCloudMessage(t('cloudLoaded', { count: incoming.length }));
  } catch (error) {
    console.warn('Garapon cloud load failed', error);
    setCloudMessage(error.message || t('cloudFailed'));
  }
}

async function refreshCloudPublicStats() {
  const client = getSupabaseClient();
  if (!client) { appState.cloudStatsLoaded = false; return; }
  try {
    const { data, error } = await client.from('public_submissions')
      .select('public_payload,created_at')
      .eq('tool_slug', 'garapon')
      .eq('status', 'approved');
    if (error) throw error;
    appState.cloudPublicRecords = (data || []).map((row) => recordFromPublicPayload(row.public_payload));
    appState.cloudStatsLoaded = true;
    renderPublicStats();
  } catch (error) {
    console.warn('Garapon public stats load failed', error);
    appState.cloudStatsLoaded = false;
    renderPublicStats();
  }
}

function getStatsVisibility(sampleSize) {
  if (sampleSize < 5) return 'hidden';
  if (sampleSize < 10) return 'coarse';
  return 'detailed';
}

function t(key, vars = {}) {
  const dict = I18N[appState.lang] || I18N.ja;
  let value = dict[key] || I18N.ja[key] || key;
  Object.entries(vars).forEach(([k, v]) => { value = value.replaceAll(`{${k}}`, String(v)); });
  return value;
}

function detectLanguage() {
  const saved = localStorage.getItem(GARAPON_CONFIG.languageKey);
  if (saved && I18N[saved]) return saved;
  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language || 'ja'];
  for (const raw of candidates) {
    const lang = String(raw).toLowerCase();
    if (lang.startsWith('zh-hant') || lang.includes('hk') || lang.includes('tw') || lang.includes('mo')) return 'zh-Hant';
    if (lang.startsWith('zh-hans') || lang.includes('cn') || lang.includes('sg')) return 'zh-Hans';
    if (lang.startsWith('ja')) return 'ja';
    if (lang.startsWith('ko')) return 'ko';
    if (lang.startsWith('th')) return 'th';
    if (lang.startsWith('id')) return 'id';
    if (lang.startsWith('en')) return 'en';
  }
  return 'ja';
}

function applyLanguage() {
  document.documentElement.lang = appState.lang;
  els.languageSelect.value = appState.lang;
  $$('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder); });
  populatePrizeOptions(); populateMemberOptions(); renderAccountNav(); renderPreviewFromForm(); renderRecords(); renderPublicStats(); renderSimulator(); updateSubmitButtonLabel();
}

function normalizeName(value) { return String(value || '').replace(/\s+/g, '').trim(); }
function parseOptionalInt(value) { if (value === '' || value === null || value === undefined) return null; const num = Number(value); return Number.isFinite(num) ? Math.max(0, Math.floor(num)) : null; }
function formatYen(value) { return `¥${(Number(value) || 0).toLocaleString('ja-JP')}`; }
function formatPercent(value) { return Number.isFinite(value) ? `${value.toFixed(value >= 10 ? 1 : 2)}%` : t('notAvailable'); }
function formatDecimal(value, digits = 2) { return Number.isFinite(value) ? value.toFixed(digits) : t('notAvailable'); }
function formatDate(value) { if (!value) return ''; const date = new Date(`${value}T00:00:00`); if (Number.isNaN(date.getTime())) return value; return new Intl.DateTimeFormat(appState.lang === 'ja' ? 'ja-JP' : undefined, { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date); }
function getPerformance(id) { return PERFORMANCES.find((item) => item.id === id) || null; }
function getPrize(id) { return PRIZES.find((item) => item.id === id) || PRIZES[0]; }
function getPrizeLabel(id, preferJapanese = false) { if (!id) return ''; if (preferJapanese) return getPrize(id).labelJa; if (id === 'twoShot') return t('twoShot'); if (id === 'sendOff') return t('sendOff'); return getPrize(id).labelJa || id; }
function getMember(id) { return appState.members.find((member) => String(member.id) === String(id)) || null; }
function getMemberDisplay(member) { if (!member) return ''; if (appState.lang === 'en' && member.name_en) return `${member.name_en} / ${member.name_ja}`; if (appState.lang === 'ko' && member.name_ko) return `${member.name_ko} / ${member.name_ja}`; return member.nickname ? `${member.name_ja}（${member.nickname}）` : member.name_ja; }
function generateId() { return globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `rec_${Date.now()}_${Math.random().toString(16).slice(2)}`; }

function loadRecords() {
  try {
    const raw = localStorage.getItem(GARAPON_CONFIG.storageKey) || localStorage.getItem(GARAPON_CONFIG.legacyStorageKey) || '[]';
    const parsed = JSON.parse(raw);
    appState.records = Array.isArray(parsed) ? parsed : [];
  } catch { appState.records = []; }
}
function persistRecords() { localStorage.setItem(GARAPON_CONFIG.storageKey, JSON.stringify(appState.records)); }

function populatePerformanceOptions() { els.performanceSelect.innerHTML = ''; els.performanceSelect.append(new Option(t('selectPlaceholder'), '')); PERFORMANCES.forEach((item) => els.performanceSelect.append(new Option(item.label, item.id))); }
function populatePrizeOptions() { const current = els.prizeSelect.value; els.prizeSelect.innerHTML = ''; els.prizeSelect.append(new Option(t('selectPlaceholder'), '')); PRIZES.filter((item) => item.id).forEach((item) => els.prizeSelect.append(new Option(getPrizeLabel(item.id), item.id))); els.prizeSelect.value = current; }
function populateMemberOptions() { const current = els.memberSelect.value; els.memberSelect.innerHTML = ''; els.memberSelect.append(new Option(t('memberPlaceholder'), '')); appState.members.forEach((member) => els.memberSelect.append(new Option(getMemberDisplay(member), String(member.id)))); els.memberSelect.value = current; }
function updateCost() { const spins = parseOptionalInt(els.spinCountInput.value) || 0; els.costOutput.value = formatYen(spins * GARAPON_CONFIG.yenPerSpin); els.costOutput.textContent = formatYen(spins * GARAPON_CONFIG.yenPerSpin); }

function collectFormRecord({ keepId = true } = {}) {
  const spinCount = parseOptionalInt(els.spinCountInput.value);
  const winCount = parseOptionalInt(els.winCountInput.value);
  const now = new Date().toISOString();
  const editingId = els.editingId.value;
  const oldRecord = editingId ? appState.records.find((record) => record.id === editingId) : null;
  return { id: keepId && editingId ? editingId : generateId(), cloudRecordId: oldRecord?.cloudRecordId || null, name: els.nameInput.value.trim(), date: els.dateInput.value, performanceId: els.performanceSelect.value, spinCount, costTotal: spinCount === null ? null : spinCount * GARAPON_CONFIG.yenPerSpin, winCount, prizeId: els.prizeSelect.value, twoShotMemberId: els.memberSelect.value, isPublic: els.publicConsentInput.checked, createdAt: oldRecord?.createdAt || now, updatedAt: now, schemaVersion: 2 };
}

function fillForm(record) { els.editingId.value = record.id || ''; els.nameInput.value = record.name || ''; els.dateInput.value = record.date || ''; els.performanceSelect.value = record.performanceId || ''; els.spinCountInput.value = record.spinCount ?? ''; els.winCountInput.value = record.winCount ?? ''; els.prizeSelect.value = record.prizeId || ''; els.memberSelect.value = record.twoShotMemberId || ''; els.publicConsentInput.checked = Boolean(record.isPublic); updateCost(); renderPreview(record); updateSubmitButtonLabel(); }
function resetForm() { els.recordForm.reset(); els.editingId.value = ''; els.performanceSelect.value = ''; els.prizeSelect.value = ''; els.memberSelect.value = ''; updateCost(); renderPreviewFromForm(); updateSubmitButtonLabel(); }
function updateSubmitButtonLabel() { const submitButton = els.recordForm.querySelector('button[type="submit"]'); submitButton.textContent = els.editingId.value ? t('updateRecord') : t('saveRecord'); }

async function saveFormRecord(event) {
  event.preventDefault();
  const record = collectFormRecord({ keepId: true });
  const existingIndex = appState.records.findIndex((item) => item.id === record.id);
  if (existingIndex >= 0) { appState.records[existingIndex] = record; toast(t('updated')); } else { appState.records.unshift(record); toast(t('saved')); }
  persistRecords(); await backendAdapter.saveRecord(record);
  if (getSupabaseClient() && getAuthUser()) {
    setCloudMessage(t('cloudAutoSaving'));
    try {
      await saveRecordToCloud(record);
      persistRecords();
      await refreshCloudPublicStats();
      setCloudMessage(t('cloudAutoSaved'));
    } catch (error) {
      console.warn('Garapon cloud save failed', error);
      setCloudMessage(error.message || t('cloudFailed'));
    }
  }
  renderRecords(); renderPublicStats(); renderPreview(record); updateSubmitButtonLabel();
}

function toast(message) { const node = document.createElement('div'); node.textContent = message; node.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:99999;background:rgba(23,32,51,.92);color:#fff;border-radius:999px;padding:12px 18px;font-weight:900;box-shadow:0 20px 60px rgba(15,23,42,.24);'; document.body.appendChild(node); setTimeout(() => node.remove(), 1800); }
function renderPreviewFromForm() { updateCost(); renderPreview(collectFormRecord({ keepId: false })); }

function roundRect(ctx, x, y, w, h, r) { const radius = Math.min(r, w / 2, h / 2); ctx.beginPath(); ctx.moveTo(x + radius, y); ctx.arcTo(x + w, y, x + w, y + h, radius); ctx.arcTo(x + w, y + h, x, y + h, radius); ctx.arcTo(x, y + h, x, y, radius); ctx.arcTo(x, y, x + w, y, radius); ctx.closePath(); }
function drawTextLine(ctx, text, x, y, options = {}) { const { font = '32px "Noto Sans JP", sans-serif', color = '#172033', align = 'left', maxWidth = null } = options; ctx.font = font; ctx.fillStyle = color; ctx.textAlign = align; ctx.textBaseline = 'top'; if (maxWidth) ctx.fillText(text, x, y, maxWidth); else ctx.fillText(text, x, y); }
function getMemberAccent(member) { const fallback = ['#ff4f9a', '#ff9d4d']; if (!member?.colorData?.length) return fallback; const colors = member.colorData.map((item) => item.color).filter(Boolean); return colors.length === 1 ? [colors[0], colors[0]] : (colors.length ? [colors[0], colors[1]] : fallback); }
function renderPreview(record) { renderCardCanvas(els.previewCanvas, record, 1); els.previewCanvas.style.width = 'min(100%, 720px)'; els.previewCanvas.style.height = 'auto'; }
function renderCardCanvas(canvas, record, scale = 1) { const { width, height } = GARAPON_CONFIG.canvas; const ctx = initHiDPICanvas(canvas, width, height, scale); drawRecordCard(ctx, record, width, height); }

function drawRecordCard(ctx, record, width, height) {
  const member = getMember(record.twoShotMemberId);
  const [accentA, accentB] = getMemberAccent(member);
  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, accentA); bg.addColorStop(0.46, '#ff8cc9'); bg.addColorStop(1, accentB);
  ctx.fillStyle = bg; ctx.fillRect(0, 0, width, height);

  ctx.save(); ctx.globalAlpha = 0.14; ctx.fillStyle = '#ffffff';
  for (let i = 0; i < 10; i += 1) { ctx.beginPath(); ctx.arc(70 + i * 88, 90 + (i % 4) * 126, 42 + (i % 3) * 12, 0, Math.PI * 2); ctx.fill(); }
  ctx.restore();

  roundRect(ctx, 44, 52, width - 88, height - 104, 42); ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.fill();
  drawTextLine(ctx, t('cardTitle'), 80, 92, { font: '900 44px "Noto Sans JP", sans-serif', color: '#172033', maxWidth: 560 });

  const performance = getPerformance(record.performanceId)?.label || '';
  const memberName = member ? member.name_ja : '';
  const prize = getPrizeLabel(record.prizeId, true);
  const winLine = record.winCount !== null && record.winCount !== undefined ? `${record.winCount}${t('winsUnit')}${prize ? ` / ${prize}` : ''}` : prize;
  const lines = [
    record.name ? record.name : '',
    formatDate(record.date),
    performance,
    record.spinCount !== null && record.spinCount !== undefined ? `${record.spinCount}${t('spinsUnit')} / ${formatYen(record.costTotal || 0)}` : '',
    winLine,
    memberName,
  ].filter(Boolean);

  const textArray = lines.map((line, index) => ({
    text: line,
    font: index === 0 ? '900 46px "Noto Sans JP", sans-serif' : '800 32px "Noto Sans JP", sans-serif',
    color: index === 0 ? '#111827' : '#344054',
    h: index === 0 ? 56 : 42,
    gap: index === 0 ? 20 : 13,
  }));
  drawInfoGraphicText(ctx, width / 2, height / 2 + 16, textArray);

  ctx.save();
  ctx.strokeStyle = 'rgba(255,79,154,0.34)'; ctx.lineWidth = 3;
  roundRect(ctx, 80, height - 148, width - 160, 52, 26); ctx.stroke();
  drawTextLine(ctx, new Date().toLocaleDateString('ja-JP'), width / 2, height - 135, { font: '800 18px "Noto Sans JP", sans-serif', color: '#667085', align: 'center' });
  ctx.restore();
}

function createCardDataUrl(record) { const offscreen = document.createElement('canvas'); renderCardCanvas(offscreen, record, 3); return offscreen.toDataURL('image/png'); }
function isSafariOrIOS() { const ua = navigator.userAgent; const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); const isSafari = /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(ua); return isIOS || isSafari; }
function downloadRecordCard(record) { const dataUrl = createCardDataUrl(record); const filenameParts = ['garapon', record.date || new Date().toISOString().slice(0, 10), normalizeName(record.name) || 'record']; if (isSafariOrIOS()) showImageDialog(dataUrl); else triggerDownload(dataUrl, `${filenameParts.join('_')}.png`); }
function showImageDialog(dataUrl) { els.dialogImage.src = dataUrl; if (typeof els.imageDialog.showModal === 'function') els.imageDialog.showModal(); else { window.open(dataUrl, '_blank', 'noopener'); alert(t('iosSafariMessage')); } }

function renderRecords() {
  if (!appState.records.length) { els.recordList.innerHTML = `<div class="record-empty">${t('noRecords')}</div>`; return; }
  els.recordList.innerHTML = appState.records.map((record) => {
    const performance = getPerformance(record.performanceId)?.label || t('noPerformance');
    const prize = getPrizeLabel(record.prizeId) || t('noPrize');
    const member = getMember(record.twoShotMemberId);
    const title = [record.name || t('anonymous'), formatDate(record.date), performance].filter(Boolean).join(' ・ ');
    const meta = [record.spinCount !== null && record.spinCount !== undefined ? `${record.spinCount}${t('spinsUnit')} / ${formatYen(record.costTotal || 0)}` : '', record.winCount !== null && record.winCount !== undefined ? `${record.winCount}${t('winsUnit')}` : '', prize, member ? member.name_ja : '', record.isPublic ? t('publicBadge') : t('privateBadge'), record.cloudRecordId ? t('cloudBadge') : ''].filter(Boolean).map((item) => `<span${item === t('cloudBadge') ? ' class="cloud-record-badge"' : ''}>${escapeHtml(item)}</span>`).join('');
    return `<article class="record-item" data-id="${escapeHtml(record.id)}"><div class="record-main"><h3 class="record-title">${escapeHtml(title)}</h3><div class="record-meta">${meta}</div></div><div class="record-buttons"><button type="button" data-action="edit">${t('edit')}</button><button type="button" data-action="duplicate">${t('duplicate')}</button><button type="button" data-action="download">${t('download')}</button><button type="button" class="delete" data-action="delete">${t('delete')}</button></div></article>`;
  }).join('');
}
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char])); }
function handleRecordListClick(event) { const button = event.target.closest('button[data-action]'); if (!button) return; const item = button.closest('.record-item'); const record = appState.records.find((entry) => entry.id === item?.dataset.id); if (!record) return; const action = button.dataset.action; if (action === 'edit') { fillForm(record); switchTab('input'); window.scrollTo({ top: 0, behavior: 'smooth' }); } if (action === 'duplicate') { const cloned = { ...record, id: generateId(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }; appState.records.unshift(cloned); persistRecords(); renderRecords(); renderPublicStats(); toast(t('saved')); } if (action === 'download') downloadRecordCard(record); if (action === 'delete') deleteRecord(record.id); }
async function deleteRecord(id) { if (!confirm(t('confirmDelete'))) return; const removedRecord = appState.records.find((record) => record.id === id); appState.records = appState.records.filter((record) => record.id !== id); persistRecords(); try { await backendAdapter.deleteRecord(removedRecord); } catch (error) { console.warn('Garapon cloud delete failed', error); setCloudMessage(error.message || t('cloudFailed')); } renderRecords(); await refreshCloudPublicStats(); renderPublicStats(); if (els.editingId.value === id) resetForm(); }
function deleteAllRecords() { if (!appState.records.length) return; if (!confirm(t('confirmDeleteAll'))) return; appState.records = []; persistRecords(); resetForm(); renderRecords(); renderPublicStats(); }
function exportJson() { const payload = { app: 'gomensensei-garapon-challenge-log', exportedAt: new Date().toISOString(), records: appState.records }; const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = `garapon-records-${new Date().toISOString().slice(0, 10)}.json`; link.click(); URL.revokeObjectURL(url); }
function importJson(event) { const file = event.target.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { try { const parsed = JSON.parse(String(reader.result || '{}')); const incoming = Array.isArray(parsed) ? parsed : parsed.records; if (!Array.isArray(incoming)) throw new Error('Invalid JSON'); const normalized = incoming.map((record) => ({ ...record, id: record.id || generateId(), schemaVersion: 2 })); const existingIds = new Set(appState.records.map((record) => record.id)); normalized.forEach((record) => { if (existingIds.has(record.id)) record.id = generateId(); }); appState.records = [...normalized, ...appState.records]; persistRecords(); renderRecords(); renderPublicStats(); toast(t('imported')); } catch { toast(t('importFailed')); } finally { event.target.value = ''; } }; reader.readAsText(file); }
function switchTab(name) { $$('.tab-button').forEach((button) => button.classList.toggle('active', button.dataset.tab === name)); $$('.tab-panel').forEach((panel) => panel.classList.toggle('active', panel.id === `tab-${name}`)); if (name === 'public') { renderPublicStats(); refreshCloudPublicStats(); } if (name === 'simulator') renderSimulator(); }

function getPublicRecords() { return appState.cloudStatsLoaded ? appState.cloudPublicRecords : appState.records.filter((record) => record.isPublic); }
function isUsingCloudPublicStats() { return Boolean(appState.cloudStatsLoaded); }
function countBy(list, keyFn) { return list.reduce((acc, item) => { const key = keyFn(item); acc[key] = (acc[key] || 0) + 1; return acc; }, {}); }
function groupSum(list, keyFn, valueFn) { return list.reduce((acc, item) => { const key = keyFn(item); acc[key] = (acc[key] || 0) + valueFn(item); return acc; }, {}); }

function summarizePublic(records) {
  const namedPeople = new Set(records.map((record) => normalizeName(record.name)).filter(Boolean));
  const spinTotal = records.reduce((sum, record) => sum + (record.spinCount || 0), 0);
  const costTotal = records.reduce((sum, record) => sum + (record.costTotal || 0), 0);
  const winTotal = records.reduce((sum, record) => sum + (record.winCount || 0), 0);
  const peopleCount = namedPeople.size || records.length;
  const prizeCounts = countBy(records, (record) => record.prizeId || 'none');
  const performanceSpins = groupSum(records, (record) => record.performanceId || 'none', (record) => record.spinCount || 0);
  const performanceRecords = countBy(records, (record) => record.performanceId || 'none');
  const memberCounts = countBy(records.filter((record) => record.twoShotMemberId), (record) => record.twoShotMemberId);
  const performanceStats = {};
  records.forEach((record) => {
    const key = record.performanceId || 'none';
    if (!performanceStats[key]) performanceStats[key] = { records: 0, spins: 0, wins: 0, cost: 0 };
    performanceStats[key].records += 1;
    performanceStats[key].spins += record.spinCount || 0;
    performanceStats[key].wins += record.winCount || 0;
    performanceStats[key].cost += record.costTotal || 0;
  });
  Object.values(performanceStats).forEach((item) => {
    item.winRate = item.spins > 0 ? (item.wins / item.spins) * 100 : NaN;
    item.roiPer1000 = item.cost > 0 ? (item.wins / item.cost) * 1000 : NaN;
    item.costPerWin = item.wins > 0 ? item.cost / item.wins : NaN;
  });
  const timeline = Object.values(records.reduce((acc, record) => {
    const key = record.date || record.createdAt?.slice(0, 10) || 'unknown';
    if (!acc[key]) acc[key] = { date: key, spins: 0, wins: 0, cost: 0, records: 0 };
    acc[key].spins += record.spinCount || 0;
    acc[key].wins += record.winCount || 0;
    acc[key].cost += record.costTotal || 0;
    acc[key].records += 1;
    return acc;
  }, {})).sort((a, b) => String(a.date).localeCompare(String(b.date)));
  return { peopleCount, recordCount: records.length, spinTotal, costTotal, winTotal, winRate: spinTotal > 0 ? (winTotal / spinTotal) * 100 : NaN, avgSpend: peopleCount > 0 ? costTotal / peopleCount : 0, prizeCounts, performanceSpins, performanceRecords, memberCounts, performanceStats, timeline };
}

function renderPublicStats() {
  const publicRecords = getPublicRecords();
  if (!els.kpiGrid) return;
  const chartGrid = document.querySelector('.chart-grid');
  const rankingGrid = document.querySelector('.ranking-grid');
  const usingCloudStats = isUsingCloudPublicStats();
  if (els.publicSourceNote) els.publicSourceNote.textContent = usingCloudStats ? t('publicCloudSource') : t('publicLocalSource');
  if (!publicRecords.length) {
    els.kpiGrid.innerHTML = `<div class="record-empty" style="grid-column:1/-1">${t('noPublicRecords')}</div>`;
    if (chartGrid) chartGrid.style.display = 'none';
    if (rankingGrid) rankingGrid.style.display = 'none';
    [els.pieCanvas, els.barCanvas, els.radarCanvas, els.winRateCanvas, els.timelineCanvas].forEach(clearChart);
    [els.memberHeatmap, els.memberRanking, els.performanceRanking, els.winRateRanking, els.roiRanking].forEach((node) => { if (node) node.innerHTML = `<div class="ranking-empty">${t('noPublicRecords')}</div>`; });
    return;
  }
  const visibility = usingCloudStats ? getStatsVisibility(publicRecords.length) : 'detailed';
  const summary = summarizePublic(publicRecords);
  if (visibility === 'hidden') {
    els.kpiGrid.innerHTML = `<div class="record-empty public-threshold-note">${t('publicNotEnough')}</div>`;
    if (chartGrid) chartGrid.style.display = 'none';
    if (rankingGrid) rankingGrid.style.display = 'none';
    [els.pieCanvas, els.barCanvas, els.radarCanvas, els.winRateCanvas, els.timelineCanvas].forEach(clearChart);
    return;
  }
  if (chartGrid) chartGrid.style.display = visibility === 'detailed' ? '' : 'none';
  if (rankingGrid) rankingGrid.style.display = visibility === 'detailed' ? '' : 'none';
  const allKpis = [[t('people'), summary.peopleCount.toLocaleString()], [t('records'), summary.recordCount.toLocaleString()], [t('lotteryBalls'), summary.spinTotal.toLocaleString()], [t('cost'), formatYen(summary.costTotal)], [t('wins'), summary.winTotal.toLocaleString()], [t('winRate'), formatPercent(summary.winRate)], [t('avgSpend'), formatYen(summary.avgSpend)]];
  const kpis = visibility === 'coarse' ? allKpis.slice(1, 6) : allKpis;
  els.kpiGrid.innerHTML = kpis.map(([label, value]) => `<div class="kpi-card"><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong></div>`).join('');
  if (visibility !== 'detailed') {
    [els.pieCanvas, els.barCanvas, els.radarCanvas, els.winRateCanvas, els.timelineCanvas].forEach(clearChart);
    return;
  }
  drawPieChart(els.pieCanvas, Object.entries(summary.prizeCounts).map(([id, count]) => ({ label: id === 'none' ? t('noPrize') : getPrizeLabel(id), value: count })));
  drawBarChart(els.barCanvas, Object.entries(summary.performanceSpins).map(([id, count]) => ({ label: id === 'none' ? t('noPerformance') : getPerformance(id)?.label || id, value: count })));
  drawRadarChart(els.radarCanvas, [{ label: t('people'), value: summary.peopleCount, max: Math.max(summary.peopleCount, 10) }, { label: t('records'), value: summary.recordCount, max: Math.max(summary.recordCount, 10) }, { label: t('lotteryBalls'), value: summary.spinTotal, max: Math.max(summary.spinTotal, 50) }, { label: t('cost'), value: summary.costTotal / 500, max: Math.max(summary.costTotal / 500, 50) }, { label: t('wins'), value: summary.winTotal, max: Math.max(summary.winTotal, 10) }, { label: t('winRate'), value: Number.isFinite(summary.winRate) ? summary.winRate : 0, max: 100 }]);
  drawBarChart(els.winRateCanvas, Object.entries(summary.performanceStats).map(([id, item]) => ({ label: id === 'none' ? t('noPerformance') : getPerformance(id)?.label || id, value: Number.isFinite(item.winRate) ? item.winRate : 0, suffix: '%' })));
  drawTimelineChart(els.timelineCanvas, summary.timeline);
  renderRankings(summary);
}

function clearChart(canvas) { if (!canvas) return; const ctx = canvas.getContext('2d'); ctx.clearRect(0, 0, canvas.width, canvas.height); }
function setupChartCanvas(canvas) { const rect = canvas.getBoundingClientRect(); const cssWidth = rect.width || canvas.width; const cssHeight = cssWidth * (canvas.height / canvas.width); const dpr = window.devicePixelRatio || 1; canvas.width = Math.round(cssWidth * dpr); canvas.height = Math.round(cssHeight * dpr); canvas.style.height = `${cssHeight}px`; const ctx = canvas.getContext('2d'); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); return { ctx, width: cssWidth, height: cssHeight }; }
function drawPieChart(canvas, data) { const { ctx, width, height } = setupChartCanvas(canvas); ctx.clearRect(0, 0, width, height); const filtered = data.filter((item) => item.value > 0); const total = filtered.reduce((sum, item) => sum + item.value, 0); const colors = ['#ff4f9a', '#38bdf8', '#ff9d4d', '#8b5cf6', '#22c55e']; if (!total) return; let start = -Math.PI / 2; const radius = Math.min(width, height) * 0.28; const cx = width * 0.36; const cy = height * 0.5; filtered.forEach((item, index) => { const angle = (item.value / total) * Math.PI * 2; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, radius, start, start + angle); ctx.closePath(); ctx.fillStyle = colors[index % colors.length]; ctx.fill(); start += angle; }); ctx.font = '800 13px "Noto Sans JP", sans-serif'; ctx.textBaseline = 'middle'; filtered.slice(0, 5).forEach((item, index) => { const y = 36 + index * 34; ctx.fillStyle = colors[index % colors.length]; roundRect(ctx, width * 0.66, y - 8, 16, 16, 5); ctx.fill(); ctx.fillStyle = '#344054'; ctx.fillText(`${item.label} ${item.value}`, width * 0.66 + 24, y, width * 0.3); }); }
function drawBarChart(canvas, data) { const { ctx, width, height } = setupChartCanvas(canvas); ctx.clearRect(0, 0, width, height); const filtered = data.filter((item) => item.value > 0).sort((a, b) => b.value - a.value).slice(0, 5); if (!filtered.length) return; const max = Math.max(...filtered.map((item) => item.value), 1); const left = 46; const bottom = height - 48; const chartHeight = height - 90; const barWidth = Math.max(24, (width - left - 24) / filtered.length - 16); ctx.strokeStyle = 'rgba(102,112,133,0.2)'; ctx.lineWidth = 1; for (let i = 0; i <= 4; i += 1) { const y = bottom - (chartHeight / 4) * i; ctx.beginPath(); ctx.moveTo(left, y); ctx.lineTo(width - 16, y); ctx.stroke(); } filtered.forEach((item, index) => { const x = left + index * (barWidth + 16) + 8; const h = Math.max(6, (item.value / max) * chartHeight); const y = bottom - h; const grad = ctx.createLinearGradient(0, y, 0, bottom); grad.addColorStop(0, '#ff4f9a'); grad.addColorStop(1, '#ff9d4d'); roundRect(ctx, x, y, barWidth, h, 10); ctx.fillStyle = grad; ctx.fill(); ctx.fillStyle = '#344054'; ctx.font = '900 13px "Noto Sans JP", sans-serif'; ctx.textAlign = 'center'; ctx.fillText(`${formatDecimal(item.value, item.suffix ? 1 : 0)}${item.suffix || ''}`, x + barWidth / 2, y - 18); ctx.font = '700 10px "Noto Sans JP", sans-serif'; ctx.fillText(shorten(item.label, 8), x + barWidth / 2, bottom + 12, barWidth + 20); }); }
function drawRadarChart(canvas, data) { const { ctx, width, height } = setupChartCanvas(canvas); ctx.clearRect(0, 0, width, height); const cx = width / 2; const cy = height / 2 + 8; const radius = Math.min(width, height) * 0.31; const count = data.length; ctx.strokeStyle = 'rgba(102,112,133,0.22)'; for (let layer = 1; layer <= 4; layer += 1) { ctx.beginPath(); for (let i = 0; i < count; i += 1) { const angle = -Math.PI / 2 + (i / count) * Math.PI * 2; const r = radius * (layer / 4); const x = cx + Math.cos(angle) * r; const y = cy + Math.sin(angle) * r; if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); } ctx.closePath(); ctx.stroke(); } ctx.beginPath(); data.forEach((item, i) => { const ratio = Math.max(0, Math.min(1, item.value / item.max)); const angle = -Math.PI / 2 + (i / count) * Math.PI * 2; const x = cx + Math.cos(angle) * radius * ratio; const y = cy + Math.sin(angle) * radius * ratio; if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); }); ctx.closePath(); ctx.fillStyle = 'rgba(255,79,154,0.22)'; ctx.strokeStyle = '#ff4f9a'; ctx.lineWidth = 3; ctx.fill(); ctx.stroke(); ctx.font = '800 11px "Noto Sans JP", sans-serif'; ctx.fillStyle = '#344054'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; data.forEach((item, i) => { const angle = -Math.PI / 2 + (i / count) * Math.PI * 2; const x = cx + Math.cos(angle) * (radius + 32); const y = cy + Math.sin(angle) * (radius + 24); ctx.fillText(shorten(item.label, 7), x, y, 72); }); }
function drawTimelineChart(canvas, timeline) { const { ctx, width, height } = setupChartCanvas(canvas); ctx.clearRect(0, 0, width, height); const data = timeline.filter((item) => item.date !== 'unknown').slice(-12); if (!data.length) return; const left = 44; const right = width - 18; const top = 28; const bottom = height - 46; const max = Math.max(...data.map((item) => Math.max(item.spins, item.wins)), 1); ctx.strokeStyle = 'rgba(102,112,133,0.22)'; ctx.lineWidth = 1; for (let i = 0; i <= 4; i += 1) { const y = bottom - ((bottom - top) / 4) * i; ctx.beginPath(); ctx.moveTo(left, y); ctx.lineTo(right, y); ctx.stroke(); } const xAt = (i) => left + ((right - left) / Math.max(data.length - 1, 1)) * i; const yFor = (value) => bottom - ((bottom - top) * value / max); [['spins', '#ff4f9a'], ['wins', '#38bdf8']].forEach(([key, color]) => { ctx.beginPath(); data.forEach((item, i) => { const x = xAt(i); const y = yFor(item[key]); if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); }); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.stroke(); data.forEach((item, i) => { ctx.beginPath(); ctx.arc(xAt(i), yFor(item[key]), 4, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill(); }); }); ctx.fillStyle = '#344054'; ctx.font = '800 10px "Noto Sans JP", sans-serif'; ctx.textAlign = 'center'; data.forEach((item, i) => ctx.fillText(shorten(item.date.slice(5), 5), xAt(i), bottom + 16)); }
function shorten(text, length) { const value = String(text || ''); return value.length > length ? `${value.slice(0, length)}…` : value; }

function renderRankings(summary) {
  const memberRows = Object.entries(summary.memberCounts).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([id, count]) => [getMember(id) ? getMemberDisplay(getMember(id)) : id, count]);
  els.memberRanking.innerHTML = memberRows.length ? memberRows.map(([name, count]) => `<div class="ranking-row"><span>${escapeHtml(name)}</span><span>${count}</span></div>`).join('') : `<div class="ranking-empty">${t('noPublicRecords')}</div>`;
  const maxMember = Math.max(...Object.values(summary.memberCounts), 1);
  const heatRows = Object.entries(summary.memberCounts).sort((a, b) => b[1] - a[1]).slice(0, 24).map(([id, count]) => { const member = getMember(id); const name = member ? (member.nickname || member.name_ja) : id; const heat = 0.12 + (count / maxMember) * 0.48; return `<div class="heatmap-cell" style="--heat:${heat.toFixed(2)}"><strong>${escapeHtml(name)}</strong><small>${count}</small></div>`; });
  els.memberHeatmap.innerHTML = heatRows.length ? heatRows.join('') : `<div class="ranking-empty">${t('noPublicRecords')}</div>`;
  const perfRows = Object.entries(summary.performanceStats).sort((a, b) => b[1].spins - a[1].spins).map(([id, item]) => [id === 'none' ? t('noPerformance') : getPerformance(id)?.label || id, `${item.records}${t('records')} / ${item.spins}${t('spinsUnit')} / ${item.wins}${t('winsUnit')}`]);
  els.performanceRanking.innerHTML = perfRows.length ? perfRows.map(([name, value]) => `<div class="ranking-row"><span>${escapeHtml(name)}</span><span>${escapeHtml(value)}</span></div>`).join('') : `<div class="ranking-empty">${t('noPublicRecords')}</div>`;
  const winRateRows = Object.entries(summary.performanceStats).sort((a, b) => (Number.isFinite(b[1].winRate) ? b[1].winRate : -1) - (Number.isFinite(a[1].winRate) ? a[1].winRate : -1)).map(([id, item]) => [id === 'none' ? t('noPerformance') : getPerformance(id)?.label || id, `${formatPercent(item.winRate)} (${item.wins}/${item.spins})`]);
  els.winRateRanking.innerHTML = winRateRows.length ? winRateRows.map(([name, value]) => `<div class="ranking-row"><span>${escapeHtml(name)}</span><span>${escapeHtml(value)}</span></div>`).join('') : `<div class="ranking-empty">${t('noPublicRecords')}</div>`;
  const roiRows = Object.entries(summary.performanceStats).sort((a, b) => (Number.isFinite(b[1].roiPer1000) ? b[1].roiPer1000 : -1) - (Number.isFinite(a[1].roiPer1000) ? a[1].roiPer1000 : -1)).map(([id, item]) => [id === 'none' ? t('noPerformance') : getPerformance(id)?.label || id, `${formatDecimal(item.roiPer1000, 2)} ${t('perThousand')} / ${Number.isFinite(item.costPerWin) ? formatYen(item.costPerWin) : t('notAvailable')} ${t('perHit')}`]);
  els.roiRanking.innerHTML = roiRows.length ? roiRows.map(([name, value]) => `<div class="ranking-row"><span>${escapeHtml(name)}</span><span>${escapeHtml(value)}</span></div>`).join('') : `<div class="ranking-empty">${t('noPublicRecords')}</div>`;
}


function createDefaultSimulatorState() {
  const defaults = GARAPON_CONFIG.simulatorDefaults;
  return { stock: { white: defaults.white, red: defaults.red, green: defaults.green }, history: [] };
}
function loadSimulatorState() {
  try {
    const raw = localStorage.getItem(GARAPON_CONFIG.simulatorStorageKey);
    const parsed = raw ? JSON.parse(raw) : null;
    const defaults = createDefaultSimulatorState();
    appState.simulator = parsed && parsed.stock && Array.isArray(parsed.history) ? {
      stock: {
        white: Math.max(0, Number(parsed.stock.white) || 0),
        red: Math.max(0, Number(parsed.stock.red) || 0),
        green: Math.max(0, Number(parsed.stock.green) || 0),
      },
      history: parsed.history.slice(0, GARAPON_CONFIG.simulatorDefaults.maxHistory),
    } : defaults;
  } catch {
    appState.simulator = createDefaultSimulatorState();
  }
}
function persistSimulatorState() { if (appState.simulator) localStorage.setItem(GARAPON_CONFIG.simulatorStorageKey, JSON.stringify(appState.simulator)); }
function getSimulatorTotals() {
  const history = appState.simulator?.history || [];
  const wins = history.filter((item) => item.isWin).length;
  return { total: history.length, wins, winRate: history.length ? (wins / history.length) * 100 : 0 };
}
function getBallLabel(color) {
  if (color === 'red') return t('redBall');
  if (color === 'green') return t('greenBall');
  return t('whiteBall');
}
function renderSimulator() {
  if (!els.simRecordList || !appState.simulator) return;
  const { history } = appState.simulator;
  const totals = getSimulatorTotals();
  if (els.simTotalTurns) els.simTotalTurns.textContent = totals.total.toLocaleString();
  if (els.simWinRate) els.simWinRate.textContent = formatPercent(totals.winRate);
  if (!history.length) {
    els.simRecordList.innerHTML = `<div class="record-empty">${t('simNoHistory')}</div>`;
    return;
  }
  els.simRecordList.innerHTML = history.slice(0, GARAPON_CONFIG.simulatorDefaults.maxHistory).map((item, index) => `
    <div class="sim-record-row">
      <span class="stock-dot ${escapeHtml(item.color)}"></span>
      <strong>${escapeHtml(getBallLabel(item.color))} / ${item.isWin ? t('simWin') : t('simLose')}</strong>
      <small>#${history.length - index}</small>
    </div>
  `).join('');
}
function resetSimulator() {
  appState.simulator = createDefaultSimulatorState();
  simulatorRuntime.angle = 0;
  simulatorRuntime.accumulatedSlowDelta = 0;
  simulatorRuntime.smoothedSpeed = 0;
  updateSimulatorRotation(0);
  persistSimulatorState();
  renderSimulator();
  if (els.lastBall) { els.lastBall.className = 'last-ball'; }
  if (els.simHint) els.simHint.textContent = t('simHint');
}
function updateSimulatorRotation(angle) {
  simulatorRuntime.angle = angle;
  const deg = `${angle * 180 / Math.PI}deg`;
  if (els.garaponMachine) els.garaponMachine.style.setProperty('--drum-rot', deg);
  if (els.garaponDrum) els.garaponDrum.style.setProperty('--drum-rot', deg);
  if (els.garaponHandle) els.garaponHandle.style.setProperty('--handle-rot', deg);
}
function pointerAngle(event) {
  const rect = els.garaponHandle.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  return Math.atan2(event.clientY - cy, event.clientX - cx);
}
function angleDelta(a, b) {
  let delta = a - b;
  while (delta > Math.PI) delta -= Math.PI * 2;
  while (delta < -Math.PI) delta += Math.PI * 2;
  return delta;
}
function pickSimulatorBall() {
  const stock = appState.simulator.stock;
  const total = stock.white + stock.red + stock.green;
  if (total <= 0) return null;
  let point = Math.random() * total;
  if (point < stock.white) return 'white';
  point -= stock.white;
  if (point < stock.red) return 'red';
  return 'green';
}
function releaseSimulatorBall() {
  if (!appState.simulator) return;
  const color = pickSimulatorBall();
  if (!color) {
    if (els.simHint) els.simHint.textContent = t('simHintEmpty');
    return;
  }
  appState.simulator.stock[color] -= 1;
  const record = { color, isWin: color === 'red' || color === 'green', at: new Date().toISOString() };
  appState.simulator.history.unshift(record);
  appState.simulator.history = appState.simulator.history.slice(0, GARAPON_CONFIG.simulatorDefaults.maxHistory);
  persistSimulatorState();
  renderSimulator();
  if (els.lastBall) {
    els.lastBall.className = `last-ball ${color}`;
    void els.lastBall.offsetWidth;
    els.lastBall.classList.add('show');
  }
  if (els.simHint) els.simHint.textContent = t('simHintWin', { ball: getBallLabel(color) });
}
function maybeDropSimulatorBall(speed, delta) {
  const now = performance.now();
  const absSpeed = Math.abs(speed);
  const absDelta = Math.abs(delta);
  simulatorRuntime.smoothedSpeed = simulatorRuntime.smoothedSpeed * 0.72 + absSpeed * 0.28;
  const slowLimit = 0.022;
  const fastLimit = 0.045;
  if (simulatorRuntime.smoothedSpeed > fastLimit) {
    simulatorRuntime.accumulatedSlowDelta = 0;
    if (now - simulatorRuntime.lastFastNoticeAt > 420) {
      simulatorRuntime.lastFastNoticeAt = now;
      if (els.simHint) els.simHint.textContent = t('simHintFast');
      if (els.garaponMachine) {
        els.garaponMachine.classList.remove('sim-fast-pulse');
        void els.garaponMachine.offsetWidth;
        els.garaponMachine.classList.add('sim-fast-pulse');
      }
    }
    return;
  }
  if (simulatorRuntime.smoothedSpeed > slowLimit) {
    simulatorRuntime.accumulatedSlowDelta = Math.max(0, simulatorRuntime.accumulatedSlowDelta - absDelta * 0.35);
    return;
  }
  simulatorRuntime.accumulatedSlowDelta += absDelta;
  if (simulatorRuntime.accumulatedSlowDelta >= Math.PI * 1.8 && now - simulatorRuntime.lastDropAt > 850) {
    simulatorRuntime.accumulatedSlowDelta = 0;
    simulatorRuntime.lastDropAt = now;
    releaseSimulatorBall();
  }
}
function handleSimulatorPointerDown(event) {
  if (!els.garaponHandle) return;
  event.preventDefault();
  simulatorRuntime.dragging = true;
  simulatorRuntime.lastAngle = pointerAngle(event);
  simulatorRuntime.lastTime = performance.now();
  simulatorRuntime.smoothedSpeed = 0;
  els.garaponHandle.setPointerCapture?.(event.pointerId);
}
function handleSimulatorPointerMove(event) {
  if (!simulatorRuntime.dragging) return;
  event.preventDefault();
  const now = performance.now();
  const currentAngle = pointerAngle(event);
  const delta = angleDelta(currentAngle, simulatorRuntime.lastAngle);
  const dt = Math.max(16, now - simulatorRuntime.lastTime);
  const speed = delta / dt;
  updateSimulatorRotation(simulatorRuntime.angle + delta);
  maybeDropSimulatorBall(speed, delta);
  simulatorRuntime.lastAngle = currentAngle;
  simulatorRuntime.lastTime = now;
}
function handleSimulatorPointerUp(event) {
  if (!simulatorRuntime.dragging) return;
  simulatorRuntime.dragging = false;
  els.garaponHandle?.releasePointerCapture?.(event.pointerId);
}
function bindSimulatorEvents() {
  if (!els.garaponHandle) return;
  els.garaponHandle.addEventListener('pointerdown', handleSimulatorPointerDown);
  window.addEventListener('pointermove', handleSimulatorPointerMove, { passive: false });
  window.addEventListener('pointerup', handleSimulatorPointerUp);
  window.addEventListener('pointercancel', handleSimulatorPointerUp);
  els.resetSimulatorBtn?.addEventListener('click', resetSimulator);
}

function renderCloudPanel() {
  const configured = Boolean(window.Tool48Supabase?.isConfigured?.());
  const user = getAuthUser();
  renderAccountNav();
  if (!configured) setCloudMessage(t('cloudUnconfigured'));
  else if (user) setCloudMessage(t('cloudReady'));
  else setCloudMessage(t('cloudLoginRequired'));
  window.Tool48Auth?.renderAuthState?.();
}

function bindCloudEvents() {
  els.syncLocalBtn?.addEventListener('click', syncLocalRecordsToCloud);
  els.loadCloudBtn?.addEventListener('click', loadCloudRecords);
  window.Tool48Auth?.onAuthStateChange?.((session) => {
    appState.session = session;
    const userId = session?.user?.id || '';
    renderCloudPanel();
    if (userId && appState.lastCloudLoadUserId !== userId) {
      appState.lastCloudLoadUserId = userId;
      loadCloudRecords({ silent: true });
      refreshCloudPublicStats();
    }
    if (!userId) appState.lastCloudLoadUserId = '';
  });
  renderCloudPanel();
}

async function loadMembers() { try { const response = await fetch('members.json', { cache: 'no-store' }); if (!response.ok) throw new Error('members.json not found'); appState.members = await response.json(); if (typeof initSilentPreloader === 'function') initSilentPreloader(appState.members, 'image', 'imgLoaded'); } catch { appState.members = []; } }
function bindEvents() { els.languageSelect.addEventListener('change', () => { appState.lang = els.languageSelect.value; localStorage.setItem(GARAPON_CONFIG.languageKey, appState.lang); applyLanguage(); }); $$('.tab-button').forEach((button) => button.addEventListener('click', () => switchTab(button.dataset.tab))); els.recordForm.addEventListener('submit', saveFormRecord); ['input', 'change'].forEach((eventName) => { [els.nameInput, els.dateInput, els.performanceSelect, els.spinCountInput, els.winCountInput, els.prizeSelect, els.memberSelect, els.publicConsentInput].forEach((node) => node.addEventListener(eventName, debounce(renderPreviewFromForm, 60))); }); els.clearFormBtn.addEventListener('click', resetForm); els.downloadCurrentBtn.addEventListener('click', () => downloadRecordCard(collectFormRecord({ keepId: false }))); els.recordList.addEventListener('click', handleRecordListClick); els.exportJsonBtn.addEventListener('click', exportJson); els.importJsonInput.addEventListener('change', importJson); els.deleteAllBtn.addEventListener('click', deleteAllRecords); els.closeDialogBtn.addEventListener('click', () => els.imageDialog.close()); bindSimulatorEvents(); bindCloudEvents(); window.addEventListener('resize', debounce(() => { renderPreviewFromForm(); renderPublicStats(); }, 180)); }
async function init() { appState.lang = detectLanguage(); loadRecords(); loadSimulatorState(); populatePerformanceOptions(); await loadMembers(); populateMemberOptions(); bindEvents(); applyLanguage(); updateCost(); renderRecords(); renderPublicStats(); renderSimulator(); renderPreviewFromForm(); }

document.addEventListener('DOMContentLoaded', init);
