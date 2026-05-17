'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  PlayCircle,
  ChevronDown
} from "lucide-react";
import { trackMetaEvent } from "../utils/trackEvent";

const Courses = () => {
  const [visibleCount, setVisibleCount] = useState(8); // Start mein 8 courses dikhenge mobile aur laptop dono par

  const handleEnroll = () => {
    trackMetaEvent('InitiateCheckout', { content_name: `Bundle_All_13_Courses_499` });
    // Razorpay Link Integrated
    window.location.href = "https://rzp.io/rzp/impactschool";
  };

  const handleLoadMore = () => {
    const currentCount = visibleCount;
    // Baki bache hue courses load karne ke liye
    const nextCount = Math.min(visibleCount + 8, courseList.length);
    
    setVisibleCount(nextCount);

    // DOM update hone ke baad automatically naye pehle course pe smooth scroll karo
    setTimeout(() => {
      const element = document.getElementById(`course-card-${currentCount}`);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 150);
  };

  // Tumhare diye gaye images 1 to 13 sequence mein lagaye gaye hain
  const courseList = [
    { title: "Image to Video Generation", value: "₹2,499", image: "https://ik.imagekit.io/0s0fb4b2b/1.webp" },
    { title: "2D Animation Mastery", value: "₹1,999", image: "https://ik.imagekit.io/0s0fb4b2b/2.webp" },
    { title: "3D Animation Course", value: "₹2,999", image: "https://ik.imagekit.io/0s0fb4b2b/3.webp" },
    { title: "Mastery In AI Influencers", value: "₹3,499", image: "https://ik.imagekit.io/0s0fb4b2b/4.webp" },
    { title: "AI Influencers Video Ads", value: "₹2,499", image: "https://ik.imagekit.io/0s0fb4b2b/5.webp" },
    { title: "Cute AI Baby Dance Videos", value: "₹1,999", image: "https://ik.imagekit.io/0s0fb4b2b/6.webp" },
    { title: "Food AI Video Mastery", value: "₹1,499", image: "https://ik.imagekit.io/0s0fb4b2b/7.webp" },
    { title: "Baby Podcast Video Course", value: "₹1,999", image: "https://ik.imagekit.io/0s0fb4b2b/8.webp" },
    { title: "AI Motivational Videos", value: "₹1,499", image: "https://ik.imagekit.io/0s0fb4b2b/9.webp" },
    { title: "Stickman Video Mastery", value: "₹1,299", image: "https://ik.imagekit.io/0s0fb4b2b/10.webp" },
    { title: "Anime Video Course Mastery", value: "₹2,499", image: "https://ik.imagekit.io/0s0fb4b2b/11.webp" },
    { title: "Promotional Video For Business", value: "₹3,999", image: "https://ik.imagekit.io/0s0fb4b2b/12.webp" },
    { title: "AI Influencers Video Ads", value: "₹2,499", image: "https://ik.imagekit.io/0s0fb4b2b/13.webp" },
  ];

  return (
    <section id="courses" className="py-8 md:py-12 bg-black relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Sparkles size={16} /> The Ultimate Mega Bundle
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Get All 12+ Premium Courses <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              For Just ₹499
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto px-2">
            No hidden fees. Pay once and get instant, lifetime access to our entire library of high-income AI Filmmaking skills.
          </p>
        </motion.div>

        {/* Courses Grid: Mobile 1 column, Tablet 2, Desktop 3, Wide 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 mb-8 md:mb-10">
          <AnimatePresence>
            {courseList.slice(0, visibleCount).map((course, index) => (
              <motion.div
                key={course.title + index}
                id={`course-card-${index}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={handleEnroll}
                className="group flex flex-col bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer"
              >
                {/* Image Thumbnail Area */}
                <div className="relative w-full aspect-video bg-slate-900 overflow-hidden border-b border-slate-800">
                  {/* Actual Course Image */}
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle dark overlay that fades on hover */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                  
                  
                </div>
                
                {/* Course Details Area */}
                <div className="p-4 md:p-5 flex flex-col flex-grow bg-slate-900">
                  <h3 className="text-base md:text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
                    {course.title}
                  </h3>
                  
                  <div className="mt-auto pt-3 border-t border-slate-800/80 flex items-end justify-between">
                    <div className="flex flex-col">
                       <span className="text-[10px] md:text-xs text-slate-500 line-through font-medium mb-0.5">{course.value}</span>
                       <span className="text-xs md:text-sm font-black text-green-400 flex items-center gap-1">
                          <CheckCircle2 size={14} /> Included
                       </span>
                    </div>
                    
                    {/* Compact Fake "Add" button */}
                    <div className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                      Access Now
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More & Massive Bottom CTA */}
        <div className="flex flex-col items-center gap-6">
          
          {/* Load More Button */}
          {visibleCount < courseList.length && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleLoadMore}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-cyan-500/30 text-cyan-400 font-medium hover:bg-cyan-500/10 transition-all cursor-pointer text-sm md:text-base"
            >
              Load More Courses <ChevronDown size={18} />
            </motion.button>
          )}

          {/* Main Enroll Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-10 text-center flex flex-col items-center w-full"
          >
            <button
              onClick={handleEnroll}
              className="group relative px-6 md:px-12 py-4 md:py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-white text-[15px] md:text-xl shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer uppercase tracking-wide flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-center"
            >
              Get All 12+ Courses @ ₹499
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform shrink-0 md:w-6 md:h-6" />
            </button>
            
            <div className="mt-4 md:mt-6 flex flex-wrap justify-center gap-2 md:gap-5 text-[10px] md:text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1 md:gap-1.5"><CheckCircle2 size={12} className="text-cyan-500 md:w-3.5 md:h-3.5"/> One-Time Payment</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1 md:gap-1.5"><CheckCircle2 size={12} className="text-cyan-500 md:w-3.5 md:h-3.5"/> Lifetime Access</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1 md:gap-1.5"><CheckCircle2 size={12} className="text-cyan-500 md:w-3.5 md:h-3.5"/> Watch Anywhere</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Courses;