import { motion } from "motion/react";
import { Target, Eye, Shield } from "lucide-react";
import FeaturesSection from "../components/sections/FeaturesSection";
import CTASection from "../components/sections/CTASection";

export default function About() {
  return (
    <div className="bg-brand-black min-h-screen pt-32">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center max-w-3xl mx-auto"
        >
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">
            The Legend
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">
            Our Story.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Royal Fitness was founded with a single mission: to provide the people of Mirzapur with a world-class fitness facility. We believe that a premium environment combined with elite coaching breeds exceptional results.
          </p>
        </motion.div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[50vh] relative mb-24">
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2670&auto=format&fit=crop" 
          className="w-full h-full object-cover"
          alt="Gym interior"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
      </div>

      {/* Mission Vision Values */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mx-auto h-20 w-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-red mb-6">
              <Target className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-wide text-white mb-4">Our Mission</h3>
            <p className="text-zinc-400 leading-relaxed">
              To empower individuals to reach their peak physical and mental potential through elite training programs and state-of-the-art facilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="mx-auto h-20 w-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold mb-6">
              <Eye className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-wide text-white mb-4">Our Vision</h3>
            <p className="text-zinc-400 leading-relaxed">
              To be the undisputed leader in fitness across Uttar Pradesh, raising the standard of health and wellness in our community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="mx-auto h-20 w-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
              <Shield className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-wide text-white mb-4">Our Values</h3>
            <p className="text-zinc-400 leading-relaxed">
              Excellence, Discipline, Integrity, and Community. We stand by our members and celebrate every victory, large or small.
            </p>
          </motion.div>
        </div>
      </div>

      <FeaturesSection />
      
      <CTASection />
    </div>
  );
}
