import { useState } from "react";
import { format, addDays } from "date-fns";

function CalendarStrip() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dates = [...Array(7)].map((_, i) => addDays(new Date(), i));

  return (
    <div className="flex overflow-x-auto gap-2 p-2 bg-white shadow rounded mb-4">
      {dates.map((date, idx) => {
        const isToday = format(date, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
        const isSelected = format(date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");

        return (
          <button
            key={idx}
            className={`px-4 py-2 rounded-full border ${
              isSelected ? "bg-blue-500 text-white" : isToday ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setSelectedDate(date)}
          >
            <div className="text-sm">{format(date, "EEE")}</div>
            <div className="text-lg font-bold">{format(date, "d")}</div>
          </button>
        );
      })}
    </div>
  );
}

export default CalendarStrip;
