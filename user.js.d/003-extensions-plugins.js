/******************************************************************************
 * extensions / plugins                                                       *
 *                                                                            *
 ******************************************************************************/

// Require signatures
//user_pref("xpinstall.signatures.required",   true);

// Opt-out of add-on metadata updates
// https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/
user_pref("extensions.getAddons.cache.enabled",   false);

// Flash plugin state - never activate
user_pref("plugin.state.flash",		1);

// disable Gnome Shell Integration
user_pref("plugin.state.libgnome-shell-browser-plugin",	0);

// disable the bundled OpenH264 video codec
// http://forums.mozillazine.org/viewtopic.php?p=13845077&sid=28af2622e8bd8497b9113851676846b1#p13845077
//user_pref("media.gmp-provider.enabled",		false);

// https://wiki.mozilla.org/Firefox/Click_To_Play
// https://blog.mozilla.org/security/2012/10/11/click-to-play-plugins-blocklist-style/
user_pref("plugins.click_to_play",		true);

// Updates addons automatically
// https://blog.mozilla.org/addons/how-to-turn-off-add-on-updates/
user_pref("extensions.update.enabled",		false);

// http://kb.mozillazine.org/Extensions.blocklist.enabled
user_pref("extensions.blocklist.enabled",		true);

