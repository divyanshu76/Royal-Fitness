import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "₹1500",
    period: "Monthly",
    desc: "Perfect for maintaining your daily fitness routine.",
    features: [
      "Gym Access",
      "Basic Support"
    ],
    popular: false,
    color: "zinc",
  },
  {
    name: "Standard",
    price: "₹3500",
    period: "Quarterly",
    desc: "Our most popular plan for visible transformation.",
    features: [
      "Gym Access",
      "Cardio Zone",
      "Trainer Guidance"
    ],
    popular: true,
    color: "brand-red",
  },
  {
    name: "Premium",
    price: "₹10000",
    period: "Yearly",
    desc: "Total transformation with dedicated coaching.",
    features: [
      "Personal Trainer",
      "Diet Plan",
      "Transformation Tracking",
      "Priority Support"
    ],
    popular: false,
    color: "brand-gold",
  }
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-brand-charcoal overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Membership Plans
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6"
          >
            Invest In Your Legacy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Choose a plan that fits your goals. Flexible options with transparent pricing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-sm border ${plan.popular ? 'border-2 border-brand-red shadow-[0_0_30px_rgba(220,38,38,0.15)] bg-brand-red/10' : 'border-white/10'} rounded-2xl p-8 flex flex-col hover:bg-white/10 transition-all cursor-pointer`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6 px-2 py-0.5 bg-brand-red text-[9px] font-black tracking-tighter uppercase rounded text-white">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm mb-6">{plan.desc}</p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl lg:text-5xl font-black ${plan.color === 'brand-gold' ? 'text-brand-gold' : 'text-white'}`}>{plan.price}</span>
                  <span className="text-zinc-500 font-medium uppercase tracking-wider text-sm">/ {plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className={`mt-1 flex shrink-0 h-5 w-5 rounded-full items-center justify-center ${plan.popular ? 'bg-brand-red/20 text-brand-red' : 'bg-white/10 text-white'}`}>
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-zinc-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className={`flex h-14 items-center justify-center rounded-xl font-bold uppercase tracking-wider transition-all w-full
                  ${plan.popular 
                    ? 'bg-brand-red text-white hover:bg-brand-red-dark shadow-[0_0_20px_rgba(229,9,20,0.3)]' 
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                  }`}
              >
                Choose Plan
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
