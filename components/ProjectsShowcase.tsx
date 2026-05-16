'use client';

import React from "react";
import { motion } from "framer-motion";
import { Film, Sparkles } from "lucide-react";

const ProjectsShowcase = () => {
  // Tumhare diye gaye 4 naye Instagram Reels ke IDs
  const projects = [
    { id: "DXv2fPvpa__", delay: 0.1 },
    { id: "DUQojqujOJx", delay: 0.2 },
    { id: "DUONAqlkm8S", delay: 0.3 },
    { id: "DWYGeuFSZyo", delay: 0.4 },
  ];

  return (
    <section
      id="projects"
      // Padding Reduce kardi: Phone me 1/3 (py-6) aur Laptop me 1/2 (md:py-12)
      className="py-6 md:py-12 bg-black relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

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
            <span className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Film size={14} /> Showcase Gallery
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            See What's Possible With <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              AI Content Creation
            </span>
          </h2>

          <p className="text-slate-400 text-xs md:text-base max-w-2xl mx-auto px-2">
            Experience the high-quality viral content you will learn to create using our Mega Bundle strategies.
          </p>
        </motion.div>

        {/* Videos Grid - Phone par 2 Column, Desktop par 4 Column */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Extracted Component for Individual Project Cards
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: project.delay, duration: 0.5 }}
      className="group relative w-full pt-[177%] bg-slate-900 border border-slate-800 rounded-xl md:rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300"
    >
      {/* Video Iframe */}
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.instagram.com/reel/${project.id}/embed/?hidecaption=true`}
        title="AI Showcase Video"
        frameBorder="0"
        scrolling="no"
        allowTransparency={true}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* PRO TRICK: SOLID TOP BAR OVERLAY TO COMPLETELY HIDE CREATOR ID */}
      <div 
        className="absolute top-0 left-0 w-full h-[65px] bg-[#1a1a1a] z-10 border-b border-slate-800 flex items-center justify-center cursor-default pointer-events-none"
      >
         <span className="text-[10px] md:text-xs text-slate-500 font-medium tracking-widest uppercase flex items-center gap-1.5">
            <Sparkles size={12} className="text-cyan-500" /> Student Demo
         </span>
      </div>

      {/* PRO TRICK: SOLID BOTTOM BAR OVERLAY TO COMPLETELY HIDE "VIEW ON INSTAGRAM" */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[45px] bg-[#1a1a1a] z-10 border-t border-slate-800 cursor-default pointer-events-none"
      />
      
      {/* Invisible shield around edges to make scrolling on mobile easier without getting trapped in the iframe */}
      <div className="absolute inset-y-0 left-0 w-4 z-20 bg-transparent" />
      <div className="absolute inset-y-0 right-0 w-4 z-20 bg-transparent" />
    </motion.div>
  );
};

export default ProjectsShowcase;