import afternoonIcon from "../assets/Sun.png";
import arrowleftright from "../assets/arrowleftright.png";
import zapIcon from "../assets/zap.png";

function Header() {
  return (
    <header className="py-4 bg-white">

      {/* top Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start px-4 sm:px-8 pt-4 gap-2 sm:gap-0">
        <div className="sm:-ml-7">
          <h1 className="text-xl sm:text-2xl font-bold">daily reminders</h1>
        </div>
        <h1 className="text-sm font-bold text-gray-400 cursor-pointer pt-1 sm:pt-1">view all</h1>
      </div>

      {/* Streak */}
      <div className="flex items-center gap-2 mt-2 px-4">
        <img src={zapIcon} alt="zap icon" className="w-4 h-4" />
        <h3 className="text-sm font-bold text-gray-400">your streaks</h3>
      </div>

      {/* calendar Card */}
      <div className="bg-green-500 rounded-2xl p-5 mt-6 shadow-xl mx-2 sm:mx-0">
        <h3 className="text-center text-black font-semibold text-lg mb-4">march 2023</h3>

        <div className="flex flex-wrap justify-between text-black text-sm font-medium gap-y-4">
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, index) => {
            const isToday = day === "We" || day === "Th" || day === "Fr";
            const isDim = day === "Mo" || day === "Tu" || day === "Sa";
            const number = 26 + index;
            const content = (
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isToday
                    ? "bg-lime-300 text-black font-bold"
                    : "bg-white text-green-500"
                }`}
              >
                {number > 30 ? number - 30 : number}
              </div>
            );

            return (
              <div
                key={day}
                className={`flex flex-col items-center ${
                  isDim && "opacity-50"
                } ${day === "Su" ? "w-10 h-14" : ""}`}
              >
                <span>{day}</span>
                {day === "Su" ? (
                  <div className="w-10 h-14 rounded-full bg-green-300 flex items-center justify-center text-black font-bold text-lg">
                    2
                  </div>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>

        {/* Down Arrow */}
        <div className="flex justify-center mt-3 text-white">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Afternoon Row */}
      <div className="flex items-center px-4 py-4 gap-2">
        <img src={afternoonIcon} alt="afternoon icon" className="w-4 h-4" />
        <h1 className="text-sm font-bold text-gray-400">afternoon</h1>
        <div className="ml-auto">
          <img src={arrowleftright} alt="arrowleftright icon" className="w-4 h-4" />
        </div>
      </div>
    </header>
  );
}

export default Header;
