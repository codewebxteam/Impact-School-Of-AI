'use client';

import React from "react";
import { motion } from "framer-motion";
import { Play, Sparkles, Film } from "lucide-react";

const ProjectsShowcase = () => {
  const projects = [
    {
      id: "jPN15THr5sw", // Video 1
      title: "AI Short Film - Futuristic City",
      delay: 0.1,
    },
    {
      id: "P-2hVvCS8v4", // Video 2
      title: "AI Ad Demo - Travel Brand",
      delay: 0.2,
    },
    {
      id: "Lj7SloPXl80", // Video 3
      title: "AI Cinematic Clip - Sci-Fi Scene",
      delay: 0.3,
    },
  ];

  return (
    <section
      id="projects"
      /* STATIC SPACING CONTROLS EXACTLY AS REQUESTED */
      className="min-h-0 py-12 pb-10 md:pt-20 md:pb-16 bg-black relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Film className="text-cyan-400" size={20} />
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">
              Student Work & Demos
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            See What's Possible with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              AI Filmmaking
            </span>
          </h2>

          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Sample AI-generated films created using the tools taught in the course.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Extracted Component for Individual Project Cards
const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: project.delay, duration: 0.5 }}
      className="group relative"
    >
      {/* Card Container */}
      <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300">
        {/* Video Wrapper */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            className="w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${project.id}?rel=0&modestbranding=1&controls=1&showinfo=0&disablekb=1&iv_load_policy=3`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* 1. Top Bar Blocker (Blocks Title, Share, Watch Later) */}
          <div
            className="absolute top-0 left-0 w-full h-[60px] z-20 bg-transparent cursor-default"
            onClick={(e) => e.stopPropagation()}
            title="Preview Mode"
          />
        </div>

        {/* Text Content */}
        <div className="p-4 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

          <h3 className="text-white font-semibold text-lg relative z-10 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsShowcase;