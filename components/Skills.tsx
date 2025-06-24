'use client';

import { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'JavaScript', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Nest.js', level: 75 },
        { name: 'REST APIs', level: 90 },
        // { name: 'GraphQL', level: 70 },
        { name: 'JWT Auth', level: 85 },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 75 },
        // { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'Redis', level: 65 },
        { name: 'Mongoose', level: 80 },
        // { name: 'Prisma', level: 70 },
      ],
    },
    {
      category: 'Tools & Other',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 10 },
        // { name: 'AWS', level: 65 },
        { name: 'Vercel', level: 85 },
        { name: 'Postman', level: 90 },
        { name: 'VS Code', level: 95 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-effect p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
              <h3 className="text-xl font-bold text-primary mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`skill-progress h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-1000 ease-out ${
                          isVisible ? '' : 'w-0'
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-effect p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {/* <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                Three.js
              </span> */}
              <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                Microservices
              </span>
              <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                DevOps
              </span>
              {/* <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                AI/ML Integration
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;