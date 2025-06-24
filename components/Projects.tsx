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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with payment integration',
      longDescription: 'A comprehensive e-commerce platform built with the MERN stack, featuring user authentication, product management, shopping cart functionality, and secure payment processing.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and wishlist functionality',
        'Secure payment processing with ccavenue',
        'Order management and tracking',
        'Admin dashboard for inventory management'
      ],
      challenges: [
        'Implementing secure payment processing',
        'Optimizing database queries for large product catalogs',
        'Managing complex state for shopping cart across sessions'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      longDescription: 'A collaborative task management application that enables teams to organize projects, assign tasks, and track progress with real-time notifications and updates.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'Prisma'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'Real-time collaboration with Socket.io',
        'Drag-and-drop task management',
        'Team member invitations and roles',
        'File attachments and comments',
        'Progress tracking and analytics',
        'Mobile-responsive design'
      ],
      challenges: [
        'Implementing real-time synchronization across multiple users',
        'Managing complex relational data with Prisma',
        'Optimizing performance for large teams and projects'
      ]
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      longDescription: 'A comprehensive social media analytics dashboard that aggregates data from multiple platforms and provides insights through interactive charts and reports.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'REST API'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'Multi-platform social media integration',
        'Interactive charts and visualizations',
        'Scheduled post management',
        'Engagement analytics and insights',
        'Custom report generation',
        'Team collaboration features'
      ],
      challenges: [
        'Integrating multiple social media APIs',
        'Processing and visualizing large datasets',
        'Implementing efficient data caching strategies'
      ]
    },
    {
      id: 4,
      title: 'Learning Management System',
      description: 'Educational platform with course management and video streaming',
      longDescription: 'A comprehensive learning management system that allows instructors to create courses, upload content, and track student progress, while providing students with an interactive learning experience.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Nest.js', 'PostgreSQL', 'AWS S3', 'JWT'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'Course creation and management',
        'Video streaming with progress tracking',
        'Quiz and assignment system',
        'Student progress analytics',
        'Discussion forums and messaging',
        'Certificate generation'
      ],
      challenges: [
        'Implementing secure video streaming',
        'Managing large file uploads to AWS S3',
        'Creating a flexible course structure system'
      ]
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'Property listing platform with advanced search and maps',
      longDescription: 'A modern real estate platform that connects buyers, sellers, and agents with advanced property search capabilities, interactive maps, and comprehensive property management tools.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Express', 'MongoDB', 'Mapbox', 'Cloudinary'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'Advanced property search with filters',
        'Interactive maps with property markers',
        'Virtual tour integration',
        'Agent and buyer messaging system',
        'Property comparison tools',
        'Mortgage calculator integration'
      ],
      challenges: [
        'Integrating complex map functionality',
        'Optimizing search performance for large datasets',
        'Managing high-resolution property images'
      ]
    },
    {
      id: 6,
      title: 'Healthcare Appointment System',
      description: 'Medical appointment booking and management system',
      longDescription: 'A comprehensive healthcare management system that streamlines appointment booking, patient records management, and communication between healthcare providers and patients.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Node.js', 'MySQL', 'Calendar API', 'HIPAA'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'Online appointment booking system',
        'Patient medical records management',
        'Doctor availability scheduling',
        'Automated appointment reminders',
        'Prescription management',
        'HIPAA-compliant security measures'
      ],
      challenges: [
        'Ensuring HIPAA compliance and data security',
        'Managing complex scheduling algorithms',
        'Implementing secure patient data handling'
      ]
    }
  ];

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
                    <ExternalLink className="h-4 w-4 mr-2" />
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
                      <ExternalLink className="h-4 w-4 mr-2" />
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