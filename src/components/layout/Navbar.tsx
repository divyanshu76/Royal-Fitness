import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Dumbbell } from "lucide-react";
import { cn } from "../../lib/utils";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Programs", path: "/membership" },
  { name: "Trainers", path: "/trainers" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-black/40 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red text-white transition-transform duration-300 rotate-45 group-hover:scale-110">
            <span className="-rotate-45 font-bold text-xl">R</span>
          </div>
          <div className="flex flex-col ml-1">
            <span className="font-display text-2xl font-bold uppercase tracking-tighter text-white">
              <span className="text-brand-red">Royal</span> Fitness
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative text-sm font-medium uppercase tracking-wider transition-colors duration-200 hover:text-brand-red",
                location.pathname === link.path ? "text-brand-red" : "text-zinc-300"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-brand-red"
                />
              )}
            </Link>
          ))}
          <Link
            to="/membership"
            className="px-6 py-2 border border-brand-red text-brand-red rounded-full text-sm font-bold uppercase hover:bg-brand-red hover:text-white transition-all"
          >
            Join Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-brand-charcoal/95 backdrop-blur-md border-b border-zinc-800"
          >
            <nav className="flex flex-col space-y-4 px-6 pb-8 pt-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-lg font-medium tracking-wide transition-colors",
                    location.pathname === link.path ? "text-brand-red" : "text-zinc-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/membership"
                  className="block w-full text-center rounded-full bg-brand-red px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-red-dark"
                >
                  Join Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
