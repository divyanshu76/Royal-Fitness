import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, ChevronDown } from "lucide-react";
import CTASection from "../components/sections/CTASection";

const faqs = [
  {
    q: "What are the gym timings?",
    a: "We are open Monday to Saturday from 5:00 AM to 10:00 PM. Sunday hours vary, please call to confirm."
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes! We offer a 1-day free trial for local residents with valid ID. Contact us to schedule."
  },
  {
    q: "Are personal trainers available?",
    a: "Absolutely. We have certified personal trainers available from opening till closing. You can book them through our Premium or Coaching plans."
  },
  {
    q: "Is parking available?",
    a: "Yes, we have dedicated parking space available for our members."
  }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-brand-black min-h-screen pt-32 mx-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center max-w-3xl mx-auto"
        >
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">
            Get In Touch
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">
            Contact Us.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Have questions? We are here to help you start your journey.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details & Map */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                <div className="h-12 w-12 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-white font-bold uppercase tracking-wider mb-2">Phone</h3>
                <p className="text-zinc-400">+91 97928 73009</p>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                <div className="h-12 w-12 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-white font-bold uppercase tracking-wider mb-2">Email</h3>
                <p className="text-zinc-400">info@royalfitnessmzp.com</p>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                <div className="h-12 w-12 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-white font-bold uppercase tracking-wider mb-2">Location</h3>
                <p className="text-zinc-400">Tarkapur, Ramaipatti, Mirzapur, UP</p>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                <div className="h-12 w-12 bg-zinc-800 text-zinc-400 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-white font-bold uppercase tracking-wider mb-2">Hours</h3>
                <p className="text-zinc-400">Mon-Sat: 5 AM - 10 PM</p>
              </div>
            </div>

            <div className="h-[300px] bg-zinc-900 rounded-2xl overflow-hidden border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.574488812739!2d82.55395619553738!3d25.14815467362031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fc1a2a46e1ab7%3A0x6ee0e3dc38392cf9!2sRamaipatti%2C%20Mirzapur%2C%20Uttar%20Pradesh%20231001!5e0!3m2!1sen!2sin!4v1709664536294!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) smal-contrast(100%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10">
            <h2 className="font-display text-3xl font-bold uppercase text-white mb-2">Send Message</h2>
            <p className="text-zinc-400 mb-8">Fill out the form below and we will get back to you shortly.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Your Name</label>
                  <input type="text" className="w-full h-14 px-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Phone</label>
                  <input type="tel" className="w-full h-14 px-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="+91..." required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Email Address</label>
                <input type="email" className="w-full h-14 px-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="john@example.com" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Message</label>
                <textarea className="w-full px-4 py-4 min-h-[150px] bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-red transition-colors resize-none" placeholder="How can we help you?" required />
              </div>
              
              <button className="w-full h-14 flex items-center justify-center gap-2 bg-brand-red text-white font-bold uppercase tracking-wider rounded-xl hover:bg-brand-red-dark transition-colors">
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24 pb-32">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white mb-4">Freqently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-white pr-8">{faq.q}</span>
                <ChevronDown className={cn("h-5 w-5 text-zinc-400 transition-transform duration-300 shrink-0", openFaq === idx ? "rotate-180" : "")} />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
