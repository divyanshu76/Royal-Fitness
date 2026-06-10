import { motion } from "motion/react";
import { UserCheck, Dumbbell, Activity, ShieldCheck, HeartPulse, Apple, Users, Target } from "lucide-react";

const features = [
  { icon: UserCheck, title: "Professional Trainers", desc: "Expert guidance from certified coaches." },
  { icon: Dumbbell, title: "Modern Equipment", desc: "State-of-the-art machines and free weights." },
  { icon: Activity, title: "Cardio Zone", desc: "Premium treadmills, ellipticals, and bikes." },
  { icon: ShieldCheck, title: "Weight Training", desc: "Comprehensive zones for serious lifters." },
  { icon: HeartPulse, title: "Personal Coaching", desc: "1-on-1 tailored workout strategies." },
  { icon: Apple, title: "Nutrition Guidance", desc: "Diet plans for optimal performance." },
  { icon: Users, title: "Friendly Environment", desc: "A community that supports your goals." },
  { icon: Target, title: "Strength Training", desc: "Dedicated spaces for powerlifting." },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-brand-black w-full overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            The Royal Advantage
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-white"
          >
            Why Choose Royal Fitness
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl transition-all duration-300 hover:border-brand-red/50 hover:bg-white/10"
            >
              <div className="h-14 w-14 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
