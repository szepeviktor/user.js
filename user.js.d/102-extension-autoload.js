// Activate extensions in core
user_pref("extensions.autoDisableScopes", 11); // 15 - 4 = ALL - SCOPE_APPLICATION
user_pref("extensions.enabledScopes", 5); // 15 - 8 - 2 = ALL - SCOPE_SYSTEM - SCOPE_USER

// uBlock Origin
user_pref("extensions.ublock0.adminSettings", '{"userSettings":{"advancedUserEnabled":true}}');
