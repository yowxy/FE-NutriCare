"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(path);
  }, [path]);

  const linkClass = (href: string) =>
    `flex items-center gap-2 px-3 py-5 leading-none rounded-xl transition whitespace-nowrap ${activePath === href
      ? "text-emerald-500 bg-emerald-100/50 hover:bg-emerald-100/20"
      : "text-gray-500 hover:text-emerald-400 hover:bg-emerald-100/20"
    }`;

  return (
    <nav className="w-full flex justify-center sticky top-4 z-50 px-4">
      <div className="backdrop-blur-xl bg-white/60 border border-gray-200/50 shadow-lg shadow-emerald-50 rounded-2xl px-6 py-3.5 flex flex-wrap items-center justify-center gap-6 w-fit">
        <div className="text-xl font-bold text-emerald-400 shrink-0">NutriCare</div>
        <div className="flex flex-wrap items-center justify-center gap-1 font-medium">
          <Link href="/" className={linkClass("/")} suppressHydrationWarning>
            <Home className="w-4 h-4" /> Home
          </Link>
          <Link href="/scan" className={linkClass("/scan")} suppressHydrationWarning>
            <Camera className="w-4 h-4" /> Scan
          </Link>
          <Link href="/mood" className={linkClass("/mood")} suppressHydrationWarning>
            <Heart className="w-4 h-4" /> Mood Food
          </Link>
          <Link href="/assistant" className={linkClass("/assistant")} suppressHydrationWarning>
            <Bot className="w-4 h-4" /> AI Assistant
          </Link>
          <Link href="/daily" className={linkClass("/daily")} suppressHydrationWarning>
            <Calendar className="w-4 h-4" /> Daily
          </Link>
          <Link href="/weekly" className={linkClass("/weekly")} suppressHydrationWarning>
            <Calendar className="w-4 h-4" /> Weekly
          </Link>
          <Link href="/challenges" className={linkClass("/challenges")} suppressHydrationWarning>
            <Trophy className="w-4 h-4" /> Challenges
          </Link>
          <Link href="/history" className={linkClass("/history")} suppressHydrationWarning>
            <History className="w-4 h-4" /> History
          </Link>
          <Link href="/profile" className={linkClass("/profile")} suppressHydrationWarning>
            <User className="w-4 h-4" /> Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
