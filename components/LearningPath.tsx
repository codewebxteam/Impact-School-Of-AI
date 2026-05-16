'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  NotebookPen,
  Palette,
  Clapperboard,
  Mic,
  Rocket,
  MapPin,
} from "lucide-react";

const LearningPath = () => {
  const steps = [
    {
      id: 1,
      title: "AI Content Creation Basics",
      desc: "Learn the essential AI tools, workflows, and platforms used to create viral digital content.",
      icon: Bot,
      color: "text-cyan-400",
      border: "group-hover:border-cyan-500/50",
      shadow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",
    },
    {
      id: 2,
      title: "AI Prompting & Script Writing",
      desc: "Master ChatGPT prompting to generate video ideas, hooks, scripts, captions, and storytelling concepts.",
      icon: NotebookPen,
      color: "text-blue-400",
      border: "group-hover:border-blue-500/50",
      shadow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
    },
    {
      id: 3,
      title: "AI Influencer & Character Creation",
      desc: "Create realistic AI influencers, anime characters, baby avatars, and cinematic personalities.",
      icon: Palette,
      color: "text-indigo-400",
      border: "group-hover:border-indigo-500/50",
      shadow: "group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]",
    },
    {
      id: 4,
      title: "Viral Video & Animation Creation",
      desc: "Generate AI reels, stickman animations, baby dance videos, anime edits, and cinematic scenes.",
      icon: Clapperboard,
      color: "text-purple-400",
      border: "group-hover:border-purple-500/50",
      shadow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    },
    {
      id: 5,
      title: "AI Voiceovers & Podcast Creation",
      desc: "Create realistic AI voices, motivational narrations, baby podcasts, and engaging audio content.",
      icon: Mic,
      color: "text-pink-400",
      border: "group-hover:border-pink-500/50",
      shadow: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]",
    },
    {
      id: 6,
      title: "Business Ads & Content Monetization",
      desc: "Learn to create promotional videos, client projects, viral content, and monetize your AI skills online.",
      icon: Rocket,
      color: "text-red-400",
      border: "group-hover:border-red-500/50",
      shadow: "group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]",
    },
  ];

  return (
    <section 
      id="modules" 
      // Padding Reduce kardi: Phone me 1/3 (py-6) aur Laptop me 1/2 (md:py-12)
      className="py-6 md:py-12 bg-black relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <MapPin size={14} /> The Roadmap
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Your Blueprint to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Content Creation Mastery
            </span>
          </h2>
          <p className="text-slate-400 text-xs md:text-base max-w-2xl mx-auto px-2">
            A structured 6-step journey taking you from basic AI tools to creating viral videos, influencers, and monetizing your skills.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-red-500 rounded-full opacity-30 transform md:-translate-x-1/2" />

          {/* Roadmap cards */}
          <div className="flex flex-col gap-8 md:gap-16">
            {steps.map((step, index) => (
              <TimelineItem key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Individual Timeline Item Component
interface TimelineItemProps {
  step: any;
  index: number;
}

const TimelineItem = ({ step, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`relative flex items-center md:justify-between ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="hidden md:block w-5/12" />

      {/* Center Dot Indicator */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-slate-950 border-[3px] md:border-4 border-slate-800 shadow-xl shadow-black flex items-center justify-center relative group-hover:scale-110 transition-transform">
          <div
            className={`w-2.5 h-2.5 md:w-4 md:h-4 rounded-full ${step.color.replace(
              "text-",
              "bg-"
            )} shadow-[0_0_10px_currentColor]`}
          />
        </div>
      </div>

      {/* Content Card */}
      <div className="w-full md:w-5/12 pl-16 md:pl-0 group cursor-default">
        <div
          className={`p-5 md:p-6 rounded-2xl md:rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 ${step.border} ${step.shadow} flex flex-col`}
        >
          {/* Step Badge */}
          <div
            className={`inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-950/50 border border-slate-800 text-[10px] md:text-xs font-bold mb-4 w-fit ${step.color}`}
          >
            Step 0{step.id}
          </div>

          {/* Header area: Icon + Title inline */}
          <div className="flex items-center gap-3 md:gap-4 mb-3">
            <div
              className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner`}
            >
              <step.icon size={20} className={`${step.color} drop-shadow-[0_0_8px_currentColor] md:w-6 md:h-6`} />
            </div>
            <h3 className="text-base md:text-xl font-bold text-white group-hover:text-cyan-50 transition-colors leading-snug">
              {step.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed text-left">
            {step.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LearningPath;