"use client";

import Navbar from "@/components/Navbar";
import {
  Camera,
  Heart,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <div className="min-h-screen w-full bg-white text-gray-800 font-sans relative">
      <Navbar />

      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

     

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-24 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-sm text-emerald-700 text-sm font-bold tracking-wide">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>AI-Powered Nutrition V2.0</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-[0.9] text-gray-900">
            Smart Nutrition <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600">
              Simplified.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Join 50,000+ users transforming their relationship with food through
            <span className="text-emerald-600 font-semibold"> computer vision calories tracking</span> and
            <span className="text-emerald-600 font-semibold"> neurological mood analysis</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-16">
            <Link href={"/scan"}>
              <motion.div
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all font-bold text-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <Camera className="w-5 h-5" />
                Start Scanning
              </motion.div>
            </Link>
            <Link href={"/assistant"}>
              <motion.div
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-2xl shadow-sm hover:shadow-md hover:bg-gray-50 hover:border-gray-300 transition-all font-bold text-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                AI Assistant
              </motion.div>
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200 border-y border-gray-100 py-6 bg-white/50 backdrop-blur-sm rounded-3xl">
            <div className="px-4">
              <div className="text-3xl font-black text-emerald-600">98%</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1">Accuracy</div>
            </div>
            <div className="px-4">
              <div className="text-3xl font-black text-emerald-600">50k+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1">Active Users</div>
            </div>
            <div className="px-4">
              <div className="text-3xl font-black text-emerald-600">2M+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1">Foods Logged</div>
            </div>
            <div className="px-4">
              <div className="text-3xl font-black text-emerald-600">4.9</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1">App Store</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900">
              Complete <span className="text-emerald-500 underline decoration-4 decoration-emerald-200 underline-offset-4">Health Stack</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
              Everything you need to optimize your biology, powered by state-of-the-art AI models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-start">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-emerald-100 shadow-[0_0_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.15)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-bl-[100px] -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform duration-500" />

                <div className="relative p-4 w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900">
              Simple as <span className="text-emerald-500">1-2-3</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              No complex tracking. No weighing scales. Just AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-100 to-transparent -z-10"></div>

            {[
              {
                step: "01",
                title: "Snap a Photo",
                desc: "Take a picture of your meal. Our computer vision identifies ingredients instantly.",
              },
              {
                step: "02",
                title: "Get Insights",
                desc: "See exact calories, macros, and micronutrients breakdown in seconds.",
              },
              {
                step: "03",
                title: "Eat Smarter",
                desc: "Receive real-time suggestions to balance your meal before you take the first bite.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-2xl font-black text-emerald-500 shadow-xl shadow-emerald-100 mx-auto mb-8 border-4 border-emerald-50 z-10 relative">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Social Proof */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Sparkles key={s} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
            "NutriCare changed how I view food. I've lost 15kg without ever feeling restricted."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
              {/* Placeholder for Avatar */}
              <div className="w-full h-full bg-gradient-to-tr from-emerald-400 to-teal-400"></div>
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900">Sarah Jenkins</div>
              <div className="text-sm text-emerald-600 font-medium">Verified User</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-emerald-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          {/* Abstract Shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
              Ready to Upgrade <br /> Your Biology?
            </h2>
            <p className="text-xl text-emerald-100/80 mb-10 max-w-2xl mx-auto">
              Join thousands of healthy achievers today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-emerald-950 rounded-2xl font-bold hover:bg-emerald-50 transition-colors shadow-xl">
                Get Started for Free
              </button>
              <button className="px-8 py-4 bg-emerald-800 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-colors border border-emerald-700">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Sparkles className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                </div>
                <span className="font-bold text-xl tracking-tight text-gray-900">NutriCare</span>
              </div>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Empowering the world to live healthier through accessible, AI-driven nutrition intelligence.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-emerald-50 hover:text-emerald-500 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-emerald-50 hover:text-emerald-500 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-emerald-50 hover:text-emerald-500 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Product</h4>
              <ul className="space-y-4 text-gray-500">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">API</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Integration</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Company</h4>
              <ul className="space-y-4 text-gray-500">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
              <ul className="space-y-4 text-gray-500">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 NutriCare AI Inc. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              System Operational
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
