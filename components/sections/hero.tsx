"use client";

import React, { useState, useEffect } from 'react';
// Utility hook to detect mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAudio } from '@/components/audio-context';
import HeroExperience from '@/components/hero_models/HeroExperience';

const HeroInnovative = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { isMuted, toggleMute, setUserInteracted, userInteracted } = useAudio();
  const isMobile = useIsMobile();

  const scenes = [
    {
      title: "Hello, I'm Vaibhav",
      subtitle: "Full Stack Developer",
      description: "Crafting digital experiences that matter",
      // Light mode: purple to blue gradient, Dark mode: deeper purple to blue
      background: "from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-900",
      particles: "tech"
    },
    {
      title: "I Build Solutions",
      subtitle: "Problem Solver",
      description: "Turning complex challenges into elegant code",
      // Light mode: emerald to cyan gradient, Dark mode: deeper emerald to cyan
      background: "from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-900 dark:via-teal-900 dark:to-cyan-900",
      particles: "code"
    },
    {
      title: "Let's Create Together",
      subtitle: "Innovator",
      description: "Ready to bring your ideas to life",
      // Light mode: orange to pink gradient, Dark mode: deeper orange to pink
      background: "from-orange-600 via-red-600 to-pink-600 dark:from-orange-900 dark:via-red-900 dark:to-pink-900",
      particles: "creative"
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

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
    }
  };

  const handleToggleSound = () => {
    toggleMute();
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen overflow-hidden bg-background">
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

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />

      {mounted && (
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/20 dark:bg-white/30"
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
      )}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full max-w-6xl px-4 mx-auto text-white dark:text-white">
        {/* <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            onClick={handleUserInteraction}
          >
            <motion.h1 
              className="mb-4 text-6xl font-bold text-white md:text-8xl drop-shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {scenes[currentScene].title}
            </motion.h1>
            
            <motion.p 
              className="mb-6 text-2xl md:text-3xl text-white/90 drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {scenes[currentScene].subtitle}
            </motion.p>
            
            <motion.p 
              className="mb-8 text-lg md:text-xl text-white/80 drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {scenes[currentScene].description}
            </motion.p>
          </motion.div>
        </AnimatePresence> */}
        <motion.div
          className="flex flex-col md:flex-row items-stretch justify-center w-full mb-2 md:mb-12 gap-6 md:gap-12 min-h-[350px] md:min-h-[500px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {/* Hero Intro */}
          <div className="flex-1 min-w-[250px] max-w-xl flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <motion.div
              key={currentScene}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              onClick={handleUserInteraction}
              className="flex flex-col justify-center w-full h-full"
            >
              <motion.h1
                className="mb-4 text-6xl font-bold text-white md:text-8xl drop-shadow-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                {scenes[currentScene].title}
              </motion.h1>
              <motion.p
                className="mb-6 text-2xl md:text-3xl text-white/90 drop-shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {scenes[currentScene].subtitle}
              </motion.p>
              <motion.p
                className="mb-8 text-lg md:text-xl text-white/80 drop-shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {scenes[currentScene].description}
              </motion.p>
            </motion.div>
          </div>
          {/* Hero 3D Experience (hidden on mobile) */}
          {!isMobile && (
            <div className="flex-1 min-w-[300px] max-w-3xl flex items-center justify-center">
              <div className="hero-3d-layout w-full h-[140px] xs:h-[180px] sm:h-[220px] md:h-[550px] max-w-[550px] max-h-[550px] md:max-w-[650px] md:max-h-[650px] flex items-center justify-center">
                <HeroExperience />
              </div>
            </div>
          )}
        </motion.div>
        {/* Controls and Begin Journey stacked on mobile, with extra margin, z-index, and background for clarity */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full gap-4 px-2 pt-4 pb-4 mt-8 shadow-lg md:flex-row md:mt-6 sm:px-0 bg-black/30 md:bg-transparent rounded-xl md:rounded-none md:shadow-none backdrop-blur md:backdrop-blur-none">
          <div className="flex flex-row items-center justify-center w-full gap-4 mb-4 md:mb-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white bg-white/10 border-white/30 hover:bg-white/20 dark:bg-white/5 dark:border-white/20 dark:hover:bg-white/15 backdrop-blur-sm"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleToggleSound}
              className="text-white bg-white/10 border-white/30 hover:bg-white/20 dark:bg-white/5 dark:border-white/20 dark:hover:bg-white/15 backdrop-blur-sm"
            >
              {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </Button>
            <div className="flex space-x-2">
              {scenes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScene(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentScene
                      ? 'bg-white shadow-lg'
                      : 'bg-white/40 hover:bg-white/60'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/70 drop-shadow-md" />
      </motion.div>
    </section>
  );
};

export default HeroInnovative;