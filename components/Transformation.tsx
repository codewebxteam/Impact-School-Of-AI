'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Sparkles, Wand2, Layers } from "lucide-react";

const Transformation = () => {
  return (
    <section
      id="transformation"
      /* STATIC SPACING CONTROLS EXACTLY AS YOUR FILE */
      className="min-h-0 pt-12 pb-10 md:pt-20 md:pb-16 bg-black relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Layers className="text-purple-400" size={20} />
            <span className="text-purple-400 font-bold tracking-widest uppercase text-sm">
              Real Results
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Before & After <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              AI Transformation
            </span>
          </h2>

          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            From simple raw concepts to studio-quality final films — see the power of AI editing.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 relative">
          {/* LEFT: BEFORE VIDEO */}
          <VideoCard
            id="pWvIHe3H1g8"
            label="Concept / Raw Footage (Before)"
            icon={Layers}
            borderColor="border-slate-700"
            glowColor="shadow-slate-500/10"
            textColor="text-slate-400"
            delay={0.1}
          />

          {/* CENTER: ARROW INDICATOR */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex-shrink-0 z-20"
          >
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-[0_0_30px_rgba(192,38,211,0.5)] border-4 border-black">
              {/* Responsive Icon */}
              <div className="hidden md:block">
                <ArrowRight className="text-white w-8 h-8" />
              </div>
              <div className="md:hidden">
                <ArrowDown className="text-white w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: AFTER VIDEO */}
          <VideoCard
            id="L7twK6vjQZc"
            label="Final AI Film Scene (After)"
            icon={Wand2}
            borderColor="border-purple-500/50"
            glowColor="shadow-purple-500/30"
            textColor="text-purple-400"
            delay={0.2}
            isPrimary={true}
          />
        </div>
      </div>
    </section>
  );
};

// Reusable Video Component (TypeScript Support Added)
interface VideoCardProps {
  id: string;
  label: string;
  icon: React.ElementType;
  borderColor: string;
  glowColor: string;
  textColor: string;
  delay: number;
  isPrimary?: boolean;
}

const VideoCard = ({
  id,
  label,
  icon: Icon,
  borderColor,
  glowColor,
  textColor,
  delay,
  isPrimary,
}: VideoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isPrimary ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.6 }}
      className={`w-full md:w-[45%] group relative`}
    >
      <div
        className={`rounded-2xl overflow-hidden border ${borderColor} bg-slate-900/50 shadow-2xl ${glowColor} transition-all duration-300 group-hover:scale-[1.02]`}
      >
        {/* Header Label */}
        <div className="px-4 py-3 md:px-5 md:py-4 bg-black/40 border-b border-white/5 flex items-center gap-3">
          <Icon
            size={18}
            className={isPrimary ? "text-pink-500" : "text-slate-500"}
          />
          <h3
            className={`font-bold text-xs md:text-base ${textColor} tracking-wide`}
          >
            {label}
          </h3>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            className="w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&controls=1&showinfo=0&disablekb=1&iv_load_policy=3`}
            title={label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* THE SHIELD: Hide Share/Watch Later */}
          <div
            className="absolute top-0 right-0 w-[140px] h-[60px] z-20 bg-transparent cursor-default"
            onClick={(e) => e.stopPropagation()}
            title="Transformation Preview"
          />
          <div
            className="absolute top-0 left-0 w-[180px] h-[60px] z-20 bg-transparent cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>

      {/* Bottom Glow for Primary Card */}
      {isPrimary && (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-purple-600/20 blur-3xl -z-10 opacity-60" />
      )}
    </motion.div>
  );
};

export default Transformation;