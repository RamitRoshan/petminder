import { FaPaw } from "react-icons/fa";
import { FiClock, FiRepeat, FiExternalLink } from "react-icons/fi";

function ReminderCard({ reminder }) {
  return (

    <div className="bg-white shadow-md rounded-xl p-4 mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
      <div>
        <h3 className="text-base sm:text-lg font-bold mb-2">{reminder.title}</h3>

        <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <FaPaw />
            <span>{reminder.pet}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiClock />
            <span>At {reminder.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiRepeat />
            <span>{reminder.frequency}</span>
          </div>
        </div>
      </div>

      <FiExternalLink className="text-gray-400 sm:mt-1 self-end sm:self-auto" />
      
    </div>
  );
}

export default ReminderCard;
