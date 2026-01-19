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
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const path = usePathname();
  const [activePath, setActivePath] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActivePath(path);
  }, [path]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [path]);

  const primaryNavItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Scan', href: '/scan', icon: Camera },
    { name: 'AI Assistant', href: '/assistant', icon: Bot },
  ];

  const secondaryNavItems = [
    { name: 'Mood Food', href: '/mood', icon: Heart },
    { name: 'Daily', href: '/daily', icon: Calendar },
    { name: 'Weekly', href: '/weekly', icon: Calendar },
    { name: 'Challenges', href: '/challenges', icon: Trophy },
    { name: 'History', href: '/history', icon: History },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  const linkClass = (href: string, isMobile = false) => {
    const isActive = activePath === href;

    if (isMobile) {
      return `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
          ? "bg-emerald-50 text-emerald-600 font-semibold"
          : "text-gray-600 hover:bg-gray-50 hover:text-emerald-500"
        }`;
    }

    return `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive
        ? "bg-emerald-50 text-emerald-600 shadow-sm"
        : "text-gray-600 hover:bg-gray-50 hover:text-emerald-500"
      }`;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                <Bot className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                NutriCare
              </span>
            </Link>

            {/* Desktop Navigation - Primary Items Only */}
            <div className="hidden md:flex items-center gap-2">
              {primaryNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={linkClass(item.href)}
                    suppressHydrationWarning
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Burger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 hover:bg-emerald-50 text-gray-600 hover:text-emerald-600 transition-all"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile/Burger Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${isMenuOpen ? "visible" : "invisible"
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Slide-in Menu Panel */}
        <div
          className={`absolute top-16 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="h-full overflow-y-auto p-6">

            {/* Primary Items in Mobile Menu */}
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Main Menu
              </h3>
              <div className="space-y-1">
                {primaryNavItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={linkClass(item.href, true)}
                      suppressHydrationWarning
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Secondary Items */}
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                More
              </h3>
              <div className="space-y-1">
                {secondaryNavItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={linkClass(item.href, true)}
                      suppressHydrationWarning
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16" />
    </>
  );
}
