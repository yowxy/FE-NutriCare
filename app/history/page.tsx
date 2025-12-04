import Navbar from "@/components/Navbar";
import { Calendar, Clock } from "lucide-react";

const food = [
  {
    title: "Oatmeal with Berries",
    desc: "Breakfast",
    time: "08:00",
    calories: 320,
  },
  {
    title: "Grilled Chicken Salad",
    desc: "Lunch",
    time: "12:00",
    calories: 450,
  },
  {
    title: "Greek Yogurt",
    desc: "Snack",
    time: "20:00",
    calories: 180,
  },
];

export default function History() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-gray-800">
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 mt-8 pb-10">
        <h1 className="text-4xl font-black mb-2">Food History</h1>

        <p className="text-[19px] text-gray-500 mx-auto mb-8">
          Review your past meals and nutrition data
        </p>

        <div className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm shadow-emerald-50 backdrop-blur-xl">
          <div className="w-[52px] h-12 bg-emerald-400 rounded-xl flex items-center justify-center text-white">
            <Calendar className="w-6 h-6" />
          </div>

          <div className="flex w-full justify-between items-center">
            <div className="flex-1">
              <h2 className="font-black text-gray-800">Filter by Date</h2>
              <p className="text-gray-500 text-[15px] -mt-0.5">
                Showing last 7 days
              </p>
            </div>
            <button className="px-4 py-2 text-sm font-medium rounded-xl border-2 border-gray-200 bg-gray-100/80 hover:bg-amber-500 hover:text-white">
              Select Range
            </button>
          </div>
        </div>

        {/* List */}
        <div className="flex flex-col items-center p-6 mt-6 rounded-2xl bg-white border border-gray-100 shadow-sm shadow-emerald-50 backdrop-blur-xl">
          <div className="flex w-full items-center gap-3">
            <Calendar className="w-5.5 h-5.5 text-emerald-400" />

            <div className="flex w-full justify-between items-center">
              <h2 className="font-black text-gray-800 text-lg">Today</h2>
              <p className="text-gray-500 text-[15px] -mt-0.5">
                990 Total Calories
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] mt-4 mb-1 bg-gray-300" />

          {food.map((item, index) => (
            <div
              key={index}
              className="flex w-full p-4.5 items-center bg-gradient-to-r from-emerald-50/60 to-white mt-4 rounded-2xl leading-none"
            >
              <div className="flex w-full items-center">
                <Clock className="w-4 h-4 text-emerald-400" />
                <p className="ml-2 text-[15px] text-emerald-400">{item.time}</p>

                <div className="flex-1 ml-4 leading-none">
                  <h1 className="font-bold">{item.title}</h1>
                  <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
              <div className="flex-1 ml-4 leading-none text-end">
                <h1 className="font-bold">{item.calories}</h1>
                <p className="text-sm text-gray-500 mt-0.5">Calories</p>
              </div>
            </div>
          ))}
        </div>

        {/* List 2*/}
        <div className="flex flex-col items-center p-6 mt-6 rounded-2xl bg-white border border-gray-100 shadow-sm shadow-emerald-50 backdrop-blur-xl">
          <div className="flex w-full items-center gap-3">
            <Calendar className="w-5.5 h-5.5 text-emerald-400" />

            <div className="flex w-full justify-between items-center">
              <h2 className="font-black text-gray-800 text-lg">Yesterday</h2>
              <p className="text-gray-500 text-[15px] -mt-0.5">
                990 Total Calories
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] mt-4 mb-1 bg-gray-300" />

          {food.map((item, index) => (
            <div
              key={index}
              className="flex w-full p-4.5 items-center bg-gradient-to-r from-emerald-50/60 to-white mt-4 rounded-2xl leading-none"
            >
              <div className="flex w-full items-center">
                <Clock className="w-4 h-4 text-emerald-400" />
                <p className="ml-2 text-[15px] text-emerald-400">{item.time}</p>

                <div className="flex-1 ml-4 leading-none">
                  <h1 className="font-bold">{item.title}</h1>
                  <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
              <div className="flex-1 ml-4 leading-none text-end">
                <h1 className="font-bold">{item.calories}</h1>
                <p className="text-sm text-gray-500 mt-0.5">Calories</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="px-6 py-2 mt-6 text-sm font-medium rounded-xl border-2 border-gray-200 bg-gray-100/80 hover:bg-amber-500 hover:text-white">
            Load More History
          </button>
        </div>
      </section>
    </div>
  );
}
