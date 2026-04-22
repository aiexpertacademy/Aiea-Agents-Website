"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BrainCircuit, Layers, Sparkles, Navigation, Search, Star, MessageSquare, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AGENTS, DOMAINS } from "@/data/agents";

const containerVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeDomain, setActiveDomain] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAgents = AGENTS.filter(agent => {
    const matchesDomain = activeDomain === "All" || agent.domain === activeDomain;
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) || agent.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 1;
    let direction = 1;
    let animationFrameId: number;
    let lastDrawTime = performance.now();
    const fps = 20; // Lowered to 20 fps for a smooth, slow-motion effect
    const frameInterval = 1000 / fps;
    const totalFrames = 240;

    const images: HTMLImageElement[] = [];

    // Preload all frames into memory so there is no network lag while animating
    for (let i = 1; i <= totalFrames; i++) {
      const img = new window.Image();
      img.src = `/neural_network/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
      images.push(img);
    }

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      const deltaTime = time - lastDrawTime;

      if (deltaTime >= frameInterval) {
        lastDrawTime = time - (deltaTime % frameInterval);

        const currentImage = images[frame - 1];
        // Only draw if image is fully loaded to prevent flashing
        if (currentImage && currentImage.complete && currentImage.naturalWidth > 0) {
          const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
          const targetWidth = currentImage.naturalWidth * dpr * 2; // Super-sampled 4K quality upscale
          const targetHeight = currentImage.naturalHeight * dpr * 2;

          if (canvas.width !== targetWidth) {
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
          }
          ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);

          if (direction === 1) {
            if (frame >= totalFrames) {
              direction = -1;
              frame = totalFrames - 1;
            } else {
              frame++;
            }
          } else {
            if (frame <= 1) {
              direction = 1;
              frame = 2;
            } else {
              frame--;
            }
          }
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-[#F8F7FF]">
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/15 blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/15 blur-[160px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-white/40 blur-[100px]"></div>
      </div>

      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative z-10 space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-primary/20 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_#00F5FF]"></span>
              <span className="font-label text-sm uppercase font-bold tracking-widest text-primary">The Neural Swarm</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-headline text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] text-on-surface">
              An Army of <span className="text-gradient-candy">50+ Specialized AI Agents.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Scale your cognition. From data alchemy to neural architecture, our swarm of highly focused agents orchestrates complex workflows in milliseconds.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-all duration-300 text-lg shadow-xl shadow-primary/30">
                Initialize Swarm
              </button>
              <button className="bg-white text-on-surface font-bold py-4 px-10 rounded-full border-2 border-secondary/30 hover:border-secondary hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center gap-2 shadow-lg shadow-secondary/10 group">
                <Navigation className="w-5 h-5 text-secondary group-hover:rotate-45 transition-transform" />
                Browse Library
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square w-full max-w-xs sm:max-w-sm mx-auto lg:max-w-none"
          >
            <div className="w-full h-full rounded-full bg-[#0A0D14] overflow-hidden relative flex items-center justify-center border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-cover opacity-100 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0D14]/80 via-transparent to-primary/30 pointer-events-none"></div>

              <motion.div
                animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-32 h-32 rounded-full bg-primary/30 blur-2xl top-1/4 left-1/4"
              />
              <motion.div
                animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute w-40 h-40 rounded-full bg-secondary/30 blur-3xl bottom-1/3 right-1/4"
              />

              <div className="relative z-10 text-center">
                <span className="font-headline text-6xl sm:text-8xl font-black text-on-surface drop-shadow-[0_4px_12px_rgba(255,255,255,0.8)]">
                  50+
                </span>
                <p className="font-label text-xl tracking-widest uppercase text-primary mt-2 font-black">
                  Active Nodes
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants} className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:bg-white transition-colors duration-500">
            <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity">
              <Layers className="w-16 h-16 text-primary" />
            </div>
            <p className="font-label text-sm uppercase font-black tracking-widest text-primary mb-2">Scale</p>
            <h3 className="font-headline text-4xl font-bold text-on-surface">50+ Agents</h3>
            <p className="font-body text-sm text-on-surface-variant mt-3">Specialized in distinct cognitive domains.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:bg-white transition-colors duration-500">
            <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity">
              <Sparkles className="w-16 h-16 text-secondary" />
            </div>
            <p className="font-label text-sm uppercase font-black tracking-widest text-secondary mb-2">Velocity</p>
            <h3 className="font-headline text-4xl font-bold text-on-surface">1M+ Tokens/Sec</h3>
            <p className="font-body text-sm text-on-surface-variant mt-3">Parallel processing across the swarm.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:bg-white transition-colors duration-500">
            <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity">
              <BrainCircuit className="w-16 h-16 text-on-surface-variant" />
            </div>
            <p className="font-label text-sm uppercase font-black tracking-widest text-on-surface-variant mb-2">Precision</p>
            <h3 className="font-headline text-4xl font-bold text-on-surface">99.9% Sync</h3>
            <p className="font-body text-sm text-on-surface-variant mt-3">Flawless cognitive orchestration.</p>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 relative bg-primary/5">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col lg:flex-row justify-between lg:items-end gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-headline text-4xl font-bold text-on-surface">The Agent Registry</h2>
            <p className="font-body text-on-surface-variant mt-3 text-lg mb-8">Explore a fraction of our specialized cognitive nodes.</p>

            <div className="flex flex-col gap-6 mt-6 max-w-4xl">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search agents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-5 pr-12 py-3 rounded-full border border-primary/20 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-medium"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full"><Search className="w-4 h-4" /></button>
              </div>

              <div className="flex flex-wrap gap-2">
                {DOMAINS.map(domain => {
                  const count = domain === "All" ? AGENTS.length : AGENTS.filter(a => a.domain === domain).length;
                  return (
                    <button
                      key={domain}
                      onClick={() => setActiveDomain(domain)}
                      className={`px-5 py-2 rounded-full text-xs font-bold transition-transform shadow-sm ${activeDomain === domain
                        ? "bg-primary text-white shadow-md -translate-y-0.5"
                        : "bg-white text-on-surface-variant border border-primary/10 hover:border-primary hover:text-primary"
                        }`}
                    >
                      {domain} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/catalog" className="flex items-center gap-3 text-primary hover:text-primary-dim transition-all font-bold group lg:whitespace-nowrap">
              View Full Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="w-full pb-12 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredAgents.length > 0 ? (
                filteredAgents.slice(0, 8).map((agent, index) => {
                  const borderColors = ["border-t-primary shadow-primary/5 text-primary bg-primary/10", "border-t-secondary shadow-secondary/5 text-secondary bg-secondary/10", "border-t-primary-dim shadow-primary-dim/5 text-primary-dim bg-primary-dim/10"];
                  const themeBaseClass = borderColors[index % 3];
                  return (
                    <motion.div
                      key={agent.name}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className={`glass-panel w-full p-8 rounded-3xl relative overflow-hidden hover:-translate-y-2 transition-all duration-300 group cursor-pointer border-t-4 shadow-xl ${themeBaseClass.split(' ')[0]} ${themeBaseClass.split(' ')[1]}`}
                    >
                      <div className="flex justify-between items-start mb-8">
                        <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center border-2 border-opacity-10 shadow-sm ${themeBaseClass.split(' ')[2]}`}>
                          <agent.icon className="w-8 h-8" />
                        </div>
                        <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full ${themeBaseClass.split(' ')[2]} ${themeBaseClass.split(' ')[3]}`}>Active Node</span>
                      </div>
                      <h3 className="font-headline text-xl font-bold text-on-surface mb-3">{agent.name}</h3>
                      <p className="font-body text-sm text-on-surface-variant mb-6 h-16 leading-relaxed">{agent.desc}</p>
                      <div className="flex justify-between items-center text-xs font-bold text-on-surface-variant border-t border-black/5 pt-4">
                        <span className="truncate max-w-[200px]">{agent.domain}</span>
                        <span className="text-secondary flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span> Active</span>
                      </div>
                    </motion.div>
                  )
                })
              ) : (
                <div className="w-full min-w-[50vw] py-12 text-center text-on-surface-variant font-medium text-lg border-2 border-dashed border-primary/10 rounded-2xl">No registry nodes mapped to your current search parameters.</div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="flex justify-center mt-6 md:hidden">
          <Link href="/catalog" className="text-primary hover:text-primary-dim transition-colors font-bold text-sm">
            View Full Catalog
          </Link>
        </div>
      </section>

      {/* FOUNDER & CEO SECTION */}
      <section className="py-24 relative bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative aspect-square max-w-sm mx-auto md:mx-0 rounded-full overflow-hidden shadow-2xl border-4 border-primary/10 p-2">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-secondary/10">
              <img src="https://assets.zyrosite.com/CKg2m9XCl2ln1yq5/ceo-0dqoqbglNZvF08RH.png?w=800&auto=format&fit=crop&q=80" alt="Founder" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-8">
                <div className="text-white text-center">
                  <p className="font-bold text-2xl">Deepak Kumar Swain</p>
                  <p className="text-xs uppercase tracking-widest opacity-90 mt-1 font-bold text-secondary">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full">Visionary</span>
            <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-on-surface">Architecting the future of human-AI collaboration.</h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed">
              "At AIEA agents, we aren't just building tools; we are creating a dynamic ecosystem of digital intelligence. Our mission is to empower creators, businesses, and enterprises to scale their cognition infinitely using specialized agent networks that orchestrate complex workflows flawlessly."
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-24 relative bg-[#0A0D14] text-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Trusted by Visionaries</h2>
            <p className="font-body text-white/60 mt-4 max-w-2xl mx-auto">See how AIEA agents are transforming workflows across the globe.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md relative hover:bg-white/10 transition-colors cursor-pointer">
              <div className="flex gap-1 text-yellow-400 mb-6">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="font-body text-sm leading-relaxed mb-8 opacity-90">"The Video AI Studio agent transformed our entire marketing pipeline. We're producing high-fidelity assets 10x faster than before."</p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center font-bold text-primary">PS</div>
                <div><p className="font-bold text-sm">Priya Sharma</p><p className="text-xs opacity-50 mt-1">CMO @ TechFlow</p></div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md relative hover:bg-white/10 transition-colors cursor-pointer">
              <div className="flex gap-1 text-yellow-400 mb-6">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="font-body text-sm leading-relaxed mb-8 opacity-90">"Implementing the Business Management swarm saved us countless hours of manual data entry and continuous workflow optimization."</p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center font-bold text-secondary">RV</div>
                <div><p className="font-bold text-sm">Rahul Verma</p><p className="text-xs opacity-50 mt-1">Operations Director</p></div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md relative hover:bg-white/10 transition-colors cursor-pointer">
              <div className="flex gap-1 text-yellow-400 mb-6">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="font-body text-sm leading-relaxed mb-8 opacity-90">"Absolutely unparalleled execution. The ability for these nodes to coordinate perfectly on large scale architectures is mind-blowing."</p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary-dim/30 flex items-center justify-center font-bold text-primary-dim">NG</div>
                <div><p className="font-bold text-sm">Neha Gupta</p><p className="text-xs opacity-50 mt-1">Lead Architect</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT US SECTION */}
      <section className="py-24 relative bg-primary/5 border-t border-primary/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-xl shadow-primary/10 mb-8 text-primary">
            <MessageSquare className="w-10 h-10" />
          </div>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-on-surface mb-6">Need a Custom Swarm?</h2>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">Our engineering team is ready to assemble, train, and deploy a custom array of agents perfectly tailored to your enterprise scale.</p>
          <button className="bg-primary text-white font-bold py-4 px-12 rounded-full hover:scale-105 transition-all shadow-lg shadow-primary/30 text-lg">Contact Support Now</button>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="price" className="py-32 relative bg-white border-t border-black/5">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">Pricing</span>
            <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-on-surface">Scale your intelligence.</h2>
            <p className="font-body text-on-surface-variant mt-4 text-lg">Transparent plans for individuals and massive scale operations.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic */}
            <div className="border border-on-surface/10 rounded-3xl p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 bg-white relative">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-on-surface-variant text-sm mb-8">For rapid creators.</p>
              <div className="text-5xl font-black mb-8 text-on-surface">₹2,499<span className="text-xl opacity-50 font-normal">/mo</span></div>
              <div className="w-full space-y-5 text-sm font-medium mb-10 flex-grow text-left">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Access to 5 Basic Agents</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> 10,000 Tokens/mo</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Standard Email Support</div>
              </div>
              <button className="w-full py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Get Started</button>
            </div>

            {/* Pro */}
            <div className="border border-primary/30 rounded-3xl p-10 flex flex-col items-center text-center shadow-[0_0_50px_rgba(30,58,138,0.15)] transition-all bg-gradient-to-b from-primary/5 to-transparent relative md:-translate-y-4 z-10">
              <div className="absolute top-0 -translate-y-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-on-surface-variant text-sm mb-8">For growing enterprises.</p>
              <div className="text-5xl font-black mb-8 text-on-surface text-gradient-candy">₹7,999<span className="text-xl opacity-50 font-normal text-on-surface">/mo</span></div>
              <div className="w-full space-y-5 text-sm font-medium mb-10 flex-grow text-left">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Full Agent Registry Access</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Unlimited Compute Tokens</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Custom Swarm Orchestration</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Priority API & Node Access</div>
              </div>
              <button className="w-full py-4 rounded-full bg-primary text-white font-bold hover:shadow-lg transition-all shadow-primary/30 hover:scale-[1.02]">Deploy Swarm Now</button>
            </div>

            {/* Enterprise */}
            <div className="border border-on-surface/10 rounded-3xl p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 bg-white relative">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-on-surface-variant text-sm mb-8">For infinite scale requirements.</p>
              <div className="text-6xl font-black mb-8 text-on-surface whitespace-nowrap">Custom</div>
              <div className="w-full space-y-5 text-sm font-medium mb-10 flex-grow text-left">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Dedicated Secure Cluster</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Private On-Prem Deployment</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> SLA & Dev Team Support</div>
              </div>
              <button className="w-full py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
