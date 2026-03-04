"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';
import { Code, Smartphone, Database, Cloud, Shield, Wrench, FileCode, Coffee, Cpu, Globe, Brain, Zap, Terminal, GitBranch, Settings, Server } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const colors = ["bg-[#FFE500]", "bg-[#FF6B9D]", "bg-[#00D4FF]", "bg-[#00FF94]"];

  const skillCategories = [
    {
      title: "LANGUAGES",
      icon: Code,
      color: "bg-[#FFE500]",
      skills: [
        { name: "Python", icon: FileCode },
        { name: "Java", icon: Coffee },
        { name: "C/C++", icon: Cpu },
        { name: "Dart", icon: Zap },
        { name: "JavaScript", icon: Code }
      ]
    },
    {
      title: "FRAMEWORKS",
      icon: Smartphone,
      color: "bg-[#FF6B9D]",
      skills: [
        { name: "Flutter", icon: Smartphone },
        { name: "React/Next.js", icon: Globe },
        { name: "Flask/FastAPI", icon: Server },
        { name: "TensorFlow", icon: Brain },
        { name: "PyTorch", icon: Brain }
      ]
    },
    {
      title: "AI & ML",
      icon: Database,
      color: "bg-[#00D4FF]",
      skills: [
        { name: "Machine Learning", icon: Brain },
        { name: "Langchain", icon: Zap },
        { name: "Transformers", icon: Brain },
        { name: "Scikit-Learn", icon: Database },
        { name: "NLTK", icon: FileCode }
      ]
    },
    {
      title: "TOOLS",
      icon: Wrench,
      color: "bg-[#00FF94]",
      skills: [
        { name: "Git & GitHub", icon: GitBranch },
        { name: "Linux", icon: Terminal },
        { name: "Google Cloud", icon: Cloud },
        { name: "Arduino", icon: Cpu },
        { name: "Docker", icon: Settings }
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
    <section id="skills" className="relative py-20 overflow-hidden bg-[#d8c987] brutal-dots">
      {/* Decorative elements */}
      <div className="absolute top-20 right-16 w-20 h-20 bg-[#FF6B9D] border-4 border-black rotate-12 hidden md:block" />
      <div className="absolute hidden w-16 h-16 bg-white border-4 border-black top-32 left-10 -rotate-6 md:block" />
      <div className="absolute bottom-40 left-1/3 w-12 h-12 bg-[#00D4FF] border-4 border-black rotate-45 hidden md:block" />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              className="inline-block mb-6"
            >
              <div className="inline-flex items-center gap-3 px-8 py-3 bg-white border-4 border-black shadow-brutal">
                <Code className="w-8 h-8" />
                <h2 className="text-3xl font-black uppercase sm:text-4xl">SKILLS</h2>
              </div>
            </motion.div>
            <p className="inline-block max-w-xl px-6 py-2 mx-auto text-lg font-bold text-white bg-black border-4 border-black">
              Technical expertise across different technologies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-8 mb-12 lg:grid-cols-2">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${category.color} border-4 border-black shadow-brutal p-6 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all duration-150`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-white border-4 border-black shadow-brutal-sm">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black uppercase">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      className="flex flex-col items-center p-3 bg-white border-3 border-black shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal transition-all duration-150"
                    >
                      <div className="flex items-center justify-center w-10 h-10 mb-2">
                        <skill.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-center uppercase">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6 bg-white border-4 border-black shadow-brutal"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#00FF94] border-4 border-black shadow-brutal-sm flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black uppercase">CERTIFICATIONS</h3>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-3 h-3 bg-black" />
                  <span className="font-bold">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-black" />
    </section>
  );
};

export default Skills;