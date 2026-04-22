import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-[#F6F8F9] relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full mb-6">Our Mission</span>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black text-on-surface mb-6">Accelerate Your Innovation</h1>
          <p className="font-body text-lg sm:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            At AI Expert Academy, we turn curiosity into skill with hands-on education designed for real-world AI challenges. We are committed to preparing the next generation for the future by bringing cutting-edge technology directly into the enterprise.
          </p>
        </div>
      </section>

      {/* Core Values / Details */}
      <section className="py-24 max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-4xl font-bold text-on-surface mb-6">Empowering Creators & Enterprises</h2>
            <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
              We aren't just building tools; we are creating a dynamic ecosystem of digital intelligence. Our mission is to empower creators, businesses, and enterprises to scale their cognition infinitely using specialized agent networks that orchestrate complex workflows flawlessly.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 font-semibold text-on-surface"><CheckCircle2 className="w-6 h-6 text-primary" /> Future-Ready Technology Education</li>
              <li className="flex items-center gap-3 font-semibold text-on-surface"><CheckCircle2 className="w-6 h-6 text-primary" /> Real-World AI Project Collaboration</li>
              <li className="flex items-center gap-3 font-semibold text-on-surface"><CheckCircle2 className="w-6 h-6 text-primary" /> Instant Cloud Deployment</li>
              <li className="flex items-center gap-3 font-semibold text-on-surface"><CheckCircle2 className="w-6 h-6 text-primary" /> Integrated Agent Connectivity</li>
            </ul>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden glass-panel border-4 border-white shadow-2xl flex items-center justify-center bg-primary/5">
            <img src="/logo.png" alt="AIEA Academy Logo" loading="eager" fetchPriority="high" className="w-[400px] h-auto object-contain drop-shadow-xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
