'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  Video,
  Clapperboard,
  Laptop,
  Lightbulb,
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
      icon: Video,
      title: "Aspiring Filmmakers",
      desc: "Turn your vision into reality without expensive gear.",
      color: "text-cyan-400",
      delay: 0.1,
    },
    {
      icon: Clapperboard,
      title: "YouTubers & Creators",
      desc: "Create high-quality content faster to grow your channel.",
      color: "text-red-500",
      delay: 0.2,
    },
    {
      icon: Laptop,
      title: "Freelancers & Editors",
      desc: "Offer premium AI video services and earn more.",
      color: "text-purple-400",
      delay: 0.3,
    },
    {
      icon: Lightbulb,
      title: "Storytellers",
      desc: "Anyone who loves storytelling and wants to innovate.",
      color: "text-yellow-400",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="text-indigo-400" size={20} />
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm">
              Target Audience
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who Is This Course For?
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            This course is designed for anyone with a story to tell, regardless of technical skills.
          </p>

          {/* Enroll Button (Centered) */}
          <motion.button
            onClick={handleEnroll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all flex items-center gap-2 mx-auto uppercase tracking-wide"
          >
            Buy Any @ ₹499 <ArrowRight size={18} />
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
              className="group relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-300 text-center flex flex-col items-center h-full"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-black border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-indigo-500/30 transition-all duration-300 shadow-lg">
                <item.icon size={32} className={item.color} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;