"use client";

import { Search, Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-2xl border-b border-primary/10"
    >
      <div className="flex justify-between items-center px-8 h-20 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-black tracking-tighter text-gradient-candy">
            AIEA Agents
          </Link>
          <div className="hidden md:flex gap-6 font-headline font-bold tracking-tight text-sm">
            <Link href="#" className="text-primary border-b-2 border-primary pb-1">
              Agents
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              Enterprise
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              Docs
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              Pricing
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-primary transition-colors hidden md:block">
            <Search className="w-6 h-6" />
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <Bell className="w-6 h-6" />
          </button>
          <button className="bg-primary text-white font-bold py-2.5 px-6 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 active:scale-95 text-sm hidden sm:block">
            Register
          </button>
          <div className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5 overflow-hidden ml-2 cursor-pointer bg-white">
            <img
              alt="User profile"
              className="w-full h-full rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6xxENPkuaBnVmCtn8sqPCWTOSo17ExaujzOQG-0PJ0Ox3EfKCCspEQ-C96mi5Ud65hrOwkAU55OqeB2PWUVOEkc5-N9rg9k4K6f1KazppQo63Q1q_WsONY_boQQB_BHtaltV2nuPTdglv1or26YJA5bAvZ00a7dg-K57j3Y5Hll8zcGop8kaxG5Uc6vda9YfXrzh5GNmMxKKFzIz9Cx94nG8h8q0CojZ3xt4UsxXn64xPaGY76seQTELtxT5Eewy0uBuNEuSyzoA"
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
