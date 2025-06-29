"use client";

import React, { Suspense, lazy, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HeroInnovative from '@/components/sections/hero-innovative';
import Header from '@/components/sections/header';
import { FloatingActionButton } from '@/components/ui/floating-action-button';
import { isMobileDevice } from '@/lib/performance';
import ErrorBoundary from '@/components/error-boundary';

// Lazy load components for better performance
const JourneyTimeline = lazy(() => import('@/components/sections/journey-timeline'));
const SkillsInteractive = lazy(() => import('@/components/sections/skills-interactive'));
const ProjectsShowcase = lazy(() => import('@/components/sections/projects-showcase'));
const ContactModern = lazy(() => import('@/components/sections/contact-modern'));
const FooterModern = lazy(() => import('@/components/sections/footer-modern'));

// Loading component
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

export default function InnovativePortfolio() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground" suppressHydrationWarning>
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section - loads immediately */}
        <HeroInnovative />
        
        {/* Journey Timeline */}
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton />}>
            <JourneyTimeline />
          </Suspense>
        </ErrorBoundary>
        
        {/* Skills Section */}
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton />}>
            <SkillsInteractive />
          </Suspense>
        </ErrorBoundary>
        
        {/* Projects Showcase */}
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton />}>
            <ProjectsShowcase />
          </Suspense>
        </ErrorBoundary>
        
        {/* Contact Section */}
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton />}>
            <ContactModern />
          </Suspense>
        </ErrorBoundary>
      </main>

      {/* Footer */}
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <FooterModern />
        </Suspense>
      </ErrorBoundary>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
}