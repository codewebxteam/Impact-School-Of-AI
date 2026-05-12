'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Zap, Sparkles } from "lucide-react";
import { trackMetaEvent } from "../utils/trackEvent";

const Offer = () => {
  const handleEnroll = () => {
    // Meta Tracking: InitiateCheckout track hoga ₹499 value ke sath
    trackMetaEvent('InitiateCheckout', { 
      content_name: 'Offer_Section_Buy_1_Get_All_499',
      value: 499,
      currency: 'INR'
    });
    
    // Yahan tum payment gateway ka link ya logic laga sakte ho aage
    alert("Payment Gateway Triggered for ₹499!");
  };

  // --- TIMER LOGIC ---
  const calculateTimeLeft = () => {
    let targetDate = localStorage.getItem("offerEndTime");
    if (!targetDate || new Date() > new Date(targetDate)) {
      const newTarget = new Date(
        new Date().getTime() + 2 * 24 * 60 * 60 * 1000
      );
      localStorage.setItem("offerEndTime", newTarget.toString());
      targetDate = newTarget.toString();
    } else {
      targetDate = new Date(targetDate).toString();
    }
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 2, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const t = calculateTimeLeft();
      setTimeLeft(t);
      let targetDate = localStorage.getItem("offerEndTime");
      if (targetDate && new Date() > new Date(targetDate)) {
        const newTarget = new Date(
          new Date().getTime() + 2 * 24 * 60 * 60 * 1000
        );
        localStorage.setItem("offerEndTime", newTarget.toString());
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => String(num).padStart(2, "0");

  return (
    <section
      id="pricing-section" 
      className="py-24 bg-black relative overflow-hidden flex items-center justify-center"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="relative z-10 w-full max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-[3rem] p-8 md:p-12 text-center shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden"
        >
          {/* Top Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-purple-500" />

          {/* New Mega Offer Badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold animate-pulse tracking-widest uppercase">
              <Sparkles size={16} />
              Limited Time Mega Offer
            </div>
          </div>

          {/* Updated Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Buy Any 1 Course @ ₹499 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              & Get All Courses FREE 🎁
            </span>
          </h2>

          {/* Pricing */}
          <div className="flex items-center justify-center gap-4 my-8">
            <span className="text-6xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              ₹499
            </span>
            <div className="flex flex-col text-left">
              <span className="text-2xl text-slate-500 line-through font-semibold leading-none">
                ₹24,999
              </span>
              <span className="text-cyan-400 text-sm font-bold mt-1">Total Value</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-3 md:gap-6 mb-8">
            <TimeBox value={pad(timeLeft.days)} label="DAYS" />
            <TimeBox value={pad(timeLeft.hours)} label="HOURS" />
            <TimeBox value={pad(timeLeft.minutes)} label="MINS" />
            <TimeBox value={pad(timeLeft.seconds)} label="SECS" isRed={true} />
          </div>

          {/* Urgency Text */}
          <div className="flex items-center justify-center gap-2 text-amber-400 font-semibold mb-8 animate-bounce text-sm md:text-base">
            <Clock size={18} />
            <span>Hurry! Offer ends soon. Unlock full access today.</span>
          </div>

          {/* Updated Big CTA Button */}
          <motion.button
            onClick={handleEnroll}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 40px rgba(6, 182, 212, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-8 md:px-12 py-5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-lg md:text-xl font-bold shadow-xl shadow-cyan-900/50 flex items-center justify-center gap-3 mx-auto transition-all cursor-pointer uppercase tracking-wide"
          >
            Buy 1 & Get All Free @ ₹499
            <ArrowRight size={24} />
          </motion.button>

          {/* Footer Trust Text */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-4 text-xs md:text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-green-400" /> Secure Payment
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Zap size={14} className="text-yellow-400" /> Lifetime Access
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-blue-400" /> Certificate Included
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Reusable Timer Box Component
const TimeBox = ({ value, label, isRed }: { value: string; label: string; isRed?: boolean }) => (
  <div className="flex flex-col items-center">
    <div
      className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-black/60 border ${
        isRed ? "border-red-500/30" : "border-cyan-500/30"
      } backdrop-blur flex items-center justify-center mb-2 shadow-inner`}
    >
      <span
        className={`text-2xl md:text-3xl font-bold ${
          isRed ? "text-red-400" : "text-white"
        }`}
      >
        {value}
      </span>
    </div>
    <span className="text-[10px] md:text-xs font-bold text-slate-500 tracking-wider">
      {label}
    </span>
  </div>
);

export default Offer;