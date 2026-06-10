import { Link } from "react-router-dom";
import { Dumbbell, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-brand-black pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red text-white">
                <Dumbbell className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold uppercase tracking-wider text-white">
                  Royal Fitness
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-brand-gold uppercase">
                  Mirzapur
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400">
              Premium fitness destination equipped with world-class facilities and professional trainers to help you achieve your ultimate body transformation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-colors hover:bg-brand-red hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-colors hover:bg-brand-red hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-colors hover:bg-brand-red hover:text-white">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-colors hover:bg-brand-red hover:text-white">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium text-zinc-400">
              <li>
                <Link to="/about" className="transition-colors hover:text-brand-red">About Us</Link>
              </li>
              <li>
                <Link to="/membership" className="transition-colors hover:text-brand-red">Membership Plans</Link>
              </li>
              <li>
                <Link to="/trainers" className="transition-colors hover:text-brand-red">Expert Trainers</Link>
              </li>
              <li>
                <Link to="/gallery" className="transition-colors hover:text-brand-red">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-brand-red">Contact & Location</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-4 text-sm font-medium text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-red shrink-0" />
                <span>Tarkapur, Ramaipatti,<br />Mirzapur, Uttar Pradesh 231001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-red shrink-0" />
                <span>+91 97928 73009</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-red shrink-0" />
                <span>info@royalfitnessmzp.com</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-6 uppercase tracking-wider">Working Hours</h3>
            <ul className="space-y-4 text-sm font-medium text-zinc-400">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-brand-red shrink-0" />
                <div className="flex flex-col">
                  <span className="text-white font-bold">Monday - Saturday</span>
                  <span>5:00 AM - 10:00 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-5 w-5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-brand-gold font-bold">Sunday</span>
                  <span>Variable Hours (Call to confirm)</span>
                </div>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-zinc-900 pt-8 sm:flex-row gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Royal Fitness Mirzapur. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-zinc-500">
            <Link to="#" className="hover:text-zinc-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-zinc-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
