
import React, { Suspense, useRef } from 'react';
import { User, Code, Terminal, Heart, Sparkles as SparklesIcon } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

const HolographicCore = ({ isDark }: { isDark: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.5;
      meshRef.current.position.y = Math.sin(time) * 0.2;
    }
  });

  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={2}>
      <Sphere args={[1, 100, 100]} ref={meshRef}>
        <MeshDistortMaterial
          color={isDark ? "#6366f1" : "#4f46e5"}
          speed={3}
          distort={0.4}
          radius={1}
          emissive={isDark ? "#1e1b4b" : "white"}
          emissiveIntensity={isDark ? 0.5 : 0.2}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Developer: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="developer" className="space-y-16 py-32 relative overflow-hidden">
      {/* Subtle Background 3D Decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <HolographicCore isDark={isDarkMode} />
          </Suspense>
        </Canvas>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto px-6">
        {/* Photo Container */}
        <div className="w-full md:w-2/5 flex justify-center relative">
          <div className="relative group">
            {/* Animated Ring */}
            <div className="absolute -inset-8 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite] hidden lg:block" />
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary via-secondary to-primary rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative glass p-4 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
              <div className="w-80 h-[500px] overflow-hidden rounded-[2.5rem]">
                <img 
                  src="/harsh.jpeg"
                  alt="Lead Developer" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute bottom-8 left-8 p-4 glass rounded-2xl border border-white/10 backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-widest text-primary font-black mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-sm font-bold dark:text-white text-zinc-900">Available for Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Column */}
        <div className="w-full md:w-3/5 space-y-10 relative z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-primary" />
              <h4 className="text-primary font-black tracking-[0.4em] uppercase text-xs">Architect of Algovave</h4>
            </div>
            <h2 className="text-5xl md:text-7xl font-black dark:text-white text-zinc-900 leading-tight">
              Developed by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient">Harsh Verma</span>
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 leading-relaxed font-light italic">
            "We don't just build websites; we create digital legacies. At <span className="dark:text-white text-zinc-900 font-black not-italic">Algovave</span>, we merge spatial computing with cinematic editing to push the boundaries of what is possible on the web."
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="glass p-8 rounded-3xl border border-white/5 space-y-4 hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Terminal size={24} />
              </div>
              <div>
                <h5 className="font-black text-sm uppercase tracking-widest text-zinc-400 mb-2">Technical Core</h5>
                <p className="text-sm dark:text-zinc-300 text-zinc-600 leading-relaxed">Specializing in Next.js, Three.js, and high-performance GPU-accelerated web experiences.</p>
              </div>
            </div>
            
            <div className="glass p-8 rounded-3xl border border-white/5 space-y-4 hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <SparklesIcon size={24} />
              </div>
              <div>
                <h5 className="font-black text-sm uppercase tracking-widest text-zinc-400 mb-2">Visionary Design</h5>
                <p className="text-sm dark:text-zinc-300 text-zinc-600 leading-relaxed">Blending professional video editing techniques with interactive 3D elements for maximum impact.</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6 pt-4">
            <button className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-black rounded-2xl hover:scale-105 transition-transform flex items-center gap-2">
              Get in Touch <Code size={18} />
            </button>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer"><User size={20} /></div>
               <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer"><Heart size={20} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developer;
