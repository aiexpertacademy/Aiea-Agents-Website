"use client";

import { MessageSquare, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-headline text-5xl font-black text-on-surface mb-6">Get in Touch</h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto">
            Ready to integrate custom AI agents into your business operations? Our dedicated team is here to help you accelerate your innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Details from AIEA */}
          <div className="space-y-10">
             <div className="glass-panel p-8 rounded-3xl border border-primary/10 shadow-lg relative overflow-hidden bg-[#F6F8F9]">
                <h3 className="font-headline text-2xl font-bold mb-8">AI Expert Academy HQ</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-on-surface-variant uppercase tracking-widest mb-1">Address</p>
                      <p className="font-body text-on-surface font-medium leading-relaxed">
                        Plot No. 330, 1st Floor<br/>
                        Sneha Sagar Complex, IGH Colony<br/>
                        Lingipur, Near Sisupala Chowk<br/>
                        Bhubaneswar-751002
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-on-surface-variant uppercase tracking-widest mb-1">Phone</p>
                      <p className="font-body text-on-surface font-medium text-lg">+91 9090441918</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary-dim/10 text-primary-dim flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-on-surface-variant uppercase tracking-widest mb-1">Direct Contact</p>
                      <p className="font-body text-on-surface font-medium text-lg">contact@aiexpertacademy.io</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-on-surface/10 rounded-3xl p-10 shadow-xl shadow-primary/5">
            <h3 className="font-headline text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant mb-2">First Name</label>
                  <input type="text" className="w-full bg-[#F6F8F9] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none text-on-surface font-medium" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant mb-2">Last Name</label>
                  <input type="text" className="w-full bg-[#F6F8F9] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none text-on-surface font-medium" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2">Email Address</label>
                <input type="email" className="w-full bg-[#F6F8F9] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none text-on-surface font-medium" placeholder="john@enterprise.com" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2">Message</label>
                <textarea rows={5} className="w-full bg-[#F6F8F9] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none text-on-surface font-medium resize-none" placeholder="How can our swarm assist you?"></textarea>
              </div>

              <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-shadow">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
