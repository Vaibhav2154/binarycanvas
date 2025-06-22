"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { isMobileDevice } from '@/lib/performance';

// Lazy load FloatingTechIcons only for desktop
const FloatingTechIcons = React.lazy(() => import('@/components/three/floating-tech-icons'));

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsClient(true);
    setIsMobile(isMobileDevice());
    
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id='hero' className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Floating Tech Icons - Desktop Only */}
      {isClient && !isMobile && (
        <React.Suspense fallback={null}>
          <FloatingTechIcons />
        </React.Suspense>
      )}

      {/* Static gradient background for mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-cyan-50 to-emerald-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 -z-20" />
      
      {/* Simplified animated gradient orbs for mobile */}
      {!isMobile && (
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-400/30 to-purple-600/30 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/30 to-blue-600/30 blur-3xl"
          />
        </div>
      )}

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium border rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-800"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Welcome to my digital space
              </motion.div>
              
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
                Hi, I'm{' '}
                <span className="text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text">
                  Vaibhav M N
                </span>
              </h1>
              
              <p className="mb-8 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
                A passionate Computer Science student and Full Stack Developer specializing in{' '}
                <span className="font-semibold text-violet-600 dark:text-violet-400">Flutter</span>,{' '}
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">Next.js</span>, and{' '}
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">AI/ML</span>.
                I create innovative solutions that bridge technology and real-world impact.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-6 mb-12 sm:flex-row lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold text-white border-0 shadow-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-700 hover:via-purple-700 hover:to-blue-700 shadow-violet-500/25"
                  onClick={() => window.open('https://drive.google.com/file/d/1eaXr1S-7nZONYJFIvz9fD5xXaGsC5jk3/view?usp=sharing', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToAbout}
                  className="px-8 py-4 text-lg font-semibold glass hover:bg-white/20 dark:hover:bg-black/20 border-violet-200 dark:border-violet-800"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-8 lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/Vaibhav2154", color: "hover:text-gray-600" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/vaibhav-m-n-a6b071282/", color: "hover:text-blue-600" },
                { icon: Mail, href: "mailto:vaibhavvaibhu2005@gmail.com", color: "hover:text-red-500" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 rounded-full glass shadow-lg hover:shadow-xl transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="h-7 w-7" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Side - Tech Icons Space (Desktop Only) */}
          {!isMobile && (
            <div className="relative hidden lg:block">
              {/* This space is reserved for the floating tech icons */}
            </div>
          )}
        </div>
      </div>

    </section>
  );
};

export default Hero;