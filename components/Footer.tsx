
import React from 'react';
import { ArrowUpRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 py-20 relative overflow-hidden">
      {/* Decorative Watermark Logo */}
      <div className="absolute right-[-10%] bottom-[-10%] opacity-[0.03] pointer-events-none">
        <Logo size={600} />
      </div>

      <div className="container mx-auto px-6 space-y-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <Logo size={48} />
              <span className="text-3xl font-black tracking-tighter">ALGOVAVE</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none">
              Let's build<br />something <span className="text-primary italic">iconic</span>.
            </h2>
            <p className="text-zinc-500 max-w-sm text-lg">
              Algovave Digital: Bridging engineering excellence with creative storytelling.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:hello@algovave.com" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all flex items-center gap-3 group shadow-xl">
                hello@algovave.com
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="font-black uppercase text-[10px] tracking-[0.3em] text-zinc-400">Navigation</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-sm font-medium hover:text-primary transition-colors opacity-70 hover:opacity-100">Services</a></li>
                <li><a href="#developer" className="text-sm font-medium hover:text-primary transition-colors opacity-70 hover:opacity-100">Developer</a></li>
                <li><a href="#merchandise" className="text-sm font-medium hover:text-primary transition-colors opacity-70 hover:opacity-100">The Shop</a></li>
                <li><a href="#work" className="text-sm font-medium hover:text-primary transition-colors opacity-70 hover:opacity-100">Work Archive</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-black uppercase text-[10px] tracking-[0.3em] text-zinc-400">Connected</h4>
              <div className="flex gap-4">
                <a href="https://github.com/harshverma370" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:text-primary transition-colors"><Github size={20} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:text-primary transition-colors"><Twitter size={20} /></a>
                <a href="https://www.linkedin.com/in/harshverma370/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:text-primary transition-colors"><Linkedin size={20} /></a>
                <a href="https://www.instagram.com/algovave" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:text-primary transition-colors"><Instagram size={20} /></a>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed italic opacity-60">
                Always active. Always building.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 gap-6">
          <div className="flex items-center gap-2">
            <Logo size={16} />
            <p>© {currentYear} Algovave Digital. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
