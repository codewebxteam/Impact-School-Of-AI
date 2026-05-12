'use client';

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { trackMetaEvent } from "../utils/trackEvent";

const Reviews = () => {
  const handleEnroll = () => {
    trackMetaEvent('InitiateCheckout', { content_name: 'Reviews_Enroll_499' });
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const reviews = [
    {
      name: "Ravi Kumar",
      review:
        "Loved how easy it was to make a full short film using AI! The mobile-first teaching is amazing.",
      stars: 5,
      initial: "R",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      name: "Aisha Sharma",
      review:
        "Worth every rupee — fun, fast, and futuristic. I'm already using these skills for my freelance clients.",
      stars: 5,
      initial: "A",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      name: "Vikram Joshi",
      review:
        "Helped me start my new YouTube short film channel. The community support is also great.",
      stars: 5,
      initial: "V",
      gradient: "from-amber-400 to-orange-400",
    },
  ];

  return (
    <section
      id="reviews"
      /* STATIC SPACING CONTROLS EXACTLY AS REQUESTED */
      className="min-h-0 pt-12 pb-10 md:pt-20 md:pb-16 bg-black relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-cyan-400" size={20} />
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">
              Community Love
            </span>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4">
            What Students Are <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Saying
            </span>
          </h2>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
          {reviews.map((item, index) => (
            <ReviewCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Big Enroll Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button
            onClick={handleEnroll}
            className="group relative px-10 py-4 md:px-12 md:py-5 bg-white text-black rounded-full font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer uppercase tracking-wide"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 via-white to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-3">
              Buy Any @ ₹499
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Individual Review Card
const ReviewCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative p-6 md:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group"
    >
      <Quote
        className="absolute top-6 right-6 text-slate-800 group-hover:text-cyan-900/40 transition-colors duration-300 w-10 h-10 md:w-16 md:h-16"
      />
      <div className="flex gap-1 mb-4 md:mb-6 relative z-10">
        {[...Array(item.stars)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8 relative z-10 font-medium">
        "{item.review}"
      </p>
      <div className="flex items-center gap-4 border-t border-slate-800 pt-5 md:pt-6 relative z-10">
        <div
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg`}
        >
          {item.initial}
        </div>
        <div>
          <h4 className="text-white font-bold text-sm md:text-base group-hover:text-cyan-400 transition-colors">
            {item.name}
          </h4>
          <div className="flex items-center gap-1 text-[10px] md:text-xs text-slate-500 mt-0.5">
            <CheckCircle2 size={10} className="text-green-500" />
            Verified Student
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reviews;