"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Code, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/30 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-primary/3 rounded-full blur-3xl animate-float" />
      </div>

      {/* Floating Icons */}
      {isClient && (
        <>
          <motion.div
            className="absolute top-20 left-20 text-primary/20"
            variants={floatingVariants}
            animate="float"
          >
            <Code className="w-8 h-8" />
          </motion.div>
          <motion.div
            className="absolute top-40 right-32 text-primary/20"
            variants={floatingVariants}
            animate="float"
            transition={{ delay: 1 }}
          >
            <Rocket className="w-6 h-6" />
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-32 text-primary/20"
            variants={floatingVariants}
            animate="float"
            transition={{ delay: 2 }}
          >
            <Sparkles className="w-7 h-7" />
          </motion.div>
        </>
      )}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Full Stack Developer
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Vaibhav M N
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            I create{' '}
            <span className="text-primary font-medium">innovative</span> and{' '}
            <span className="text-primary font-medium">scalable</span> web applications 
            that deliver exceptional user experiences
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Passionate about modern technologies, clean code, and turning ideas into 
            beautiful, functional digital solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="group px-8 py-6 text-lg font-medium rounded-2xl shadow-interactive hover:shadow-interactive-hover transition-all duration-300"
              onClick={scrollToAbout}
            >
              <span>View My Work</span>
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group px-8 py-6 text-lg font-medium rounded-2xl glass border-primary/20 hover:bg-primary/5 transition-all duration-300"
              asChild
            >
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-6"
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
                className="group p-3 rounded-xl glass hover:glass-strong transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.button
          onClick={scrollToAbout}
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
