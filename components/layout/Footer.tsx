import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiCode, FiBox, FiLayers, FiArrowUpRight } from 'react-icons/fi';
import { getProjects } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const allProjects = getProjects();
  
  // Count projects by type
  const softwareCount = allProjects.filter(p => p.type === 'software').length;
  const modelsCount = allProjects.filter(p => p.type === '3d').length;

  const quickLinks = [
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/skills' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { 
      icon: FiGithub, 
      href: 'https://github.com/Keruve', 
      label: 'GitHub',
      color: 'from-purple-500 to-blue-500'
    },
    { 
      icon: FiLinkedin, 
      href: 'https://linkedin.com', 
      label: 'LinkedIn',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: FiMail, 
      href: 'mailto:acarrascobru@gmail.com', 
      label: 'Email',
      color: 'from-accent-500 to-red-500'
    },
  ];

  const stats = [
    { icon: FiCode, label: 'Software Projects', value: `${softwareCount}` },
    { icon: FiBox, label: '3D Models', value: `${modelsCount}` },
    { icon: FiLayers, label: 'Years Experience', value: '5+' },
  ];

  return (
    <footer className="relative bg-zen-950 border-t border-white/5 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 py-16">
        {/* Top Section - Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-accent-400" size={20} />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zen-400">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Section - Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                <FiBox className="text-white" size={24} />
              </div>
              <div>
                <div className="font-display font-bold text-lg bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  ANGEL CARRASCO BRU
                </div>
                <div className="text-xs text-zen-400 font-mono">3D Artist & Live Coder</div>
              </div>
            </div>
            <p className="text-zen-400 leading-relaxed mb-6 max-w-md">
              3D artist and live coder. Mastering AI-assisted development tools to build cutting-edge software 
              while creating optimized 3D assets. The future belongs to those who know how to leverage the right tools.
            </p>
            
            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-zen-400">
              <FiMapPin className="text-accent-400" size={16} />
              <span>Morón de la Frontera, Sevilla · Spain</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Navigate
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-zen-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-gradient-to-r from-accent-500 to-transparent transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Connect
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-500/50 transition-all duration-300"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                    <social.icon className="text-white" size={16} />
                  </div>
                  <span className="text-sm text-zen-400 group-hover:text-white transition-colors duration-300">
                    {social.label}
                  </span>
                  <FiArrowUpRight className="ml-auto text-zen-600 group-hover:text-accent-400 transition-colors duration-300" size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - CTA / Availability */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-accent-500/10 via-blue-500/10 to-purple-500/10 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
              </div>
              <div>
                <div className="text-white font-semibold">Available for Projects</div>
                <div className="text-sm text-zen-400">Open to freelance and collaboration opportunities</div>
              </div>
            </div>
            <Link
              href="/contact"
              className="group px-8 py-3 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium hover:shadow-[0_0_30px_rgba(251,146,60,0.3)] transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Start a Project
                <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-zen-500 text-sm font-mono">
              © {currentYear} Angel Carrasco Bru · Designed with intention & crafted with passion
            </div>
            <div className="flex items-center gap-6 text-sm text-zen-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-500" />
                <span>Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
    </footer>
  );
}
