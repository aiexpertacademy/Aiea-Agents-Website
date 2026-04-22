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
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="AIEA Agents Logo" width={500} height={200} unoptimized={true} priority={true} className="h-[90px] w-auto object-contain drop-shadow-md" />
          </Link>
          <div className="hidden lg:flex gap-6 font-headline font-bold tracking-tight text-sm items-center">
            <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors">Home</Link>
            
            <div className="relative group h-full flex items-center">
              <span className="cursor-default text-on-surface-variant group-hover:text-primary transition-colors py-4 font-semibold">Services</span>
              <div className="absolute top-14 left-0 w-80 bg-white border border-primary/20 shadow-2xl rounded-2xl p-3 flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex pointer-events-none group-hover:pointer-events-auto">
                <span className="cursor-default px-4 py-3 hover:bg-secondary/10 rounded-xl text-on-surface hover:text-primary transition-all font-semibold">Social Media Growth</span>
                <span className="cursor-default px-4 py-3 hover:bg-secondary/10 rounded-xl text-on-surface hover:text-primary transition-all font-semibold">Video and Motion AI Studio</span>
                <span className="cursor-default px-4 py-3 hover:bg-secondary/10 rounded-xl text-on-surface hover:text-primary transition-all font-semibold">Content and Media Creation Suite</span>
                <span className="cursor-default px-4 py-3 hover:bg-secondary/10 rounded-xl text-on-surface hover:text-primary transition-all font-semibold">Branding and Professional Edge</span>
                <span className="cursor-default px-4 py-3 hover:bg-secondary/10 rounded-xl text-on-surface hover:text-primary transition-all font-semibold">Community and Collaboration Hub</span>
              </div>
            </div>

            <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors">About</Link>
            <Link href="/#price" className="text-on-surface-variant hover:text-primary transition-colors">Pricing</Link>
            <Link href="/docs" className="text-on-surface-variant hover:text-primary transition-colors">Docs</Link>
            <Link href="/faq" className="text-on-surface-variant hover:text-primary transition-colors">FAQ</Link>
            <Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-primary transition-colors hidden md:block">
            <Search className="w-6 h-6" />
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <Bell className="w-6 h-6" />
          </button>
          <a href="https://ai-agent-platform-self.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-primary text-white font-bold py-2.5 px-6 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 active:scale-95 text-sm hidden sm:block">
            Register
          </a>

        </div>
      </div>
    </motion.nav>
  );
}
