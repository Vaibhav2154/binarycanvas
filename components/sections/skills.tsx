"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// Removed Progress import - using visual indicators instead
import { Code, Smartphone, Database, Cloud, Shield, Wrench, FileCode, Coffee, Cpu, Globe, Brain, Zap, Terminal, GitBranch, Settings, Server } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "CODE_PROCESSORS",
      icon: Code,
      skills: [
        { name: "Python", icon: FileCode, color: "text-neon-pink", bgColor: "bg-neon-pink" },
        { name: "Java", icon: Coffee, color: "text-neon-cyan", bgColor: "bg-neon-cyan" },
        { name: "C/C++", icon: Cpu, color: "text-neon-purple", bgColor: "bg-neon-purple" },
        { name: "Dart", icon: Zap, color: "text-neon-green", bgColor: "bg-neon-green" },
        { name: "JavaScript", icon: Code, color: "text-neon-orange", bgColor: "bg-neon-orange" }
      ]
    },
    {
      title: "FRAMEWORK_ENGINES",
      icon: Smartphone,
      skills: [
        { name: "Flutter", icon: Smartphone, color: "text-neon-cyan", bgColor: "bg-neon-cyan" },
        { name: "React/Next.js", icon: Globe, color: "text-neon-purple", bgColor: "bg-neon-purple" },
        { name: "Flask/FastAPI", icon: Server, color: "text-neon-green", bgColor: "bg-neon-green" },
        { name: "TensorFlow", icon: Brain, color: "text-neon-orange", bgColor: "bg-neon-orange" },
        { name: "PyTorch", icon: Brain, color: "text-neon-pink", bgColor: "bg-neon-pink" }
      ]
    },
    {
      title: "AI_NEURAL_NETS",
      icon: Database,
      skills: [
        { name: "Machine Learning", icon: Brain, color: "text-neon-purple", bgColor: "bg-neon-purple" },
        { name: "Langchain", icon: Zap, color: "text-neon-cyan", bgColor: "bg-neon-cyan" },
        { name: "Transformers", icon: Brain, color: "text-neon-pink", bgColor: "bg-neon-pink" },
        { name: "Scikit-Learn", icon: Database, color: "text-neon-green", bgColor: "bg-neon-green" },
        { name: "NLTK", icon: FileCode, color: "text-neon-cyan", bgColor: "bg-neon-cyan" }
      ]
    },
    {
      title: "SYSTEM_TOOLS",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", icon: GitBranch, color: "text-neon-pink", bgColor: "bg-neon-pink" },
        { name: "Linux", icon: Terminal, color: "text-neon-orange", bgColor: "bg-neon-orange" },
        { name: "Google Cloud", icon: Cloud, color: "text-neon-cyan", bgColor: "bg-neon-cyan" },
        { name: "Arduino", icon: Cpu, color: "text-neon-purple", bgColor: "bg-neon-purple" },
        { name: "Docker", icon: Settings, color: "text-neon-green", bgColor: "bg-neon-green" }
      ]
    }
  ];

  const certifications = [
    "Google Cybersecurity Professional (93%)",
    "Flutter Development Specialization",
    "Machine Learning Fundamentals",
    "Web Development with React"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black via-purple-900/10 to-black relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="grid-bg w-full h-full opacity-20" />
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-pink"
            animate={{
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text font-cyber">TECHNICAL_MODULES.SYS</h2>
            <p className="text-lg text-neon-cyan/80 font-mono">
              Processing expertise across different cyber technologies and domains
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -8 }}
                className="group"
              >
                <Card className="h-full border-0 cyber-bg shadow-xl hover:shadow-2xl hover:shadow-neon-strong transition-all duration-300 glass">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-neon-pink/20 to-neon-pink/30 group-hover:from-neon-pink/30 group-hover:to-neon-pink/40 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <category.icon className="h-5 w-5 text-neon-pink animate-neon-glow" />
                      </div>
                      <h3 className="text-xl font-bold text-neon-cyan font-cyber">{category.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div 
                          key={skillIndex} 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                          whileHover={{ scale: 1.05 }}
                          className={`group flex flex-col items-center p-4 rounded-lg border-2 ${skill.color.replace('text-', 'border-')}/30 hover:border-current transition-all duration-300 hover:shadow-lg`}
                        >
                          <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                            <skill.icon className={`w-6 h-6 ${skill.color} group-hover:animate-pulse`} />
                          </div>
                          <span className={`font-medium ${skill.color} font-mono text-sm text-center`}>{skill.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group"
          >
            <Card className="border-0 cyber-bg shadow-xl hover:shadow-2xl hover:shadow-neon-strong transition-all duration-300 glass">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-neon-pink/20 to-neon-pink/30 group-hover:from-neon-pink/30 group-hover:to-neon-pink/40 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Shield className="h-5 w-5 text-neon-pink animate-neon-glow" />
                  </div>
                  <h3 className="text-xl font-bold text-neon-cyan font-cyber">CERTIFICATIONS & SPECIALIZATIONS</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-neon-pink rounded-full animate-neon-glow" />
                      <span className="text-neon-cyan font-mono">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;