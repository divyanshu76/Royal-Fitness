import { useState } from "react";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import PricingSection from "../components/sections/PricingSection";
import CTASection from "../components/sections/CTASection";

export default function Membership() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight && height) {
      const hInMeters = parseFloat(height) / 100;
      const calculatedBmi = parseFloat(weight) / (hInMeters * hInMeters);
      setBmi(Math.round(calculatedBmi * 10) / 10);
    }
  };

  return (
    <div className="bg-brand-black min-h-screen pt-32 mx-auto">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center max-w-3xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">
            Membership.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Simple, transparent pricing. Everything you need to achieve your fitness goals.
          </p>
        </motion.div>
      </div>

      <PricingSection />

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-zinc-900">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold uppercase text-white mb-4">Compare Plans</h2>
          <p className="text-zinc-400">See exactly what you get with each tier.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-6 px-4 text-zinc-400 font-bold uppercase tracking-wider text-sm">Features</th>
                <th className="py-6 px-4 text-white font-bold uppercase tracking-wider text-sm text-center">Basic</th>
                <th className="py-6 px-4 text-brand-red font-bold uppercase tracking-wider text-sm text-center">Standard</th>
                <th className="py-6 px-4 text-brand-gold font-bold uppercase tracking-wider text-sm text-center">Premium</th>
              </tr>
            </thead>
            <tbody className="text-zinc-300">
              {[
                { name: "Gym Access", s: true, p: true, c: true },
                { name: "Cardio Equipment", s: true, p: true, c: true },
                { name: "Locker Room", s: true, p: true, c: true },
                { name: "Basic Diet Advice", s: true, p: true, c: true },
                { name: "Body Composition", s: false, p: true, c: true },
                { name: "Advanced Diet Plan", s: false, p: true, c: true },
                { name: "Priority Floor Support", s: false, p: true, c: true },
                { name: "1-on-[1] Trainer", s: false, p: false, c: true },
                { name: "Supplement Setup", s: false, p: false, c: true },
              ].map((row, i) => (
                <tr key={i} className="border-b border-zinc-900/50 hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-4 font-medium">{row.name}</td>
                  <td className="py-4 px-4 text-center">
                    {row.s ? <Check className="mx-auto h-5 w-5 text-zinc-500" /> : <X className="mx-auto h-5 w-5 text-zinc-800" />}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.p ? <Check className="mx-auto h-5 w-5 text-brand-red" /> : <X className="mx-auto h-5 w-5 text-zinc-800" />}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.c ? <Check className="mx-auto h-5 w-5 text-brand-gold" /> : <X className="mx-auto h-5 w-5 text-zinc-800" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* BMI Calculator */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-14 text-center shadow-2xl">
          <h2 className="font-display text-3xl font-bold uppercase text-white mb-4">Calculate Your BMI</h2>
          <p className="text-zinc-400 mb-10">Find out where you stand and what kind of program suits you best.</p>
          
          <form onSubmit={calculateBMI} className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="number" 
              placeholder="Weight (kg)" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="h-14 px-6 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-red"
              required
            />
            <input 
              type="number" 
              placeholder="Height (cm)" 
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="h-14 px-6 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-red"
              required
            />
            <button type="submit" className="h-14 px-8 rounded-xl bg-brand-red text-white font-bold uppercase tracking-wider hover:bg-brand-red-dark transition-colors">
              Calculate
            </button>
          </form>

          {bmi !== null && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 p-6 bg-white/5 rounded-xl border border-white/10"
            >
              <span className="block text-zinc-400 uppercase tracking-widest text-xs mb-2">Your Result</span>
              <div className="text-5xl font-display font-black text-white mb-2">{bmi}</div>
              <div className="text-brand-gold font-bold uppercase">
                {bmi < 18.5 && "Underweight - Focus on Muscle Gain"}
                {bmi >= 18.5 && bmi < 24.9 && "Normal - Focus on Strength & Maintenance"}
                {bmi >= 25 && bmi < 29.9 && "Overweight - Focus on Fat Loss"}
                {bmi >= 30 && "Obese - Focus on Complete Transformation"}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <CTASection />
    </div>
  );
}
