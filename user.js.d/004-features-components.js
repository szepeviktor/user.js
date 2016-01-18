/******************************************************************************
 * firefox features / components                                              *
 *                                                                            *
 ******************************************************************************/

// https://wiki.mozilla.org/Platform/Features/Telemetry
// https://www.mozilla.org/en-US/legal/privacy/firefox.html#telemetry
// https://wiki.mozilla.org/Security/Reviews/Firefox6/ReviewNotes/telemetry
user_pref("toolkit.telemetry.enabled",		false);
// https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
user_pref("toolkit.telemetry.unified",		false);
// https://wiki.mozilla.org/Telemetry/Experiments
user_pref("experiments.supported",		false);
user_pref("experiments.enabled",		false);

// https://wiki.mozilla.org/Security/Tracking_protection
// https://support.mozilla.org/en-US/kb/tracking-protection-firefox
user_pref("privacy.trackingprotection.enabled",		true);
// https://support.mozilla.org/en-US/kb/tracking-protection-pbm
user_pref("privacy.trackingprotection.pbmode.enabled",		true);

// Disable the built-in PDF viewer (CVE-2015-2743)
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-2743
user_pref("pdfjs.disabled",		false);

// Disable sending of the health report
// https://support.mozilla.org/en-US/kb/firefox-health-report-understand-your-browser-perf
user_pref("datareporting.healthreport.uploadEnabled",		false);
// disable collection of the data (the healthreport.sqlite* files)
user_pref("datareporting.healthreport.service.enabled",		false);
// https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
user_pref("datareporting.policy.dataSubmissionEnabled",		false);

// Disable new tab tile ads & preload
// http://www.thewindowsclub.com/disable-remove-ad-tiles-from-firefox
// http://forums.mozillazine.org/viewtopic.php?p=13876331#p13876331
user_pref("browser.newtabpage.enhanced",		false);
user_pref("browser.newtab.preload",		false);
// https://wiki.mozilla.org/Tiles/Technical_Documentation#Ping
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-ping
user_pref("browser.newtabpage.directory.ping",		"");
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-source
user_pref("browser.newtabpage.directory.source",		"data:text/plain,{}");

// disable heartbeat
// https://wiki.mozilla.org/Advocacy/heartbeat
user_pref("browser.selfsupport.url",		"");

// Disable firefox hello
// https://wiki.mozilla.org/Loop
user_pref("loop.enabled",		false);

// CIS 2.1.1 Enable Auto Update
// This is disabled for now. it is better to patch through package management.
user_pref("app.update.auto", false);

// Disable updates
user_pref("app.update.enabled", false);
user_pref("app.update.service.enabled", false);
user_pref("browser.search.update", false);
user_pref("extensions.update.enabled", false);

// CIS 2.3.4 Block Reported Web Forgeries
// http://kb.mozillazine.org/Browser.safebrowsing.enabled
// http://kb.mozillazine.org/Safe_browsing
// https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work
// http://forums.mozillazine.org/viewtopic.php?f=39&t=2711237&p=12896849#p12896849
user_pref("browser.safebrowsing.enabled",		true);

// CIS 2.3.5 Block Reported Attack Sites
// http://kb.mozillazine.org/Browser.safebrowsing.malware.enabled
user_pref("browser.safebrowsing.malware.enabled",		true);

// Disable safe browsing remote lookups for downloaded files.
// This leaks information to google.
// https://www.mozilla.org/en-US/firefox/39.0/releasenotes/
// https://wiki.mozilla.org/Security/Application_Reputation
user_pref("browser.safebrowsing.downloads.remote.enabled",	false);

// Disable pocket
// https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox
user_pref("browser.pocket.enabled",		false);

// Disable Reader
user_pref("reader.parse-on-load.enabled", false);

