"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroInnovative = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  const scenes = [
    {
      title: "Hello, I'm Vaibhav",
      subtitle: "Full Stack Developer",
      description: "Crafting digital experiences that matter",
      background: "from-purple-900 via-blue-900 to-indigo-900",
      particles: "tech"
    },
    {
      title: "I Build Solutions",
      subtitle: "Problem Solver",
      description: "Turning complex challenges into elegant code",
      background: "from-emerald-900 via-teal-900 to-cyan-900",
      particles: "code"
    },
    {
      title: "Let's Create Together",
      subtitle: "Innovator",
      description: "Ready to bring your ideas to life",
      background: "from-orange-900 via-red-900 to-pink-900",
      particles: "creative"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, scenes.length]);

  const handleUserInteraction = () => {
    if (!userInteracted) {
      setUserInteracted(true);
      setSoundEnabled(true);
    }
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector('#journey-start');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${scenes[currentScene].background}`}
        />
      </AnimatePresence>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              x: [0, Math.random() * window.innerWidth],
              y: [0, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            onClick={handleUserInteraction}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {scenes[currentScene].title}
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl mb-6 text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {scenes[currentScene].subtitle}
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-white/60 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {scenes[currentScene].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Interactive Controls */}
        <motion.div 
          className="flex items-center justify-center space-x-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </Button>

          {/* Scene Indicators */}
          <div className="flex space-x-2">
            {scenes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentScene(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentScene ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Button
            size="lg"
            onClick={scrollToNext}
            className="bg-white text-black hover:bg-white/90 text-lg px-8 py-4 rounded-full"
          >
            Begin Journey
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  );
};

export default HeroInnovative;