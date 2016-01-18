/******************************************************************************
 * HTTP                                                                       *
 *                                                                            *
 ******************************************************************************/

// Disallow NTLMv1
// https://bugzilla.mozilla.org/show_bug.cgi?id=828183
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1",		false);
// it is still allowed through HTTPS. uncomment the following to disable it completely.
//user_pref("network.negotiate-auth.allow-insecure-ntlm-v1-https",		false);

// https://bugzilla.mozilla.org/show_bug.cgi?id=855326
user_pref("security.csp.experimentalEnabled",		true);

// CSP https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy
user_pref("security.csp.enable",		true);

// Subresource integrity
// https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
// https://wiki.mozilla.org/Security/Subresource_Integrity
user_pref("security.sri.enable",		true);

// DNT HTTP header
// http://dnt.mozilla.org/
// https://en.wikipedia.org/wiki/Do_not_track_header
// https://dnt-dashboard.mozilla.org
// https://github.com/pyllyukko/user.js/issues/11
//user_pref("privacy.donottrackheader.enabled",		true);

// http://kb.mozillazine.org/Network.http.sendRefererHeader#0
// https://bugzilla.mozilla.org/show_bug.cgi?id=822869
// Send a referer header with the target URI as the source

user_pref("network.http.sendRefererHeader",		2);
//user_pref("network.http.referer.spoofSource",		true);
// CIS Version 1.2.0 October 21st, 2011 2.4.3 Disable Referer from an SSL Website
user_pref("network.http.sendSecureXSiteReferrer",		false);

// CIS 2.5.1 Accept Only 1st Party Cookies
// http://kb.mozillazine.org/Network.cookie.cookieBehavior#1
// This breaks a number of payment gateways so you may need to comment it out.
//user_pref("network.cookie.cookieBehavior",		1);
// Make sure that third-party cookies (if enabled) never persist beyond the session.
// https://feeding.cloud.geek.nz/posts/tweaking-cookies-for-privacy-in-firefox/
// http://kb.mozillazine.org/Network.cookie.thirdparty.sessionOnly
// https://developer.mozilla.org/en-US/docs/Cookies_Preferences_in_Mozilla#network.cookie.thirdparty.sessionOnly
user_pref("network.cookie.thirdparty.sessionOnly",      true);

// user-agent
//user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; rv:31.0) Gecko/20100101 Firefox/31.0");

