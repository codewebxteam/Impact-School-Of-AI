'use client';

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { trackMetaEvent } from "../utils/trackEvent";

const Courses = () => {
  const handleEnroll = (courseName: string) => {
    trackMetaEvent('InitiateCheckout', { content_name: `Course_Selection_${courseName}` });
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // 6 Dummy Courses added
  const courseList = [
    { title: "AI Filmmaking Masterclass", id: "F8MvAbu7Vm8" },
    { title: "ChatGPT & Prompt Engineering", id: "F8MvAbu7Vm8" },
    { title: "AI Image Generation (Midjourney)", id: "F8MvAbu7Vm8" },
    { title: "AI Automation for Business", id: "F8MvAbu7Vm8" },
    { title: "AI Video Editing & Animation", id: "F8MvAbu7Vm8" },
    { title: "AI Voiceover & Sound Design", id: "F8MvAbu7Vm8" }, // 6th Course
  ];

  return (
    <section id="courses" className="py-12 md:py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <Sparkles className="text-cyan-400" size={16} />
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs md:text-sm">Our Premium Courses</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6">
            Pick Any One, Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">All Free</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto px-2">
            Bhai, ye sabse badi deal hai. Sirf ₹499 mein koi bhi ek course lo aur baaki saare premium courses ka access bilkul free paao.
          </p>
        </motion.div>

        {/* Grid: Phone par 2 columns (grid-cols-2), Desktop par 3 columns (md:grid-cols-3) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {courseList.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900/50 border border-slate-800 rounded-2xl md:rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
            >
              {/* Video Section */}
              <div className="relative aspect-video w-full bg-black shrink-0">
                <iframe
                  className="w-full h-full object-cover"
                  src={`https://www.youtube.com/embed/${course.id}?rel=0&modestbranding=1`}
                  title={course.title}
                  allowFullScreen
                ></iframe>
                {/* Invisible shield to stop direct clicks on Youtube options */}
                <div className="absolute inset-0 bg-transparent z-10"></div>
              </div>
              
              {/* Content Section - Responsive Padding & Text Sizes */}
              <div className="p-3 md:p-6 flex flex-col flex-grow">
                <h3 className="text-sm md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors line-clamp-2 flex-grow">
                  {course.title}
                </h3>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3 md:mb-6">
                  <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-0">
                    <span className="text-slate-500 line-through text-[10px] md:text-sm">₹4,999</span>
                    <span className="text-base md:text-2xl font-black text-white leading-none">₹499</span>
                  </div>
                  <div className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-2 py-1 md:px-3 md:py-1 rounded-full text-[8px] md:text-[10px] lg:text-xs font-bold animate-pulse text-center whitespace-nowrap">
                    BUY 1 GET ALL FREE
                  </div>
                </div>

                <button
                  onClick={() => handleEnroll(course.title)}
                  className="w-full py-2.5 md:py-4 rounded-lg md:rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1.5 md:gap-2 text-xs md:text-base mt-auto"
                >
                  <span className="whitespace-nowrap">Buy @ ₹499</span>
                  <ArrowRight size={14} className="md:w-5 md:h-5 shrink-0" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;