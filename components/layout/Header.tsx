'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiCode, FiBox } from 'react-icons/fi';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  const navLinks = [
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphic bar with glow effect */}
      <div className="relative bg-zen-950/40 backdrop-blur-2xl border-b border-white/5">
        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
        
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with gradient and icons */}
            <Link 
              href="/" 
              className="group flex items-center gap-3 relative z-10"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <FiBox className="text-white" size={20} />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2">
                  <span className="font-display font-bold text-sm sm:text-lg bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent leading-tight">
                    ANGEL CARRASCO BRU
                  </span>
                  <div className="hidden sm:block w-px h-4 bg-white/20" />
                  <span className="text-[10px] sm:text-xs text-zen-400 font-mono">3D + DEV</span>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-accent-500/0 group-hover:bg-accent-500/5 blur-xl transition-all duration-300" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group py-2"
                >
                  <span className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                    isActive(link.href)
                      ? 'text-accent-400'
                      : 'text-zen-300 group-hover:text-white'
                  }`}>
                    {link.label}
                  </span>
                  
                  {/* Animated underline */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent-500 to-blue-500 transition-all duration-300 ${
                    isActive(link.href) 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`} />
                  
                  {/* Glow dot on active */}
                  {isActive(link.href) && (
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-400 rounded-full shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
                  )}
                </Link>
              ))}

              {/* Contact Button with gradient */}
              <Link
                href="/contact"
                className="relative group"
              >
                <div className={`px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  isActive('/contact')
                    ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white scale-105'
                    : 'bg-white/5 text-zen-300 group-hover:text-white border border-white/10 group-hover:border-accent-500/50'
                }`}>
                  <span className="relative z-10">Contact</span>
                </div>
                
                {/* Animated gradient glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500/0 via-accent-500/30 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zen-300 hover:text-white hover:border-accent-500/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </nav>

        {/* Bottom shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-zen-950/0 to-zen-950/80 pointer-events-none" />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-zen-950/95 backdrop-blur-2xl z-40">
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`p-4 rounded-2xl border transition-all duration-300 ${
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-accent-500/20 to-blue-500/20 border-accent-500/50'
                    : 'bg-white/5 border-white/10 group-hover:border-accent-500/30'
                }`}>
                  <span className={`text-lg font-medium uppercase tracking-wider ${
                    isActive(link.href)
                      ? 'text-accent-400'
                      : 'text-zen-300 group-hover:text-white'
                  }`}>
                    {link.label}
                  </span>
                </div>
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4"
            >
              <div className={`p-4 rounded-2xl text-center transition-all duration-300 ${
                isActive('/contact')
                  ? 'bg-gradient-to-r from-accent-500 to-accent-600'
                  : 'bg-gradient-to-r from-accent-500/80 to-blue-500/80 hover:from-accent-500 hover:to-blue-500'
              }`}>
                <span className="text-lg font-medium uppercase tracking-wider text-white">
                  Contact
                </span>
              </div>
            </Link>

            {/* Mobile menu footer */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-sm text-zen-400">
                <FiCode size={16} className="text-blue-400" />
                <span>Live Coder</span>
                <div className="w-px h-4 bg-white/20" />
                <FiBox size={16} className="text-accent-400" />
                <span>3D Artist</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
