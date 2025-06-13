const STORAGE_KEY = "zooco_reminders";

export const getRemindersFromStorage = () =>
  JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

export const saveRemindersToStorage = (reminders) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders));
