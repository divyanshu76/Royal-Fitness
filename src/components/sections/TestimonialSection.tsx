import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mukesh Sharma",
    role: "Member since 2022",
    rating: 5,
    text: "Royal Fitness completely changed my perspective on working out. The equipment is world-class, but the real difference is the trainers. They push you to your absolute limit while ensuring proper form.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Anjali Gupta",
    role: "Member since 2023",
    rating: 5,
    text: "The environment is amazing. It doesn't matter if you are a beginner or a pro, everyone is treated with respect. My 6-month transformation has been incredible thanks to the Royal team.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Suraj Singh",
    role: "Member since 2021",
    rating: 5,
    text: "Best gym in Mirzapur, hands down. The hygiene, the machines, the community—everything is top tier. The personal coaching program is worth every penny.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-24 bg-brand-charcoal overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="h-20 w-20 mx-auto bg-zinc-900 rounded-full flex items-center justify-center mb-10 border border-zinc-800"
        >
           <Quote className="h-8 w-8 text-brand-gold" />
        </motion.div>

        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <span key={i} className="text-brand-gold text-2xl">★</span>
                ))}
              </div>
              
              <p className="text-xl md:text-3xl font-medium leading-relaxed text-white mb-10 max-w-3xl">
                "{testimonials[current].text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-red"
                />
                <div className="text-left">
                  <h4 className="font-bold text-white uppercase tracking-wider">{testimonials[current].name}</h4>
                  <span className="text-zinc-400 text-sm">{testimonials[current].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === idx ? "w-10 bg-brand-red" : "w-2 bg-zinc-700"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
