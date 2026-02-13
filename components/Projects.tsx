
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Celestial XR",
    description: "An interactive astronomical visualization platform built with Three.js and real-time NASA data streams.",
    image: "https://picsum.photos/800/600?random=1",
    tags: ["React", "Three.js", "WebXR", "GLSL"],
    link: "#",
    github: "#"
  },
  {
    title: "Vault AI",
    description: "Secure, encrypted asset management system with an integrated Gemini-driven financial advisor.",
    image: "https://picsum.photos/800/600?random=2",
    tags: ["Next.js", "Gemini API", "Solidity", "Tailwind"],
    link: "#",
    github: "#"
  },
  {
    title: "Prism Design System",
    description: "A comprehensive UI kit for enterprise applications focused on glassmorphism and accessibility.",
    image: "https://picsum.photos/800/600?random=3",
    tags: ["Framer Motion", "Typescript", "Styled Components"],
    link: "#",
    github: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="work" className="space-y-12">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">Selected Works</h2>
          <p className="text-zinc-500">A collection of projects exploring the boundaries of web tech.</p>
        </div>
        <a href="#" className="text-primary hover:underline font-medium">View Archive &rarr;</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group relative glass rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-zinc-200 dark:border-zinc-800"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex gap-4">
                  <a href={project.link} className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform"><ExternalLink size={20} /></a>
                  <a href={project.github} className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform"><Github size={20} /></a>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded-md font-bold">{tag}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
