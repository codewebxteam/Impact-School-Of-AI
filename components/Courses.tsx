'use client';

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Video, 
  PenTool, 
  Box, 
  Utensils, 
  Heart, 
  Star, 
  Coffee, 
  Camera, 
  Mic, 
  Zap, 
  Activity, 
  Wand2, 
  Megaphone 
} from "lucide-react";
import { trackMetaEvent } from "../utils/trackEvent";

const Courses = () => {
  const handleEnroll = () => {
    trackMetaEvent('InitiateCheckout', { content_name: `Bundle_All_13_Courses_499` });
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Tumhare diye gaye saare 13 courses, sundar icons aur colors ke sath
  const courseList = [
    { title: "Image to Video Generation Mastery", icon: Video, color: "text-blue-400", bg: "bg-blue-500/10" },
    { title: "2D Animation Course", icon: PenTool, color: "text-purple-400", bg: "bg-purple-500/10" },
    { title: "3D Animation Course", icon: Box, color: "text-cyan-400", bg: "bg-cyan-500/10" },
    { title: "Food AI Video Mastery", icon: Utensils, color: "text-orange-400", bg: "bg-orange-500/10" },
    { title: "Cute AI Baby Dance Video Mastery", icon: Heart, color: "text-pink-400", bg: "bg-pink-500/10" },
    { title: "Mastery In AI Influencers", icon: Star, color: "text-yellow-400", bg: "bg-yellow-500/10" },
    { title: "Junk Food Video Course", icon: Coffee, color: "text-amber-400", bg: "bg-amber-500/10" },
    { title: "AI Influencers Video Course", icon: Camera, color: "text-indigo-400", bg: "bg-indigo-500/10" },
    { title: "Baby Podcast Video Course", icon: Mic, color: "text-rose-400", bg: "bg-rose-500/10" },
    { title: "AI Motivational Video Course", icon: Zap, color: "text-yellow-300", bg: "bg-yellow-400/10" },
    { title: "Stickman Video Mastery Course", icon: Activity, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { title: "Anime Video Course Mastery", icon: Wand2, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10" },
    { title: "Promotional Video For Businesses", icon: Megaphone, color: "text-teal-400", bg: "bg-teal-500/10" },
  ];

  return (
    <section id="courses" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Sparkles size={16} /> The Ultimate Mega Bundle
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get All 13 Premium Courses <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              For Just ₹499
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto px-2">
            No hidden fees. No subscriptions. Pay once and get instant, lifetime access to our entire library of AI Filmmaking & Animation courses.
          </p>
        </motion.div>

        {/* Courses Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {courseList.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={handleEnroll}
              className="group bg-slate-900/40 border border-slate-800 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col items-start h-full hover:bg-slate-800/50 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300 cursor-pointer"
            >
              {/* Icon Container */}
              <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl mb-4 md:mb-6 ${course.bg} ${course.color} group-hover:scale-110 transition-transform duration-300`}>
                <course.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              
              {/* Course Title */}
              <h3 className="text-sm md:text-lg font-bold text-white mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors leading-snug">
                {course.title}
              </h3>
              
              {/* Included Badge (Sticks to bottom) */}
              <div className="mt-auto flex items-center gap-1.5 text-[10px] md:text-xs text-green-400 font-bold bg-green-500/10 border border-green-500/20 px-2.5 py-1.5 rounded-md w-full">
                <CheckCircle2 size={14} className="shrink-0" />
                <span>Included in Bundle</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Massive Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center flex flex-col items-center"
        >
          <button
            onClick={handleEnroll}
            className="group relative px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-white text-base md:text-xl shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer uppercase tracking-wide flex items-center gap-3"
          >
            Unlock All 13 Courses @ ₹499
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs md:text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-cyan-500"/> One-Time Payment</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-cyan-500"/> Lifetime Access</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-cyan-500"/> Access Anywhere</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Courses;