"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Shield, Smartphone, Brain, Sparkles, Zap, Target, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Experienced in Flutter, Next.js, and various frameworks",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Google Cybersecurity Professional with 93% grade",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Flutter specialist with multiple published apps",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "AI/ML projects with real-world applications",
      color: "from-orange-500 to-red-600"
    }
  ];

  const stats = [
    { icon: Target, label: "Projects Completed", value: "20+", color: "text-violet-500" },
    { icon: Award, label: "Hackathon Finals", value: "10+", color: "text-cyan-500" },
    { icon: Zap, label: "Technologies", value: "15+", color: "text-emerald-500" },
    { icon: Sparkles, label: "Certifications", value: "5+", color: "text-orange-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-violet-50/30 to-cyan-50/30 dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-4"
            >
              <Sparkles className="h-8 w-8 text-violet-500" />
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">About Me</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              I'm a passionate Computer Science student at JSS Science and Technology University with a 
              strong focus on innovative technology solutions. My journey spans Flutter development, 
              cybersecurity, machine learning, and hackathon victories. I love building applications 
              that make a real difference and solve complex problems.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <Card className="glass border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${highlights[index]?.color || 'from-violet-500 to-purple-600'} flex items-center justify-center`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card className="h-full glass border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:shadow-violet-500/25">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Info Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Quick Facts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="space-y-4"
                  >
                    <h4 className="font-bold text-xl text-violet-600 dark:text-violet-400">Education</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      B.E. Computer Science<br />
                      JSS Science and Technology University
                    </p>
                    <Badge className="bg-gradient-to-r from-violet-500 to-purple-600 text-white border-0">
                      CGPA: 9.58
                    </Badge>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="space-y-4"
                  >
                    <h4 className="font-bold text-xl text-cyan-600 dark:text-cyan-400">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Flutter Development", "Machine Learning", "Cybersecurity", "Web Development"].map((skill, index) => (
                        <Badge key={index} variant="secondary" className="glass">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="space-y-4"
                  >
                    <h4 className="font-bold text-xl text-emerald-600 dark:text-emerald-400">Achievements</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      10+ National Level Hackathon Finals<br />
                      Top 10 Campus Ambassador - Techfest'24 IIT Bombay
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="space-y-4"
                  >
                    <h4 className="font-bold text-xl text-orange-600 dark:text-orange-400">Current Focus</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Flutter App Development<br />
                      AI/ML Projects<br />
                      Open Source Contributions
                    </p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;