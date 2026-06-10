import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-red z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-20 z-0" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6"
        >
          Ready to Start <br/> Your Journey?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/80 text-xl mb-12 max-w-2xl mx-auto"
        >
          Join Mirzapur's elite fitness destination today and take the first step towards a stronger, healthier you.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/membership"
            className="flex h-16 items-center justify-center gap-2 rounded-full bg-white px-10 font-bold uppercase tracking-wider text-black transition-all hover:scale-105"
          >
            Join Royal Fitness
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="flex h-16 items-center justify-center gap-2 rounded-full border-2 border-white/30 px-10 font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
