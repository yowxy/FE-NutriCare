import Navbar from "@/components/Navbar";
import { BicepsFlexed, Droplet, Flame, Salad, Star, Trophy, Zap } from "lucide-react";

const challenges = [
  {
    title: "7-Day Streak",
    desc: "Log your meals for 7 consecutive days",
    points: 50,
    progress: 5,
    goals: 7,
  },
  {
    title: "Protein Power",
    desc: "Hit your protein goal 5 times this week",
    points: 40,
    progress: 3,
    goals: 4,
  },
  {
    title: "Hydration Hero",
    desc: "Drink 8 glasses of water daily for 3 days",
    points: 25,
    progress: 2,
    goals: 3,
  },
];

const badge = [
  {
    icon: <Trophy className="w-14 h-14" />,
    title: "First Week",
    earned: true,
  },
  {
    icon: <Star className="w-14 h-14" />,
    title: "Streak Master",
    earned: true,
  },
  {
    icon: <BicepsFlexed className="w-14 h-14" />,
    title: "Protein Pro",
    earned: true,
  },
  {
    icon: <Droplet className="w-14 h-14" />,
    title: "Hydration King",
    earned: false,
  },
  {
    icon: <Salad className="w-14 h-14" />,
    title: "Veggie Lover",
    earned: false,
  },
  {
    icon: <Flame className="w-14 h-14" />,
    title: "Calorie Tracker",
    earned: false,
  },
];

export default function Challenges() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-gray-800">
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 mt-8">
        <h1 className="text-4xl font-black mb-2">Challenges & Badges</h1>

        <p className="text-[19px] text-gray-500 mx-auto mb-8">
          Complete challenges to earn points and unlock badges
        </p>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="flex flex-col items-center justify-center p-7 rounded-2xl bg-white border border-gray-100 shadow-sm shadow-emerald-50 backdrop-blur-xl">
            <div className="flex w-16 h-16 bg-emerald-400 justify-center items-center rounded-full">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-black text-[32px] mt-2">245</h1>
            <p className="text-sm text-gray-500 leading-none">Total Points</p>
          </div>

          <div className="flex flex-col items-center justify-center p-7 rounded-2xl bg-white border border-gray-100 shadow-sm shadow-emerald-50 backdrop-blur-xl">
            <div className="flex w-16 h-16 bg-emerald-400 justify-center items-center rounded-full">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-black text-[32px] mt-2">4</h1>
            <p className="text-sm text-gray-500 leading-none">Badges Earned</p>
          </div>

          <div className="flex flex-col items-center justify-center p-7 rounded-2xl bg-white border border-gray-100 shadow-sm shadow-emerald-50 backdrop-blur-xl">
            <div className="flex w-16 h-16 bg-emerald-400 justify-center items-center rounded-full">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-black text-[32px] mt-2">7</h1>
            <p className="text-sm text-gray-500 leading-none">Day Streak</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-8">
        <h1 className="font-black text-2xl mb-2">Active Challenges</h1>

        {challenges.map((item, index) => {
          const percentage = (item.progress / item.goals) * 100;

          return (
            <div
              key={index}
              className="flex flex-col p-6 mt-4 rounded-2xl bg-white border border-gray-100 shadow-sm shadow-emerald-50 backdrop-blur-xl"
            >
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h1 className="font-black text-xl">{item.title}</h1>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                  <p className="text-sm text-gray-500 mt-3">Progress</p>
                </div>
                <div className="flex flex-col justify-between text-end">
                  <span className="px-3 py-1 text-sm text-orange-400 bg-orange-100 rounded-full">
                    {item.points} points
                  </span>
                  <p className="font-semibold text-[15px]">
                    {item.progress}/{item.goals}
                  </p>
                </div>
              </div>
              <div className="w-full mt-1.5">
                <div className="w-full h-2 bg-green-200/40 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-400 rounded-l-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-10 mt-8">
        <h1 className="font-black text-2xl mb-2">Badges Collection</h1>
        <div className="grid grid-cols-6 gap-3">
          {badge.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col p-6 mt-4 justify-center items-center rounded-2xl border border-gray-100 shadow-sm shadow-emerald-50 backdrop-blur-xl ${
                item.earned ? "bg-white" : "bg-gray-100/60"
              } `}
            >
              <div
                className={`text-emerald-400 ${
                  item.earned ? "opacity-100" : "opacity-40 grayscale"
                }`}
              >
                {item.icon}
              </div>

              <h1
                className={`mt-2 font-semibold ${
                  item.earned ? "text-black" : "text-gray-500"
                }`}
              >
                {item.title}
              </h1>

              <p
                className={`text-sm ${
                  item.earned ? "text-emerald-400" : "text-gray-400"
                }`}
              >
                {item.earned ? "Earned!" : "Locked"}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
