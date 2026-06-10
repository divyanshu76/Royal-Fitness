import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Strength Training",
    desc: "Build muscle and power with our complete free weights and machine zone.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Fat Loss Program",
    desc: "Lose weight effectively with high-intensity workouts tailored to burn fat.",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Personal Training",
    desc: "One-on-one coaching to push your limits and achieve your specific goals.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Functional Training",
    desc: "Improve overall fitness, agility, and real-world strength.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Cardio Training",
    desc: "Increase endurance with our premium cardio equipment section.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Transformation",
    desc: "Complete body transformation program over 12 weeks of intense guidance.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function ProgramsSection() {
  return (
    <section className="py-24 bg-brand-charcoal overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Our Programs
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-white max-w-xl"
            >
              Find What Moves You
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/membership" className="group flex items-center gap-2 text-brand-red font-bold uppercase tracking-wider text-sm hover:text-white transition-colors">
              View All Programs
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">{program.title}</h3>
                <p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{program.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
