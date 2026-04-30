"use client";

import { useState } from "react";
import { Search, Bell, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/#price" },
    { label: "Docs", href: "/docs" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    { label: "Social Media Growth", domain: "Marketing and Sales" },
    { label: "Video and Motion AI Studio", domain: "Creative and Design Tools" },
    { label: "Content and Media Creation Suite", domain: "Content and Publishing" },
    { label: "Branding and Professional Edge", domain: "Creative and Design Tools" },
    { label: "Community and Collaboration Hub", domain: "Productivity and Collaboration" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-2xl border-b border-primary/10"
    >
      <div className="flex justify-between items-center px-4 sm:px-8 h-16 sm:h-20 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="AIEA Agents Logo"
            width={500}
            height={200}
            unoptimized={true}
            priority={true}
            className="h-10 sm:h-14 md:h-16 w-auto object-contain drop-shadow-md"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6 font-headline font-bold tracking-tight text-sm items-center">
          <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors">Home</Link>

          {/* Services Dropdown */}
          <div className="relative group h-full flex items-center">
            <span className="cursor-default text-on-surface-variant group-hover:text-primary transition-colors py-4 font-semibold">Services</span>
            <div className="absolute top-14 left-0 w-80 bg-white border border-primary/20 shadow-2xl rounded-2xl p-3 flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex pointer-events-none group-hover:pointer-events-auto">
              {services.map(s => (
                <Link key={s.label} href={`/catalog?domain=${encodeURIComponent(s.domain)}`} className="block px-4 py-3 hover:bg-secondary/10 rounded-xl text-on-surface hover:text-primary transition-all font-semibold">{s.label}</Link>
              ))}
            </div>
          </div>

          {navLinks.slice(1).map(link => (
            <Link key={link.href} href={link.href} className="text-on-surface-variant hover:text-primary transition-colors">{link.label}</Link>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          <button className="text-on-surface-variant hover:text-primary transition-colors hidden md:block">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors hidden sm:block">
            <Bell className="w-5 h-5" />
          </button>
          <a
            href="https://ai-agent-platform-self.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white font-bold py-2 px-4 sm:px-6 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 active:scale-95 text-xs sm:text-sm"
          >
            Register
          </a>
          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-on-surface-variant hover:text-primary transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-primary/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 rounded-xl text-on-surface hover:bg-primary/5 hover:text-primary font-semibold transition-all"
                >
                  {link.label}
                </Link>
              ))}

              {/* Services accordion */}
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="py-3 px-4 rounded-xl text-on-surface hover:bg-primary/5 hover:text-primary font-semibold transition-all text-left flex justify-between items-center"
              >
                Services
                <span className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}>▾</span>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4"
                  >
                    {services.map(s => (
                      <Link key={s.label} href={`/catalog?domain=${encodeURIComponent(s.domain)}`} onClick={() => setMobileOpen(false)} className="block py-2.5 px-4 text-sm text-on-surface-variant hover:text-primary font-medium transition-colors">{s.label}</Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
