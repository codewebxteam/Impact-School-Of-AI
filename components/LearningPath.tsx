'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  NotebookPen,
  Palette,
  Clapperboard,
  Music,
  MonitorPlay,
  MapPin,
} from "lucide-react";

const LearningPath = () => {
  const steps = [
    {
      id: 1,
      title: "Foundation & AI Tools",
      desc: "Setup your workspace. Learn the basics of Generative AI and install the essential tools.",
      icon: Bot,
      color: "text-cyan-400",
      border: "group-hover:border-cyan-500/50",
      shadow: "group-hover:shadow-cyan-500/20",
    },
    {
      id: 2,
      title: "Story Planning & Prompting",
      desc: "Master the art of ChatGPT prompting to write compelling scripts and screenplays.",
      icon: NotebookPen,
      color: "text-blue-400",
      border: "group-hover:border-blue-500/50",
      shadow: "group-hover:shadow-blue-500/20",
    },
    {
      id: 3,
      title: "Character & Environment Design",
      desc: "Use Midjourney to create consistent characters and breathtaking cinematic worlds.",
      icon: Palette,
      color: "text-indigo-400",
      border: "group-hover:border-indigo-500/50",
      shadow: "group-hover:shadow-indigo-500/20",
    },
    {
      id: 4,
      title: "Animation & Scene Generation",
      desc: "Bring images to life. Learn Runway Gen-2 and Pika Labs to animate your shots.",
      icon: Clapperboard,
      color: "text-purple-400",
      border: "group-hover:border-purple-500/50",
      shadow: "group-hover:shadow-purple-500/20",
    },
    {
      id: 5,
      title: "Voice, Sound & Music with AI",
      desc: "Generate realistic voiceovers with ElevenLabs and compose custom soundtracks.",
      icon: Music,
      color: "text-pink-400",
      border: "group-hover:border-pink-500/50",
      shadow: "group-hover:shadow-pink-500/20",
    },
    {
      id: 6,
      title: "Editing & Publishing Your Film",
      desc: "Compile everything in an editor, color grade, and publish your masterpiece.",
      icon: MonitorPlay,
      color: "text-red-400",
      border: "group-hover:border-red-500/50",
      shadow: "group-hover:shadow-red-500/20",
    },
  ];

  return (
    /* SPACE MANAGEMENT EXACTLY AS REQUESTED */
    <section className="pt-12 pb-10 md:pt-20 md:pb-16 bg-black relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="text-cyan-400" size={20} />
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">
              The Roadmap
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Learning <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Path to Mastery
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A structured 6-step journey taking you from a simple idea to a finished, professional short film.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-red-500 rounded-full opacity-30 transform md:-translate-x-1/2" />

          {/* Roadmap cards */}
          <div className="flex flex-col gap-8 md:gap-20">
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center md:justify-between ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="hidden md:block w-5/12" />

      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
        <div className="w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-800 shadow-xl shadow-black flex items-center justify-center relative group-hover:scale-110 transition-transform">
          <div
            className={`w-4 h-4 rounded-full ${step.color.replace(
              "text-",
              "bg-"
            )} shadow-[0_0_10px_currentColor]`}
          />
        </div>
      </div>

      <div className="w-full md:w-5/12 pl-20 md:pl-0 group">
        <div
          className={`p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${step.border} hover:shadow-lg ${step.shadow}`}
        >
          <div
            className={`inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-bold mb-4 ${step.color}`}
          >
            Step 0{step.id}
          </div>

          <div className="flex items-start gap-4">
            <div
              className={`p-3 rounded-xl bg-slate-950 border border-slate-800 shrink-0`}
            >
              <step.icon size={24} className={step.color} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-50 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LearningPath;