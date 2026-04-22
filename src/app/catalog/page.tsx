"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { AGENTS, DOMAINS } from "@/data/agents";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Catalog() {
  const [activeDomain, setActiveDomain] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAgents = AGENTS.filter(agent => {
    const matchesDomain = activeDomain === "All" || agent.domain === activeDomain;
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) || agent.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F6F8F9] pt-24 sm:pt-32 pb-24 selection:bg-primary/20 selection:text-primary">
      {/* HEADER PAGE SECTION */}
      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full mb-6">Complete Agent Repository</span>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black text-on-surface mb-6">Global Node Catalog</h1>
            <p className="font-body text-lg sm:text-xl text-on-surface-variant max-w-3xl mx-auto mb-10 leading-relaxed">
              Explore our entire operational swarm of hyper-specialized AI nodes engineered for maximum enterprise efficacy.
            </p>
         </motion.div>
         
         <div className="flex flex-col items-center gap-8 mt-10 max-w-4xl mx-auto">
            <div className="relative w-full max-w-2xl">
              <input 
                type="text" 
                placeholder="Search across all agents..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-6 pr-14 py-4 rounded-full border border-primary/20 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-base font-medium" 
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full"><Search className="w-5 h-5" /></button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {DOMAINS.map(domain => {
                const count = domain === "All" ? AGENTS.length : AGENTS.filter(a => a.domain === domain).length;
                return (
                  <button 
                    key={domain}
                    onClick={() => setActiveDomain(domain)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-transform shadow-sm ${
                      activeDomain === domain 
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
      </section>

      {/* INFINITE GRID SECTION */}
      <section className="w-full px-6 lg:px-8 max-w-screen-2xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredAgents.length > 0 ? (
              filteredAgents.map((agent, index) => {
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
                    className={`glass-panel w-full p-8 rounded-3xl relative overflow-hidden hover:-translate-y-2 transition-all duration-300 group cursor-pointer border-t-4 shadow-xl bg-white ${themeBaseClass.split(' ')[0]} ${themeBaseClass.split(' ')[1]}`}
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
              <div className="col-span-full py-20 text-center text-on-surface-variant font-medium text-xl border-2 border-dashed border-primary/10 rounded-3xl bg-white/50">
                No active nodes found matching these cognitive coordinates.
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
