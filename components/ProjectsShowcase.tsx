'use client';

import React from "react";
import { motion } from "framer-motion";
import { 
  Film, 
  User, 
  Heart, 
  Coffee, 
  Zap, 
  Wand2, 
  Megaphone, 
  Mic, 
  Activity, 
  Utensils,
  Play,
  Sparkles
} from "lucide-react";

const ProjectsShowcase = () => {

  const projects = [
    { id: "DXv2fPvpa__", platform: "instagram", type: "Talking Food Ad", icon: User, color: "from-cyan-400 to-blue-500", views: "1.2M" },
    { id: "DUQojqujOJx", platform: "instagram", type: "AI Influencer", icon: Heart, color: "from-pink-400 to-rose-500", views: "850K" },
    { id: "DUONAqlkm8S", platform: "instagram", type: "AI Influencer", icon: Coffee, color: "from-orange-400 to-amber-500", views: "2.1M" },
    { id: "DWYGeuFSZyo", platform: "instagram", type: "Cinematic Scene", icon: Film, color: "from-purple-400 to-indigo-500", views: "3.4M" },
    { id: "DWTq1bDgsF-", platform: "instagram", type: "Talking Baby", icon: Zap, color: "from-yellow-400 to-orange-500", views: "920K" },
    { id: "DTIhzsADAW9", platform: "instagram", type: "AI Influencer", icon: Wand2, color: "from-fuchsia-400 to-purple-500", views: "1.5M" },
    { id: "4gHqVg8SY2M", platform: "youtube", type: "Junk Food AI", icon: Megaphone, color: "from-teal-400 to-emerald-500", views: "500K" },
    { id: "5toLxPmN3-4", platform: "youtube", type: "Cartoon Video", icon: Mic, color: "from-rose-400 to-red-500", views: "2.8M" },
    { id: "DUmsnYPjDlN", platform: "instagram", type: "Junk Food Video", icon: Activity, color: "from-emerald-400 to-cyan-500", views: "1.1M" },
    { id: "DX1HriPz62D", platform: "instagram", type: "Motivational Video", icon: Utensils, color: "from-amber-400 to-orange-500", views: "4.2M" },
  ];

  return (
    <section
      id="projects"
      // EXACTLY AS REQUESTED: Padding Reduce kardi Phone me 1/3 (py-8) aur Laptop me 1/2 (md:py-12)
      className="py-8 md:py-12 bg-black relative overflow-hidden"
    >
      {/* Premium Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <Film size={14} /> Viral Masterpieces
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight tracking-tight">
            See What You Will <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Create With AI
            </span>
          </h2>

          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto px-2 leading-relaxed">
            Every single video below is 100% generated using the exact AI tools and strategies taught inside our Mega Bundle.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* RESPONSIVE GRID: Phone me 2 column, Laptop me 5 columns */}
        {/* (10 videos hain toh 5 columns me perfect 2 rows banengi) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mb-8 place-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

// Extremely Beautiful & Custom Native Player Card
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const embedUrl = project.platform === "instagram" 
    ? `https://www.instagram.com/reel/${project.id}/embed/?hidecaption=true` 
    : `https://www.youtube.com/embed/${project.id}?rel=0&modestbranding=1&controls=0&showinfo=0&playsinline=1`;

  return (
    <motion.div
      id={`project-card-${index}`}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
      // Phone par 2 grid hone ki wajah se styles responsive (chote) kiye gaye hain
      className="relative w-full aspect-[9/16] bg-black border-[2px] md:border-[5px] border-[#121212] rounded-[1.25rem] md:rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.8)] md:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:border-[#1a1a1a] transition-all duration-500 group overflow-hidden ring-1 ring-white/5"
    >
      {/* Background neon glow behind the phone frame */}
      <div className={`absolute -inset-10 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 blur-2xl md:blur-3xl -z-10 transition-opacity duration-700`} />

      {/* ============================================================== */}
      {/* CSS CROP TRICK: Hides Instagram Like/Comment buttons completely */}
      {/* ============================================================== */}
      <div className="absolute inset-0 bg-[#0a0a0a] overflow-hidden rounded-[1rem] md:rounded-[2.2rem]">
        <iframe
          className={`absolute top-0 ${project.platform === 'instagram' ? '-left-[20%] w-[140%]' : 'left-0 w-full'} h-full`}
          src={embedUrl}
          title={project.type}
          frameBorder="0"
          scrolling="no"
          allowTransparency={true}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Inner shadow to blend the video edges seamlessly */}
        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] md:shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none z-10" />
      </div>

      {/* ============================================================== */}
      {/* OUR OWN PREMIUM FAKE NATIVE UI OVERLAYS */}
      {/* ============================================================== */}

      {/* Fake Top Header */}
      <div className="absolute top-0 left-0 w-full pt-2 pb-4 px-2 md:pt-4 md:pb-6 md:px-4 bg-gradient-to-b from-black/90 via-black/60 to-transparent z-20 flex items-start justify-between pointer-events-none">
         <div className="flex items-center gap-1.5 md:gap-3">
            <div className={`w-6 h-6 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg p-[1px] md:p-[2px]`}>
               <div className="w-full h-full bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                  {/* Icon size responsive for phone/laptop */}
                  <project.icon className="w-3 h-3 md:w-4 md:h-4 text-white drop-shadow-md" />
               </div>
            </div>
            <div className="flex flex-col">
               <span className="text-[9px] md:text-sm font-bold text-white tracking-wide drop-shadow-md whitespace-nowrap">
                 {project.type}
               </span>
               <span className="text-[6px] md:text-[10px] text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-0.5 md:gap-1 mt-[1px] md:mt-0.5 drop-shadow-md">
                 <Sparkles className="w-2 h-2 md:w-3 md:h-3" /> AI Generated
               </span>
            </div>
         </div>
      </div>

      {/* Fake Bottom Footer */}
      <div className="absolute bottom-0 left-0 w-full h-[50px] md:h-[100px] bg-gradient-to-t from-black via-black/80 to-transparent z-20 flex flex-col justify-end px-2 pb-2 md:px-4 md:pb-4 pointer-events-none">
         <div className="flex items-center justify-between w-full mb-2 md:mb-3">
            <div className="flex items-center gap-2 md:gap-4">
               <div className="flex items-center gap-1 md:gap-1.5 text-white/90 drop-shadow-md">
                  <Play className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 fill-white/20" />
                  <span className="text-[8px] md:text-xs font-bold">{project.views}</span>
               </div>
               <div className="flex items-center gap-1 md:gap-1.5 text-white/90 drop-shadow-md">
                  <Heart className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-red-500 fill-red-500" />
                  <span className="text-[8px] md:text-xs font-bold">Viral</span>
               </div>
            </div>
         </div>

         {/* Fake Video Progress Bar */}
         <div className="w-full h-[2px] md:h-1 bg-white/20 rounded-full overflow-hidden flex">
            <motion.div 
               initial={{ width: "0%" }}
               whileInView={{ width: "100%" }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className={`h-full bg-gradient-to-r ${project.color}`} 
            />
         </div>
      </div>

    </motion.div>
  );
};

export default ProjectsShowcase;