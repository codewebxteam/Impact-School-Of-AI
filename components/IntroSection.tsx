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
} from "lucide-react";

const IntroSection = () => {
  // Feature data based on your exact Seekho India content
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
      title: "Make Your First Film in 7 Days",
      desc: "Our structured path takes you from concept to a finished short film in just one week.",
      color: "text-pink-400",
      delay: 0.4,
    },
    {
      icon: Trophy,
      title: "Get Certified",
      desc: "Receive a Seekho India Certification to kickstart your creative career and build your portfolio.",
      color: "text-amber-400",
      delay: 0.5,
    },
  ];

  return (
    <section id="intro" className="py-24 bg-black relative overflow-hidden">
      {/* Background Ambience (Matches Hero) */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* ==================== PART 1: VIDEO SECTION ==================== */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-cyan-400" size={20} />
              <span className="text-cyan-400 font-semibold tracking-wide uppercase text-sm">
                Course Preview
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Watch the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Magic Happen
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              See how this course helps you create your first AI-powered short
              film in minutes.
            </p>
          </motion.div>

          {/* Pro Video Player Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto group"
          >
            {/* Glowing Border/Shadow Effect behind video */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-600 rounded-2xl opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-500" />

            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl z-10">
              <div className="aspect-video w-full relative">
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/3OY-Qk-YMwU?rel=0&modestbranding=1&controls=1&showinfo=0&disablekb=1"
                  title="Course Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* --- THE TRICK: Invisible Overlays to Block Share/Watch Later --- */}
                {/* 1. Top Right Blocker (Blocks Share & Watch Later buttons) */}
                <div
                  className="absolute top-0 right-0 w-[160px] h-[70px] z-20 bg-transparent cursor-default"
                  title="Share disabled for this preview"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* 2. Top Left Blocker (Blocks Video Title link) */}
                <div className="absolute top-0 left-0 w-[200px] h-[70px] z-20 bg-transparent cursor-default" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ==================== PART 2: FEATURES GRID ==================== */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why This Course is a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Game-Changer
              </span>
            </h2>
          </motion.div>

          {/* Grid Layout: Matches exact React project (3 top, 2 bottom) */}
          <div className="flex flex-col gap-6 max-w-6xl mx-auto">
            {/* Top Row: 3 Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.slice(0, 3).map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>

            {/* Bottom Row: 2 Items (Centered) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
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
      className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm hover:bg-slate-800/60 hover:border-slate-600 hover:-translate-y-2 transition-all duration-300 group h-full"
    >
      <div className="mb-6 inline-flex p-3 rounded-2xl bg-slate-950 border border-slate-800 shadow-lg group-hover:scale-110 transition-transform duration-300">
        <feature.icon size={32} className={feature.color} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
        {feature.title}
      </h3>
      <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
    </motion.div>
  );
};

export default IntroSection;