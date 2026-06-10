import { motion } from "motion/react";
import TrainersSection from "../components/sections/TrainersSection";
import CTASection from "../components/sections/CTASection";

export default function Trainers() {
  return (
    <div className="bg-brand-black min-h-screen pt-32 mx-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center max-w-3xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">
            Trainers.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Meet the elite professionals dedicated to pushing your limits safely and effectively.
          </p>
        </motion.div>
      </div>

      <TrainersSection />
      
      {/* Philosophy block */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-white mb-6">Our Training Philosophy</h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              We don't believe in generic, one-size-fits-all workout plans. Every body is different, and every goal requires a dedicated path. Our certified coaches combine science-backed methodologies with intense motivation to deliver extraordinary results.
            </p>
            <ul className="space-y-4">
               {["Science-Backed Routines", "Strict Form Correction", "Personalized Nutrition", "Continuous Progression Tracking"].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-zinc-300">
                   <span className="h-2 w-2 rounded-full bg-brand-red" />
                   {item}
                 </li>
               ))}
            </ul>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="aspect-square bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800"
          >
             <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700" alt="Training Session" />
          </motion.div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
