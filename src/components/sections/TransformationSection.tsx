import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const transformations = [
  {
    name: "Rahul Tiwari",
    duration: "12 Weeks",
    result: "Lost 15kg",
    before: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Vikash Singh",
    duration: "6 Months",
    result: "Gained 8kg Muscle",
    before: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop", // placeholder
    after: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop" // placeholder
  }
];

export default function TransformationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % transformations.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);

  return (
    <section className="py-24 bg-brand-black overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="flex-1 w-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4 rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden">
                <img src={transformations[currentIndex].before} className="w-full h-full object-cover grayscale" alt="Before" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-white">Before</div>
              </div>
              <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden">
                <img src={transformations[currentIndex].after} className="w-full h-full object-cover" alt="After" />
                <div className="absolute top-4 right-4 bg-brand-red px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-white shadow-lg">After</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
            <button onClick={prev} className="h-12 w-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all shadow-xl">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} className="h-12 w-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all shadow-xl">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex-1">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Real Results
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6"
          >
            Transformations <br/> That Speak.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg leading-relaxed mb-10"
          >
            Our specialized programs and dedicated trainers have to helped hundreds of members change their lifestyle. Your transformation is our ultimate goal.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-2xl p-8"
          >
             <AnimatePresence mode="wait">
               <motion.div
                 key={currentIndex}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.3 }}
               >
                 <h4 className="text-2xl font-bold text-white mb-2">{transformations[currentIndex].name}</h4>
                 <div className="flex gap-4 mb-6">
                    <span className="text-brand-gold font-bold uppercase text-xs tracking-wider">{transformations[currentIndex].duration}</span>
                    <span className="text-zinc-600">|</span>
                    <span className="text-brand-red font-bold uppercase text-xs tracking-wider">{transformations[currentIndex].result}</span>
                 </div>
                 <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-brand-red to-brand-gold"
                    />
                 </div>
               </motion.div>
             </AnimatePresence>
          </motion.div>
        
        </div>

      </div>
    </section>
  );
}
