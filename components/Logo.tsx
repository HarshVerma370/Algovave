
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40, glow = true }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
            <feFlood floodColor="#10b981" floodOpacity="0.5" result="offsetColor" />
            <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="blue-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feFlood floodColor="#6366f1" floodOpacity="0.5" result="offsetColor" />
            <feComposite in="offsetColor" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Hexagon Border */}
        <polygon 
          points="50,5 93.3,30 93.3,70 50,95 6.7,70 6.7,30" 
          className="fill-zinc-950 stroke-zinc-700/50" 
          strokeWidth="1"
        />

        {/* Faceted Internal Shapes */}
        <polygon points="50,5 93.3,30 50,50" className="fill-zinc-900" />
        <polygon points="93.3,30 93.3,70 50,50" className="fill-zinc-800" />
        <polygon points="93.3,70 50,95 50,50" className="fill-zinc-900" />
        <polygon points="50,95 6.7,70 50,50" className="fill-zinc-800" />
        <polygon points="6.7,70 6.7,30 50,50" className="fill-zinc-900" />
        <polygon points="6.7,30 50,5 50,50" className="fill-zinc-800" />

        {/* Circuitry Pattern (Neon Emerald) */}
        <g filter={glow ? "url(#neon-glow)" : ""}>
          <path d="M15,40 L35,40 L40,30" className="stroke-emerald-400 fill-none" strokeWidth="2" />
          <circle cx="15" cy="40" r="2" className="fill-emerald-400" />
          <path d="M85,60 L65,60 L60,70" className="stroke-emerald-400 fill-none" strokeWidth="2" />
          <circle cx="85" cy="60" r="2" className="fill-emerald-400" />
        </g>

        {/* Circuitry Pattern (Neon Indigo) */}
        <g filter={glow ? "url(#blue-glow)" : ""}>
          <path d="M15,60 L25,60 L30,75" className="stroke-indigo-400 fill-none" strokeWidth="2" />
          <circle cx="15" cy="60" r="2" className="fill-indigo-400" />
          <path d="M85,40 L75,40 L70,25" className="stroke-indigo-400 fill-none" strokeWidth="2" />
          <circle cx="85" cy="40" r="2" className="fill-indigo-400" />
        </g>

        {/* Central 'A' Character */}
        <text 
          x="50" 
          y="65" 
          textAnchor="middle" 
          className="fill-white font-black text-[50px] select-none" 
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          A
        </text>
        
        {/* Outlined highlight */}
        <text 
          x="50" 
          y="65" 
          textAnchor="middle" 
          className="fill-none stroke-white/40 stroke-[1.5px] text-[50px] select-none" 
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          A
        </text>

        {/* Binary Floating elements */}
        <text x="25" y="22" className="fill-emerald-400 text-[10px] font-bold opacity-80">1</text>
        <text x="72" y="22" className="fill-indigo-400 text-[10px] font-bold opacity-80">0</text>
        <text x="25" y="85" className="fill-indigo-400 text-[10px] font-bold opacity-80">0</text>
        <text x="72" y="85" className="fill-emerald-400 text-[10px] font-bold opacity-80">1</text>
      </svg>
    </div>
  );
};

export default Logo;
