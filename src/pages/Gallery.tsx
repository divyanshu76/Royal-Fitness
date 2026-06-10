import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import CTASection from "../components/sections/CTASection";
import { cn } from "../lib/utils";

const categories = ["All", "Equipment", "Members", "Workouts"];

const galleryData = [
  { id: 1, category: "Equipment", url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop", span: "row-span-1 border-brand-red" },
  { id: 2, category: "Workouts", url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop", span: "row-span-2" },
  { id: 3, category: "Members", url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop", span: "row-span-1" },
  { id: 4, category: "Equipment", url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop", span: "row-span-2" },
  { id: 5, category: "Workouts", url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop", span: "row-span-1" },
  { id: 6, category: "Members", url: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=800&auto=format&fit=crop", span: "row-span-1" },
  { id: 7, category: "Equipment", url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop", span: "row-span-2 border-brand-gold" },
  { id: 8, category: "Workouts", url: "https://images.unsplash.com/photo-1567013127596-32de43285322?q=80&w=800&auto=format&fit=crop", span: "row-span-1" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredGallery = filter === "All" 
    ? galleryData 
    : galleryData.filter(img => img.category === filter);

  return (
    <div className="bg-brand-black min-h-screen pt-32 mx-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center max-w-3xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">
            Gallery.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Take a look inside Mirzapur's most premium fitness facility.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all",
                filter === cat 
                  ? "bg-brand-red text-white" 
                  : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "relative rounded-xl overflow-hidden cursor-pointer group border-2 border-transparent",
                  img.span.includes("border-brand-red") ? "hover:border-brand-red" : "",
                  img.span.includes("border-brand-gold") ? "hover:border-brand-gold" : "hover:border-zinc-500",
                  img.span
                )}
                onClick={() => setSelectedImage(img.url)}
              >
                <img 
                  src={img.url} 
                  alt={img.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">{img.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-brand-red transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <img 
              src={selectedImage} 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              alt="Enlarged"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </div>
  );
}
