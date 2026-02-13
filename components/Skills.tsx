
import React from 'react';
import { Code2, Palette, Globe2, Cpu } from 'lucide-react';

const skillCategories = [
  {
    icon: <Code2 className="text-primary" />,
    title: "Core Development",
    skills: ["React", "TypeScript", "Node.js", "Python", "GraphQL", "Rust"]
  },
  {
    icon: <Palette className="text-secondary" />,
    title: "3D & Design",
    skills: ["Three.js", "WebGL", "Blender", "Figma", "Shader Dev", "R3F"]
  },
  {
    icon: <Globe2 className="text-emerald-500" />,
    title: "Infrastructure",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Vercel", "Linux"]
  },
  {
    icon: <Cpu className="text-amber-500" />,
    title: "Advanced AI",
    skills: ["Gemini API", "LLM Fine-tuning", "PyTorch", "Prompt Eng", "OpenCV"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="space-y-12 py-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-bold">Technological Arsenal</h2>
        <p className="text-zinc-500">I leverage the latest tools and frameworks to build high-performance applications.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass p-8 rounded-3xl space-y-6 hover:border-primary/50 transition-colors border border-zinc-200 dark:border-zinc-800">
            <div className="p-3 bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl w-fit">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold">{category.title}</h3>
            <ul className="space-y-3">
              {category.skills.map(skill => (
                <li key={skill} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
