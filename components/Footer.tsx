'use client';

import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: 'https://github.com/your-github-username',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/sujal-rathore-72b279220/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:sujalrathore76@gmail.com',
    label: 'Email',
  },
];

const QUICK_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold gradient-text mb-4">
              Sujal Rathore
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-md">
              MERN Stack Developer with 2+ years of experience building
              scalable, real-world web applications using React, Next.js,
              Node.js, and MongoDB.
            </p>

            <div className="flex gap-4 mt-6">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-full glass-effect hover:bg-white/10 hover:scale-110 transition"
                >
                  <Icon className="h-5 w-5 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center">
            © {currentYear} Sujal Rathore. Built with{' '}
            <Heart className="h-4 w-4 mx-1 text-red-500" fill="currentColor" />
            using Next.js
          </p>

          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-1 text-gray-400 hover:text-white transition text-sm"
            aria-label="Back to top"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
