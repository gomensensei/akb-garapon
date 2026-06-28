(function () {
  "use strict";

  var session = null;
  var listeners = [];
  var initialized = false;
  var languageKey = "gomensensei.garapon.language.v1";

  var AUTH_I18N = {
    en: {
      unconfigured: "Cloud save is not configured.",
      signedIn: "Signed in as {name}.",
      signedOut: "Login is optional. Sign in only if you want cloud save.",
      missingEmailPassword: "Please enter account email and password.",
      missingSignup: "Please enter nickname, account email, and password.",
      signupNeedsConfirm: "Account created. Please confirm your email before signing in.",
      signupReady: "Account created and signed in.",
      signinReady: "Signed in.",
      authFailed: "Account action failed.",
      signingIn: "Signing in...",
      signingUp: "Creating account..."
    },
    ja: {
      unconfigured: "クラウド保存は未設定です。",
      signedIn: "{name} でログイン中です。",
      signedOut: "ログインは任意です。クラウド保存を使う場合だけログインしてください。",
      missingEmailPassword: "アカウント用メールとパスワードを入力してください。",
      missingSignup: "ニックネーム、アカウント用メール、パスワードを入力してください。",
      signupNeedsConfirm: "アカウントを作成しました。ログイン前にメール確認が必要です。",
      signupReady: "アカウントを作成し、ログインしました。",
      signinReady: "ログインしました。",
      authFailed: "アカウント操作に失敗しました。",
      signingIn: "ログイン中...",
      signingUp: "アカウント作成中..."
    },
    "zh-Hant": {
      unconfigured: "雲端保存尚未設定。",
      signedIn: "已登入：{name}。",
      signedOut: "登入係可選功能；只係想用雲端保存時先需要登入。",
      missingEmailPassword: "請輸入帳號 email 同密碼。",
      missingSignup: "請輸入 nickname、帳號 email 同密碼。",
      signupNeedsConfirm: "帳號已建立。請先確認 email，之後再登入。",
      signupReady: "帳號已建立並已登入。",
      signinReady: "已登入。",
      authFailed: "帳號操作失敗。",
      signingIn: "登入中...",
      signingUp: "建立帳號中..."
    },
    "zh-Hans": {
      unconfigured: "云端保存尚未设置。",
      signedIn: "已登录：{name}。",
      signedOut: "登录是可选功能；只有想使用云端保存时才需要登录。",
      missingEmailPassword: "请输入账号 email 和密码。",
      missingSignup: "请输入 nickname、账号 email 和密码。",
      signupNeedsConfirm: "账号已建立。请先确认 email，然后再登录。",
      signupReady: "账号已建立并已登录。",
      signinReady: "已登录。",
      authFailed: "账号操作失败。",
      signingIn: "登录中...",
      signingUp: "建立账号中..."
    },
    ko: {
      unconfigured: "클라우드 저장이 설정되지 않았습니다.",
      signedIn: "{name}(으)로 로그인했습니다.",
      signedOut: "로그인은 선택 사항입니다. 클라우드 저장을 쓸 때만 로그인하세요.",
      missingEmailPassword: "계정 이메일과 비밀번호를 입력하세요.",
      missingSignup: "닉네임, 계정 이메일, 비밀번호를 입력하세요.",
      signupNeedsConfirm: "계정이 생성되었습니다. 로그인 전에 이메일을 확인하세요.",
      signupReady: "계정이 생성되었고 로그인했습니다.",
      signinReady: "로그인했습니다.",
      authFailed: "계정 작업에 실패했습니다.",
      signingIn: "로그인 중...",
      signingUp: "계정 생성 중..."
    },
    th: {
      unconfigured: "ยังไม่ได้ตั้งค่าการบันทึกบนคลาวด์",
      signedIn: "เข้าสู่ระบบเป็น {name}",
      signedOut: "การเข้าสู่ระบบเป็นตัวเลือก ใช้เฉพาะเมื่อต้องการบันทึกบนคลาวด์",
      missingEmailPassword: "กรุณาใส่อีเมลบัญชีและรหัสผ่าน",
      missingSignup: "กรุณาใส่ nickname, อีเมลบัญชี และรหัสผ่าน",
      signupNeedsConfirm: "สร้างบัญชีแล้ว กรุณายืนยันอีเมลก่อนเข้าสู่ระบบ",
      signupReady: "สร้างบัญชีและเข้าสู่ระบบแล้ว",
      signinReady: "เข้าสู่ระบบแล้ว",
      authFailed: "ดำเนินการบัญชีไม่สำเร็จ",
      signingIn: "กำลังเข้าสู่ระบบ...",
      signingUp: "กำลังสร้างบัญชี..."
    },
    id: {
      unconfigured: "Cloud save belum dikonfigurasi.",
      signedIn: "Masuk sebagai {name}.",
      signedOut: "Login bersifat opsional. Masuk hanya jika ingin cloud save.",
      missingEmailPassword: "Masukkan email akun dan password.",
      missingSignup: "Masukkan nickname, email akun, dan password.",
      signupNeedsConfirm: "Akun dibuat. Konfirmasi email sebelum masuk.",
      signupReady: "Akun dibuat dan sudah masuk.",
      signinReady: "Sudah masuk.",
      authFailed: "Aksi akun gagal.",
      signingIn: "Sedang masuk...",
      signingUp: "Membuat akun..."
    }
  };

  function getLang() {
    var saved = "";
    try { saved = localStorage.getItem(languageKey) || ""; } catch (_error) { saved = ""; }
    var htmlLang = document.documentElement.lang || "";
    return AUTH_I18N[saved] ? saved : (AUTH_I18N[htmlLang] ? htmlLang : "en");
  }

  function text(key, vars) {
    var value = (AUTH_I18N[getLang()] && AUTH_I18N[getLang()][key]) || AUTH_I18N.en[key] || key;
    Object.entries(vars || {}).forEach(function (entry) {
      value = value.replaceAll("{" + entry[0] + "}", String(entry[1]));
    });
    return value;
  }

  function getClient() {
    return window.Tool48Supabase && window.Tool48Supabase.getClient
      ? window.Tool48Supabase.getClient()
      : null;
  }

  function getUser() {
    return session && session.user ? session.user : null;
  }

  function getDisplayName(user) {
    return user && user.user_metadata && user.user_metadata.display_name
      ? user.user_metadata.display_name
      : (user && user.email ? user.email : "Tool48 user");
  }

  function redirectAfterAuthIfNeeded() {
    var target = document.body && document.body.dataset ? document.body.dataset.tool48AuthRedirect : "";
    if (!target || !getUser()) return;
    window.location.href = target;
  }

  function notify() {
    listeners.forEach(function (listener) {
      try { listener(session); } catch (error) { console.warn("Tool48 auth listener failed", error); }
    });
    renderAuthState();
  }

  function setHidden(node, hidden) {
    if (!node) return;
    node.hidden = hidden;
    node.setAttribute("aria-hidden", hidden ? "true" : "false");
  }

  async function upsertProfile(displayName) {
    var client = getClient();
    var user = getUser();
    if (!client || !user || !displayName) return;
    var result = await client.from("profiles").upsert({
      id: user.id,
      display_name: displayName
    }, { onConflict: "id" });
    if (result.error) console.warn("Tool48 profile update failed", result.error);
  }

  function renderAuthState(root) {
    var scope = root || document;
    var configured = Boolean(window.Tool48Supabase && window.Tool48Supabase.isConfigured && window.Tool48Supabase.isConfigured());
    var user = getUser();
    scope.querySelectorAll("[data-tool48-auth-email]").forEach(function (node) {
      node.textContent = user && user.email ? user.email : "";
    });
    scope.querySelectorAll("[data-tool48-auth-nickname]").forEach(function (node) {
      node.textContent = user ? getDisplayName(user) : "";
    });
    scope.querySelectorAll("[data-tool48-auth-status]").forEach(function (node) {
      if (!configured) node.textContent = text("unconfigured");
      else if (user) node.textContent = text("signedIn", { name: getDisplayName(user) });
      else node.textContent = text("signedOut");
    });
    scope.querySelectorAll("[data-tool48-auth-logged-in]").forEach(function (node) {
      setHidden(node, !user);
    });
    scope.querySelectorAll("[data-tool48-auth-logged-out]").forEach(function (node) {
      setHidden(node, Boolean(user) || !configured);
    });
    scope.querySelectorAll("[data-tool48-auth-unconfigured]").forEach(function (node) {
      setHidden(node, configured);
    });
  }

  async function getSession() {
    var client = getClient();
    if (!client) return null;
    var result = await client.auth.getSession();
    if (result.error) throw result.error;
    session = result.data.session || null;
    return session;
  }

  async function signUpWithPassword(email, password, nickname) {
    var client = getClient();
    if (!client) throw new Error(text("unconfigured"));
    var result = await client.auth.signUp({
      email: email,
      password: password,
      options: {
        data: { display_name: nickname },
        emailRedirectTo: window.location.origin + window.location.pathname
      }
    });
    if (result.error) throw result.error;
    session = result.data.session || session;
    if (session) await upsertProfile(nickname);
    notify();
    return result.data;
  }

  async function signInWithPassword(email, password) {
    var client = getClient();
    if (!client) throw new Error(text("unconfigured"));
    var result = await client.auth.signInWithPassword({ email: email, password: password });
    if (result.error) throw result.error;
    session = result.data.session || null;
    notify();
    return result.data;
  }

  async function signOut() {
    var client = getClient();
    if (!client) return;
    var result = await client.auth.signOut();
    if (result.error) throw result.error;
  }

  function onAuthStateChange(listener) {
    listeners.push(listener);
    if (initialized) listener(session);
    return function () {
      listeners = listeners.filter(function (item) { return item !== listener; });
    };
  }

  function bindAuthControls() {
    document.querySelectorAll("[data-tool48-login-form]").forEach(function (form) {
      form.addEventListener("submit", async function (event) {
        event.preventDefault();
        var submitter = event.submitter;
        var action = submitter && submitter.dataset.tool48AuthAction === "signup" ? "signup" : "signin";
        var nicknameInput = form.querySelector("[data-tool48-nickname]");
        var emailInput = form.querySelector("[data-tool48-email]");
        var passwordInput = form.querySelector("[data-tool48-password]");
        var message = form.querySelector("[data-tool48-auth-message]");
        var nickname = nicknameInput ? nicknameInput.value.trim() : "";
        var email = emailInput ? emailInput.value.trim() : "";
        var password = passwordInput ? passwordInput.value : "";
        if (!email || !password) {
          if (message) message.textContent = text("missingEmailPassword");
          return;
        }
        if (action === "signup" && !nickname) {
          if (message) message.textContent = text("missingSignup");
          return;
        }
        try {
          if (message) message.textContent = action === "signup" ? text("signingUp") : text("signingIn");
          if (action === "signup") {
            var signupData = await signUpWithPassword(email, password, nickname);
            if (message) message.textContent = signupData.session ? text("signupReady") : text("signupNeedsConfirm");
            if (signupData.session) redirectAfterAuthIfNeeded();
          } else {
            await signInWithPassword(email, password);
            if (message) message.textContent = text("signinReady");
            redirectAfterAuthIfNeeded();
          }
        } catch (error) {
          if (message) message.textContent = error.message || text("authFailed");
        }
      });
    });

    document.querySelectorAll("[data-tool48-sign-out]").forEach(function (button) {
      button.addEventListener("click", async function () {
        try { await signOut(); } catch (error) { console.warn("Tool48 sign out failed", error); }
      });
    });
  }

  async function init() {
    var client = getClient();
    if (!client) {
      initialized = true;
      bindAuthControls();
      renderAuthState();
      notify();
      return;
    }

    try {
      await getSession();
      client.auth.onAuthStateChange(async function (_event, nextSession) {
        session = nextSession || null;
        if (session && session.user && session.user.user_metadata?.display_name) {
          await upsertProfile(session.user.user_metadata.display_name);
        }
        notify();
      });
    } catch (error) {
      console.warn("Tool48 auth init failed", error);
    } finally {
      initialized = true;
      bindAuthControls();
      renderAuthState();
      notify();
    }
  }

  window.Tool48Auth = {
    getSession: getSession,
    getUser: getUser,
    signUpWithPassword: signUpWithPassword,
    signInWithPassword: signInWithPassword,
    signOut: signOut,
    onAuthStateChange: onAuthStateChange,
    renderAuthState: renderAuthState
  };

  document.addEventListener("DOMContentLoaded", init);
})();
