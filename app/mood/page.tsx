"use client";
import Navbar from "@/components/Navbar";
import { Frown, Heart, Meh, Smile, Zap } from "lucide-react";
import { useState } from "react";

const mood = [
  {
    icon: <Smile className="w-10 h-10 text-amber-400" />,
    title: "Happy",
    bg_color: "bg-amber-50",
  },
  {
    icon: <Heart className="w-10 h-10 text-red-600" />,
    title: "Stressed",
    bg_color: "bg-red-100",
  },
  {
    icon: <Zap className="w-10 h-10 text-amber-600" />,
    title: "Energetic",
    bg_color: "bg-amber-100",
  },
  {
    icon: <Meh className="w-10 h-10 text-blue-500" />,
    title: "Tired",
    bg_color: "bg-blue-50",
  },
  {
    icon: <Frown className="w-10 h-10 text-fuchsia-600" />,
    title: "Anxious",
    bg_color: "bg-fuchsia-100",
  },
];

const menu = [
  {
    food: "Salmon with Quinoa",
    desc: "Rich in Omega-3 to reduce stress and anxiety",
    cal: 420,
  },
  {
    food: "Dark Chocolate & Berries",
    desc: "Antioxidants and mood-boosting compounds",
    cal: 180,
  },
  {
    food: "Green Tea & Almonds",
    desc: "L-theanine promotes calmness and focus",
    cal: 160,
  },
];

export default function MoodFood() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-gray-800">
      <Navbar />
      <section className="max-w-5xl mx-auto px-6 mt-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Mood-Based Food</h1>

        <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-10">
          Tell us how you&apos;re feeling, and we&apos;ll recommend the perfect
          meals
        </p>

        <div className="bg-white p-6 border border-gray-200/50 shadow-lg shadow-emerald-50 backdrop-blur-lg rounded-xl">
          <h1 className="font-bold text-xl mb-6">How are you feeling today?</h1>
          <div className="grid md:grid-cols-5 gap-5 text-center">
            {mood.map((item, index) => {
              const isActive = selected === item.title;

              return (
                <button
                  key={index}
                  onClick={() => setSelected(item.title)}
                  className={`p-6 rounded-2xl border transition flex flex-col items-center justify-center 
                    ${
                      isActive
                        ? `${item.bg_color} border-2 border-emerald-400 scale-110`
                        : "bg-gray-50 border-gray-100 hover:bg-gray-100"
                    }
                  `}
                >
                  <div className="flex justify-center text-4xl">
                    {item.icon}
                  </div>
                  <h2 className="mt-2 font-medium text-black">{item.title}</h2>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {selected && (
        <section className="max-w-5xl mx-auto px-6 mt-8 pb-10 text-center">
          <h1 className="font-bold text-2xl mb-2">
            Perfect Foods for When You&apos;re {selected}
          </h1>
          <p className="text-[17px] text-gray-500 mb-6">
            These meals are scientifically selected to support your mood
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-start">
            {menu.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm shadow-emerald-50 hover:scale-105 transition backdrop-blur-sm"
              >
                <h2 className="text-xl font-semibold mb-2 text-black">
                  {item.food}
                </h2>
                <p className="text-gray-500">{item.desc}</p>
                <div className="flex justify-between mt-4 items-center">
                  <p className="text-emerald-400">{item.cal} cal</p>
                  <span className="px-3 py-1.5 bg-green-50 text-emerald-400 rounded-full">
                    Add to plan
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-5 mt-8 rounded-2xl bg-white/80 border border-gray-100 shadow-sm shadow-emerald-50 transition backdrop-blur-sm">
            <h1 className="font-bold text-xl mb-2">💡 Quick Tip</h1>
            <p className="text-gray-500">
              Staying hydrated and eating regular meals can significantly
              improve your mood and energy levels throughout the day.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
