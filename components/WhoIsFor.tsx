'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Clapperboard,
  Laptop,
  Megaphone,
  ArrowRight,
  Users,
} from "lucide-react";
import { trackMetaEvent } from "../utils/trackEvent";

const WhoIsFor = () => {
  const handleEnroll = () => {
    trackMetaEvent('InitiateCheckout', { content_name: 'WhoIsFor_Enroll_499' });
    // Yahan direct Razorpay payment link add kar diya hai
    window.location.href = "https://rzp.io/rzp/impactschool";
  };

  const audience = [
    {
      icon: Sparkles,
      title: "AI Content Creators",
      desc: "Create viral AI videos, reels, influencers, and social media content with powerful AI tools.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "group-hover:border-cyan-500/40",
      delay: 0.1,
    },
    {
      icon: Clapperboard,
      title: "YouTubers & Influencers",
      desc: "Produce high-engagement videos, podcasts, animations, and cinematic content faster with AI.",
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "group-hover:border-red-500/40",
      delay: 0.2,
    },
    {
      icon: Laptop,
      title: "Freelancers & Agencies",
      desc: "Offer AI video creation, promotional ads, and content services to clients and grow your income.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "group-hover:border-purple-500/40",
      delay: 0.3,
    },
    {
      icon: Megaphone,
      title: "Business Owners",
      desc: "Create eye-catching AI promotional videos and ads to grow your brand and attract customers.",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "group-hover:border-yellow-500/40",
      delay: 0.4,
    },
  ];

  return (
    <section 
      id="who-is-for" 
      // Padding Reduce kardi: Phone me 1/3 (py-8) aur Laptop me 1/2 (md:py-14)
      className="py-8 md:py-14 bg-black relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(99,102,241,0.2)]">
              <Users size={14} /> Perfect For You
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Who Is This Mega Bundle For?
          </h2>

          <p className="text-slate-400 text-xs md:text-base max-w-2xl mx-auto mb-8 px-2">
            Whether you want to build a brand, scale an agency, or go viral, this toolkit is designed for anyone ready to dominate the AI content space.
          </p>

          {/* Enroll Button (Centered & Compact) */}
          <motion.button
            onClick={handleEnroll}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm md:text-base shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-2 mx-auto uppercase tracking-wide cursor-pointer"
          >
            Start Learning @ ₹499 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Cards Grid - Updated with Inline Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {audience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.4 }}
              className={`group relative p-5 md:p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm ${item.border} hover:bg-slate-800/50 hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5`}
            >
              {/* Header area: Icon + Title inline */}
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                {/* Icon Container */}
                <div className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                  <item.icon size={24} className={`${item.color} drop-shadow-[0_0_8px_currentColor]`} />
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed text-left">
                {item.desc}
              </p>

              {/* Soft Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-500/0 to-indigo-500/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;