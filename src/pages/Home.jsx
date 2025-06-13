import useReminders from "../utils/useReminders";
import ReminderList from "../components/ReminderList";
import AddReminderModal from "../components/AddReminderModal";
import { useState } from "react";

function Home() {
  const { reminders, addReminder, deleteReminder, updateReminder } = useReminders();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-500 text-white px-5 py-3 rounded-lg fixed bottom-6 right-6"
      >
        +
      </button>

      <ReminderList reminders={reminders} onDelete={deleteReminder} onUpdate={updateReminder} />

      {showModal && (
        <AddReminderModal onClose={() => setShowModal(false)} onAdd={addReminder} />
      )}
    </div>
  );
}

export default Home;
