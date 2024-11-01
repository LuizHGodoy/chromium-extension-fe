/* eslint-disable no-undef */
export const saveNote = (note) => {
	chrome.storage.local.get(["notes"], (result) => {
		const notes = result.notes || [];
		notes.push(note);
		chrome.storage.local.set({ notes });
	});
};

export const getNotes = () => {
	return new Promise((resolve) => {
		chrome.storage.local.get(["notes"], (result) => {
			resolve(result.notes || []);
		});
	});
};

export const saveReminder = (name, time) => {
	chrome.storage.local.get(["reminders"], (result) => {
		const reminders = result.reminders || [];
		reminders.push({ name, time });
		chrome.storage.local.set({ reminders });
		chrome.alarms.create(name, { when: new Date(time).getTime() });
	});
};

export const getReminders = () => {
	return new Promise((resolve) => {
		chrome.storage.local.get(["reminders"], (result) => {
			resolve(result.reminders || []);
		});
	});
};
