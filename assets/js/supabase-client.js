(function () {
  "use strict";

  var cachedClient = null;

  function getConfig() {
    return window.TOOL48_SUPABASE_CONFIG || {};
  }

  function getPublishableKey(config) {
    return config.publishableKey || config.anonKey || "";
  }

  function isConfigured() {
    var config = getConfig();
    return Boolean(config.url && getPublishableKey(config) && window.supabase && window.supabase.createClient);
  }

  function getClient() {
    if (cachedClient) return cachedClient;
    if (!isConfigured()) return null;
    var config = getConfig();
    cachedClient = window.supabase.createClient(config.url, getPublishableKey(config), {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
    window.tool48Supabase = cachedClient;
    return cachedClient;
  }

  window.Tool48Supabase = {
    getClient: getClient,
    isConfigured: isConfigured
  };
})();
