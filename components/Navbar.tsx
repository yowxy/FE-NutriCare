"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Camera,
  Heart,
  Bot,
  Calendar,
  Trophy,
  History,
  User,
} from "lucide-react";

export default function Navbar() {
  const path = usePathname();

  const linkClass = (href: string) =>
    `flex px-3 py-3.5 items-center gap-2 rounded-lg transition ${
      path === href
        ? "text-emerald-500 bg-emerald-100/50 hover:bg-emerald-100/30"
        : "text-gray-500 hover:text-emerald-400 hover:bg-emerald-100/30"
    }`;

  return (
    <nav className="w-full flex justify-center sticky top-4 z-50">
      <div className="backdrop-blur-xl bg-white/60 border border-gray-200/50 shadow-lg shadow-emerald-50 rounded-2xl px-6 py-3.5 flex items-center gap-7 w-fit">
        <div className="text-xl font-bold text-emerald-400">NutriCare</div>
        <div className="hidden md:flex items-center gap-1 font-medium mx-auto">
          <Link href="/" className={linkClass("/")}>
            <Home className="w-4 h-4" /> Home
          </Link>
          <Link href="/scan" className={linkClass("/scan")}>
            <Camera className="w-4 h-4" /> Scan
          </Link>
          <Link href="/mood" className={linkClass("/mood")}>
            <Heart className="w-4 h-4" /> Mood Food
          </Link>
          <Link href="/assistant" className={linkClass("/assistant")}>
            <Bot className="w-4 h-4" /> AI Assistant
          </Link>
          <Link href="/daily" className={linkClass("/daily")}>
            <Calendar className="w-4 h-4" /> Daily
          </Link>
          <Link href="/weekly" className={linkClass("/weekly")}>
            <Calendar className="w-4 h-4" /> Weekly
          </Link>
          <Link href="/challenges" className={linkClass("/challenges")}>
            <Trophy className="w-4 h-4" /> Challenges
          </Link>
          <Link href="/history" className={linkClass("/history")}>
            <History className="w-4 h-4" /> History
          </Link>
          <Link href="/profile" className={linkClass("/profile")}>
            <User className="w-4 h-4" /> Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}