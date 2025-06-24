'use client';

import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Led development of multiple web applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Developed and deployed 5+ full-stack applications',
        'Improved application performance by 40% through optimization',
        'Mentored 2 junior developers',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovations Inc.',
      location: 'New York, NY',
      period: '2022 - 2023',
      description: 'Focused on creating responsive and user-friendly web interfaces. Worked closely with design teams to implement pixel-perfect UI components.',
      achievements: [
        'Built reusable component library used across 10+ projects',
        'Reduced page load times by 35% through code optimization',
        'Implemented responsive designs for mobile and desktop',
        'Collaborated with UX team to improve user experience'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Figma']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupXYZ',
      location: 'San Francisco, CA',
      period: '2021 - 2022',
      description: 'Started my professional journey in web development. Gained hands-on experience with modern web technologies and agile development practices.',
      achievements: [
        'Contributed to 3 major product releases',
        'Fixed 100+ bugs and implemented new features',
        'Learned best practices for code review and testing',
        'Participated in daily standups and sprint planning'
      ],
      technologies: ['JavaScript', 'React', 'Express.js', 'MySQL', 'Git']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'State University',
      location: 'California, USA',
      period: '2018 - 2021',
      description: 'Focused on software engineering principles, data structures, algorithms, and web development.',
      achievements: [
        'Graduated Magna Cum Laude (GPA: 3.8/4.0)',
        'President of Computer Science Club',
        'Won 1st place in annual hackathon',
        'Teaching Assistant for Web Development course'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CDA-2023-001'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2022',
      credentialId: 'MDB-DEV-2022-001'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      credentialId: 'META-REACT-2022-001'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Building className="mr-3 h-6 w-6 text-primary" />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="glass-effect p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                      <p className="text-primary font-semibold mb-2">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-400">
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
                  
                  <div className="mb-4">
                    <h5 className="text-white font-semibold mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Calendar className="mr-3 h-6 w-6 text-primary" />
              Education & Certifications
            </h3>
            
            {/* Education */}
            <div className="space-y-8 mb-8">
              {education.map((edu, index) => (
                <div key={index} className="glass-effect p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                      <p className="text-primary font-semibold mb-2">{edu.school}</p>
                    </div>
                    <div className="text-sm text-gray-400">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                  
                  <div>
                    <h5 className="text-white font-semibold mb-2">Highlights:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Professional Certifications</h4>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="glass-effect p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <h5 className="text-white font-semibold mb-1">{cert.name}</h5>
                    <p className="text-primary text-sm mb-1">{cert.issuer}</p>
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <span>Issued: {cert.date}</span>
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;