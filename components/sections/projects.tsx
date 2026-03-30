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
      title: "LOGIQ",
      subtitle: "AI Platform for Threat Detection & Analysis",
      description: "Built during a hackathon, LOGIQ provides advanced threat detection and analysis capabilities.",
      fullDescription: "A comprehensive, AI-enhanced cybersecurity platform that combines real-time log analysis, MITRE ATT&CK framework integration, and intelligent threat detection into a unified solution. Built for security professionals, incident responders, and SOC teams.",
      technologies: ["Machine Learning", "Next.js","FastAPI", "MongoDB","RAG","Data Visualization"],
      category: "SIEM/Threat Detection",
      icon: Shield,
      features: [
        "Real-time disaster data simulation",
        "Location-based alert system", 
        "GIS mapping integration",
        "Resource allocation optimization"
      ],
      achievements: ["Built during hackathon", "Real-world application"],
      award: "🏆 Winner"
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
      <div className="absolute hidden w-16 h-16 bg-white border-4 border-black top-40 left-16 -rotate-6 md:block" />
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
              <div className="inline-flex items-center gap-3 px-8 py-3 bg-white border-4 border-black shadow-brutal">
                <Code className="w-8 h-8" />
                <h2 className="text-3xl font-black uppercase sm:text-4xl">PROJECTS</h2>
              </div>
            </motion.div>
            <p className="inline-block max-w-xl px-6 py-2 mx-auto text-lg font-bold text-white bg-black border-4 border-black shadow-brutal-sm">
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
                  <div className="flex items-center justify-center flex-shrink-0 bg-white border-4 border-black w-14 h-14 shadow-brutal-sm">
                    <project.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-black uppercase">{project.title}</h3>
                        <p className="text-sm font-bold">{project.subtitle}</p>
                      </div>
                      {project.award && (
                        <Badge className="text-xs text-white bg-black">{project.award}</Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Category */}
                <Badge variant="outline" className="mb-4 bg-white">{project.category}</Badge>

                {/* Description */}
                <p className="mb-4 font-medium">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs bg-white">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs text-white bg-black">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* View Details Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full text-white bg-black border-4 border-black hover:bg-white hover:text-black">
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
                    <div className="pt-4 space-y-6">
                      <p className="font-medium leading-relaxed">
                        {project.fullDescription}
                      </p>
                      
                      <div className="p-4 bg-white border-4 border-black">
                        <h4 className="mb-3 font-black uppercase">KEY FEATURES</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start gap-2">
                              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-black" />
                              <span className="font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-[#FFE500] border-4 border-black p-4">
                        <h4 className="mb-3 font-black uppercase">TECHNOLOGIES</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} className="text-black bg-white border-2 border-black">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {project.achievements && (
                        <div className="bg-[#00FF94] border-4 border-black p-4">
                          <h4 className="mb-3 font-black uppercase">ACHIEVEMENTS</h4>
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