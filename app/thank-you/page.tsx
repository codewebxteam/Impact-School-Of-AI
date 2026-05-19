'use client';

import React, { useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Mail, Star, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { trackMetaEvent } from "../../utils/trackEvent";

// Main Content Component
function ThankYouContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Razorpay payment ke baad URL me ye ID bhejta hai
  const paymentId = searchParams.get("razorpay_payment_id");

  const PORTAL_LINK = "https://www.impactschoolai.com/";

  const handleAccessPortal = () => {
    window.open(PORTAL_LINK, "_blank");
  };

  useEffect(() => {
    // SECURITY CHECK: Agar URL me paymentId nahi hai (yani user ne direct URL type kiya hai)
    if (!paymentId) {
      router.replace("/"); // User ko turant wapas Home Page par dhakel do
      return;
    }

    console.log("Valid Payment ID received:", paymentId);
    
    // ✅ Sirf valid payment par hi Meta Pixel ka Purchase event fire hoga!
    trackMetaEvent('Purchase', {
      value: 499.00,
      currency: "INR",
      content_name: "AI Filmmaking Mastery Course",
      content_type: "product",
      content_ids: ["seekho_ai_course_001"],
    });
  }, [paymentId, router]);

  // Agar payment ID nahi hai (redirect hone wala hai), toh UI mat dikhao taaki fake experience na mile
  if (!paymentId) {
    return null; 
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden p-6 text-center font-sans selection:bg-cyan-500/30">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl w-full bg-slate-900/60 border border-slate-700/50 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative z-10"
      >
        {/* Success Icon Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/30"
        >
          <CheckCircle className="text-white w-12 h-12" strokeWidth={3} />
        </motion.div>

        {/* Main Headings */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Payment Successful! 🎉
        </h1>
        <p className="text-slate-300 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Welcome to the club. You've just taken the first step towards mastering{" "}
          <span className="text-cyan-400 font-semibold">AI Filmmaking</span>.
        </p>

        {/* --- ACTION CARD --- */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-6 mb-8 text-left relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Star size={100} />
          </div>

          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            Next Step: Claim Your Access 🚀
          </h3>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            Click the button below to visit our official portal (<span className="text-cyan-400">impactschoolai.com</span>). Please <strong>Sign Up</strong> using the exact same email address you just used for this payment.
          </p>

          {/* Alert Box for 2 Hours Notice */}
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-3.5 mb-6 flex items-start gap-3">
            <Clock className="text-cyan-400 shrink-0 mt-0.5" size={18} />
            <p className="text-cyan-200 text-sm font-medium">
              After signing up, your account will be verified and course access will be granted within <strong className="text-white">2 Working Hours</strong>.
            </p>
          </div>

          <button
            onClick={handleAccessPortal}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            Go To Portal & Sign Up <ExternalLink size={20} />
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
            <Mail size={12} />
            <span>Use your payment email to avoid delays.</span>
          </div>
        </div>

        {/* Order Details */}
        <div className="border-t border-slate-800 pt-6 flex flex-wrap justify-between items-center text-sm text-slate-500">
          <div className="flex flex-col text-left">
            <span>Transaction ID</span>
            {/* Yahan par actual payment ID dikha denge thoda aur authentic lagne ke liye */}
            <span className="text-white font-bold text-xs uppercase">{paymentId}</span>
          </div>
          <div className="flex flex-col text-right">
            <span>Payment Status</span>
            <span className="text-green-400 font-bold flex items-center justify-end gap-1">
              <CheckCircle size={14} /> Successful
            </span>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowRight size={14} className="rotate-180" /> Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

// Next.js App Router me 'useSearchParams' use karne ke liye code ko <Suspense> me wrap karna padta hai
export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-cyan-500 font-bold">Verifying Payment...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}