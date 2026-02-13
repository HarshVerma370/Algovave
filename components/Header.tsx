
import React from 'react';
import { Sun, Moon, Github, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Developer', href: '#developer' },
    { label: 'Merch', href: '#merchandise' },
    { label: 'Work', href: '#work' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6 pointer-events-none">
      <nav className="glass rounded-3xl px-8 py-3 flex items-center gap-10 max-w-fit shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 border border-white/10 group pointer-events-auto hover:border-primary/40">
        <div className="flex items-center gap-4 mr-2">
          <Logo size={42} className="group-hover:rotate-[360deg] transition-transform duration-1000" />
          <div className="flex flex-col -space-y-1">
            <span className="font-black tracking-tighter text-2xl dark:text-white text-zinc-900">
              ALGOVAVE
            </span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-primary font-black">Digital Solutions</span>
          </div>
        </div>

        <div className="flex items-center gap-8 hidden lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-black hover:text-primary transition-colors uppercase tracking-[0.2em] opacity-60 hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="h-6 w-[1px] bg-zinc-800 hidden lg:block" />

        <div className="flex items-center gap-5">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 hover:bg-primary/20 transition-all shadow-inner border border-white/5"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-indigo-600" />}
          </button>
          
          <div className="flex items-center gap-2">
            <a href="#" className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 hover:text-primary transition-all opacity-80 hover:opacity-100"><Github size={18} /></a>
            <a href="#" className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 hover:text-primary transition-all opacity-80 hover:opacity-100"><Mail size={18} /></a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
