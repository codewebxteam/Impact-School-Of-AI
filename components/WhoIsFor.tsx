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
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const audience = [
    {
      icon: Sparkles,
      title: "AI Content Creators",
      desc: "Create viral AI videos, reels, influencers, and social media content with powerful AI tools.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "group-hover:border-cyan-500/50",
      delay: 0.1,
    },
    {
      icon: Clapperboard,
      title: "YouTubers & Influencers",
      desc: "Produce high-engagement videos, podcasts, animations, and cinematic content faster with AI.",
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "group-hover:border-red-500/50",
      delay: 0.2,
    },
    {
      icon: Laptop,
      title: "Freelancers & Agency Owners",
      desc: "Offer AI video creation, promotional ads, and content services to clients and grow your income.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "group-hover:border-purple-500/50",
      delay: 0.3,
    },
    {
      icon: Megaphone,
      title: "Business Owners & Marketers",
      desc: "Create eye-catching AI promotional videos and ads to grow your brand and attract customers.",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "group-hover:border-yellow-500/50",
      delay: 0.4,
    },
  ];

  return (
    <section id="who-is-for" className="py-20 md:py-28 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-indigo-900/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Users size={16} /> Perfect For You
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Who Is This Mega Bundle For?
          </h2>

          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto mb-10 md:mb-12">
            Whether you want to build a brand, scale an agency, or go viral, this toolkit is designed for anyone ready to dominate the AI content space.
          </p>

          {/* Enroll Button (Centered) */}
          <motion.button
            onClick={handleEnroll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 md:px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm md:text-lg shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-3 mx-auto uppercase tracking-wide cursor-pointer"
          >
            Start Learning @ ₹499 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.5 }}
              className={`group relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 ${item.border} hover:bg-slate-900/60 transition-all duration-500 text-center flex flex-col items-center h-full hover:-translate-y-2`}
            >
              {/* Icon Container with tinted background */}
              <div className={`w-20 h-20 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                <item.icon size={36} className={`${item.color} drop-shadow-[0_0_10px_currentColor]`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Soft Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-indigo-500/0 to-indigo-500/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;