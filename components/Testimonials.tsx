'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { trackMetaEvent } from "../utils/trackEvent";

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleEnroll = () => {
    trackMetaEvent('InitiateCheckout', { content_name: 'Testimonials_Enroll_499' });
    // Direct Razorpay payment link
    window.location.href = "https://rzp.io/rzp/impactschool";
  };

  const handleLoadMore = () => {
    setVisibleCount(testimonials.length);
  };

  const testimonials = [
    { id: "DWTq1bDgsF-", platform: "instagram" },
    { id: "DTIhzsADAW9", platform: "instagram" },
    { id: "DTQQLVTDKz8", platform: "instagram" },
    { id: "DUUdDsvAQ-1", platform: "instagram" },
    { id: "4gHqVg8SY2M", platform: "youtube" },
    { id: "5toLxPmN3-4", platform: "youtube" },
    { id: "DUmsnYPjDlN", platform: "instagram" },
    { id: "DX1HriPz62D", platform: "instagram" },
  ];

  return (
    <section
      id="reviews"
      // Padding Reduce kardi: Phone me 1/3 (py-6) aur Laptop me 1/2 (md:py-12)
      className="py-6 md:py-12 bg-black relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-yellow-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(234,179,8,0.2)]">
              <MessageCircle size={14} /> Student Showcases
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Real Results From <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Real Students
            </span>
          </h2>
          <p className="text-slate-400 text-xs md:text-base max-w-2xl mx-auto px-2">
            Watch our students transform their ideas into high-quality AI videos.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 mb-8 md:mb-10">
          <AnimatePresence>
            {testimonials.slice(0, visibleCount).map((item, index) => (
              <TestimonialCard key={index} item={item} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Load More & Enroll Buttons */}
        <div className="flex flex-col items-center gap-5">
          {visibleCount < testimonials.length && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleLoadMore}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-yellow-500/30 text-yellow-400 font-medium hover:bg-yellow-500/10 transition-all cursor-pointer text-sm"
            >
              Load More Videos <ChevronDown size={16} />
            </motion.button>
          )}

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={handleEnroll}
            className="group relative px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full font-bold text-white text-sm md:text-xl shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:shadow-[0_0_60px_rgba(245,158,11,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer uppercase tracking-wide flex items-center gap-3 w-full sm:w-auto justify-center mt-4"
          >
            Start Your Journey @ ₹499
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};

// Extremely Minimal Card with Pro-Overlays
const TestimonialCard = ({ item, index }: { item: any; index: number }) => {
  // IG URL mein hidecaption=true add kiya hai
  const embedUrl = item.platform === "instagram" 
    ? `https://www.instagram.com/reel/${item.id}/embed/?hidecaption=true` 
    : `https://www.youtube.com/embed/${item.id}?rel=0&modestbranding=1&controls=1&showinfo=0&playsinline=1`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative w-full pt-[177%] bg-slate-900 border border-slate-800 rounded-xl md:rounded-2xl overflow-hidden hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] transition-all duration-300 group"
    >
      {/* Video Iframe */}
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={embedUrl}
        title="Student Showcase"
        frameBorder="0"
        scrolling="no"
        allowTransparency={true}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* PRO TRICK: SOLID TOP BAR TO HIDE CREATOR ID & YT TITLES */}
      <div 
        className="absolute top-0 left-0 w-full h-[65px] bg-[#1a1a1a] z-10 border-b border-slate-800 flex items-center justify-center cursor-default pointer-events-none"
      >
         <span className="text-[10px] md:text-xs text-slate-500 font-medium tracking-widest uppercase flex items-center gap-1.5">
            <Sparkles size={12} className="text-yellow-500" /> Student Demo
         </span>
      </div>

      {/* PRO TRICK: SOLID BOTTOM BAR TO HIDE "VIEW ON INSTAGRAM" */}
      {/* (YouTube par bottom bar nahi chahiye warna seekbar block ho jayega) */}
      {item.platform === "instagram" && (
        <div 
          className="absolute bottom-0 left-0 w-full h-[45px] bg-[#1a1a1a] z-10 border-t border-slate-800 cursor-default pointer-events-none"
        />
      )}

      {/* Scroll Shields for Mobile */}
      <div className="absolute inset-y-0 left-0 w-4 z-20 bg-transparent" />
      <div className="absolute inset-y-0 right-0 w-4 z-20 bg-transparent" />
    </motion.div>
  );
};

export default Testimonials;