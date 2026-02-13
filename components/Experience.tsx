
import React from 'react';

const experiences = [
  {
    role: "Senior Full-Stack Engineer",
    company: "MetaVerse Solutions",
    period: "2022 - Present",
    description: "Leading the development of a real-time 3D collaboration suite. Optimized WebGL performance by 40% using custom shaders."
  },
  {
    role: "Front-end Developer",
    company: "Pixel Perfect",
    period: "2020 - 2022",
    description: "Developed highly interactive marketing sites for Fortune 500 companies. Focused on framer-motion animations and micro-interactions."
  },
  {
    role: "Open Source Contributor",
    company: "Three.js Ecosystem",
    period: "2019 - 2020",
    description: "Contributed several components to popular React Three Fiber libraries and maintained core geometry utilities."
  }
];

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="space-y-12 py-12">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold">Journey</h2>
        <div className="h-[1px] flex-grow bg-zinc-200 dark:bg-zinc-800" />
      </div>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-300 dark:before:via-zinc-800 before:to-transparent">
        {experiences.map((exp, idx) => (
          <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-500 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="text-xs font-bold">{idx + 1}</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 group-hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">{exp.role}</div>
                <time className="font-heading font-medium text-primary text-sm">{exp.period}</time>
              </div>
              <div className="text-zinc-500 font-medium mb-4">{exp.company}</div>
              <div className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{exp.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
