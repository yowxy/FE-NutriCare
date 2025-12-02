import Navbar from "@/components/Navbar";
import {
  Camera,
  Heart,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Trophy,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Camera className="text-white" />,
    title: "Food Scanning",
    desc: "Instantly analyze nutritional content by scanning your meals",
  },
  {
    icon: <Heart className="text-white" />,
    title: "Mood-Based Recommendations",
    desc: "Get personalized food suggestions based on how you feel",
  },
  {
    icon: <MessageSquare className="text-white" />,
    title: "AI Nutrition Assistant",
    desc: "Chat with our AI for personalized nutrition advice",
  },
  {
    icon: <TrendingUp className="text-white" />,
    title: "Progress Tracking",
    desc: "Monitor your daily and weekly nutrition journey",
  },
  {
    icon: <Trophy className="text-white" />,
    title: "Gamification",
    desc: "Complete challenges and earn badges for healthy habits",
  },
  {
    icon: <Sparkles className="text-white" />,
    title: "Smart Insights",
    desc: "Receive AI-powered insights to optimize your nutrition",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-gray-800">
      <Navbar />
      <section className="max-w-5xl mx-auto px-6 pt-10 mb-30 text-center">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-emerald-100/50 text-emerald-400 text-[15px]">
          Your Personal Nutrition AI Companion
        </div>

        <h1 className="text-7xl font-bold mb-4">
          Welcome to <span className="text-emerald-400">NutriCare</span>
        </h1>

        <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-8">
          Transform your relationship with food through AI-powered nutrition
          tracking, personalized recommendations, and gamified healthy habits.
        </p>

        <div className="flex justify-center gap-4">
          <Link href={"/scan"}>
            <button className="px-6 py-3 bg-emerald-400 text-white rounded-xl shadow hover:shadow-lg transition font-semibold">
              Start Scanning Food
            </button>
          </Link>
          <Link href={"/assistant"}>
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl shadow hover:bg-gray-50 transition font-semibold">
              Try AI Assistant
            </button>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Everything You Need for Healthy Living
        </h1>

        <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-10">
          Powerful features to help you achieve your nutrition goals
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-start">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm shadow-emerald-50 hover:scale-105 transition backdrop-blur-sm"
            >
              <div className="p-3 w-fit bg-emerald-400 rounded-xl">
                {item.icon}
              </div>
              <h2 className="text-xl font-semibold mt-4 mb-2 text-black">
                {item.title}
              </h2>
              <p className="text-gray-500 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
