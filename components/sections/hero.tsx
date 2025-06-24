"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Code, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingTechIcons from '@/components/three/floating-tech-icons';

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-background via-accent/30 to-background">
     
      {/* Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full top-1/4 -left-20 w-96 h-96 bg-primary/5 blur-3xl animate-pulse-soft" />
        <div className="absolute rounded-full bottom-1/4 -right-20 w-96 h-96 bg-primary/5 blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-primary/3 rounded-full blur-3xl animate-float" />
      </div>
      
      {/* Floating Tech Icons - positioned to the right side on laptops only */}
      <div className="absolute top-0 right-0 hidden w-4/5 bottom-20 lg:block">
        {isClient && <FloatingTechIcons />}
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center min-h-screen grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Content */}
          <motion.div
            className="lg:pr-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 mb-6 space-x-2 rounded-full glass"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Full Stack Developer
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl text-foreground"
          >
            Hi, I'm{' '}
            <span className="text-transparent bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
              {/* {"Vaibhav M N".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0], 
                    y: [20, 0, 0, 20] 
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.6, -0.05, 0.01, 0.99],
                    repeat: Infinity,
                    repeatDelay: 3,
                    repeatType: "loop"
                  }}
                  className={letter === " " ? "inline-block w-2" : "inline-block"}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))} */}
              Vaibhav M N
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mb-6 text-xl leading-relaxed sm:text-2xl text-muted-foreground"
          >
            I create{' '}
            <span className="font-medium text-primary">innovative</span> and{' '}
            <span className="font-medium text-primary">scalable</span> web applications 
            that deliver exceptional user experiences
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mb-8 text-lg text-muted-foreground"
          >
            Passionate about modern technologies, clean code, and turning ideas into 
            beautiful, functional digital solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start justify-start gap-4 mb-8 sm:flex-row lg:justify-start"
          >
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-medium transition-all duration-300 group rounded-2xl shadow-interactive hover:shadow-interactive-hover"
              onClick={scrollToAbout}
            >
              <span>View My Work</span>
              <ArrowDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-medium transition-all duration-300 group rounded-2xl glass border-primary/20 hover:bg-primary/5"
              asChild
            >
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                <span>Download Resume</span>
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-start space-x-6"
          >
            {[
              { icon: Github, href: "https://github.com/Vaibhav2154", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vaibhav-m-n-a6b071282/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:vaibhavvaibhu2005@gmail.com", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="p-3 transition-all duration-300 group rounded-xl glass hover:glass-strong"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                <social.icon className="w-6 h-6 transition-colors text-muted-foreground group-hover:text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Space for Tech Icons (visible only on lg+ screens) */}
        <div className="hidden lg:block">
          {/* This space is reserved for the floating tech icons */}
        </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.button
          onClick={scrollToAbout}
          className="flex flex-col items-center space-y-2 transition-colors text-muted-foreground hover:text-primary group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 transition-transform group-hover:scale-110" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
