"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Education from '@/components/sections/education';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Achievements from '@/components/sections/achievements';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

// Three.js Components
import InteractiveBackground from '@/components/three/interactive-background';
import ParticleFieldCanvas from '@/components/three/particle-field';
import FloatingShapesCanvas from '@/components/three/floating-shapes';
import GeometricMorph from '@/components/three/geometric-morph';
import ShaderWaves from '@/components/three/shader-waves';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Three.js Background Layers */}
      <ShaderWaves />
      <GeometricMorph />
      <InteractiveBackground />
      <ParticleFieldCanvas />
      <FloatingShapesCanvas />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main className="relative pt-16">
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}