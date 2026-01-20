'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  features: string[];
  challenges: string[];
}
const projects: Project[] = [
  {
    id: 1,
    title: 'PetFamily',
    description: 'Social networking platform for pet lovers',
    longDescription:
      'PetFamily is a full-stack social networking platform inspired by Instagram and LinkedIn, built for pet lovers. Users can create profiles, post content, share reels, connect with others, chat in real-time, and explore pet-related products and services.',
    image: '/projects/pet_family.png',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Socket.io'],
    demoUrl: 'https://petfamily.in/',
    githubUrl: '',
    features: [
      'User authentication and profile management',
      'Posts, reels, explore feed',
      'Follow and connection system',
      'Real-time chat and notifications',
      'Pet products e-commerce module',
      'Pet services listing (vet, grooming, etc.)',
    ],
    challenges: [
      'Designing scalable social feed architecture',
      'Managing real-time chat and notifications',
      'Handling relational data like followers and connections',
    ],
  },
  {
    id: 2,
    title: 'EvoJet',
    description: 'Flight booking platform (Frontend)',
    longDescription:
      'EvoJet is a flight booking platform where I worked as a frontend developer, focusing on building responsive UI components and integrating APIs for flight search and booking flows.',
    image: '/projects/evojet.png',
    tags: ['React', 'Material UI', 'JavaScript'],
    demoUrl: '',
    githubUrl: '',
    features: [
      'Responsive flight search UI',
      'Reusable UI components',
      'API integration for booking workflows',
    ],
    challenges: [
      'Designing scalable UI components',
      'Maintaining consistency across large UI screens',
    ],
  },
  {
    id: 3,
    title: 'Mello CRM',
    description: 'CRM system for lead and workflow management',
    longDescription:
      'Mello CRM is an internal CRM platform designed to manage leads and improve team collaboration. I contributed to both frontend development and API integration.',
    image: '/projects/mellow_crm_logo.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    demoUrl: '',
    githubUrl: '',
    features: [
      'Lead tracking dashboard',
      'Google Sheets integration',
      'Role-based data handling',
    ],
    challenges: [
      'Handling dynamic CRM workflows',
      'Optimizing API performance',
    ],
  },
  {
    id: 4,
    title: 'Lenovo Leap',
    description: 'E-learning platform with video-based learning',
    longDescription:
      'Lenovo Leap is an e-learning platform allowing admins to manage courses and users to watch topic-wise videos with progress tracking.',
    // image: '/projects/lenovo-leap.png',
    image:'https://leapnextgenscholar.in/assets/textlogo-Dc3TC8KY.png',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    demoUrl: 'https://leapnextgenscholar.in/',
    githubUrl: '',
    features: [
      'Course and topic management',
      'Video-based learning system',
      'User authentication and progress tracking',
    ],
    challenges: [
      'Managing dynamic course structures',
      'Tracking user learning progress efficiently',
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  

  const categories = ['All', 'React', 'Next.js', 'Node.js', 'Full Stack'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on that demonstrate my skills and experience
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`${
                filter === category
                  ? 'bg-primary hover:bg-primary/90'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-effect rounded-2xl overflow-hidden hover:bg-white/5 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Details
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 flex-1"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" to={project?.demoUrl}/>
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 flex-1"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-slate-900 border-white/20">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-gray-400">
                    {selectedProject.longDescription}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="text-gray-300 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technical Challenges</h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="text-gray-300 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <Button className="bg-primary hover:bg-primary/90">
                      <ExternalLink className="h-4 w-4 mr-2" href={selectedProject.demoUrl} to={selectedProject.demoUrl} />
                      View Live Demo
                    </Button>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      <Github className="h-4 w-4 mr-2" />
                      View Source Code
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;