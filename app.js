'use strict';

const GARAPON_CONFIG = {
  storageKey: 'gomensensei.garapon.records.v1',
  languageKey: 'gomensensei.garapon.language.v1',
  yenPerSpin: 500,
  canvas: { width: 720, height: 960 },
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

const I18N = {
  ja: {
    appTitle: 'ガラポンチャレンジ記録',
    appSubtitle: '500円ごとの挑戦を、きれいに残す。',
    eyebrow: 'AKB48 Theater Fan Tool',
    heroTitle: 'ガラポンの記録を、あとから見返せる形に。',
    heroLead: '姓名・公演・回数・当選内容を保存し、資料カードとして画像化できます。すべて任意入力、保存はまず端末内だけです。',
    tabInput: '入力', tabRecords: '保存記録', tabPublic: '公開データ',
    formEyebrow: 'Challenge Log', formTitle: '記録を入力', clearForm: 'クリア',
    nameLabel: '姓名', namePlaceholder: 'ゴメン先生', dateLabel: '日期', performanceLabel: '公演',
    spinCountLabel: '転珠次數', costTotalLabel: '花費總額', costHint: '1回 500円で自動計算',
    winCountLabel: '中獎數', prizeLabel: '中獎項目', memberLabel: '2ショット撮影メンバー',
    publicConsentTitle: 'この記録を将来の公開統計に使ってもよい',
    publicConsentText: '現在は端末内だけに保存されます。将来ログイン／サーバー保存を実装するための予約項目です。',
    saveRecord: '保存する', updateRecord: '更新する', downloadCurrent: '資料カードを作成',
    previewEyebrow: 'Live Preview', previewTitle: '資料カード',
    safariInlineNote: 'iPhone / Safari では画像プレビューが開きます。長押しして保存してください。',
    recordsEyebrow: 'Local Storage', recordsTitle: '保存された記録', exportJson: 'JSONを書き出し', importJson: 'JSONを読み込み', deleteAll: '全削除',
    publicEyebrow: 'Public-ready Analytics', publicTitle: '公開許可データの集計', serverNote: '現在はローカル保存された「公開可」記録のみ集計します。',
    pieTitle: '中獎項目比率', barTitle: '公演別・転珠次數', radarTitle: '全体バランス',
    memberRankingTitle: '2ショット撮影メンバー', performanceRankingTitle: '公演別サマリー',
    imageDialogTitle: '画像プレビュー', iosSafariMessage: 'iPhone / Safari では画像プレビューが開きます。長押しして保存してください。',
    selectPlaceholder: '選択しない', memberPlaceholder: '選択しない', noRecords: 'まだ記録がありません。', noPublicRecords: '公開可の記録がまだありません。',
    edit: '編集', duplicate: '複製', download: '画像', delete: '削除', confirmDelete: 'この記録を削除しますか？', confirmDeleteAll: 'すべてのローカル記録を削除しますか？',
    saved: '保存しました。', updated: '更新しました。', imported: '読み込みました。', importFailed: 'JSONを読み込めませんでした。',
    publicBadge: '公開可', privateBadge: '非公開', spinsUnit: '回', winsUnit: '件', people: '人數', spins: '転珠次數', cost: '花費總額', wins: '中獎數', prizes: '中獎項目', members: '2ショット', records: '記録',
    cardTitle: 'ガラポンチャレンジ記録', cardFooter: '非公式ファンツール by ゴメン先生', anonymous: '名前未入力', noPerformance: '公演未選択', noPrize: '中獎項目未選択', noMember: 'メンバー未選択',
    twoShot: '2ショット撮影', sendOff: 'お見送り撮影権', publicLabel: '公開可', localOnlyLabel: '端末内保存',
  },
  'zh-Hant': {
    appTitle: 'ガラポンチャレンジ記錄', appSubtitle: '每 500 円一次挑戰，靚靚咁留底。', eyebrow: 'AKB48 劇場粉絲工具',
    heroTitle: '將轉珠紀錄，變成可以回看同分享嘅資料卡。', heroLead: '可記錄姓名、公演、轉珠次數、中獎內容並輸出圖片。全部欄位任意填寫，目前只會長期保存在本機。',
    tabInput: '輸入', tabRecords: '保存紀錄', tabPublic: '公開數據', formEyebrow: 'Challenge Log', formTitle: '輸入紀錄', clearForm: '清空',
    nameLabel: '姓名', namePlaceholder: 'ゴメン先生', dateLabel: '日期', performanceLabel: '公演', spinCountLabel: '轉珠次數', costTotalLabel: '花費總額', costHint: '1 次 500 円，自動計算',
    winCountLabel: '中獎數', prizeLabel: '中獎項目', memberLabel: '2ショット撮影成員', publicConsentTitle: '我願意將此紀錄用於將來公開統計', publicConsentText: '目前只會保存在本機。此欄位是預留給日後登入帳號／伺服器保存用。',
    saveRecord: '保存', updateRecord: '更新', downloadCurrent: '製作資料卡', previewEyebrow: 'Live Preview', previewTitle: '資料卡', safariInlineNote: 'iPhone / Safari では画像プレビューが開きます。長押しして保存してください。',
    recordsEyebrow: 'Local Storage', recordsTitle: '已保存紀錄', exportJson: '匯出 JSON', importJson: '匯入 JSON', deleteAll: '全部刪除', publicEyebrow: 'Public-ready Analytics', publicTitle: '公開許可數據統計', serverNote: '目前只統計本機中標記為「願意公開」的紀錄。',
    pieTitle: '中獎項目比例', barTitle: '公演別・轉珠次數', radarTitle: '整體平衡', memberRankingTitle: '2ショット撮影成員', performanceRankingTitle: '公演別摘要',
    imageDialogTitle: '圖片預覽', iosSafariMessage: 'iPhone / Safari では画像プレビューが開きます。長押しして保存してください。', selectPlaceholder: '不選擇', memberPlaceholder: '不選擇', noRecords: '尚未有紀錄。', noPublicRecords: '尚未有可公開紀錄。',
    edit: '編輯', duplicate: '複製', download: '圖片', delete: '刪除', confirmDelete: '確定刪除此紀錄？', confirmDeleteAll: '確定刪除全部本機紀錄？', saved: '已保存。', updated: '已更新。', imported: '已匯入。', importFailed: '無法讀取 JSON。', publicBadge: '公開可', privateBadge: '非公開',
    spinsUnit: '次', winsUnit: '項', people: '人數', spins: '轉珠次數', cost: '花費總額', wins: '中獎數', prizes: '中獎項目', members: '2ショット', records: '紀錄', cardTitle: 'ガラポンチャレンジ記錄', cardFooter: '非官方粉絲工具 by ゴメン先生', anonymous: '未輸入姓名', noPerformance: '未選擇公演', noPrize: '未選擇中獎項目', noMember: '未選擇成員', twoShot: '2ショット撮影', sendOff: 'お見送り撮影権', publicLabel: '公開可', localOnlyLabel: '本機保存'
  },
  'zh-Hans': {
    appTitle: 'ガラポンチャレンジ记录', appSubtitle: '每 500 円一次挑战，好好保存。', eyebrow: 'AKB48 剧场粉丝工具', heroTitle: '把转珠记录，整理成可以回看的资料卡。', heroLead: '可记录姓名、公演、转珠次数、中奖内容并输出图片。所有栏位均可留空，目前只会长期保存在本机。',
    tabInput: '输入', tabRecords: '保存记录', tabPublic: '公开数据', formEyebrow: 'Challenge Log', formTitle: '输入记录', clearForm: '清空', nameLabel: '姓名', namePlaceholder: 'ゴメン先生', dateLabel: '日期', performanceLabel: '公演', spinCountLabel: '转珠次数', costTotalLabel: '花费总额', costHint: '1 次 500 円，自动计算', winCountLabel: '中奖数', prizeLabel: '中奖项目', memberLabel: '2ショット撮影成员', publicConsentTitle: '我愿意将此记录用于将来公开统计', publicConsentText: '目前只会保存在本机。此栏位是预留给日后登录账号／服务器保存用。',
    saveRecord: '保存', updateRecord: '更新', downloadCurrent: '制作资料卡', previewEyebrow: 'Live Preview', previewTitle: '资料卡', safariInlineNote: 'iPhone / Safari では画像プレビューが開きます。長押しして保存してください。', recordsEyebrow: 'Local Storage', recordsTitle: '已保存记录', exportJson: '导出 JSON', importJson: '导入 JSON', deleteAll: '全部删除', publicEyebrow: 'Public-ready Analytics', publicTitle: '公开许可数据统计', serverNote: '目前只统计本机中标记为“愿意公开”的记录。', pieTitle: '中奖项目比例', barTitle: '公演别・转珠次数', radarTitle: '整体平衡', memberRankingTitle: '2ショット撮影成员', performanceRankingTitle: '公演别摘要', imageDialogTitle: '图片预览', iosSafariMessage: 'iPhone / Safari では画像プレビューが開きます。長押しして保存してください。', selectPlaceholder: '不选择', memberPlaceholder: '不选择', noRecords: '尚未有记录。', noPublicRecords: '尚未有可公开记录。', edit: '编辑', duplicate: '复制', download: '图片', delete: '删除', confirmDelete: '确定删除此记录？', confirmDeleteAll: '确定删除全部本机记录？', saved: '已保存。', updated: '已更新。', imported: '已导入。', importFailed: '无法读取 JSON。', publicBadge: '公开可', privateBadge: '非公开', spinsUnit: '次', winsUnit: '项', people: '人数', spins: '转珠次数', cost: '花费总额', wins: '中奖数', prizes: '中奖项目', members: '2ショット', records: '记录', cardTitle: 'ガラポンチャレンジ记录', cardFooter: '非官方粉丝工具 by ゴメン先生', anonymous: '未输入姓名', noPerformance: '未选择公演', noPrize: '未选择中奖项目', noMember: '未选择成员', twoShot: '2ショット撮影', sendOff: 'お見送り撮影権', publicLabel: '公开可', localOnlyLabel: '本机保存'
  },
  en: {
    appTitle: 'Garapon Challenge Log', appSubtitle: 'Save every ¥500 spin beautifully.', eyebrow: 'AKB48 Theater Fan Tool', heroTitle: 'Turn your Garapon attempts into a clean record card.', heroLead: 'Save name, date, performance, spin count and prizes, then export a clean image card. Every field is optional, and records are stored locally first.', tabInput: 'Input', tabRecords: 'Saved records', tabPublic: 'Public data', formEyebrow: 'Challenge Log', formTitle: 'Enter record', clearForm: 'Clear', nameLabel: 'Name', namePlaceholder: 'Gomensensei', dateLabel: 'Date', performanceLabel: 'Performance', spinCountLabel: 'Spin count', costTotalLabel: 'Total cost', costHint: 'Automatically calculated at ¥500 per spin', winCountLabel: 'Wins', prizeLabel: 'Prize item', memberLabel: '2-shot member', publicConsentTitle: 'Allow this record to be used in future public statistics', publicConsentText: 'For now this only saves on your device. This is reserved for future account login and server save.', saveRecord: 'Save', updateRecord: 'Update', downloadCurrent: 'Create card', previewEyebrow: 'Live Preview', previewTitle: 'Record card', safariInlineNote: 'iPhone / Safari では画像プレビューが開きます。長押しして保存してください。', recordsEyebrow: 'Local Storage', recordsTitle: 'Saved records', exportJson: 'Export JSON', importJson: 'Import JSON', deleteAll: 'Delete all', publicEyebrow: 'Public-ready Analytics', publicTitle: 'Public-consent statistics', serverNote: 'Currently calculated only from local records marked as public-ready.', pieTitle: 'Prize item ratio', barTitle: 'Spins by performance', radarTitle: 'Overall balance', memberRankingTitle: '2-shot members', performanceRankingTitle: 'Performance summary', imageDialogTitle: 'Image preview', iosSafariMessage: 'iPhone / Safari では画像プレビューが開きます。長押しして保存してください。', selectPlaceholder: 'No selection', memberPlaceholder: 'No selection', noRecords: 'No records yet.', noPublicRecords: 'No public-ready records yet.', edit: 'Edit', duplicate: 'Duplicate', download: 'Image', delete: 'Delete', confirmDelete: 'Delete this record?', confirmDeleteAll: 'Delete all local records?', saved: 'Saved.', updated: 'Updated.', imported: 'Imported.', importFailed: 'Could not import JSON.', publicBadge: 'Public-ready', privateBadge: 'Private', spinsUnit: 'spins', winsUnit: 'wins', people: 'People', spins: 'Spins', cost: 'Total cost', wins: 'Wins', prizes: 'Prize items', members: '2-shot', records: 'Records', cardTitle: 'Garapon Challenge Log', cardFooter: 'Unofficial fan tool by Gomensensei', anonymous: 'No name', noPerformance: 'No performance', noPrize: 'No prize selected', noMember: 'No member selected', twoShot: '2-shot photo', sendOff: 'Send-off photo right', publicLabel: 'Public-ready', localOnlyLabel: 'Local save'
  },
  ko: {
    appTitle: '가라폰 챌린지 기록', appSubtitle: '500엔마다의 도전을 예쁘게 저장.', eyebrow: 'AKB48 극장 팬 도구', heroTitle: '가라폰 기록을 나중에 다시 볼 수 있는 카드로.', heroLead: '이름, 날짜, 공연, 회전 수, 당첨 내용을 저장하고 이미지 카드로 만들 수 있습니다. 모든 항목은 선택 입력이며, 우선 기기 안에만 저장됩니다.', tabInput: '입력', tabRecords: '저장 기록', tabPublic: '공개 데이터', formEyebrow: 'Challenge Log', formTitle: '기록 입력', clearForm: '초기화', nameLabel: '이름', namePlaceholder: 'ゴメン先生', dateLabel: '날짜', performanceLabel: '공연', spinCountLabel: '회전 수', costTotalLabel: '총 비용', costHint: '1회 500엔으로 자동 계산', winCountLabel: '당첨 수', prizeLabel: '당첨 항목', memberLabel: '2ショット撮影 멤버', publicConsentTitle: '이 기록을 향후 공개 통계에 사용해도 됩니다', publicConsentText: '현재는 기기 안에만 저장됩니다. 향후 로그인/서버 저장을 위한 예약 항목입니다.', saveRecord: '저장', updateRecord: '업데이트', downloadCurrent: '카드 만들기', previewEyebrow: 'Live Preview', previewTitle: '기록 카드', safariInlineNote: 'iPhone / Safari では画像プレビューが開きます。長押しして保存してください。', recordsEyebrow: 'Local Storage', recordsTitle: '저장된 기록', exportJson: 'JSON 내보내기', importJson: 'JSON 가져오기', deleteAll: '전체 삭제', publicEyebrow: 'Public-ready Analytics', publicTitle: '공개 허용 데이터 집계', serverNote: '현재는 로컬 저장된 “공개 가능” 기록만 집계합니다.', pieTitle: '당첨 항목 비율', barTitle: '공연별 회전 수', radarTitle: '전체 밸런스', memberRankingTitle: '2ショット撮影 멤버', performanceRankingTitle: '공연별 요약', imageDialogTitle: '이미지 미리보기', iosSafariMessage: 'iPhone / Safari では画像プレビューが開きます。長押しして保存してください。', selectPlaceholder: '선택 안 함', memberPlaceholder: '선택 안 함', noRecords: '아직 기록이 없습니다.', noPublicRecords: '공개 가능 기록이 아직 없습니다.', edit: '수정', duplicate: '복제', download: '이미지', delete: '삭제', confirmDelete: '이 기록을 삭제할까요?', confirmDeleteAll: '모든 로컬 기록을 삭제할까요?', saved: '저장했습니다.', updated: '업데이트했습니다.', imported: '가져왔습니다.', importFailed: 'JSON을 읽을 수 없습니다.', publicBadge: '공개 가능', privateBadge: '비공개', spinsUnit: '회', winsUnit: '건', people: '인원', spins: '회전 수', cost: '총 비용', wins: '당첨 수', prizes: '당첨 항목', members: '2-shot', records: '기록', cardTitle: '가라폰 챌린지 기록', cardFooter: '비공식 팬 도구 by ゴメン先生', anonymous: '이름 없음', noPerformance: '공연 미선택', noPrize: '당첨 항목 미선택', noMember: '멤버 미선택', twoShot: '2ショット撮影', sendOff: 'お見送り撮影権', publicLabel: '공개 가능', localOnlyLabel: '기기 저장'
  },
  th: {
    appTitle: 'บันทึก Garapon Challenge', appSubtitle: 'เก็บทุกการหมุน 500 เยนให้สวยงาม', eyebrow: 'AKB48 Theater Fan Tool', heroTitle: 'เปลี่ยนบันทึกกาชาเป็นการ์ดภาพที่ดูย้อนหลังได้', heroLead: 'บันทึกชื่อ วันที่ การแสดง จำนวนครั้ง และของรางวัล แล้วส่งออกเป็นภาพได้ ทุกช่องไม่บังคับ และบันทึกในเครื่องก่อน', tabInput: 'กรอกข้อมูล', tabRecords: 'บันทึกที่เก็บไว้', tabPublic: 'ข้อมูลสาธารณะ', formEyebrow: 'Challenge Log', formTitle: 'กรอกบันทึก', clearForm: 'ล้าง', nameLabel: 'ชื่อ', namePlaceholder: 'ゴメン先生', dateLabel: 'วันที่', performanceLabel: 'การแสดง', spinCountLabel: 'จำนวนหมุน', costTotalLabel: 'ค่าใช้จ่ายรวม', costHint: 'คำนวณอัตโนมัติ 500 เยนต่อครั้ง', winCountLabel: 'จำนวนรางวัล', prizeLabel: 'รายการรางวัล', memberLabel: 'สมาชิก 2ショット撮影', publicConsentTitle: 'อนุญาตให้ใช้บันทึกนี้ในสถิติสาธารณะในอนาคต', publicConsentText: 'ตอนนี้บันทึกเฉพาะในเครื่อง ช่องนี้เตรียมไว้สำหรับระบบบัญชีและบันทึกบนเซิร์ฟเวอร์ในอนาคต', saveRecord: 'บันทึก', updateRecord: 'อัปเดต', downloadCurrent: 'สร้างการ์ด', previewEyebrow: 'Live Preview', previewTitle: 'การ์ดบันทึก', safariInlineNote: 'iPhone / Safari では画像プレビューが開きます。長押しして保存してください。', recordsEyebrow: 'Local Storage', recordsTitle: 'บันทึกที่เก็บไว้', exportJson: 'ส่งออก JSON', importJson: 'นำเข้า JSON', deleteAll: 'ลบทั้งหมด', publicEyebrow: 'Public-ready Analytics', publicTitle: 'สถิติข้อมูลที่อนุญาตเผยแพร่', serverNote: 'ตอนนี้รวมเฉพาะบันทึกในเครื่องที่เลือกเผยแพร่ได้', pieTitle: 'สัดส่วนรางวัล', barTitle: 'จำนวนหมุนตามการแสดง', radarTitle: 'ภาพรวม', memberRankingTitle: 'สมาชิก 2ショット撮影', performanceRankingTitle: 'สรุปตามการแสดง', imageDialogTitle: 'ตัวอย่างภาพ', iosSafariMessage: 'iPhone / Safari では画像プレビューが開きます。長押しして保存してください。', selectPlaceholder: 'ไม่เลือก', memberPlaceholder: 'ไม่เลือก', noRecords: 'ยังไม่มีบันทึก', noPublicRecords: 'ยังไม่มีบันทึกที่เผยแพร่ได้', edit: 'แก้ไข', duplicate: 'ทำสำเนา', download: 'ภาพ', delete: 'ลบ', confirmDelete: 'ลบบันทึกนี้?', confirmDeleteAll: 'ลบบันทึกทั้งหมดในเครื่อง?', saved: 'บันทึกแล้ว', updated: 'อัปเดตแล้ว', imported: 'นำเข้าแล้ว', importFailed: 'อ่าน JSON ไม่ได้', publicBadge: 'เผยแพร่ได้', privateBadge: 'ไม่เผยแพร่', spinsUnit: 'ครั้ง', winsUnit: 'รางวัล', people: 'จำนวนคน', spins: 'จำนวนหมุน', cost: 'ค่าใช้จ่ายรวม', wins: 'จำนวนรางวัล', prizes: 'รางวัล', members: '2-shot', records: 'บันทึก', cardTitle: 'Garapon Challenge Log', cardFooter: 'เครื่องมือแฟนไม่เป็นทางการ by ゴメン先生', anonymous: 'ไม่ระบุชื่อ', noPerformance: 'ไม่เลือกการแสดง', noPrize: 'ไม่เลือกรางวัล', noMember: 'ไม่เลือกสมาชิก', twoShot: '2ショット撮影', sendOff: 'お見送り撮影権', publicLabel: 'เผยแพร่ได้', localOnlyLabel: 'บันทึกในเครื่อง'
  },
  id: {
    appTitle: 'Catatan Garapon Challenge', appSubtitle: 'Simpan setiap putaran ¥500 dengan rapi.', eyebrow: 'AKB48 Theater Fan Tool', heroTitle: 'Ubah catatan Garapon menjadi kartu yang mudah dilihat lagi.', heroLead: 'Simpan nama, tanggal, pertunjukan, jumlah putaran, dan hadiah, lalu ekspor menjadi gambar. Semua kolom opsional, dan data disimpan lokal terlebih dahulu.', tabInput: 'Input', tabRecords: 'Catatan tersimpan', tabPublic: 'Data publik', formEyebrow: 'Challenge Log', formTitle: 'Masukkan catatan', clearForm: 'Bersihkan', nameLabel: 'Nama', namePlaceholder: 'ゴメン先生', dateLabel: 'Tanggal', performanceLabel: 'Pertunjukan', spinCountLabel: 'Jumlah putaran', costTotalLabel: 'Total biaya', costHint: 'Otomatis dihitung ¥500 per putaran', winCountLabel: 'Jumlah menang', prizeLabel: 'Hadiah', memberLabel: 'Member 2ショット撮影', publicConsentTitle: 'Izinkan catatan ini dipakai untuk statistik publik di masa depan', publicConsentText: 'Saat ini hanya disimpan di perangkat. Kolom ini disiapkan untuk login akun dan penyimpanan server nanti.', saveRecord: 'Simpan', updateRecord: 'Perbarui', downloadCurrent: 'Buat kartu', previewEyebrow: 'Live Preview', previewTitle: 'Kartu catatan', safariInlineNote: 'iPhone / Safari では画像プレビューが開きます。長押しして保存してください。', recordsEyebrow: 'Local Storage', recordsTitle: 'Catatan tersimpan', exportJson: 'Ekspor JSON', importJson: 'Impor JSON', deleteAll: 'Hapus semua', publicEyebrow: 'Public-ready Analytics', publicTitle: 'Statistik data yang boleh publik', serverNote: 'Saat ini hanya menghitung catatan lokal yang ditandai boleh publik.', pieTitle: 'Rasio hadiah', barTitle: 'Putaran per pertunjukan', radarTitle: 'Keseimbangan keseluruhan', memberRankingTitle: 'Member 2ショット撮影', performanceRankingTitle: 'Ringkasan pertunjukan', imageDialogTitle: 'Pratinjau gambar', iosSafariMessage: 'iPhone / Safari では画像プレビューが開きます。長押しして保存してください。', selectPlaceholder: 'Tidak memilih', memberPlaceholder: 'Tidak memilih', noRecords: 'Belum ada catatan.', noPublicRecords: 'Belum ada catatan publik.', edit: 'Edit', duplicate: 'Duplikat', download: 'Gambar', delete: 'Hapus', confirmDelete: 'Hapus catatan ini?', confirmDeleteAll: 'Hapus semua catatan lokal?', saved: 'Tersimpan.', updated: 'Diperbarui.', imported: 'Diimpor.', importFailed: 'Tidak dapat membaca JSON.', publicBadge: 'Boleh publik', privateBadge: 'Privat', spinsUnit: 'kali', winsUnit: 'menang', people: 'Orang', spins: 'Putaran', cost: 'Total biaya', wins: 'Menang', prizes: 'Hadiah', members: '2-shot', records: 'Catatan', cardTitle: 'Garapon Challenge Log', cardFooter: 'Alat fan tidak resmi by Gomensensei', anonymous: 'Tanpa nama', noPerformance: 'Tanpa pertunjukan', noPrize: 'Tidak memilih hadiah', noMember: 'Tidak memilih member', twoShot: '2-shot photo', sendOff: 'Hak foto send-off', publicLabel: 'Boleh publik', localOnlyLabel: 'Simpan lokal'
  }
};

let appState = {
  lang: 'ja',
  members: [],
  records: [],
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const els = {
  languageSelect: $('#languageSelect'),
  recordForm: $('#recordForm'),
  editingId: $('#editingId'),
  nameInput: $('#nameInput'),
  dateInput: $('#dateInput'),
  performanceSelect: $('#performanceSelect'),
  spinCountInput: $('#spinCountInput'),
  costOutput: $('#costOutput'),
  winCountInput: $('#winCountInput'),
  prizeSelect: $('#prizeSelect'),
  memberSelect: $('#memberSelect'),
  publicConsentInput: $('#publicConsentInput'),
  clearFormBtn: $('#clearFormBtn'),
  downloadCurrentBtn: $('#downloadCurrentBtn'),
  previewCanvas: $('#previewCanvas'),
  recordList: $('#recordList'),
  exportJsonBtn: $('#exportJsonBtn'),
  importJsonInput: $('#importJsonInput'),
  deleteAllBtn: $('#deleteAllBtn'),
  kpiGrid: $('#kpiGrid'),
  pieCanvas: $('#pieCanvas'),
  barCanvas: $('#barCanvas'),
  radarCanvas: $('#radarCanvas'),
  memberRanking: $('#memberRanking'),
  performanceRanking: $('#performanceRanking'),
  imageDialog: $('#imageDialog'),
  dialogImage: $('#dialogImage'),
  closeDialogBtn: $('#closeDialogBtn'),
};

// =====================================================
// Future backend adapter reservation
// =====================================================
// 現時全部資料只寫入 localStorage。
// 日後如要「開 AC + server save」，可把以下 adapter 改成真正 API：
// - saveRecord(record, userToken)
// - deleteRecord(recordId, userToken)
// - syncPublicRecord(record, userToken)
// 公開統計只應上傳 isPublic === true 的紀錄，而且上傳前要重新確認私隱條款。
const backendAdapter = {
  async saveRecord(record) {
    return { ok: true, mode: 'local-only', record };
  },
  async deleteRecord(recordId) {
    return { ok: true, mode: 'local-only', recordId };
  },
  async syncPublicRecord(record) {
    if (!record.isPublic) return { ok: true, skipped: true };
    return { ok: true, mode: 'reserved-for-server', record };
  },
};

function t(key, vars = {}) {
  const dict = I18N[appState.lang] || I18N.ja;
  let value = dict[key] || I18N.ja[key] || key;
  Object.entries(vars).forEach(([k, v]) => {
    value = value.replaceAll(`{${k}}`, String(v));
  });
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
  populatePrizeOptions();
  populateMemberOptions();
  renderPreviewFromForm();
  renderRecords();
  renderPublicStats();
  updateSubmitButtonLabel();
}

function normalizeName(value) {
  return String(value || '').replace(/\s+/g, '').trim();
}

function parseOptionalInt(value) {
  if (value === '' || value === null || value === undefined) return null;
  const num = Number(value);
  if (!Number.isFinite(num)) return null;
  return Math.max(0, Math.floor(num));
}

function formatYen(value) {
  const num = Number(value) || 0;
  return `¥${num.toLocaleString('ja-JP')}`;
}

function formatDate(value) {
  if (!value) return '';
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(appState.lang === 'ja' ? 'ja-JP' : undefined, { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
}

function getPerformance(id) {
  return PERFORMANCES.find((item) => item.id === id) || null;
}

function getPrize(id) {
  return PRIZES.find((item) => item.id === id) || PRIZES[0];
}

function getPrizeLabel(id, preferJapanese = false) {
  if (!id) return '';
  if (preferJapanese) return getPrize(id).labelJa;
  if (id === 'twoShot') return t('twoShot');
  if (id === 'sendOff') return t('sendOff');
  return getPrize(id).labelJa || id;
}

function getMember(id) {
  return appState.members.find((member) => String(member.id) === String(id)) || null;
}

function getMemberDisplay(member) {
  if (!member) return '';
  if (appState.lang === 'en' && member.name_en) return `${member.name_en} / ${member.name_ja}`;
  if (appState.lang === 'ko' && member.name_ko) return `${member.name_ko} / ${member.name_ja}`;
  return member.nickname ? `${member.name_ja}（${member.nickname}）` : member.name_ja;
}

function generateId() {
  if (crypto?.randomUUID) return crypto.randomUUID();
  return `rec_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function loadRecords() {
  try {
    const parsed = JSON.parse(localStorage.getItem(GARAPON_CONFIG.storageKey) || '[]');
    appState.records = Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    appState.records = [];
  }
}

function persistRecords() {
  localStorage.setItem(GARAPON_CONFIG.storageKey, JSON.stringify(appState.records));
}

function populatePerformanceOptions() {
  els.performanceSelect.innerHTML = '';
  els.performanceSelect.append(new Option(t('selectPlaceholder'), ''));
  PERFORMANCES.forEach((item) => els.performanceSelect.append(new Option(item.label, item.id)));
}

function populatePrizeOptions() {
  const current = els.prizeSelect.value;
  els.prizeSelect.innerHTML = '';
  els.prizeSelect.append(new Option(t('selectPlaceholder'), ''));
  PRIZES.filter((item) => item.id).forEach((item) => {
    els.prizeSelect.append(new Option(getPrizeLabel(item.id), item.id));
  });
  els.prizeSelect.value = current;
}

function populateMemberOptions() {
  const current = els.memberSelect.value;
  els.memberSelect.innerHTML = '';
  els.memberSelect.append(new Option(t('memberPlaceholder'), ''));
  appState.members.forEach((member) => {
    els.memberSelect.append(new Option(getMemberDisplay(member), String(member.id)));
  });
  els.memberSelect.value = current;
}

function updateCost() {
  const spins = parseOptionalInt(els.spinCountInput.value) || 0;
  els.costOutput.value = formatYen(spins * GARAPON_CONFIG.yenPerSpin);
  els.costOutput.textContent = formatYen(spins * GARAPON_CONFIG.yenPerSpin);
}

function collectFormRecord({ keepId = true } = {}) {
  const spinCount = parseOptionalInt(els.spinCountInput.value);
  const winCount = parseOptionalInt(els.winCountInput.value);
  const now = new Date().toISOString();
  const editingId = els.editingId.value;
  const oldRecord = editingId ? appState.records.find((record) => record.id === editingId) : null;
  return {
    id: keepId && editingId ? editingId : generateId(),
    name: els.nameInput.value.trim(),
    date: els.dateInput.value,
    performanceId: els.performanceSelect.value,
    spinCount,
    costTotal: spinCount === null ? null : spinCount * GARAPON_CONFIG.yenPerSpin,
    winCount,
    prizeId: els.prizeSelect.value,
    twoShotMemberId: els.memberSelect.value,
    isPublic: els.publicConsentInput.checked,
    createdAt: oldRecord?.createdAt || now,
    updatedAt: now,
    schemaVersion: 1,
  };
}

function fillForm(record) {
  els.editingId.value = record.id || '';
  els.nameInput.value = record.name || '';
  els.dateInput.value = record.date || '';
  els.performanceSelect.value = record.performanceId || '';
  els.spinCountInput.value = record.spinCount ?? '';
  els.winCountInput.value = record.winCount ?? '';
  els.prizeSelect.value = record.prizeId || '';
  els.memberSelect.value = record.twoShotMemberId || '';
  els.publicConsentInput.checked = Boolean(record.isPublic);
  updateCost();
  renderPreview(record);
  updateSubmitButtonLabel();
}

function resetForm() {
  els.recordForm.reset();
  els.editingId.value = '';
  els.performanceSelect.value = '';
  els.prizeSelect.value = '';
  els.memberSelect.value = '';
  updateCost();
  renderPreviewFromForm();
  updateSubmitButtonLabel();
}

function updateSubmitButtonLabel() {
  const submitButton = els.recordForm.querySelector('button[type="submit"]');
  submitButton.textContent = els.editingId.value ? t('updateRecord') : t('saveRecord');
}

async function saveFormRecord(event) {
  event.preventDefault();
  const record = collectFormRecord({ keepId: true });
  const existingIndex = appState.records.findIndex((item) => item.id === record.id);
  if (existingIndex >= 0) {
    appState.records[existingIndex] = record;
    toast(t('updated'));
  } else {
    appState.records.unshift(record);
    toast(t('saved'));
  }
  persistRecords();
  await backendAdapter.saveRecord(record);
  await backendAdapter.syncPublicRecord(record);
  renderRecords();
  renderPublicStats();
  renderPreview(record);
  updateSubmitButtonLabel();
}

function toast(message) {
  const node = document.createElement('div');
  node.textContent = message;
  node.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:99999;background:rgba(23,32,51,.92);color:#fff;border-radius:999px;padding:12px 18px;font-weight:900;box-shadow:0 20px 60px rgba(15,23,42,.24);';
  document.body.appendChild(node);
  setTimeout(() => node.remove(), 1800);
}

function renderPreviewFromForm() {
  updateCost();
  renderPreview(collectFormRecord({ keepId: false }));
}

function roundRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function drawTextLine(ctx, text, x, y, options = {}) {
  const { font = '32px "Noto Sans JP", sans-serif', color = '#172033', align = 'left', maxWidth = null } = options;
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = 'top';
  if (maxWidth) ctx.fillText(text, x, y, maxWidth);
  else ctx.fillText(text, x, y);
}

function getMemberAccent(member) {
  const fallback = ['#ff4f9a', '#ff9d4d'];
  if (!member?.colorData?.length) return fallback;
  const colors = member.colorData.map((item) => item.color).filter(Boolean);
  if (!colors.length) return fallback;
  return colors.length === 1 ? [colors[0], colors[0]] : [colors[0], colors[1]];
}

function renderPreview(record) {
  const canvas = els.previewCanvas;
  renderCardCanvas(canvas, record, 1);
}

function renderCardCanvas(canvas, record, scale = 1) {
  const width = GARAPON_CONFIG.canvas.width;
  const height = GARAPON_CONFIG.canvas.height;
  const ctx = initHiDPICanvas(canvas, width, height, scale);
  drawRecordCard(ctx, record, width, height);
}

function drawRecordCard(ctx, record, width, height) {
  const member = getMember(record.twoShotMemberId);
  const [accentA, accentB] = getMemberAccent(member);
  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, accentA);
  bg.addColorStop(0.42, '#ff8cc9');
  bg.addColorStop(1, accentB);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.globalAlpha = 0.16;
  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < 9; i += 1) {
    ctx.beginPath();
    ctx.arc(80 + i * 92, 96 + (i % 3) * 130, 46 + (i % 4) * 10, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  roundRect(ctx, 44, 52, width - 88, height - 104, 42);
  ctx.fillStyle = 'rgba(255,255,255,0.88)';
  ctx.fill();

  ctx.save();
  ctx.translate(width - 126, 110);
  ctx.rotate(0.18);
  ctx.globalAlpha = 0.92;
  ctx.fillStyle = '#172033';
  ctx.font = '900 28px "Noto Sans JP", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('¥500', 0, 0);
  ctx.font = '900 16px "Noto Sans JP", sans-serif';
  ctx.fillText('/ SPIN', 0, 24);
  ctx.restore();

  drawTextLine(ctx, t('cardTitle'), 80, 92, { font: '900 44px "Noto Sans JP", sans-serif', color: '#172033', maxWidth: 500 });
  drawTextLine(ctx, 'GOMENSENSEI FAN TOOL', 82, 150, { font: '900 14px "Noto Sans JP", sans-serif', color: '#ec4899' });

  const performance = getPerformance(record.performanceId)?.label || '';
  const memberName = member ? member.name_ja : '';
  const prize = getPrizeLabel(record.prizeId, true);
  const lines = [
    record.name || t('anonymous'),
    formatDate(record.date),
    performance,
    record.spinCount !== null && record.spinCount !== undefined ? `${record.spinCount}${t('spinsUnit')} / ${formatYen(record.costTotal || 0)}` : '',
    record.winCount !== null && record.winCount !== undefined ? `🎉 ${record.winCount}${t('winsUnit')}${prize ? ` / ${prize}` : ''}` : prize,
    memberName,
  ].filter(Boolean);

  const textArray = lines.map((line, index) => ({
    text: line,
    font: index === 0 ? '900 46px "Noto Sans JP", sans-serif' : '800 32px "Noto Sans JP", sans-serif',
    color: index === 0 ? '#111827' : '#344054',
    h: index === 0 ? 56 : 42,
    gap: index === 0 ? 20 : 13,
  }));
  drawInfoGraphicText(ctx, width / 2, height / 2 + 8, textArray);

  const badgeText = record.isPublic ? t('publicLabel') : t('localOnlyLabel');
  roundRect(ctx, 80, height - 178, 178, 42, 21);
  ctx.fillStyle = record.isPublic ? 'rgba(34,197,94,0.16)' : 'rgba(102,112,133,0.14)';
  ctx.fill();
  drawTextLine(ctx, badgeText, 169, height - 168, { font: '900 16px "Noto Sans JP", sans-serif', color: record.isPublic ? '#15803d' : '#475467', align: 'center' });

  drawTextLine(ctx, t('cardFooter'), width / 2, height - 114, { font: '800 18px "Noto Sans JP", sans-serif', color: '#667085', align: 'center' });
  drawTextLine(ctx, 'AKB48 非公式 / Unofficial', width / 2, height - 86, { font: '700 13px "Noto Sans JP", sans-serif', color: '#98a2b3', align: 'center' });
}

function createCardDataUrl(record) {
  const offscreen = document.createElement('canvas');
  renderCardCanvas(offscreen, record, 3);
  return offscreen.toDataURL('image/png');
}

function isSafariOrIOS() {
  const ua = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isSafari = /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(ua);
  return isIOS || isSafari;
}

function downloadRecordCard(record) {
  const dataUrl = createCardDataUrl(record);
  const filenameParts = ['garapon', record.date || new Date().toISOString().slice(0, 10), normalizeName(record.name) || 'record'];
  if (isSafariOrIOS()) {
    showImageDialog(dataUrl);
  } else {
    triggerDownload(dataUrl, `${filenameParts.join('_')}.png`);
  }
}

function showImageDialog(dataUrl) {
  els.dialogImage.src = dataUrl;
  if (typeof els.imageDialog.showModal === 'function') {
    els.imageDialog.showModal();
  } else {
    window.open(dataUrl, '_blank', 'noopener');
    alert(t('iosSafariMessage'));
  }
}

function renderRecords() {
  if (!appState.records.length) {
    els.recordList.innerHTML = `<div class="record-empty">${t('noRecords')}</div>`;
    return;
  }
  els.recordList.innerHTML = appState.records.map((record) => {
    const performance = getPerformance(record.performanceId)?.label || t('noPerformance');
    const prize = getPrizeLabel(record.prizeId) || t('noPrize');
    const member = getMember(record.twoShotMemberId);
    const title = [record.name || t('anonymous'), formatDate(record.date), performance].filter(Boolean).join(' ・ ');
    const meta = [
      record.spinCount !== null && record.spinCount !== undefined ? `${record.spinCount}${t('spinsUnit')} / ${formatYen(record.costTotal || 0)}` : '',
      record.winCount !== null && record.winCount !== undefined ? `${record.winCount}${t('winsUnit')}` : '',
      prize,
      member ? member.name_ja : '',
      record.isPublic ? t('publicBadge') : t('privateBadge'),
    ].filter(Boolean).map((item) => `<span>${escapeHtml(item)}</span>`).join('');
    return `
      <article class="record-item" data-id="${escapeHtml(record.id)}">
        <div class="record-main">
          <h3 class="record-title">${escapeHtml(title)}</h3>
          <div class="record-meta">${meta}</div>
        </div>
        <div class="record-buttons">
          <button type="button" data-action="edit">${t('edit')}</button>
          <button type="button" data-action="duplicate">${t('duplicate')}</button>
          <button type="button" data-action="download">${t('download')}</button>
          <button type="button" class="delete" data-action="delete">${t('delete')}</button>
        </div>
      </article>`;
  }).join('');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function handleRecordListClick(event) {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const item = button.closest('.record-item');
  const record = appState.records.find((entry) => entry.id === item?.dataset.id);
  if (!record) return;
  const action = button.dataset.action;
  if (action === 'edit') {
    fillForm(record);
    switchTab('input');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (action === 'duplicate') {
    const cloned = { ...record, id: generateId(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    appState.records.unshift(cloned);
    persistRecords();
    renderRecords();
    renderPublicStats();
    toast(t('saved'));
  }
  if (action === 'download') downloadRecordCard(record);
  if (action === 'delete') deleteRecord(record.id);
}

async function deleteRecord(id) {
  if (!confirm(t('confirmDelete'))) return;
  appState.records = appState.records.filter((record) => record.id !== id);
  persistRecords();
  await backendAdapter.deleteRecord(id);
  renderRecords();
  renderPublicStats();
  if (els.editingId.value === id) resetForm();
}

function deleteAllRecords() {
  if (!appState.records.length) return;
  if (!confirm(t('confirmDeleteAll'))) return;
  appState.records = [];
  persistRecords();
  resetForm();
  renderRecords();
  renderPublicStats();
}

function exportJson() {
  const payload = {
    app: 'gomensensei-garapon-challenge-log',
    exportedAt: new Date().toISOString(),
    records: appState.records,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `garapon-records-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importJson(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result || '{}'));
      const incoming = Array.isArray(parsed) ? parsed : parsed.records;
      if (!Array.isArray(incoming)) throw new Error('Invalid JSON');
      const normalized = incoming.map((record) => ({ ...record, id: record.id || generateId(), schemaVersion: 1 }));
      const existingIds = new Set(appState.records.map((record) => record.id));
      normalized.forEach((record) => {
        if (existingIds.has(record.id)) record.id = generateId();
      });
      appState.records = [...normalized, ...appState.records];
      persistRecords();
      renderRecords();
      renderPublicStats();
      toast(t('imported'));
    } catch (error) {
      toast(t('importFailed'));
    } finally {
      event.target.value = '';
    }
  };
  reader.readAsText(file);
}

function switchTab(name) {
  $$('.tab-button').forEach((button) => button.classList.toggle('active', button.dataset.tab === name));
  $$('.tab-panel').forEach((panel) => panel.classList.toggle('active', panel.id === `tab-${name}`));
  if (name === 'public') renderPublicStats();
}

function getPublicRecords() {
  return appState.records.filter((record) => record.isPublic);
}

function summarizePublic(records) {
  const namedPeople = new Set(records.map((record) => normalizeName(record.name)).filter(Boolean));
  const spinTotal = records.reduce((sum, record) => sum + (record.spinCount || 0), 0);
  const costTotal = records.reduce((sum, record) => sum + (record.costTotal || 0), 0);
  const winTotal = records.reduce((sum, record) => sum + (record.winCount || 0), 0);
  const prizeCounts = countBy(records, (record) => record.prizeId || 'none');
  const performanceSpins = groupSum(records, (record) => record.performanceId || 'none', (record) => record.spinCount || 0);
  const performanceRecords = countBy(records, (record) => record.performanceId || 'none');
  const memberCounts = countBy(records.filter((record) => record.twoShotMemberId), (record) => record.twoShotMemberId);
  return {
    peopleCount: namedPeople.size || records.length,
    recordCount: records.length,
    spinTotal,
    costTotal,
    winTotal,
    prizeCounts,
    performanceSpins,
    performanceRecords,
    memberCounts,
  };
}

function countBy(list, keyFn) {
  return list.reduce((acc, item) => {
    const key = keyFn(item);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function groupSum(list, keyFn, valueFn) {
  return list.reduce((acc, item) => {
    const key = keyFn(item);
    acc[key] = (acc[key] || 0) + valueFn(item);
    return acc;
  }, {});
}

function renderPublicStats() {
  const publicRecords = getPublicRecords();
  if (!els.kpiGrid) return;
  if (!publicRecords.length) {
    els.kpiGrid.innerHTML = `<div class="record-empty" style="grid-column:1/-1">${t('noPublicRecords')}</div>`;
    clearChart(els.pieCanvas);
    clearChart(els.barCanvas);
    clearChart(els.radarCanvas);
    els.memberRanking.innerHTML = `<div class="ranking-empty">${t('noPublicRecords')}</div>`;
    els.performanceRanking.innerHTML = `<div class="ranking-empty">${t('noPublicRecords')}</div>`;
    return;
  }
  const summary = summarizePublic(publicRecords);
  const kpis = [
    [t('people'), summary.peopleCount.toLocaleString()],
    [t('records'), summary.recordCount.toLocaleString()],
    [t('spins'), summary.spinTotal.toLocaleString()],
    [t('cost'), formatYen(summary.costTotal)],
    [t('wins'), summary.winTotal.toLocaleString()],
    [t('members'), Object.keys(summary.memberCounts).length.toLocaleString()],
  ];
  els.kpiGrid.innerHTML = kpis.map(([label, value]) => `<div class="kpi-card"><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong></div>`).join('');

  drawPieChart(els.pieCanvas, Object.entries(summary.prizeCounts).map(([id, count]) => ({ label: id === 'none' ? t('noPrize') : getPrizeLabel(id), value: count })));
  drawBarChart(els.barCanvas, Object.entries(summary.performanceSpins).map(([id, count]) => ({ label: id === 'none' ? t('noPerformance') : getPerformance(id)?.label || id, value: count })));
  drawRadarChart(els.radarCanvas, [
    { label: t('people'), value: summary.peopleCount, max: Math.max(summary.peopleCount, 10) },
    { label: t('records'), value: summary.recordCount, max: Math.max(summary.recordCount, 10) },
    { label: t('spins'), value: summary.spinTotal, max: Math.max(summary.spinTotal, 50) },
    { label: t('cost'), value: summary.costTotal / 500, max: Math.max(summary.costTotal / 500, 50) },
    { label: t('wins'), value: summary.winTotal, max: Math.max(summary.winTotal, 10) },
    { label: t('members'), value: Object.keys(summary.memberCounts).length, max: Math.max(Object.keys(summary.memberCounts).length, 10) },
  ]);
  renderRankings(summary);
}

function clearChart(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function setupChartCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  const cssWidth = rect.width || canvas.width;
  const cssHeight = cssWidth * (canvas.height / canvas.width);
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(cssWidth * dpr);
  canvas.height = Math.round(cssHeight * dpr);
  canvas.style.height = `${cssHeight}px`;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, width: cssWidth, height: cssHeight };
}

function drawPieChart(canvas, data) {
  const { ctx, width, height } = setupChartCanvas(canvas);
  ctx.clearRect(0, 0, width, height);
  const filtered = data.filter((item) => item.value > 0);
  const total = filtered.reduce((sum, item) => sum + item.value, 0);
  const colors = ['#ff4f9a', '#38bdf8', '#ff9d4d', '#8b5cf6', '#22c55e'];
  if (!total) return;
  let start = -Math.PI / 2;
  const radius = Math.min(width, height) * 0.28;
  const cx = width * 0.36;
  const cy = height * 0.5;
  filtered.forEach((item, index) => {
    const angle = (item.value / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, start, start + angle);
    ctx.closePath();
    ctx.fillStyle = colors[index % colors.length];
    ctx.fill();
    start += angle;
  });
  ctx.font = '800 13px "Noto Sans JP", sans-serif';
  ctx.textBaseline = 'middle';
  filtered.slice(0, 5).forEach((item, index) => {
    const y = 36 + index * 34;
    ctx.fillStyle = colors[index % colors.length];
    roundRect(ctx, width * 0.66, y - 8, 16, 16, 5);
    ctx.fill();
    ctx.fillStyle = '#344054';
    ctx.fillText(`${item.label} ${item.value}`, width * 0.66 + 24, y, width * 0.3);
  });
}

function drawBarChart(canvas, data) {
  const { ctx, width, height } = setupChartCanvas(canvas);
  ctx.clearRect(0, 0, width, height);
  const filtered = data.filter((item) => item.value > 0).sort((a, b) => b.value - a.value).slice(0, 5);
  if (!filtered.length) return;
  const max = Math.max(...filtered.map((item) => item.value), 1);
  const left = 46;
  const bottom = height - 48;
  const chartHeight = height - 90;
  const barWidth = Math.max(24, (width - left - 24) / filtered.length - 16);
  ctx.strokeStyle = 'rgba(102,112,133,0.2)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i += 1) {
    const y = bottom - (chartHeight / 4) * i;
    ctx.beginPath();
    ctx.moveTo(left, y);
    ctx.lineTo(width - 16, y);
    ctx.stroke();
  }
  filtered.forEach((item, index) => {
    const x = left + index * (barWidth + 16) + 8;
    const h = Math.max(6, (item.value / max) * chartHeight);
    const y = bottom - h;
    const grad = ctx.createLinearGradient(0, y, 0, bottom);
    grad.addColorStop(0, '#ff4f9a');
    grad.addColorStop(1, '#ff9d4d');
    roundRect(ctx, x, y, barWidth, h, 10);
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.fillStyle = '#344054';
    ctx.font = '900 13px "Noto Sans JP", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(String(item.value), x + barWidth / 2, y - 18);
    ctx.font = '700 10px "Noto Sans JP", sans-serif';
    ctx.fillText(shorten(item.label, 8), x + barWidth / 2, bottom + 12, barWidth + 20);
  });
}

function drawRadarChart(canvas, data) {
  const { ctx, width, height } = setupChartCanvas(canvas);
  ctx.clearRect(0, 0, width, height);
  const cx = width / 2;
  const cy = height / 2 + 8;
  const radius = Math.min(width, height) * 0.31;
  const count = data.length;
  ctx.strokeStyle = 'rgba(102,112,133,0.22)';
  ctx.fillStyle = 'rgba(255,255,255,0.18)';
  for (let layer = 1; layer <= 4; layer += 1) {
    ctx.beginPath();
    for (let i = 0; i < count; i += 1) {
      const angle = -Math.PI / 2 + (i / count) * Math.PI * 2;
      const r = radius * (layer / 4);
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }
  ctx.beginPath();
  data.forEach((item, i) => {
    const ratio = Math.max(0, Math.min(1, item.value / item.max));
    const angle = -Math.PI / 2 + (i / count) * Math.PI * 2;
    const x = cx + Math.cos(angle) * radius * ratio;
    const y = cy + Math.sin(angle) * radius * ratio;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(255,79,154,0.22)';
  ctx.strokeStyle = '#ff4f9a';
  ctx.lineWidth = 3;
  ctx.fill();
  ctx.stroke();
  ctx.font = '800 11px "Noto Sans JP", sans-serif';
  ctx.fillStyle = '#344054';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  data.forEach((item, i) => {
    const angle = -Math.PI / 2 + (i / count) * Math.PI * 2;
    const x = cx + Math.cos(angle) * (radius + 32);
    const y = cy + Math.sin(angle) * (radius + 24);
    ctx.fillText(shorten(item.label, 7), x, y, 72);
  });
}

function shorten(text, length) {
  const value = String(text || '');
  return value.length > length ? `${value.slice(0, length)}…` : value;
}

function renderRankings(summary) {
  const memberRows = Object.entries(summary.memberCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([id, count]) => {
      const member = getMember(id);
      return [member ? getMemberDisplay(member) : id, count];
    });
  els.memberRanking.innerHTML = memberRows.length
    ? memberRows.map(([name, count]) => `<div class="ranking-row"><span>${escapeHtml(name)}</span><span>${count}</span></div>`).join('')
    : `<div class="ranking-empty">${t('noPublicRecords')}</div>`;

  const perfRows = Object.entries(summary.performanceRecords)
    .sort((a, b) => b[1] - a[1])
    .map(([id, count]) => [id === 'none' ? t('noPerformance') : getPerformance(id)?.label || id, count]);
  els.performanceRanking.innerHTML = perfRows.length
    ? perfRows.map(([name, count]) => `<div class="ranking-row"><span>${escapeHtml(name)}</span><span>${count}</span></div>`).join('')
    : `<div class="ranking-empty">${t('noPublicRecords')}</div>`;
}

async function loadMembers() {
  try {
    const response = await fetch('members.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('members.json not found');
    appState.members = await response.json();
    if (typeof initSilentPreloader === 'function') initSilentPreloader(appState.members, 'image', 'imgLoaded');
  } catch (error) {
    appState.members = [];
  }
}

function bindEvents() {
  els.languageSelect.addEventListener('change', () => {
    appState.lang = els.languageSelect.value;
    localStorage.setItem(GARAPON_CONFIG.languageKey, appState.lang);
    applyLanguage();
  });
  $$('.tab-button').forEach((button) => button.addEventListener('click', () => switchTab(button.dataset.tab)));
  els.recordForm.addEventListener('submit', saveFormRecord);
  ['input', 'change'].forEach((eventName) => {
    [els.nameInput, els.dateInput, els.performanceSelect, els.spinCountInput, els.winCountInput, els.prizeSelect, els.memberSelect, els.publicConsentInput]
      .forEach((node) => node.addEventListener(eventName, debounce(renderPreviewFromForm, 60)));
  });
  els.clearFormBtn.addEventListener('click', resetForm);
  els.downloadCurrentBtn.addEventListener('click', () => downloadRecordCard(collectFormRecord({ keepId: false })));
  els.recordList.addEventListener('click', handleRecordListClick);
  els.exportJsonBtn.addEventListener('click', exportJson);
  els.importJsonInput.addEventListener('change', importJson);
  els.deleteAllBtn.addEventListener('click', deleteAllRecords);
  els.closeDialogBtn.addEventListener('click', () => els.imageDialog.close());
  window.addEventListener('resize', debounce(() => {
    renderPreviewFromForm();
    renderPublicStats();
  }, 180));
}

async function init() {
  appState.lang = detectLanguage();
  loadRecords();
  populatePerformanceOptions();
  await loadMembers();
  populateMemberOptions();
  bindEvents();
  applyLanguage();
  updateCost();
  renderRecords();
  renderPublicStats();
  renderPreviewFromForm();
}

document.addEventListener('DOMContentLoaded', init);
