"use client";

import React, { Suspense, lazy, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import Footer from '@/components/sections/footer';
import { FloatingActionButton } from '@/components/ui/floating-action-button';
import { isMobileDevice, performanceConfig } from '@/lib/performance';
import ErrorBoundary from '@/components/error-boundary';

// Lazy load components with error boundaries
const About = lazy(() => import('@/components/sections/about').catch(err => {
  console.error('Failed to load About component:', err);
  return { default: () => <div>Failed to load section</div> };
}));

const Education = lazy(() => import('@/components/sections/education').catch(err => {
  console.error('Failed to load Education component:', err);
  return { default: () => <div>Failed to load section</div> };
}));

const Experience = lazy(() => import('@/components/sections/experience').catch(err => {
  console.error('Failed to load Experience component:', err);
  return { default: () => <div>Failed to load section</div> };
}));

const Projects = lazy(() => import('@/components/sections/projects').catch(err => {
  console.error('Failed to load Projects component:', err);
  return { default: () => <div>Failed to load section</div> };
}));

const Skills = lazy(() => import('@/components/sections/skills').catch(err => {
  console.error('Failed to load Skills component:', err);
  return { default: () => <div>Failed to load section</div> };
}));

const Achievements = lazy(() => import('@/components/sections/achievements').catch(err => {
  console.error('Failed to load Achievements component:', err);
  return { default: () => <div>Failed to load section</div> };
}));

const Contact = lazy(() => import('@/components/sections/contact').catch(err => {
  console.error('Failed to load Contact component:', err);
  return { default: () => <div>Failed to load section</div> };
}));

// Loading component with reduced animation for mobile
const SectionSkeleton = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isMobile = mounted ? isMobileDevice() : false;
  
  return (
    <div 
      className={`w-full h-96 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg ${
        isMobile ? '' : 'animate-pulse'
      }`}
      suppressHydrationWarning
    />
  );
};

export default function OptimizedHome() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isMobile = mounted ? isMobileDevice() : false;
  
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground" suppressHydrationWarning>
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main className="relative pt-16">
          {/* Hero section loads immediately */}
          <Hero />
          
          {/* Lazy load sections with suspense */}
          <Suspense fallback={<SectionSkeleton />}>
            <About />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <Education />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <Experience />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <Projects />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <Skills />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <Achievements />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
}
