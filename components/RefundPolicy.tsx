'use client';

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, AlertTriangle, Headphones, CreditCard, Scale, FileText, X } from "lucide-react";

// 👇 TypeScript interface for props
interface RefundPolicyProps {
  onClose: () => void;
}

const RefundPolicy = ({ onClose }: RefundPolicyProps) => {
  const sections = [
    {
      icon: FileText,
      title: "Digital Product Disclaimer",
      content: "All courses sold are digital products with instant access after purchase. By completing a purchase, you acknowledge that the product is digital and cannot be returned once delivered.",
    },
    {
      icon: ShieldAlert,
      title: "No Refunds on Completed Access",
      content: "Due to the nature of online courses, we do not offer refunds once the course content is accessed. This is standard practice for digital products to prevent intellectual property theft.",
    },
    {
      icon: CreditCard,
      title: "Cancellation Before Payment Completion",
      content: "If a payment fails or is canceled before full access is granted, no charges will be processed. You will only be charged upon successful enrollment.",
    },
    {
      icon: Scale,
      title: "Disputes",
      content: "All refund or payment disputes will be handled in accordance with our payment gateway's terms and applicable laws. We aim to resolve all legitimate disputes amicably.",
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Background Blur Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-black border border-slate-800 rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar selection:bg-cyan-500/30 text-slate-300"
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all z-50 cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none" />
          
          <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-4 text-center">
            Refund <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Policy</span>
          </h1>
          <p className="relative z-10 text-slate-400 text-center max-w-xl mx-auto text-sm md:text-base mb-10">
            Transparent, fair, and simple terms for our learners.
          </p>

          <div className="space-y-4 md:space-y-6 relative z-10">
            {sections.map((section, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-800 p-5 md:p-6 rounded-2xl hover:border-slate-700 transition-colors">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2.5 md:p-3 bg-cyan-500/10 rounded-lg text-cyan-400 shrink-0">
                    <section.icon size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-2">{section.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-xs md:text-sm">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Support Box */}
            <div className="mt-8 md:mt-10 bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/30 p-6 md:p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Headphones size={80} className="md:w-[120px] md:h-[120px]" />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                  {/* Fixed duplicate className error here 👇 */}
                  <AlertTriangle size={20} className="text-yellow-400 md:w-6 md:h-6" /> Exceptions & Support
                </h3>
                <p className="text-slate-300 mb-5 md:mb-6 max-w-xl leading-relaxed text-xs md:text-sm">
                  We value our learners. If you experience technical issues preventing access to course content, please contact us immediately. We will make all reasonable efforts to resolve access issues promptly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 text-xs md:text-sm">
                  <span className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white font-medium w-fit">
                    📧 contact@impactschoolofai.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RefundPolicy;