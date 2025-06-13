import { useState, useEffect } from "react";
import { getRemindersFromStorage, saveRemindersToStorage } from "./localStorageUtils";

export default function useReminders() {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const saved = getRemindersFromStorage();
    setReminders(saved);
  }, []);

  useEffect(() => {
    saveRemindersToStorage(reminders);
  }, [reminders]);

  const addReminder = (reminder) => setReminders([...reminders, reminder]);
  const deleteReminder = (id) => setReminders(reminders.filter(r => r.id !== id));
  const updateReminder = (updated) => {
    setReminders(reminders.map(r => (r.id === updated.id ? updated : r)));
  };

  return { reminders, addReminder, deleteReminder, updateReminder };
}
