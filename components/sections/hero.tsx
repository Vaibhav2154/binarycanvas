"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
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
      {/* Floating Tech Icons */}
      {isClient && (
        <FloatingTechIcons />
      )}

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-cyan-50 to-emerald-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 -z-20" />
      
      {/* Animated gradient orbs */}
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
          className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-600/30 blur-3xl"
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center min-h-screen grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Side - Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left lg:pr-8"
          >
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-4"
              >
                <Sparkles className="w-8 h-8 text-violet-500" />
              </motion.div>
              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Hello!
              </h1>
              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="-lg:ml-12 gradient-text animate">
                  I'm{' '} Vaibhav M N
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mb-12 space-y-6"
            >
              <motion.p 
                className="text-xl font-medium sm:text-2xl lg:text-3xl text-muted-foreground"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Computer Science Student & Developer
              </motion.p>
              <motion.p 
                className="max-w-2xl text-base leading-relaxed sm:text-lg lg:text-xl text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Passionate about <span className="font-semibold text-violet-500">Flutter development</span>, 
                <span className="font-semibold text-cyan-500"> Machine Learning</span>, and 
                <span className="font-semibold text-emerald-500"> Cybersecurity</span>. 
                Building innovative solutions and winning hackathons.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-start justify-start gap-6 mb-12 sm:flex-row"
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
              className="flex items-start justify-start space-x-8"
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
          
          {/* Right Side - Tech Icons Space */}
          <div className="relative hidden lg:block">
            {/* This space is reserved for the floating tech icons */}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;