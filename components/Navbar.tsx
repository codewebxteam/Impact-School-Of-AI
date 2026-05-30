'use client';

import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Overview", href: "#overview" },
    { name: "Courses", href: "#courses" }, 
    { name: "Projects", href: "#projects" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  // Type ko thoda generic banaya taaki anchor aur button dono isko use kar sakein
  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false); 

    if (pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        setTimeout(() => {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      } else if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push(`/${href}`);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="text-white fill-white" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                Impact School Of AI
              </span>
              <span className="text-[10px] text-slate-400 tracking-widest uppercase">
                Empowering India Through Skills.
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_cyan]" />
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            {/* Direct Razorpay link ki jagah ab ye smooth scroll karke Offer section (#pricing-section) par le jayega */}
            <button
              onClick={(e) => handleNavClick(e, "#pricing-section")}
              className="group px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:bg-cyan-50 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2 cursor-pointer uppercase tracking-wide"
            >
              Buy Any @ ₹499
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-slate-300 hover:text-white p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 lg:hidden z-40 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-300 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-xl font-medium text-lg transition-all flex items-center justify-between group cursor-pointer"
                >
                  {link.name}
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-cyan-400"
                  />
                </a>
              ))}

              <div className="h-px bg-white/10 my-2" />

              {/* Mobile me bhi same scroll behavior add kiya gaya hai */}
              <button
                onClick={(e) => handleNavClick(e, "#pricing-section")}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wide"
              >
                Buy Any @ ₹499
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;