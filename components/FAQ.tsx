'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight, Sparkles } from "lucide-react";
import { trackMetaEvent } from "../utils/trackEvent";

const FAQ = () => {
  const handleEnroll = () => {
    trackMetaEvent('InitiateCheckout', { content_name: 'FAQ_Enroll_499' });
    // Yahan direct Razorpay payment link add kar diya hai
    window.location.href = "https://rzp.io/rzp/impactschool";
  };

  const faqs = [
    {
      question: "Do I get all 13+ AI courses at ₹499?",
      answer:
        "Yes! Buy any one course at ₹499 and unlock access to all 13+ premium AI courses absolutely FREE. It's a one-time payment for the entire Mega Bundle.",
    },
    {
      question: "Can beginners join these AI courses?",
      answer:
        "Absolutely! These courses are designed for complete beginners. We provide step-by-step practical guidance from scratch, so you don't need any prior experience.",
    },
    {
      question: "Do I need a laptop or powerful computer?",
      answer:
        "No. Most AI tools work smoothly on a normal laptop, and many lessons can even be followed using just a mobile phone.",
    },
    {
      question: "Can I create AI influencers and baby podcasts?",
      answer:
        "Definitely. These are some of the most popular and practical modules included in the bundle. We teach you exactly how to make them go viral.",
    },
    {
      question: "How do I access the courses after purchase?",
      answer:
        "After successful payment, you’ll instantly receive login credentials via email to access the course platform and all included modules.",
    },
    {
      question: "Are the courses mobile friendly?",
      answer:
        "Yes! The learning platform is 100% mobile-optimized. You can easily watch and learn from your mobile device anytime, anywhere.",
    },
    {
      question: "Do I get future course updates for free?",
      answer:
        "Yes! You get lifetime access, which means any future updates and newly added content will be included for enrolled students automatically.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      // Padding Reduce kardi: Phone me py-8 aur Laptop me md:py-12
      className="py-8 md:py-12 bg-black relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <HelpCircle size={16} /> Got Questions?
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Frequently Asked <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Questions
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto px-2">
            Everything you need to know about the AI Mega Bundle.
          </p>
        </motion.div>

        {/* FAQs List */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={activeIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 md:mt-16 text-center bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-10 flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6">
            <Sparkles className="text-cyan-400" size={32} />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Ready to start creating?
          </h3>
          <p className="text-slate-400 mb-8 text-sm md:text-base max-w-md">
            Join thousands of other students and get instant access to all 13+ courses today.
          </p>
          <button
            onClick={handleEnroll}
            className="group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-white shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] hover:scale-105 transition-all cursor-pointer flex items-center gap-2 uppercase tracking-wide w-full sm:w-auto justify-center"
          >
            Unlock Everything @ ₹499
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

// Reusable Accordion Item
const AccordionItem = ({ faq, isOpen, onClick }: { faq: any; isOpen: boolean; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? "bg-slate-900/60 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          : "bg-slate-900/30 border-slate-800 hover:border-slate-700"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
      >
        <span
          className={`text-sm md:text-lg font-bold transition-colors pr-4 ${
            isOpen ? "text-cyan-400" : "text-white group-hover:text-cyan-100"
          }`}
        >
          {faq.question}
        </span>
        <div
          className={`p-1.5 md:p-2 rounded-full shrink-0 transition-colors ${
            isOpen
              ? "bg-cyan-500/20 text-cyan-400"
              : "bg-slate-800 text-slate-400"
          }`}
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-slate-300 text-sm md:text-base leading-relaxed border-t border-white/5 mt-1 font-medium">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQ;