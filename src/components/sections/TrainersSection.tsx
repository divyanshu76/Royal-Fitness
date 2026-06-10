import { motion } from "motion/react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const trainers = [
  {
    name: "Vikram Singh",
    specialty: "Head Coach / Strength",
    image: "https://images.unsplash.com/photo-1567013127596-32de43285322?q=80&w=800&auto=format&fit=crop",
    experience: "10 Years"
  },
  {
    name: "Rajeev Verma",
    specialty: "CrossFit & Cardio",
    image: "https://images.unsplash.com/photo-1583465551221-1f9db408b087?q=80&w=800&auto=format&fit=crop",
    experience: "7 Years"
  },
  {
    name: "Aryan Patel",
    specialty: "Transformation Specialist",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop",
    experience: "5 Years"
  }
];

export default function TrainersSection() {
  return (
    <section className="py-24 bg-brand-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Meet the Experts
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6"
          >
            Your Coaches
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-brand-charcoal"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 transform transition-transform duration-300">
                <span className="text-brand-red font-bold uppercase tracking-wider text-xs block mb-1">{trainer.specialty}</span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-1">{trainer.name}</h3>
                <span className="text-zinc-400 text-sm block mb-4">Exp: {trainer.experience}</span>
                
                <div className="flex gap-3 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <a href="#" className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-brand-red transition-colors">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-brand-red transition-colors">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-brand-red transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
