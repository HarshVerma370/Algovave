
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Float, 
  MeshWobbleMaterial,
  TorusKnot,
  Icosahedron,
  PerspectiveCamera,
  ContactShadows,
  Environment,
  OrbitControls,
  Sparkles
} from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';
import { Monitor, Video, Rocket, Layers, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Interactive3DElement = ({ isDark }: { isDark: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <TorusKnot 
        args={[1.2, 0.4, 128, 32]} 
        ref={meshRef} 
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshWobbleMaterial
          color={isDark ? (hovered ? "#a855f7" : "#6366f1") : (hovered ? "#4f46e5" : "#818cf8")}
          factor={0.6}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          emissive={isDark ? (hovered ? "#2e1065" : "#1e1b4b") : "black"}
        />
      </TorusKnot>
    </Float>
  );
};

const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-700 dark:bg-zinc-950 bg-zinc-50">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:40px_40px]" />
      
      <div className="absolute inset-0 z-0">
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
          <ambientLight intensity={isDarkMode ? 0.4 : 1.2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={isDarkMode ? 1.5 : 2} castShadow />
          <pointLight position={[-10, -10, -5]} intensity={isDarkMode ? 1 : 0.5} color={isDarkMode ? "#a855f7" : "#6366f1"} />
          
          <Suspense fallback={null}>
            <group position={[2.5, 0, 0]}>
              <Interactive3DElement isDark={isDarkMode} />
            </group>
            <ContactShadows position={[0, -3.5, 0]} opacity={isDarkMode ? 0.3 : 0.15} scale={15} blur={3} far={4} />
            <Environment preset={isDarkMode ? "night" : "city"} />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <div className="flex flex-col items-center justify-center text-center space-y-12">
          <div className="space-y-8 max-w-4xl">
            <div className="space-y-4 pt-12">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl">
                <Rocket className="text-primary" size={16} />
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Est. 2024 / Digital Engineering</span>
              </div>
              
              <h1 className="text-7xl md:text-[10rem] font-black dark:text-white text-zinc-900 leading-none tracking-tighter">
                ALGOVAVE
              </h1>
              
              <p className="text-xl md:text-3xl dark:text-zinc-400 text-zinc-600 font-light max-w-3xl mx-auto leading-relaxed">
                Transforming complex algorithms into <span className="dark:text-white text-zinc-900 font-medium">cinematic</span> digital experiences and <span className="dark:text-white text-zinc-900 font-medium">high-performance</span> web software.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pointer-events-auto pt-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-14 py-6 rounded-[2rem] font-black text-xl transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(99,102,241,0.4)] flex items-center gap-4 group">
              Start Project
              <div className="w-2 h-2 bg-white rounded-full group-hover:w-8 transition-all" />
            </button>
            <button className="glass dark:text-white text-zinc-900 px-14 py-6 rounded-[2rem] font-black text-xl transition-all border border-zinc-300 dark:border-white/10 hover:bg-white/10">
              View Work
            </button>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 w-full max-w-5xl">
            {[
              { icon: <Monitor />, label: "Web Building", desc: "Next-gen React Architecture" },
              { icon: <Video />, label: "Video Editing", desc: "Cinematic Narrative Design" },
              { icon: <Layers />, label: "Brand Vision", desc: "Strategic Visual Identity" }
            ].map((s, i) => (
              <div key={i} className="glass p-10 rounded-[3rem] border border-white/5 flex flex-col items-center text-center space-y-4 hover:border-primary/50 transition-all group pointer-events-auto">
                <div className="text-primary p-5 bg-primary/10 rounded-2xl group-hover:scale-110 group-hover:rotate-12 transition-transform">{s.icon}</div>
                <h3 className="font-bold text-xl dark:text-white text-zinc-900">{s.label}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-20 animate-bounce">
            <ChevronDown className="text-zinc-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
