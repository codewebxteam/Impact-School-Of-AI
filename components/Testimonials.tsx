'use client';

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, MessageCircle, ArrowRight } from "lucide-react";
import { trackMetaEvent } from "../utils/trackEvent";

const Testimonials = () => {
  const handleEnroll = () => {
    trackMetaEvent('InitiateCheckout', { content_name: 'Testimonials_Enroll_499' });
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    {
      id: "ZuqRDPrrcZc",
      name: "Rohan S.",
      role: "Freelance Editor",
      quote:
        "This course blew my mind. I made this entire scene in just two days! The AI tools explained here are game-changers.",
      delay: 0.1,
    },
    {
      id: "a1dbz39V0M0",
      name: "Priya K.",
      role: "YouTuber (100k+ Subs)",
      quote:
        "I'm a YouTuber and this course helped me 10x my content production. Worth every rupee for the time it saves!",
      delay: 0.2,
    },
    {
      id: "SFq8pGcoHa0",
      name: "Ankit M.",
      role: "Aspiring Filmmaker",
      quote:
        "Never thought I could be a filmmaker without a camera. AI makes it possible. Thank you for this amazing roadmap!",
      delay: 0.3,
    },
  ];

  return (
    <section
      id="reviews"
      className="min-h-0 pt-12 pb-10 md:pt-20 md:pb-16 bg-black relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="text-yellow-400" size={20} />
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm">
              Student Success Stories
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Student Showcase & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Testimonials
            </span>
          </h2>

          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            See what our students are creating and saying about the course.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button
            onClick={handleEnroll}
            className="group relative px-10 py-4 md:px-12 md:py-5 bg-white text-black rounded-full font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 via-white to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-3 uppercase tracking-wide">
              Buy Any @ ₹499
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ item }: { item: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: item.delay, duration: 0.5 }}
      className="group flex flex-col h-full bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-yellow-500/30 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transition-all duration-300"
    >
      <div className="relative aspect-video w-full bg-black">
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${item.id}?rel=0&modestbranding=1&controls=1&showinfo=0&disablekb=1&iv_load_policy=3`}
          title={`Student Project by ${item.name}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div
          className="absolute top-0 right-0 w-[140px] h-[60px] z-20 bg-transparent cursor-default"
          onClick={(e) => e.stopPropagation()}
        />
        <div
          className="absolute top-0 left-0 w-[180px] h-[60px] z-20 bg-transparent cursor-default"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-grow relative">
        <Quote
          className="absolute top-6 right-6 text-slate-700/50 fill-current opacity-20"
          size={32}
        />

        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className="text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mb-4 italic relative z-10">
          "{item.quote}"
        </p>

        <div className="mt-auto flex items-center gap-3 pt-4 border-t border-slate-800">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-base md:text-lg">
            {item.name.charAt(0)}
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">{item.name}</h4>
            <span className="text-[10px] md:text-xs text-slate-500">
              {item.role}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;