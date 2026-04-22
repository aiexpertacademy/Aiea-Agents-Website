"use client";

import Link from "next/link";
import Image from "next/image";
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
      <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
        <Image src="/logo.png" alt="AIEA Agents Logo" width={600} height={300} unoptimized={true} className="h-[180px] w-auto object-contain drop-shadow-xl" />
      </Link>
      <div className="flex flex-wrap justify-center gap-10 font-label text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        <Link href="#" className="hover:text-primary transition-colors">Status</Link>
        <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
        <Link href="#" className="hover:text-primary transition-colors">GitHub</Link>
      </div>
      <div className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 text-center">
        © 2024 AIEA agents. Sweetening the digital frontier.
      </div>
    </motion.footer>
  );
}
