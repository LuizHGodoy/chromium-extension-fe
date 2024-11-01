/* eslint-disable no-undef */
chrome.alarms.onAlarm.addListener((alarm) => {
	chrome.notifications.create({
		title: "Lembrete!",
		message: alarm.name,
		iconUrl: "icons/icon128.png",
		type: "basic",
	});
});
