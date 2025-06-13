import { useState } from "react";
import { PETS, CATEGORIES, FREQUENCIES } from "../utils/constants";
// import { v4 as uuidv4 } from "uuid";
import backButton from "../assets/backbutton.png";
import dateIcon from "../assets/dateIcon.png";
import timerIcon from "../assets/timerIcon.png";

function AddReminderModal() {
  const [form, setForm] = useState({
    pet: PETS[0],
    category: CATEGORIES[0],
    title: "",
    notes: "",
    time: "",
    frequency: FREQUENCIES[0],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const validate = () => {
  //   const errs = {};
  //   if (!form.title) errs.title = "Title is required";
  //   if (!form.time) errs.time = "Time is required";
  //   return errs;
  // };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96 max-h-[90vh] overflow-y-auto shadow-lg">

        {/* Header */}
        <div className="py-10 flex items-center justify-between mb-4 shadow-sm p-2 bg-white">
          <div className="flex items-center gap-19">
            <img src={backButton} alt="backButton Icon" className="w-6 h-6" />
            <h2 className="text-center font-semibold">Add Reminder</h2>
          </div>
          <h2 className="text-green-500 font-semibold cursor-pointer text-sm sm:text-base">Save</h2>
        </div>

        {/* Pet & Category */}
        <div className="rounded-lg flex flex-col sm:flex-row sm:gap-4 mb-3">
          <div className="w-full sm:w-1/2 mb-3 sm:mb-0">
            <label className="block mb-1 font-semibold text-gray-400">Select Pet</label>
            <select
              name="pet"
              className="border w-full p-2"
              value={form.pet}
              onChange={handleChange}
            >
              {PETS.map((pet) => (
                <option key={pet} value={pet}>{pet}</option>
              ))}
            </select>
          </div>

          <div className="w-full sm:w-1/2">
            <label className="block mb-1 font-semibold text-gray-400">Select Category</label>
            <select
              name="category"
              className="border w-full p-2"
              value={form.category}
              onChange={handleChange}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Reminder Info Card */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden mt-4">
          <div className="bg-black text-white px-4 py-2 font-semibold text-sm">
            Reminder Info
          </div>

          <div className="p-4">
            <p className="font-semibold mb-2 text-sm">Set a reminder for…</p>
            <div className="relative">
              <input
                type="text"
                maxLength={100}
                placeholder="Type here..."
                className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-600 text-sm"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                30/100
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center border-t px-4 py-3">
            <p className="text-sm font-semibold">Add Notes (Optional)</p>
            <button className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded">Add</button>
          </div>
        </div>

        {/* Reminder Settings Card */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden mt-4">
          <div className="bg-black text-white px-4 py-2 font-semibold text-sm flex justify-between items-center">
            <span>Reminder Settings</span>
            <span className="text-white transform rotate-180">⌃</span>
          </div>

          <div className="p-4 space-y-4 text-sm">
            {/* Start Date */}
            <div>
              <label className="font-semibold block mb-1">Start Date</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="23.02.205"
                  className="w-full border rounded-lg px-4 py-2 bg-gray-100"
                />
                <img src={dateIcon} alt="date icon" className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
              <p className="text-gray-400 mt-2 text-sm font-medium">+ Add End Date</p>
            </div>

            {/* Reminder Time */}
            <div>
              <label className="font-semibold block mb-1">Reminder Time</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="12:06 pm"
                  className="w-full border rounded-lg px-4 py-2 bg-gray-100"
                />
                <img src={timerIcon} alt="time icon" className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            {/* Reminder Frequency */}
            <div>
              <label className="font-semibold block mb-1">Reminder Frequency</label>
              <p className="text-gray-400 text-xs mb-1">How often should this reminder repeat?</p>
              <select className="w-full border rounded-lg px-4 py-2 bg-gray-100">
                <option>Everyday</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bottom Spacer for Scroll */}
        <div className="h-10"></div>
      </div>
    </div>
  );
}

export default AddReminderModal;
