'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, PlayCircle } from "lucide-react";
// Agar aap custom event track karna chahein toh rakh sakte hain, warna iski zaroorat nahi hai.

const Hero = () => {
  const handleEnroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Smooth scroll to Pricing Section
    const element = document.querySelector("#pricing-section");
    if (element) {
      const offset = 80; // Navbar ki height compensate karne ke liye
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      // Padding Reduce kardi hai: Phone me 1/3 aur Laptop me 1/2 (Header height ko dhyan me rakhte hue)
      className="relative min-h-0 flex flex-col items-center pt-24 pb-4 md:pt-28 md:pb-10 overflow-hidden bg-black"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center mt-2 md:mt-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-md text-cyan-400 text-xs md:text-sm font-semibold mb-4 md:mb-6 hover:border-cyan-500/50 transition-colors cursor-default shadow-lg shadow-cyan-900/10"
        >
          <Sparkles size={16} className="shrink-0" />
          <span className="leading-tight">Buy 1 Course at ₹499 & Get 12+ AI Courses Absolutely FREE</span>
        </motion.div>

        {/* 1. Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]"
        >
          Master AI Content Creation & <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Building Your Online Income 
          </span>
        </motion.h1>

        {/* 2. Intro Video Player (Moved here, shaped like a phone) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-[260px] md:max-w-[300px] mx-auto group mb-8 md:mb-10"
        >
          {/* Glowing Border Effect behind video */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-600 rounded-[2.5rem] opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-500" />

          {/* Phone Bezel */}
          <div className="relative pt-[177%] rounded-[2rem] overflow-hidden bg-black border-[4px] md:border-[6px] border-slate-900 shadow-2xl z-10">
            <iframe
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://www.youtube.com/embed/7rhWUTuk48Q?rel=0&modestbranding=1&controls=1&showinfo=0&playsinline=1"
              title="Course Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* PRO TRICK: TOP BLACK BAR OVERLAY TO HIDE YOUTUBE TITLE */}
            <div 
              className="absolute top-0 left-0 w-full h-[55px] md:h-[65px] bg-black z-20 flex items-center justify-center cursor-default pointer-events-none"
            >
              <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase flex items-center gap-1.5 border border-slate-700/50 bg-slate-900/50 px-3 py-1 rounded-full">
                <PlayCircle size={22} className="text-white" /> Course Introduction
              </span>
            </div>
            
            {/* Invisible side blockers to prevent scroll trapping */}
            <div className="absolute inset-y-0 left-0 w-4 z-20 bg-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-4 z-20 bg-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* 3. Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-slate-400 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Learn how to create AI influencers, baby podcasts, viral reels, funny AI videos, business promotional ads, cinematic content, and motivational videos using powerful AI tools — without coding or editing experience. 
        </motion.p>

        {/* 4. CTA Area (Button at the bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-4 px-4"
        >
          <button
            onClick={handleEnroll}
            className="group relative px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-white text-[15px] md:text-lg shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer w-full sm:w-auto"
          >
            <span className="relative flex items-center justify-center gap-2 uppercase tracking-wide">
              Buy any @ ₹499 and get 12+ Courses free
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform shrink-0"
                size={20}
              />
            </span>
          </button>

          <div className="flex flex-wrap justify-center gap-3 md:gap-8 text-xs md:text-sm text-slate-500 font-medium mt-2">
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle2 size={16} className="text-cyan-500" />
              Limited Time Offer
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle2 size={16} className="text-cyan-500" />
              Lifetime Access
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle2 size={16} className="text-cyan-500" />
              Certified Course
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;