import Navbar from "@/components/Navbar";
import { SquarePen, User } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-gray-800">
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 mt-8 pb-10">
        <h1 className="text-4xl font-black mb-2">My Profile</h1>

        <p className="text-[19px] text-gray-500 mx-auto mb-8">
          Manage your account settings and preferences
        </p>

        {/* Profile Picture */}
        <div className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm shadow-emerald-50 backdrop-blur-xl">
          <div className="relative">
            <div className="w-24 h-24 bg-emerald-400 rounded-2xl flex items-center justify-center text-white">
              <User className="w-12 h-12" />
            </div>

            <div className="absolute bottom-[-10px] right-[-10px] bg-white p-2 rounded-full shadow">
              <SquarePen className="w-4 h-4 text-emerald-400" />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-black text-gray-800">Sarah Johnson</h2>
            <p className="text-gray-500 mt-1">Member since Jan 2024</p>

            <div className="flex gap-3 mt-4">
              <div className="px-4 py-2 bg-emerald-50 text-emerald-400 rounded-full font-semibold text-sm">
                245 Points
              </div>
              <div className="px-4 py-2 bg-orange-50 text-orange-300 rounded-full font-semibold text-sm">
                7 Day Streak
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm shadow-emerald-50 backdrop-blur-xl mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Sarah Johnson"
                className="w-full px-3.5 py-2 text-sm rounded-xl border-2 border-gray-200 bg-gray-50 focus:ring-2 focus:ring-emerald-300 outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="sarah.j@example.com"
                className="w-full px-3.5 py-2 text-sm rounded-xl border-2 border-gray-200 bg-gray-50 focus:ring-2 focus:ring-emerald-300 outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Phone Number
              </label>
              <input
                type="text"
                defaultValue="+1 (555) 123-4567"
                className="w-full px-3.5 py-2 text-sm rounded-xl border-2 border-gray-200 bg-gray-50 focus:ring-2 focus:ring-emerald-300 outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Location</label>
              <input
                type="text"
                defaultValue="San Francisco, CA"
                className="w-full px-3.5 py-2 text-sm rounded-xl border-2 border-gray-200 bg-gray-50 focus:ring-2 focus:ring-emerald-300 outline-none transition"
              />
            </div>
          </div>
        </div>

        {/* Nutrition Goals */}
        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm shadow-emerald-50 backdrop-blur-xl mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Nutrition Goals
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Daily Calories
              </label>
              <input
                type="text"
                defaultValue="2000"
                className="w-full px-3.5 py-2 text-sm rounded-xl border-2 border-gray-200 bg-gray-50 focus:ring-2 focus:ring-emerald-300 outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Protein (g)
              </label>
              <input
                type="email"
                defaultValue="100"
                className="w-full px-3.5 py-2 text-sm rounded-xl border-2 border-gray-200 bg-gray-50 focus:ring-2 focus:ring-emerald-300 outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Water (glasses)
              </label>
              <input
                type="text"
                defaultValue="8"
                className="w-full px-3.5 py-2 text-sm rounded-xl border-2 border-gray-200 bg-gray-50 focus:ring-2 focus:ring-emerald-300 outline-none transition"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6 gap-4">
          <button className="px-6 py-2 text-sm text-red-500 border border-red-500 rounded-xl hover:bg-red-500 hover:text-white transition">
            Logout
          </button>
          <button className="px-8 py-2.5 bg-emerald-400 text-sm text-white rounded-xl hover:shadow-lg transition">
            Save Changes
          </button>
        </div>
      </section>
    </div>
  );
}
