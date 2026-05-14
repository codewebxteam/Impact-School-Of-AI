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
      name: "Faizan Ali",
      review: "The best part is practical learning. Sirf theory nahi — actual AI videos create karna sikhaya step-by-step.",
      stars: 5,
      initial: "F",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      name: "Aman Verma",
      review: "I created my first viral AI reel within 3 days. Ab mujhe content creation bahut easy lagta hai. Courses are super beginner friendly.",
      stars: 5,
      initial: "A",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      name: "Aditya Raj",
      review: "Pehle mujhe lagta tha AI videos banana difficult hoga, but yaha step-by-step itna simple way me sikhaya gaya ki ab daily content create kar raha hu.",
      stars: 5,
      initial: "A",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      name: "Rohit Singh",
      review: "Honestly ₹499 me itna valuable AI content milega expect nahi kiya tha. The viral video strategies are amazing.",
      stars: 5,
      initial: "R",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      name: "Simran Kaur",
      review: "Mujhe editing nahi aati thi, but ab AI tools se professional reels aur ads bana pa raha hu easily.",
      stars: 5,
      initial: "S",
      gradient: "from-rose-400 to-red-500",
    },
  ];

  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Sparkles size={16} /> Community Love
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            What Our Students Are <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Saying
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto px-2">
            Thousands of creators are already upgrading their skills with our AI bundles. Read their real experiences.
          </p>
        </motion.div>

        {/* Reviews Grid (Flexbox for perfect centering of 5 items) */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 md:mb-16">
          {reviews.map((item, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
              <ReviewCard item={item} index={index} />
            </div>
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
            className="group relative px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-white text-base md:text-xl shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer uppercase tracking-wide flex items-center gap-3"
          >
            Start Your Journey @ ₹499
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
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
      className="relative flex flex-col h-full p-6 md:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group"
    >
      <Quote
        className="absolute top-6 right-6 text-slate-800 group-hover:text-cyan-900/40 transition-colors duration-300 w-12 h-12 md:w-16 md:h-16 z-0"
      />
      <div className="flex gap-1 mb-5 md:mb-6 relative z-10">
        {[...Array(item.stars)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" />
        ))}
      </div>
      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 relative z-10 font-medium flex-grow italic">
        "{item.review}"
      </p>
      
      <div className="flex items-center gap-4 border-t border-slate-800/80 pt-5 md:pt-6 relative z-10 mt-auto">
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0`}
        >
          {item.initial}
        </div>
        <div>
          <h4 className="text-white font-bold text-sm md:text-base group-hover:text-cyan-400 transition-colors">
            {item.name}
          </h4>
          <div className="flex items-center gap-1.5 text-xs text-green-400 mt-1 font-medium bg-green-500/10 px-2 py-0.5 rounded-md w-fit">
            <CheckCircle2 size={12} className="shrink-0" />
            Verified Student
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reviews;