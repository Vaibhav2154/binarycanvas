"use client";

import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import Footer from '@/components/sections/footer';
import { isMobileDevice, performanceConfig } from '@/lib/performance';

// Lazy load components that are not immediately visible
const About = lazy(() => import('@/components/sections/about'));
const Education = lazy(() => import('@/components/sections/education'));
const Experience = lazy(() => import('@/components/sections/experience'));
const Projects = lazy(() => import('@/components/sections/projects'));
const Skills = lazy(() => import('@/components/sections/skills'));
const Achievements = lazy(() => import('@/components/sections/achievements'));
const Contact = lazy(() => import('@/components/sections/contact'));

// Loading component with reduced animation for mobile
const SectionSkeleton = () => {
  const isMobile = isMobileDevice();
  
  return (
    <div className={`w-full h-96 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg ${
      isMobile ? '' : 'animate-pulse'
    }`} />
  );
};

export default function OptimizedHome() {
  const isMobile = isMobileDevice();
  
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
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
    </div>
  );
}
