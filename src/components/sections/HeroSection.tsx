import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center pt-20 overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop"
          alt="Gym background"
          className="w-full h-full object-cover object-center opacity-40"
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="px-3 py-1 bg-brand-red w-fit text-[10px] font-black text-white uppercase tracking-[0.2em] rounded-sm shadow-[0_0_20px_rgba(220,38,38,0.4)]">
              Mirzapur's Elite Training Center
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6 text-white"
          >
            Transform Your <br />
            <span className="text-transparent stroke-brand-red" style={{ WebkitTextStroke: '1px #dc2626' }}>
              Body.
            </span> <br />
            Build Your <span className="text-brand-red">Legacy.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-lg leading-relaxed mix-blend-lighten"
          >
            Join Royal Fitness and achieve your fitness goals with professional training, world-class equipment, and a community that pushes you higher.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/membership"
              className="flex h-14 items-center justify-center gap-2 rounded-full bg-brand-red px-8 font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-red-dark border border-brand-red hover:border-brand-red-dark"
            >
              Join Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              to="/contact"
              className="flex h-14 items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm px-8 font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black"
            >
              <Play className="h-4 w-4 fill-current" />
              Free Trial
            </Link>
          </motion.div>
          
          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-8 border-b border-zinc-800"
          >
            {[
              { label: "Members", value: "500+" },
              { label: "Experience", value: "5+ Yrs" },
              { label: "Transformations", value: "100+" },
              { label: "Google Rating", value: "4.3\u2605" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-display text-4xl font-bold text-white">{stat.value}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
