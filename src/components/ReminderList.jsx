import ReminderCard from "./ReminderCard";
import { groupRemindersByTime } from "../utils/helpers";
import expandIcon from "../assets/expand.png";
import dogFeet from "../assets/dogfeet.png";
import clockIcon from "../assets/alarmclock.png";
import repeatIcon from "../assets/everyday.png";
import completedIcon from "../assets/Completed Icon.png";

function ReminderList({ reminders, onDelete, onUpdate }) {
  const grouped = groupRemindersByTime(reminders);

  return (
    <div className="space-y-6 px-4 sm:px-0">
      {Object.entries(grouped).map(([slot, items]) => (
        <div
          key={slot}
          className="bg-white shadow-md rounded-lg p-6 sm:p-8 text-left"
        >
          {/* Header row */}
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-semibold">{slot}</h2>
            <img src={expandIcon} alt="expand icon" className="w-4 h-4" />
          </div>

          {/*For Browny, Time, Repeat*/}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-1">
              <img src={dogFeet} alt="dogfeet icon" className="w-4 h-4" />
              <h2 className="text-sm font-semibold text-gray-400">For Browny</h2>
            </div>

            <div className="flex items-center gap-1">
              <img src={clockIcon} alt="clock icon" className="w-4 h-4" />
              <span className="text-sm font-semibold text-gray-400">
                At 2:00 pm
              </span>
            </div>

            <div className="flex items-center gap-1">
              <img src={repeatIcon} alt="repeat icon" className="w-4 h-4" />
              <span className="text-sm font-semibold text-gray-400">
                Everyday
              </span>
            </div>
          </div>

          {/* Reminders */}
          <div className="mt-4 space-y-2">
            {items.map((r) => (
              <ReminderCard
                key={r.id}
                reminder={r}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
            ))}
          </div>
        </div>
      ))}

      {/*completed goals*/}
      <h1 className="ml-1 text-left text-sm font-bold text-gray-400">
        completed goals
      </h1>

      {/* Completed Task*/}
      <div className="bg-gray-300 shadow-md rounded-lg p-6 sm:p-8 text-left">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-semibold line-through text-gray-600">
            morning walk
          </h2>
          <img src={completedIcon} alt="completed icon" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default ReminderList;
