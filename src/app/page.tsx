"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, BrainCircuit, Code2, Layers, Cpu, CodeXml, ShieldAlert, Sparkles, Navigation } from "lucide-react";
import Image from "next/image";

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

      <section className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-20 relative">
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
            
            <motion.h1 variants={itemVariants} className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] text-on-surface">
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
            className="relative aspect-square w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="w-full h-full rounded-full glass-panel overflow-hidden relative flex items-center justify-center border-white/40 ambient-glow">
              <img 
                alt="Neural Network" 
                className="absolute inset-0 w-full h-full object-cover opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx0GLxc4j86lqyN3UeSXhBc_2aiK4RTJ0xnckv6aquM-4yAb9n-Iahxvyle_6hKnrHislKilzzgItWz9dvKM9SrY7z5bCwSKZIFuIF74xhd8RvsjliJm2BA5PZVvjrKwgKtUjawdR5jApb6HZxwL6HLJ74VpvVKlpSPsa4EQg1WStZn1v3rEskNN-FJV3RA622eUeOmXL4kqMjW9cwixkEoXV1e7Q1CHMAX6hICz5_HhUrN4lGDtHAcqTjvCyc4OCXjCfrBgLr9Cs"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-white/20 to-primary/20 pointer-events-none"></div>
              
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
                <span className="font-headline text-8xl font-black text-on-surface drop-shadow-[0_4px_12px_rgba(255,255,255,0.8)]">
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

      <section className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-12">
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
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 mb-12 flex justify-between items-end">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-headline text-4xl font-bold text-on-surface">The Agent Registry</h2>
            <p className="font-body text-on-surface-variant mt-3 text-lg">Explore a fraction of our specialized cognitive nodes.</p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-3 text-primary hover:text-primary-dim transition-all font-bold group"
          >
            View Full Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
        
        <div className="w-full overflow-x-auto pb-8 hide-scrollbar px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex gap-8 w-max py-4"
          >
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="glass-panel w-80 p-8 rounded-3xl relative overflow-hidden hover:-translate-y-2 transition-all duration-300 group cursor-pointer border-t-4 border-t-primary shadow-xl shadow-primary/5">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border-2 border-primary/10 shadow-sm">
                  <Box className="text-primary w-8 h-8" />
                </div>
                <span className="px-3 py-1 text-[10px] font-black uppercase tracking-wider bg-primary/10 rounded-full text-primary">Data</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Image Generator</h3>
              <p className="font-body text-sm text-on-surface-variant mb-6 h-16 leading-relaxed">Transforms unstructured chaos into high-fidelity relational schemas.</p>
              <div className="flex items-center justify-between text-xs font-bold text-on-surface-variant border-t border-primary/5 pt-4">
                <span>Req: 2 Nodes</span>
                <span className="text-secondary flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-secondary"></span> Active</span>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={itemVariants} className="glass-panel w-80 p-8 rounded-3xl relative overflow-hidden hover:-translate-y-2 transition-all duration-300 group cursor-pointer border-t-4 border-t-secondary shadow-xl shadow-secondary/5">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border-2 border-secondary/10 shadow-sm">
                  <Cpu className="text-secondary w-8 h-8" />
                </div>
                <span className="px-3 py-1 text-[10px] font-black uppercase tracking-wider bg-secondary/10 rounded-full text-secondary">System</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">AI Ad Video Generator</h3>
              <p className="font-body text-sm text-on-surface-variant mb-6 h-16 leading-relaxed">Designs and optimizes deep learning topologies on the fly.</p>
              <div className="flex items-center justify-between text-xs font-bold text-on-surface-variant border-t border-secondary/5 pt-4">
                <span>Req: 4 Nodes</span>
                <span className="text-secondary flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-secondary"></span> Active</span>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={itemVariants} className="glass-panel w-80 p-8 rounded-3xl relative overflow-hidden hover:-translate-y-2 transition-all duration-300 group cursor-pointer border-t-4 border-t-primary-dim shadow-xl shadow-primary-dim/5">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border-2 border-primary-dim/10 shadow-sm">
                  <CodeXml className="text-primary-dim w-8 h-8" />
                </div>
                <span className="px-3 py-1 text-[10px] font-black uppercase tracking-wider bg-primary-dim/10 rounded-full text-primary-dim">DevOps</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">WhatsApp AI Chatbot</h3>
              <p className="font-body text-sm text-on-surface-variant mb-6 h-16 leading-relaxed">Generates, refactors, and deploys production-grade microservices.</p>
              <div className="flex items-center justify-between text-xs font-bold text-on-surface-variant border-t border-primary-dim/5 pt-4">
                <span>Req: 1 Node</span>
                <span className="text-secondary flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-secondary"></span> Active</span>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={itemVariants} className="glass-panel w-80 p-8 rounded-3xl relative overflow-hidden hover:-translate-y-2 transition-all duration-300 group cursor-pointer border-t-4 border-t-on-surface-variant shadow-xl shadow-on-surface-variant/5">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border-2 border-on-surface-variant/10 shadow-sm">
                  <ShieldAlert className="text-on-surface-variant w-8 h-8" />
                </div>
                <span className="px-3 py-1 text-[10px] font-black uppercase tracking-wider bg-on-surface-variant/10 rounded-full text-on-surface-variant">SecOps</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">App UI/UX Designer</h3>
              <p className="font-body text-sm text-on-surface-variant mb-6 h-16 leading-relaxed">Monitors vector perimeters and neutralizes anomalous token injections.</p>
              <div className="flex items-center justify-between text-xs font-bold text-on-surface-variant border-t border-on-surface-variant/5 pt-4">
                <span>Req: 3 Nodes</span>
                <span className="text-on-surface-variant/50 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-on-surface-variant/30"></span> Standby</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="flex justify-center mt-6 md:hidden">
          <button className="text-primary hover:text-primary-dim transition-colors font-bold text-sm">
            View Full Catalog
          </button>
        </div>
      </section>
    </>
  );
}
