"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Award, Shield, Smartphone, Brain, Heart, Code } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const colors = ["bg-[#FFE500]", "bg-[#FF6B9D]", "bg-[#00D4FF]", "bg-[#00FF94]"];

  const projects = [
    {
      title: "DRAMS",
      subtitle: "Disaster Response & Management",
      description: "Built during a hackathon, DRAMS simulates real-time disaster data to generate location-based alerts.",
      fullDescription: "A comprehensive disaster management system that uses machine learning to simulate real-time disaster scenarios. The system generates location-based alerts and uses GIS mapping to visualize affected regions.",
      technologies: ["Machine Learning", "GIS Mapping", "Python", "Data Viz"],
      category: "ML",
      icon: Shield,
      features: [
        "Real-time disaster data simulation",
        "Location-based alert system", 
        "GIS mapping integration",
        "Resource allocation optimization"
      ],
      achievements: ["Built during hackathon", "Real-world application"]
    },
    {
      title: "MindFull",
      subtitle: "AI Mental Wellness Platform",
      description: "An AI-driven mental wellness platform featuring personalized chatbot and sentiment analysis.",
      fullDescription: "A comprehensive mental wellness platform that leverages AI to provide personalized support with intelligent chatbot conversations and sentiment analysis.",
      technologies: ["MERN Stack", "Langchain", "Transformers", "AI/ML"],
      category: "AI/ML",
      icon: Brain,
      features: [
        "AI-powered personalized chatbot",
        "Real-time sentiment analysis",
        "Gamified wellness tracking",
        "Professional counseling integration"
      ],
      achievements: ["Runner Up - Sustain-AI-Thon"],
      award: "🏆 RUNNER UP"
    },
    {
      title: "eDigicator",
      subtitle: "Digital Literacy Platform",
      description: "A Flutter-based AI platform to boost digital literacy for rural students.",
      fullDescription: "An innovative educational platform designed specifically for rural students to improve digital literacy with speech-to-text and AI tutoring.",
      technologies: ["Flutter", "Gen AI", "Node.js", "Translation API"],
      category: "EdTech",
      icon: Smartphone,
      features: [
        "Speech-to-text functionality",
        "Multi-language translation",
        "AI-powered tutoring chatbots",
        "Offline-first design"
      ],
      achievements: ["Designed for rural education", "Multilingual support"]
    },
    {
      title: "Prenova",
      subtitle: "Maternal Health App",
      description: "A maternal and fetal health app with AI-based pregnancy risk prediction models.",
      fullDescription: "A comprehensive maternal and fetal health monitoring application that uses AI to predict pregnancy risks and monitor fetal health.",
      technologies: ["Flutter", "Gen AI", "Flask", "ML", "Health Analytics"],
      category: "HealthTech",
      icon: Heart,
      features: [
        "AI-based pregnancy risk assessment",
        "Fetal health prediction models",
        "Kick and contraction timers",
        "Personalized diet recommendations"
      ],
      achievements: ["Healthcare innovation", "AI-powered predictions"]
    }
  ];

  return (
    <section id="projects" className="relative py-20 bg-[#00D4FF] brutal-checker overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-16 right-10 w-24 h-24 bg-[#FFE500] border-4 border-black rotate-12 hidden md:block" />
      <div className="absolute top-40 left-16 w-16 h-16 bg-white border-4 border-black -rotate-6 hidden md:block" />
      <div className="absolute bottom-32 right-1/4 w-20 h-20 bg-[#FF6B9D] border-4 border-black rotate-45 hidden md:block" />

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
              <div className="px-8 py-3 bg-white border-4 border-black shadow-brutal inline-flex items-center gap-3">
                <Code className="w-8 h-8" />
                <h2 className="text-3xl sm:text-4xl font-black uppercase">PROJECTS</h2>
              </div>
            </motion.div>
            <p className="text-lg font-bold max-w-xl mx-auto bg-black text-white inline-block px-6 py-2 border-4 border-black shadow-brutal-sm">
              Innovative solutions built with cutting-edge tech
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${colors[index]} border-4 border-black shadow-brutal p-6 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all duration-150`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-white border-4 border-black shadow-brutal-sm flex items-center justify-center flex-shrink-0">
                    <project.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-black uppercase">{project.title}</h3>
                        <p className="font-bold text-sm">{project.subtitle}</p>
                      </div>
                      {project.award && (
                        <Badge className="bg-black text-white text-xs">{project.award}</Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Category */}
                <Badge variant="outline" className="bg-white mb-4">{project.category}</Badge>

                {/* Description */}
                <p className="font-medium mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="bg-white text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="bg-black text-white text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* View Details Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-black text-white border-4 border-black hover:bg-white hover:text-black">
                      VIEW DETAILS
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-[#FFF8E7] border-4 border-black">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-2xl font-black uppercase">
                        <div className={`w-10 h-10 ${colors[index]} border-3 border-black flex items-center justify-center`}>
                          <project.icon className="w-5 h-5" />
                        </div>
                        {project.title}
                        {project.award && (
                          <Badge className="bg-[#FFE500] text-black border-2 border-black">{project.award}</Badge>
                        )}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 pt-4">
                      <p className="font-medium leading-relaxed">
                        {project.fullDescription}
                      </p>
                      
                      <div className="bg-white border-4 border-black p-4">
                        <h4 className="font-black uppercase mb-3">KEY FEATURES</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-black mt-2 flex-shrink-0" />
                              <span className="font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-[#FFE500] border-4 border-black p-4">
                        <h4 className="font-black uppercase mb-3">TECHNOLOGIES</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} className="bg-white text-black border-2 border-black">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {project.achievements && (
                        <div className="bg-[#00FF94] border-4 border-black p-4">
                          <h4 className="font-black uppercase mb-3">ACHIEVEMENTS</h4>
                          <div className="space-y-2">
                            {project.achievements.map((achievement, aIndex) => (
                              <div key={aIndex} className="flex items-center gap-2">
                                <Award className="w-4 h-4" />
                                <span className="font-bold">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-black" />
    </section>
  );
};

export default Projects;