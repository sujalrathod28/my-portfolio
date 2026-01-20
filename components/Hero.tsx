'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const ROLES = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'React Specialist',
  'Node.js Developer',
  'MongoDB Developer',
];

const SOCIAL_LINKS = [
  {
    href: 'https://github.com/yourusername',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'mailto:sujalrathore@email.com',
    label: 'Email',
    icon: Mail,
  },
];

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[index % ROLES.length];
    const speed = isDeleting ? 40 : 120;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 700);
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating-animation delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl floating-animation delay-2000 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-16 text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="inline-block p-4 rounded-2xl glass-effect">
            <Image
              // src="/profile.jpg"
                              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"

              alt="Sujal Rathore - Full Stack Developer"
              width={128}
              height={128}
              className="rounded-full object-cover border-4 border-primary/30"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I&apos;m <span className="gradient-text">Sujal Rathore</span>
        </h1>

        {/* Typing text */}
        <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 h-16 flex justify-center">
          <span>I&apos;m a&nbsp;</span>
          <span className="text-primary font-semibold min-w-[280px] text-left">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Full Stack Developer with 2+ years of experience in building scalable
          MERN applications. I focus on clean architecture, performance, and
          user-centric design.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 text-lg glow-effect"
            aria-label="View Projects"
          >
            View My Work
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg"
            asChild
          >
            <a href="/Sujal_Rathore_CV.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full glass-effect hover:scale-110 transition"
            >
              <Icon className="h-6 w-6 text-gray-300" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Down */}
      {/* <button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce p-2 rounded-full glass-effect"
      > 
        <ArrowDown className="h-6 w-6 text-gray-300" />
      </button> */}
    </section>
  );
};

export default Hero;
