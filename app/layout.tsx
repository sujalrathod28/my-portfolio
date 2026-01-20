import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sujal Rathore | MERN Stack Developer',
  description:
    'MERN Stack Developer with 2+ years of experience building scalable web applications using React, Next.js, Node.js, and MongoDB.',
  keywords: [
    'MERN Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Full Stack Developer',
    'Sujal Rathore',
  ],
  authors: [{ name: 'Sujal Rathore' }],
  openGraph: {
    title: 'Sujal Rathore | MERN Stack Developer',
    description:
      'Portfolio of Sujal Rathore, MERN Stack Developer with real-world experience in full-stack applications.',
    url: 'https://your-domain.vercel.app',
    siteName: 'Sujal Rathore Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sujal Rathore Portfolio',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}