(function () {
  "use strict";

  var languageKey = "gomensensei.garapon.language.v1";
  var I18N = {
    en: {
      accountBrand: "Tool48 Account",
      accountSubtitle: "Optional cloud save for theater-day tools.",
      openGaraponShort: "Garapon",
      accountEyebrow: "Optional Account",
      accountTitle: "Tool48 Account",
      accountLead: "Login is optional. All tools can still be used without an account. Account features add cloud save, cross-device sync, and opt-in anonymous public statistics.",
      cloudNicknameLabel: "Nickname",
      cloudNicknamePlaceholder: "gomensensei",
      cloudEmailLabel: "Account email",
      cloudPasswordLabel: "Password",
      cloudPasswordPlaceholder: "6+ characters",
      cloudSignIn: "Sign in",
      cloudCreateAccount: "Create account",
      signedInLabel: "Nickname",
      accountEmailLabel: "Account email",
      cloudSignOut: "Sign out",
      cloudUnconfigured: "Cloud save is not configured, but local Garapon records still work.",
      openGarapon: "Open Garapon",
      backToHub: "Back to Hub",
      accountFooter: "Tool48 is an unofficial fan-made project. Private records stay private unless you explicitly opt in to anonymous public statistics."
    },
    "zh-Hant": {
      accountBrand: "Tool48 帳號",
      accountSubtitle: "劇場日工具嘅可選雲端保存。",
      openGaraponShort: "Garapon",
      accountEyebrow: "可選帳號",
      accountTitle: "Tool48 帳號",
      accountLead: "登入係可選功能。所有工具唔登入都照樣用到。帳號只係用嚟加雲端保存、跨裝置同步，同匿名公開統計 opt-in。",
      cloudNicknameLabel: "Nickname",
      cloudNicknamePlaceholder: "例如：gomensensei",
      cloudEmailLabel: "帳號 email",
      cloudPasswordLabel: "密碼",
      cloudPasswordPlaceholder: "最少 6 個字",
      cloudSignIn: "登入",
      cloudCreateAccount: "建立帳號",
      signedInLabel: "Nickname",
      accountEmailLabel: "帳號 email",
      cloudSignOut: "登出",
      cloudUnconfigured: "雲端保存尚未設定，但本機 Garapon 紀錄仍然可用。",
      openGarapon: "打開 Garapon",
      backToHub: "返回 Hub",
      accountFooter: "Tool48 係非官方 fan-made project。除非你明確選擇匿名公開統計，私人紀錄都會保持私人。"
    },
    "zh-Hans": {
      accountBrand: "Tool48 账号",
      accountSubtitle: "剧场日工具的可选云端保存。",
      openGaraponShort: "Garapon",
      accountEyebrow: "可选账号",
      accountTitle: "Tool48 账号",
      accountLead: "登录是可选功能。所有工具不登录也能继续使用。账号只用于云端保存、跨设备同步，以及匿名公开统计 opt-in。",
      cloudNicknameLabel: "Nickname",
      cloudNicknamePlaceholder: "例如：gomensensei",
      cloudEmailLabel: "账号 email",
      cloudPasswordLabel: "密码",
      cloudPasswordPlaceholder: "至少 6 个字符",
      cloudSignIn: "登录",
      cloudCreateAccount: "建立账号",
      signedInLabel: "Nickname",
      accountEmailLabel: "账号 email",
      cloudSignOut: "登出",
      cloudUnconfigured: "云端保存尚未设置，但本机 Garapon 记录仍然可用。",
      openGarapon: "打开 Garapon",
      backToHub: "返回 Hub",
      accountFooter: "Tool48 是非官方 fan-made project。除非你明确选择匿名公开统计，私人记录都会保持私人。"
    },
    ja: {
      accountBrand: "Tool48 アカウント",
      accountSubtitle: "劇場日ツール用の任意クラウド保存。",
      openGaraponShort: "Garapon",
      accountEyebrow: "任意アカウント",
      accountTitle: "Tool48 アカウント",
      accountLead: "ログインは任意です。すべてのツールはアカウントなしでも使えます。アカウント機能はクラウド保存、端末間同期、匿名公開統計への任意参加を追加します。",
      cloudNicknameLabel: "ニックネーム",
      cloudNicknamePlaceholder: "例: gomensensei",
      cloudEmailLabel: "アカウント用メール",
      cloudPasswordLabel: "パスワード",
      cloudPasswordPlaceholder: "6文字以上",
      cloudSignIn: "ログイン",
      cloudCreateAccount: "アカウント作成",
      signedInLabel: "ニックネーム",
      accountEmailLabel: "アカウント用メール",
      cloudSignOut: "ログアウト",
      cloudUnconfigured: "クラウド保存は未設定ですが、ローカル Garapon 記録は引き続き使えます。",
      openGarapon: "Garapon を開く",
      backToHub: "Hub に戻る",
      accountFooter: "Tool48 は非公式の fan-made project です。匿名公開統計に明示的に参加しない限り、個人記録は非公開のままです。"
    },
    ko: {
      accountBrand: "Tool48 계정",
      accountSubtitle: "극장일 도구용 선택형 클라우드 저장.",
      openGaraponShort: "Garapon",
      accountEyebrow: "선택 계정",
      accountTitle: "Tool48 계정",
      accountLead: "로그인은 선택 사항입니다. 모든 도구는 계정 없이도 사용할 수 있습니다. 계정 기능은 클라우드 저장, 기기 간 동기화, 익명 공개 통계 opt-in을 추가합니다.",
      cloudNicknameLabel: "닉네임",
      cloudNicknamePlaceholder: "예: gomensensei",
      cloudEmailLabel: "계정 이메일",
      cloudPasswordLabel: "비밀번호",
      cloudPasswordPlaceholder: "6자 이상",
      cloudSignIn: "로그인",
      cloudCreateAccount: "계정 만들기",
      signedInLabel: "닉네임",
      accountEmailLabel: "계정 이메일",
      cloudSignOut: "로그아웃",
      cloudUnconfigured: "클라우드 저장이 설정되지 않았지만 로컬 Garapon 기록은 계속 사용할 수 있습니다.",
      openGarapon: "Garapon 열기",
      backToHub: "Hub로 돌아가기",
      accountFooter: "Tool48은 비공식 fan-made project입니다. 익명 공개 통계에 명시적으로 동의하지 않는 한 개인 기록은 비공개로 유지됩니다."
    },
    th: {
      accountBrand: "บัญชี Tool48",
      accountSubtitle: "บันทึกบนคลาวด์แบบเลือกใช้สำหรับเครื่องมือวันไปเธียเตอร์",
      openGaraponShort: "Garapon",
      accountEyebrow: "บัญชีแบบเลือกใช้",
      accountTitle: "บัญชี Tool48",
      accountLead: "การเข้าสู่ระบบเป็นตัวเลือก ทุกเครื่องมือยังใช้ได้โดยไม่ต้องมีบัญชี บัญชีเพิ่มการบันทึกบนคลาวด์ ซิงค์ข้ามอุปกรณ์ และสถิติสาธารณะแบบไม่ระบุตัวตนเมื่อยินยอม",
      cloudNicknameLabel: "Nickname",
      cloudNicknamePlaceholder: "เช่น gomensensei",
      cloudEmailLabel: "อีเมลบัญชี",
      cloudPasswordLabel: "รหัสผ่าน",
      cloudPasswordPlaceholder: "อย่างน้อย 6 ตัวอักษร",
      cloudSignIn: "เข้าสู่ระบบ",
      cloudCreateAccount: "สร้างบัญชี",
      signedInLabel: "Nickname",
      accountEmailLabel: "อีเมลบัญชี",
      cloudSignOut: "ออกจากระบบ",
      cloudUnconfigured: "ยังไม่ได้ตั้งค่าการบันทึกบนคลาวด์ แต่ข้อมูล Garapon ในเครื่องยังใช้ได้",
      openGarapon: "เปิด Garapon",
      backToHub: "กลับ Hub",
      accountFooter: "Tool48 เป็นโปรเจกต์แฟนเมดที่ไม่เป็นทางการ ข้อมูลส่วนตัวจะยังเป็นส่วนตัว เว้นแต่คุณเลือกใช้สถิติสาธารณะแบบไม่ระบุตัวตน"
    },
    id: {
      accountBrand: "Akun Tool48",
      accountSubtitle: "Cloud save opsional untuk alat theater-day.",
      openGaraponShort: "Garapon",
      accountEyebrow: "Akun opsional",
      accountTitle: "Akun Tool48",
      accountLead: "Login bersifat opsional. Semua alat tetap bisa digunakan tanpa akun. Akun menambah cloud save, sinkron lintas perangkat, dan statistik publik anonim secara opt-in.",
      cloudNicknameLabel: "Nickname",
      cloudNicknamePlaceholder: "contoh: gomensensei",
      cloudEmailLabel: "Email akun",
      cloudPasswordLabel: "Password",
      cloudPasswordPlaceholder: "minimal 6 karakter",
      cloudSignIn: "Masuk",
      cloudCreateAccount: "Buat akun",
      signedInLabel: "Nickname",
      accountEmailLabel: "Email akun",
      cloudSignOut: "Keluar",
      cloudUnconfigured: "Cloud save belum dikonfigurasi, tetapi catatan Garapon lokal tetap bisa digunakan.",
      openGarapon: "Buka Garapon",
      backToHub: "Kembali ke Hub",
      accountFooter: "Tool48 adalah proyek fan-made tidak resmi. Catatan pribadi tetap privat kecuali Anda memilih statistik publik anonim."
    }
  };

  function detectLanguage() {
    var saved = "";
    try { saved = localStorage.getItem(languageKey) || ""; } catch (_error) { saved = ""; }
    if (I18N[saved]) return saved;
    var candidates = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "zh-Hant"];
    for (var i = 0; i < candidates.length; i += 1) {
      var lang = String(candidates[i]).toLowerCase();
      if (lang.startsWith("zh-hant") || lang.includes("hk") || lang.includes("tw") || lang.includes("mo")) return "zh-Hant";
      if (lang.startsWith("zh-hans") || lang.includes("cn") || lang.includes("sg")) return "zh-Hans";
      if (lang.startsWith("ja")) return "ja";
      if (lang.startsWith("ko")) return "ko";
      if (lang.startsWith("th")) return "th";
      if (lang.startsWith("id")) return "id";
      if (lang.startsWith("en")) return "en";
    }
    return "zh-Hant";
  }

  function applyLanguage(lang) {
    var dict = I18N[lang] || I18N["zh-Hant"];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      node.textContent = dict[node.dataset.i18n] || node.textContent;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (node) {
      node.placeholder = dict[node.dataset.i18nPlaceholder] || node.placeholder;
    });
    var selector = document.getElementById("languageSelect");
    if (selector) selector.value = lang;
    if (window.Tool48Auth && window.Tool48Auth.renderAuthState) window.Tool48Auth.renderAuthState();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var lang = detectLanguage();
    applyLanguage(lang);
    var selector = document.getElementById("languageSelect");
    if (selector) {
      selector.addEventListener("change", function () {
        try { localStorage.setItem(languageKey, selector.value); } catch (_error) {}
        applyLanguage(selector.value);
      });
    }
  });
})();
