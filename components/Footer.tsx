'use client';

import React, { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import RefundPolicy from "./RefundPolicy";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showRefund, setShowRefund] = useState(false);

  return (
    <>
      <footer className="bg-black py-8 border-t border-slate-800 relative z-40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Legal Links Section - Changed to Buttons for Popups */}
          <div className="flex justify-center gap-6 mb-4 text-sm font-medium">
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => setShowRefund(true)}
              className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Refund Policy
            </button>
          </div>

          {/* Copyright Line */}
          <p className="text-slate-500 text-sm mb-2">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Impact School Of AI</span>. All rights reserved.
          </p>

          {/* Disclaimer Text */}
          <p className="text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed mt-4">
            This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
          <p className="text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed mt-2">
            This site is for educational purposes. All trademarks, logos, and brand names are the property of their respective owners.
          </p>
        </div>
      </footer>

      {/* Render Popups Conditionally */}
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
      {showRefund && <RefundPolicy onClose={() => setShowRefund(false)} />}
    </>
  );
};

export default Footer;