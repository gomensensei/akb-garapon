(function () {
  "use strict";

  var session = null;
  var listeners = [];
  var initialized = false;

  function getClient() {
    return window.Tool48Supabase && window.Tool48Supabase.getClient
      ? window.Tool48Supabase.getClient()
      : null;
  }

  function getUser() {
    return session && session.user ? session.user : null;
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

  function renderAuthState(root) {
    var scope = root || document;
    var configured = Boolean(window.Tool48Supabase && window.Tool48Supabase.isConfigured && window.Tool48Supabase.isConfigured());
    var user = getUser();
    scope.querySelectorAll("[data-tool48-auth-email]").forEach(function (node) {
      node.textContent = user && user.email ? user.email : "";
    });
    scope.querySelectorAll("[data-tool48-auth-status]").forEach(function (node) {
      if (!configured) node.textContent = "Cloud save is not configured.";
      else if (user) node.textContent = "Signed in as " + (user.email || "Tool48 user") + ".";
      else node.textContent = "Login is optional. Sign in only if you want cloud save.";
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

  async function signInWithEmail(email) {
    var client = getClient();
    if (!client) throw new Error("Supabase is not configured.");
    var result = await client.auth.signInWithOtp({
      email: email,
      options: { emailRedirectTo: window.location.href.split("#")[0] }
    });
    if (result.error) throw result.error;
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
        var input = form.querySelector("[data-tool48-email]");
        var message = form.querySelector("[data-tool48-auth-message]");
        var email = input ? input.value.trim() : "";
        if (!email) return;
        try {
          await signInWithEmail(email);
          if (message) message.textContent = "Magic link sent. Please check your email.";
        } catch (error) {
          if (message) message.textContent = error.message || "Could not send magic link.";
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
      client.auth.onAuthStateChange(function (_event, nextSession) {
        session = nextSession || null;
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
    signInWithEmail: signInWithEmail,
    signOut: signOut,
    onAuthStateChange: onAuthStateChange,
    renderAuthState: renderAuthState
  };

  document.addEventListener("DOMContentLoaded", init);
})();
