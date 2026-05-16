'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Smartphone,
  Palette,
  Calendar,
  Trophy,
  Sparkles,
  PlayCircle
} from "lucide-react";

const IntroSection = () => {
  // Feature data based on your exact content
  const features = [
    {
      icon: Rocket,
      title: "Zero to Hero Learning",
      desc: "From idea generation to final editing — everything simplified for beginners.",
      color: "text-red-500",
      delay: 0.1,
    },
    {
      icon: Smartphone,
      title: "Designed for Mobile Users",
      desc: "No high-end laptop needed. Learn and create amazing films using just your phone!",
      color: "text-green-400",
      delay: 0.2,
    },
    {
      icon: Palette,
      title: "AI + Creativity",
      desc: "Master MidJourney, Runway ML, Eleven Labs, and DaVinci Resolve for studio-like results.",
      color: "text-purple-400",
      delay: 0.3,
    },
    {
      icon: Calendar,
      title: "Make Your First Videos In Just 3 Days",
      desc: "Our structured path takes you from concept to a finished short film in just one week.",
      color: "text-pink-400",
      delay: 0.4,
    },
    {
      icon: Trophy,
      title: "Get Certified",
      desc: "Receive a Certification to kickstart your creative career and build your portfolio.",
      color: "text-amber-400",
      delay: 0.5,
    },
  ];

  return (
    <section id="intro" className="py-20 md:py-28 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* ==================== PART 1: VIDEO SECTION ==================== */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <PlayCircle size={16} /> Course Preview
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Watch the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Magic Happen
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-lg px-2">
              See how this course helps you create your first AI-powered viral video in minutes.
            </p>
          </motion.div>

          {/* Pro Vertical Video Player Container (Designed like a Smartphone) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[320px] md:max-w-[360px] mx-auto group"
          >
            {/* Glowing Border Effect behind video */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-600 rounded-[2.5rem] opacity-30 blur-xl group-hover:opacity-60 transition-opacity duration-500" />

            {/* Phone Bezel */}
            <div className="relative pt-[177%] rounded-[2rem] overflow-hidden bg-black border-[6px] border-slate-900 shadow-2xl z-10">
              <iframe
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://www.youtube.com/embed/7rhWUTuk48Q?rel=0&modestbranding=1&controls=1&showinfo=0&playsinline=1"
                title="Course Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* PRO TRICK: TOP BLACK BAR OVERLAY TO HIDE YOUTUBE TITLE & CHANNEL NAME */}
              <div 
                className="absolute top-0 left-0 w-full h-[65px] bg-black z-20 flex items-center justify-center cursor-default pointer-events-none"
              >
                <span className="text-[10px] md:text-xs text-slate-400 font-bold tracking-widest uppercase flex items-center gap-1.5 border border-slate-700/50 bg-slate-900/50 px-3 py-1 rounded-full">
                  <Sparkles size={12} className="text-cyan-400" /> Intro Video
                </span>
              </div>
              
              {/* Invisible side blockers to prevent scroll trapping */}
              <div className="absolute inset-y-0 left-0 w-4 z-20 bg-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-4 z-20 bg-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* ==================== PART 2: FEATURES GRID ==================== */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why This Course is a <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Game-Changer
              </span>
            </h2>
          </motion.div>

          {/* Grid Layout: Matches exact exact design (3 top, 2 bottom) */}
          <div className="flex flex-col gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Top Row: 3 Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {features.slice(0, 3).map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>

            {/* Bottom Row: 2 Items (Centered) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:w-2/3 mx-auto">
              {features.slice(3, 5).map((feature, index) => (
                <FeatureCard key={index + 3} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted Card Component for cleaner code
const FeatureCard = ({ feature }: { feature: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: feature.delay, duration: 0.5 }}
      className="p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm hover:bg-slate-800/60 hover:border-slate-600 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 group h-full flex flex-col items-start"
    >
      <div className={`mb-5 md:mb-6 inline-flex p-3 md:p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <feature.icon size={28} className={`${feature.color} md:w-8 md:h-8`} />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
        {feature.title}
      </h3>
      <p className="text-slate-400 leading-relaxed text-sm md:text-base">
        {feature.desc}
      </p>
    </motion.div>
  );
};

export default IntroSection;