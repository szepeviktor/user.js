/******************************************************************************
 * UI related                                                                 *
 *                                                                            *
 ******************************************************************************/

// Webpages will not be able to affect the right-click menu
//user_pref("dom.event.contextmenu.enabled",		false);

// CIS 2.3.2 Disable Downloading on Desktop
user_pref("browser.download.folderList",		1);

// always ask the user where to download
// https://developer.mozilla.org/en/Download_Manager_preferences
user_pref("browser.download.useDownloadDir",		true);

// https://wiki.mozilla.org/Privacy/Reviews/New_Tab
user_pref("browser.newtabpage.enabled",		false);
// https://support.mozilla.org/en-US/kb/new-tab-page-show-hide-and-customize-top-sites#w_how-do-i-turn-the-new-tab-page-off
user_pref("browser.newtab.url",		"about:blank");

// CIS Version 1.2.0 October 21st, 2011 2.1.2 Enable Auto Notification of Outdated Plugins
// https://wiki.mozilla.org/Firefox3.6/Plugin_Update_Awareness_Security_Review
user_pref("plugins.update.notifyUser",		true);

// CIS Version 1.2.0 October 21st, 2011 2.1.3 Enable Information Bar for Outdated Plugins
user_pref("plugins.hide_infobar_for_outdated_plugin",		false);

// CIS Version 1.2.0 October 21st, 2011 2.2.3 Enable Warning of Using Weak Encryption
user_pref("security.warn_entering_weak",		true);

// CIS Mozilla Firefox 24 ESR v1.0.0 - 3.6 Enable IDN Show Punycode
// http://kb.mozillazine.org/Network.IDN_show_punycode
user_pref("network.IDN_show_punycode",		true);

// http://kb.mozillazine.org/About:config_entries#Browser
// http://kb.mozillazine.org/Inline_autocomplete
user_pref("browser.urlbar.autoFill",		false);
user_pref("browser.urlbar.autoFill.typed",		false);

// http://www.labnol.org/software/browsers/prevent-firefox-showing-bookmarks-address-location-bar/3636/
// http://kb.mozillazine.org/Browser.urlbar.maxRichResults
// "Setting the preference to 0 effectively disables the Location Bar dropdown entirely."
user_pref("browser.urlbar.maxRichResults",		12);

// Hide "Search with Google" from awesomebar
user_pref("browser.urlbar.unifiedcomplete", true);

// https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/
// http://dbaron.org/mozilla/visited-privacy
user_pref("layout.css.visited_links_enabled",		false);

// http://kb.mozillazine.org/Places.frecency.unvisited%28place_type%29Bonus

// http://kb.mozillazine.org/Disabling_autocomplete_-_Firefox#Firefox_3.5
user_pref("browser.urlbar.autocomplete.enabled",		true);

// http://kb.mozillazine.org/Signon.autofillForms
// https://www.torproject.org/projects/torbrowser/design/#identifier-linkability
user_pref("signon.autofillForms",		false);

// do not check if firefox is the default browser
user_pref("browser.shell.checkDefaultBrowser",		false);

// https://developer.mozilla.org/en/Preferences/Mozilla_preferences_for_uber-geeks
// see also CVE-2009-3555
user_pref("security.ssl.warn_missing_rfc5746",		1);

// CIS Version 1.2.0 October 21st, 2011 2.5.3 Disable Prompting for Credential Storage
user_pref("security.ask_for_password",		0);

// Double-click text selection
user_pref("layout.word_select.stop_at_punctuation", false);
user_pref("layout.word_select.eat_space_to_next_word", false);

