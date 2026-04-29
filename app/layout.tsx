import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: 'Angel Carrasco Bru | 3D Artist & Live Coder',
  description: 'Portfolio of Angel Carrasco Bru - 3D artist specializing in Blender and live coder using AI-assisted development. Mastering tools to build cutting-edge software and optimized 3D assets.',
  keywords: [
    'portfolio', 
    '3d artist', 
    'blender specialist', 
    'live coder', 
    'AI-assisted development', 
    'github copilot', 
    'software development',
    '3d modeling',
    'hard surface modeling',
    'pbr texturing',
    'C#',
    'Java',
    'Python',
    'TypeScript',
    'Electron',
    'Next.js',
    'React',
    'Arduino',
    'IoT',
    'Sevilla'
  ],
  authors: [{ name: 'Angel Carrasco Bru' }],
  creator: 'Angel Carrasco Bru',
  openGraph: {
    title: 'Angel Carrasco Bru | 3D Artist & Live Coder',
    description: '3D artist and live coder combining creative artistry with AI-powered development',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angel Carrasco Bru | 3D Artist & Live Coder',
    description: '3D artist and live coder combining creative artistry with AI-powered development',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-white dark:bg-zen-950 text-zen-900 dark:text-zen-50 antialiased`}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
