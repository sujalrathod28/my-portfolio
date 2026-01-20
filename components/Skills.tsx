'use client';

import { useEffect, useState } from 'react';

const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML & CSS', level: 95 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'NestJS', level: 75 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT Authentication', level: 85 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 75 },
      { name: 'Redis', level: 65 },
      { name: 'Mongoose', level: 80 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Postman', level: 90 },
      { name: 'Vercel', level: 85 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

const CURRENTLY_LEARNING = ['Microservices', 'DevOps', 'Docker'];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById('skills');
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, production-ready
            applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.category}
              className="glass-effect p-6 rounded-2xl hover:bg-white/5 transition"
            >
              <h3 className="text-xl font-bold text-primary mb-6 text-center">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                    </div>

                    <div
                      className="h-2 bg-gray-700 rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 0.08}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="mt-16 text-center">
          <div className="glass-effect p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">
              Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {CURRENTLY_LEARNING.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
