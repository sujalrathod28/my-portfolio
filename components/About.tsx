"use client";

import { Code2, Database, Globe, Smartphone } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Express.js, MongoDB, MySQL",
  },
  {
    icon: Globe,
    title: "Full Stack Solutions",
    description: "End-to-end scalable web applications",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first, cross-browser compatibility",
  },
];
const STATS = [
  { value: '2+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
];
const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Building Scalable & User-Focused Web Solutions
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              With over 2 years of experience in full-stack development, I
              specialize in the MERN stack and have a passion for creating
              scalable, efficient web applications. My journey began with a
              curiosity for how things work on the web, and it has evolved into
              a comprehensive skill set spanning both frontend and backend
              technologies.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in writing clean, maintainable code and staying
              up-to-date with the latest industry trends and best practices.
              Currently expanding my skills with advanced technologies to
              provide even better solutions for clients and organizations.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                Fast Learner
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  {/* <div className="text-primary mb-4">{Icon}</div> */}
                  <Icon className="h-8 w-8 text-primary mb-4" />

                  <h4 className="text-white font-semibold mb-2">{title}</h4>
                  <p className="text-gray-400 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

       <div className="grid md:grid-cols-3 gap-8 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label} className="glass-effect p-8 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">
                {value}
              </div>
              <div className="text-gray-300">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
