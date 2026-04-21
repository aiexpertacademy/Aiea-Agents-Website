"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full py-16 px-8 bg-white border-t border-primary/10 flex flex-col items-center gap-10"
    >
      <div className="text-3xl font-black text-gradient-candy font-headline">
        Aether AI
      </div>
      <div className="flex flex-wrap justify-center gap-10 font-label text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
        <Link href="#" className="hover:text-primary transition-colors">Status</Link>
        <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
        <Link href="#" className="hover:text-primary transition-colors">GitHub</Link>
      </div>
      <div className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 text-center">
        © 2024 Aether AI. Sweetening the digital frontier.
      </div>
    </motion.footer>
  );
}
