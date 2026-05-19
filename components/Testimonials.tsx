'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight, ChevronDown, Sparkles, User, Star, CheckCircle2, Play } from "lucide-react";
import { trackMetaEvent } from "../utils/trackEvent";

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Default 4

  const handleEnroll = () => {
    trackMetaEvent('InitiateCheckout', { content_name: 'Testimonials_Enroll_499' });
    // Direct Razorpay payment link
    window.location.href = "https://rzp.io/rzp/impactschool";
  };

  const handleLoadMore = () => {
    const currentCount = visibleCount;
    const nextCount = Math.min(visibleCount + 4, testimonials.length);
    setVisibleCount(nextCount);

    setTimeout(() => {
      const element = document.getElementById(`testimonial-card-${currentCount}`);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 150);
  };

  // Naye YouTube Shorts Add Kar Diye Gaye Hain (Insta wale hata diye taaki play hone me dikkat na ho)
  const testimonials = [
    { id: "x8qi2YUoVNI", platform: "youtube", type: "AI Influencer", icon: User, color: "from-yellow-400 to-orange-500", views: "100K+" },
    { id: "S-eplXgAA3A", platform: "youtube", type: "AI Influencer", icon: Star, color: "from-amber-400 to-red-500", views: "50K+" },
    { id: "4gHqVg8SY2M", platform: "youtube", type: "AI Food Video", icon: Sparkles, color: "from-green-400 to-emerald-500", views: "250K+" },
  ];

  return (
    <section
      id="reviews"
      // Padding Reduce kardi: Phone me 1/3 (py-8) aur Laptop me 1/2 (md:py-12)
      className="py-8 md:py-12 bg-black relative overflow-hidden"
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
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(234,179,8,0.2)]">
              <MessageCircle size={14} /> Student Showcases
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
            Real Results From <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Real Students
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto px-2">
            Watch our students transform their ideas into high-quality AI videos. All created using our step-by-step framework.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-8 mb-12 md:mb-16">
          <AnimatePresence>
            {testimonials.slice(0, visibleCount).map((item, index) => (
              <TestimonialCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Load More & Enroll Buttons */}
        <div className="flex flex-col items-center gap-6">
          {visibleCount < testimonials.length && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleLoadMore}
              className="group flex items-center gap-3 px-8 py-4 rounded-full border border-yellow-500/30 bg-slate-900/50 text-yellow-400 font-bold hover:bg-yellow-500 hover:text-white transition-all cursor-pointer text-sm md:text-base shadow-[0_0_20px_rgba(234,179,8,0.15)] hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]"
            >
              Load More Videos <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </motion.button>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex justify-center mt-4"
          >
            <button
              onClick={handleEnroll}
              className="group relative px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full font-bold text-white text-[15px] md:text-xl shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:shadow-[0_0_60px_rgba(245,158,11,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer uppercase tracking-wide flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              Start Your Journey @ ₹499
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform shrink-0 md:w-6 md:h-6" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// Extremely Beautiful & Custom Native Player Card for Testimonials
const TestimonialCard = ({ item, index }: { item: any; index: number }) => {
  // YouTube ke liye optimal parameters
  const embedUrl = item.platform === "instagram" 
    ? `https://www.instagram.com/reel/${item.id}/embed/?hidecaption=true` 
    : `https://www.youtube.com/embed/${item.id}?rel=0&modestbranding=1&controls=0&showinfo=0&playsinline=1`;

  // Safely extracting the icon component to a Capitalized variable
  const Icon = item.icon;

  return (
    <motion.div
      id={`testimonial-card-${index}`}
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-[320px] lg:max-w-[340px] aspect-[9/16] bg-black border-[4px] md:border-[5px] border-[#121212] rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:shadow-[0_0_60px_rgba(245,158,11,0.2)] hover:border-[#1a1a1a] transition-all duration-500 group overflow-hidden ring-1 ring-white/5"
    >
      <div className={`absolute -inset-10 bg-gradient-to-r ${item.color || 'from-yellow-400 to-orange-500'} opacity-0 group-hover:opacity-20 blur-3xl -z-10 transition-opacity duration-700`} />

      <div className="absolute inset-0 bg-[#0a0a0a] overflow-hidden rounded-[1.75rem] md:rounded-[2.2rem]">
        {/* Iframe for smooth playback */}
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
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none z-10" />
      </div>

      <div className="absolute top-0 left-0 w-full pt-4 pb-6 px-4 bg-gradient-to-b from-black/90 via-black/60 to-transparent z-20 flex items-start justify-between pointer-events-none">
         <div className="flex items-center gap-3">
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${item.color || 'from-yellow-400 to-orange-500'} flex items-center justify-center shadow-lg p-[2px]`}>
               <div className="w-full h-full bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                  {Icon ? <Icon size={16} className="text-white drop-shadow-md" /> : <Sparkles size={16} className="text-white" />}
               </div>
            </div>
            <div className="flex flex-col">
               <span className="text-xs md:text-sm font-bold text-white tracking-wide drop-shadow-md">
                 {item.type || "Student Video"}
               </span>
               <span className="text-[9px] md:text-[10px] text-green-400 font-bold uppercase tracking-widest flex items-center gap-1 mt-0.5 drop-shadow-md">
                 <CheckCircle2 size={10} /> Verified Student
               </span>
            </div>
         </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[80px] md:h-[100px] bg-gradient-to-t from-black via-black/80 to-transparent z-20 flex flex-col justify-end px-4 pb-4 pointer-events-none">
         <div className="flex items-center justify-between w-full mb-3">
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-1.5 text-white/90 drop-shadow-md">
                  <Play size={14} className="fill-white/20" />
                  <span className="text-[10px] md:text-xs font-bold">{item.views || "10K"} views</span>
               </div>
            </div>
         </div>
         <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden flex">
            <motion.div 
               initial={{ width: "0%" }}
               whileInView={{ width: "100%" }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className={`h-full bg-gradient-to-r ${item.color || 'from-yellow-400 to-orange-500'}`} 
            />
         </div>
      </div>

    </motion.div>
  );
};

export default Testimonials;