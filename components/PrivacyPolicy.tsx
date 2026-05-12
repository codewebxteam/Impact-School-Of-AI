'use client';

import React from "react";
import { motion } from "framer-motion";
import { Lock, Eye, Share2, Cookie, ShieldCheck, Mail, X } from "lucide-react";

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy = ({ onClose }: PrivacyPolicyProps) => {
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
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-[400px] h-[300px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
          
          <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-4 text-center">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Policy</span>
          </h1>
          <p className="relative z-10 text-slate-400 text-center max-w-xl mx-auto text-sm md:text-base mb-10">
            Your data security is our priority. Here's how we handle your information.
          </p>

          <div className="space-y-6 md:space-y-8 relative z-10">
            {/* Section 1 */}
            <PolicySection icon={Eye} title="Information Collection" color="text-blue-400" bg="bg-blue-500/10">
              We collect personal information such as <strong>name, email, phone number, and payment details</strong> solely for the purpose of course enrollment, account creation, and providing support.
            </PolicySection>

            {/* Section 2 */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                  <Lock size={20} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">How We Use Information</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-3 md:gap-4">
                {["Provide access to courses", "Send updates & announcements", "Process secure payments"].map((item, i) => (
                  <div key={i} className="p-3 md:p-4 bg-black/40 border border-slate-800 rounded-xl text-xs md:text-sm font-medium text-slate-300">
                    ✅ {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 */}
            <PolicySection icon={Share2} title="Information Sharing" color="text-green-400" bg="bg-green-500/10">
              We <span className="text-white font-semibold">do not sell or share</span> your personal information with third parties, except:
              <ul className="list-disc list-inside mt-3 space-y-1 text-slate-400">
                <li>To comply with legal requirements.</li>
                <li>To process payments via authorized payment processors.</li>
              </ul>
            </PolicySection>

            {/* Section 4 */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <PolicySection icon={Cookie} title="Cookies & Analytics" color="text-amber-400" bg="bg-amber-500/10">
                We may use cookies and analytics tools to improve website experience and track course progress securely.
              </PolicySection>
              <PolicySection icon={ShieldCheck} title="Data Security" color="text-cyan-400" bg="bg-cyan-500/10">
                We implement reasonable security measures to protect your personal information from unauthorized access.
              </PolicySection>
            </div>

            {/* Section 5 */}
            <div className="border-t border-slate-800 pt-6 mt-6 md:pt-8 md:mt-8">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                <Mail className="text-pink-400" size={20} /> Your Rights & Contact
              </h3>
              <p className="text-slate-400 mb-4 md:mb-6 text-sm md:text-base">
                You may request access, correction, or deletion of your personal data by contacting us.
              </p>
              <div className="flex flex-wrap gap-3 text-xs md:text-sm font-mono text-slate-300">
                <span className="px-3 py-2 md:px-4 md:py-2 bg-slate-800 rounded-lg">📧 contact@impactschoolofai.com</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const PolicySection = ({ icon: Icon, title, children, color, bg }: any) => (
  <div className="bg-slate-900/40 border border-slate-800 p-5 md:p-6 rounded-2xl hover:bg-slate-900/60 transition-colors">
    <div className="flex items-start gap-3 md:gap-4">
      <div className={`p-2.5 md:p-3 rounded-lg ${bg} ${color}`}>
        <Icon size={20} className="md:w-6 md:h-6" />
      </div>
      <div>
        <h3 className="text-base md:text-lg font-bold text-white mb-2">{title}</h3>
        <div className="text-slate-400 leading-relaxed text-xs md:text-sm">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;