"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Shield, Smartphone, Brain, Sparkles, Zap, Target, Award, Heart, Coffee } from 'lucide-react';
import { ModernCard, GradientCard } from '@/components/ui/modern-card';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expert in modern web technologies, creating scalable applications with clean architecture",
      color: "from-violet-500 to-purple-600",
      gradient: "primary" as const
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Google Cybersecurity Professional with deep understanding of secure development practices",
      color: "from-cyan-500 to-blue-600",
      gradient: "secondary" as const
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Flutter specialist crafting beautiful, performant mobile experiences across platforms",
      color: "from-emerald-500 to-green-600",
      gradient: "success" as const
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Building intelligent solutions with AI/ML, bringing data-driven insights to life",
      color: "from-orange-500 to-red-600",
      gradient: "warning" as const
    }
  ];

  const stats = [
    { icon: Target, label: "Projects Completed", value: "25+", color: "text-primary" },
    { icon: Award, label: "Hackathon Finals", value: "12+", color: "text-green-500" },
    { icon: Zap, label: "Technologies", value: "20+", color: "text-blue-500" },
    { icon: Sparkles, label: "Certifications", value: "8+", color: "text-purple-500" }
  ];

  const personalValues = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "I believe in building technology that makes a meaningful impact"
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices"
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">About Me</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Crafting Digital{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Experiences
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer who loves turning complex problems into 
              simple, beautiful, and intuitive solutions. With a strong foundation in both 
              front-end and back-end technologies, I create digital experiences that users love.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <ModernCard
                key={stat.label}
                className="text-center group"
                hover
                interactive
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 ${stat.color} mb-4`}
                >
                  <stat.icon className="w-6 h-6" />
                </motion.div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </ModernCard>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <ModernCard className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  My Journey
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Started my coding journey in 2020 with a curiosity for how things work. 
                    What began as simple "Hello World" programs has evolved into building 
                    complex applications that solve real-world problems.
                  </p>
                  <p>
                    I specialize in modern web technologies, with expertise in React, Next.js, 
                    Flutter, and various backend frameworks. My approach combines technical 
                    excellence with user-centered design thinking.
                  </p>
                  <p>
                    Currently pursuing my B.Tech while working on exciting projects that 
                    challenge me to grow and learn new technologies every day.
                  </p>
                </div>
              </ModernCard>

              {/* Personal Values */}
              <div className="space-y-4">
                {personalValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-4 rounded-xl glass hover:glass-strong transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div variants={itemVariants} className="grid gap-6">
              {highlights.map((highlight, index) => (
                <GradientCard
                  key={highlight.title}
                  gradient={highlight.gradient}
                  className="group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${highlight.color} flex items-center justify-center shadow-lg`}
                    >
                      <highlight.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </GradientCard>
              ))}
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <ModernCard className="p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's Create Something Amazing Together
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to work on new projects and collaborate with 
                like-minded individuals who share a passion for innovation.
              </p>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-interactive hover:shadow-interactive-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </ModernCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
