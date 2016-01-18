/******************************************************************************
 * Caching                                                                    *
 *                                                                            *
 ******************************************************************************/

// http://kb.mozillazine.org/Browser.sessionstore.postdata
// NOTE: relates to CIS 2.5.7
user_pref("browser.sessionstore.postdata",		0);
// http://kb.mozillazine.org/Browser.sessionstore.enabled
user_pref("browser.sessionstore.enabled",		false);

// http://kb.mozillazine.org/Browser.cache.offline.enable
user_pref("browser.cache.offline.enable",		false);

// Always use private browsing
// https://support.mozilla.org/en-US/kb/Private-Browsing
// https://wiki.mozilla.org/PrivateBrowsing
user_pref("browser.privatebrowsing.autostart",		false);
user_pref("extensions.ghostery.privateBrowsing",		true);

// Clear history when Firefox closes
// https://support.mozilla.org/en-US/kb/Clear%20Recent%20History#w_how-do-i-make-firefox-clear-my-history-automatically
user_pref("privacy.sanitize.sanitizeOnShutdown",		false);
user_pref("privacy.clearOnShutdown.cache",		false);
user_pref("privacy.clearOnShutdown.cookies",		false);
user_pref("privacy.clearOnShutdown.downloads",		false);
user_pref("privacy.clearOnShutdown.formdata",		false);
user_pref("privacy.clearOnShutdown.history",		false);
user_pref("privacy.clearOnShutdown.offlineApps",		false);
user_pref("privacy.clearOnShutdown.passwords",		false);
user_pref("privacy.clearOnShutdown.sessions",		false);
//user_pref("privacy.clearOnShutdown.siteSettings",		false);

// don't remember browsing history
user_pref("places.history.enabled",		true);

// The cookie expires at the end of the session (when the browser closes).
// http://kb.mozillazine.org/Network.cookie.lifetimePolicy#2
user_pref("network.cookie.lifetimePolicy",		2);

// http://kb.mozillazine.org/Browser.cache.disk.enable
user_pref("browser.cache.disk.enable",		true);

// http://kb.mozillazine.org/Browser.cache.memory.enable
//user_pref("browser.cache.memory.enable",		false);
user_pref("browser.cache.memory.capacity", 64000);

// CIS Version 1.2.0 October 21st, 2011 2.5.8 Disable Caching of SSL Pages
// http://kb.mozillazine.org/Browser.cache.disk_cache_ssl
user_pref("browser.cache.disk_cache_ssl",		true);

// CIS Version 1.2.0 October 21st, 2011 2.5.2 Disallow Credential Storage
user_pref("signon.rememberSignons",		false);

// CIS Version 1.2.0 October 21st, 2011 2.5.4 Delete History and Form Data
// http://kb.mozillazine.org/Browser.history_expire_days
//user_pref("browser.history_expire_days",		0);

// http://kb.mozillazine.org/Browser.history_expire_sites
//user_pref("browser.history_expire_sites",		0);

// http://kb.mozillazine.org/Browser.history_expire_visits
//user_pref("browser.history_expire_visits",		0);

// CIS Version 1.2.0 October 21st, 2011 2.5.5 Delete Download History
// Zero (0) is an indication that no download history is retained for the current profile.
//user_pref("browser.download.manager.retention",		0);

// CIS Version 1.2.0 October 21st, 2011 2.5.6 Delete Search and Form History
user_pref("browser.formfill.enable",		false);
user_pref("browser.formfill.expire_days",		0);

// CIS Version 1.2.0 October 21st, 2011 2.5.7 Clear SSL Form Session Data
// http://kb.mozillazine.org/Browser.sessionstore.privacy_level#2
// Store extra session data for unencrypted (non-HTTPS) sites only.
// NOTE: CIS says 1, we use 2
user_pref("browser.sessionstore.privacy_level",		2);

// https://bugzil.la/238789#c19
user_pref("browser.helperApps.deleteTempFileOnExit",		true);

// https://support.mozilla.org/en-US/questions/973320
// https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/browser.pagethumbnails.capturing_disabled
user_pref("browser.pagethumbnails.capturing_disabled",		true);

/*
// Disable cache on non-ramdisk profiles
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.capacity", 256000); // 256 MB
user_pref("places.history.enabled", false);
*/
