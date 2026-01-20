'use client';

import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';

const EXPERIENCE = [
  {
    role: 'MERN Stack Developer',
    company: 'Virtual Height IT Services Pvt. Ltd.',
    location: 'Indore, MP',
    period: 'Jul 2023 – Present',
    description:
      'Working as a MERN Stack Developer, contributing to the development of scalable web applications and internal platforms.',
    responsibilities: [
      'Developed and maintained full-stack applications using React, Node.js, Express, and MongoDB',
      'Built responsive and dynamic user interfaces using React hooks and modern UI libraries',
      'Designed and integrated RESTful APIs for frontend-backend communication',
      'Implemented authentication and authorization using JWT',
      'Worked with Socket.io to build real-time features',
      'Collaborated with team members in an agile development environment',
      'Optimized database queries to improve application performance',
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Socket.io',
      'Git',
    ],
  },
];

const EDUCATION = [
  {
    degree: 'Master of Computer Application (MCA)',
    institute: 'DAVV',
    location: 'Indore, MP',
    period: '2021 – 2023',
  },
  {
    degree: 'Bachelor of Science (Computer Science)',
    institute: 'Holkar Science College',
    location: 'Indore, MP',
    period: '2018 – 2021',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Building className="h-6 w-6 text-primary mr-3" />
              Professional Experience
            </h3>

            {EXPERIENCE.map((exp) => (
              <div
                key={exp.company}
                className="glass-effect p-6 rounded-2xl hover:bg-white/5 transition"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {exp.role}
                    </h4>
                    <p className="text-primary font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-sm text-gray-400 mt-2 sm:mt-0">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="text-gray-300 text-sm flex items-start"
                    >
                      <span className="text-primary mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              Education
            </h3>

            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.degree}
                  className="glass-effect p-6 rounded-2xl hover:bg-white/5 transition"
                >
                  <h4 className="text-xl font-bold text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-primary font-semibold">
                    {edu.institute}
                  </p>
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
