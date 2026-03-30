"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code2, Smartphone, Brain, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mounted, setMounted] = useState(false);

  const roles = [
    {
      title: "WEB DEVELOPER",
      subtitle: "NEXT.JS, REACT, FASTAPI",
      color: "bg-[#FFE500]",
      icon: Code2,
    },
    {
      title: "MOBILE DEVELOPER",
      subtitle: "FLUTTER APPS",
      color: "bg-[#FF6B9D]",
      icon: Smartphone,
    },
    {
      title: "CYBER SECURITY ENGINEER",
      subtitle: "SIEM, THREAT MODELING & MONITORING",
      color: "bg-[#00D4FF]",
      icon: Brain,
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#education');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!mounted) {
    return (
      <section id="hero" className="relative flex items-center justify-center min-h-screen bg-[#FFFEF0]">
        <div className="text-center">
          <div className="mb-4 text-6xl font-black uppercase">VAIBHAV</div>
          <div className="text-xl font-bold">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" className="relative min-h-screen bg-[#FFFEF0] brutal-dots overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#FFE500] border-4 border-black rotate-12 hidden md:block" />
      <div className="absolute top-32 right-20 w-16 h-16 bg-[#FF6B9D] border-4 border-black -rotate-6 hidden md:block" />
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-[#00D4FF] border-4 border-black rotate-45 hidden md:block" />
      <div className="absolute bottom-20 right-32 w-12 h-12 bg-[#00FF94] border-4 border-black -rotate-12 hidden md:block" />

      {/* Stars decoration */}
      <div className="absolute hidden top-40 left-1/4 md:block">
        <Star className="w-8 h-8 text-black fill-[#FFE500]" />
      </div>
      <div className="absolute hidden bottom-40 right-1/4 md:block">
        <Star className="w-10 h-10 text-black fill-[#FF6B9D]" />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
        {/* Main Content */}
        <motion.div
          className="max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Name Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-2 bg-[#FFE500] border-4 border-black shadow-brutal inline-block">
              <span className="text-sm font-black tracking-widest uppercase">👋 Hello, I&apos;m</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 text-6xl font-black tracking-tight uppercase md:text-8xl lg:text-9xl"
          >
            <span className="relative inline-block">
              VAIBHAV
              <div className="absolute -bottom-2 left-0 w-full h-4 bg-[#FFE500] -z-10 -rotate-1" />
            </span>
          </motion.h1>

          {/* Role Carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className={`inline-flex items-center gap-4 px-8 py-4 ${roles[currentRole].color} border-4 border-black shadow-brutal-lg`}>
                {React.createElement(roles[currentRole].icon, { className: "w-8 h-8" })}
                <div className="text-left">
                  <div className="text-2xl font-black uppercase md:text-3xl">
                    {roles[currentRole].title}
                  </div>
                  <div className="text-sm font-bold tracking-wider uppercase opacity-80">
                    {roles[currentRole].subtitle}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Role Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-2 mb-8"
          >
            {roles.map((role, index) => (
              <button
                key={index}
                onClick={() => setCurrentRole(index)}
                className={`w-12 h-3 border-2 border-black transition-all ${currentRole === index ? role.color : 'bg-white'
                  }`}
              />
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="max-w-2xl mx-auto mb-10 text-lg font-medium md:text-xl"
          >
            Computer Science student passionate about building innovative
            digital solutions. Creating impactful applications with modern technologies.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              onClick={scrollToNext}
              className="text-base group"
              size="lg"
            >
              VIEW MY WORK
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              GET IN TOUCH
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-black" />
    </section>
  );
};

export default Hero;

