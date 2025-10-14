"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github, Award, Shield, Smartphone, Brain, Heart } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Disaster Response and Management System (DRAMS)",
      description: "Built during a hackathon, DRAMS simulates real-time disaster data to generate location-based alerts.",
      fullDescription: "A comprehensive disaster management system that uses machine learning to simulate real-time disaster scenarios. The system generates location-based alerts and uses GIS mapping to visualize affected regions. It optimizes resource allocation and supports decision-making during emergency situations.",
      technologies: ["Machine Learning", "GIS Mapping", "Python", "Data Visualization"],
      category: "Machine Learning",
      icon: Shield,
      features: [
        "Real-time disaster data simulation",
        "Location-based alert system", 
        "GIS mapping integration",
        "Resource allocation optimization",
        "Emergency decision support"
      ],
      achievements: ["Built during hackathon", "Real-world application"]
    },
    {
      title: "MindFull",
      description: "An AI-driven mental wellness platform featuring personalized chatbot and sentiment analysis.",
      fullDescription: "A comprehensive mental wellness platform that leverages AI to provide personalized support. Features include an intelligent chatbot for conversations, sentiment analysis to track emotional well-being, and personalized resource suggestions. The platform includes gamified tracking elements, peer support communities, and integration with professional counseling services.",
      technologies: ["MERN Stack", "Langchain", "Transformers", "AI/ML", "React"],
      category: "AI/ML Platform",
      icon: Brain,
      features: [
        "AI-powered personalized chatbot",
        "Real-time sentiment analysis",
        "Personalized resource recommendations",
        "Gamified wellness tracking",
        "Peer support community",
        "Professional counseling integration"
      ],
      achievements: ["Runner Up - Sustain-AI-Thon"],
      award: "🏆 Runner Up"
    },
    {
      title: "eDigicator",
      description: "A Flutter-based AI platform to boost digital literacy for rural students.",
      fullDescription: "An innovative educational platform designed specifically for rural students to improve digital literacy. The app uses advanced speech-to-text technology, multi-language translation capabilities, and AI chatbots to provide personalized tutoring experiences in native languages. It's designed to bridge the digital divide in rural education.",
      technologies: ["Flutter", "Generative AI", "Node.js", "Speech-to-Text", "Translation API"],
      category: "Educational Technology",
      icon: Smartphone,
      features: [
        "Speech-to-text functionality",
        "Multi-language translation",
        "AI-powered tutoring chatbots",
        "Personalized learning paths",
        "Native language support",
        "Offline-first design for rural connectivity"
      ],
      achievements: ["Designed for rural education", "Multilingual support"]
    },
    {
      title: "Prenova",
      description: "A maternal and fetal health app with AI-based pregnancy risk prediction models.",
      fullDescription: "A comprehensive maternal and fetal health monitoring application that uses AI to predict pregnancy risks and monitor fetal health. The app includes intelligent chatbot support, kick and contraction timers, and provides personalized diet recommendations based on individual health profiles and pregnancy stages.",
      technologies: ["Flutter", "Generative AI", "Flask", "Machine Learning", "Health Analytics"],
      category: "Healthcare Technology",
      icon: Heart,
      features: [
        "AI-based pregnancy risk assessment",
        "Fetal health prediction models",
        "Interactive health chatbot",
        "Kick and contraction timers",
        "Personalized diet recommendations",
        "Health progress tracking"
      ],
      achievements: ["Healthcare innovation", "AI-powered predictions"]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-black via-purple-900/10 to-black overflow-hidden">
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
      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl gradient-text font-cyber">CYBER_PROJECTS.EXE</h2>
            <p className="text-lg text-neon-cyan/80 font-mono">
              Innovative cyber solutions built with cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className="group"
              >
                <Card className="h-full transition-all duration-300 border-0 cyber-bg shadow-xl hover:shadow-2xl hover:shadow-neon-strong group glass">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-lg bg-gradient-to-r from-neon-pink/20 to-neon-pink/30 group-hover:from-neon-pink/30 group-hover:to-neon-pink/40 group-hover:scale-110">
                          <project.icon className="w-6 h-6 text-neon-pink animate-neon-glow" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-1 text-xl font-bold text-neon-cyan font-cyber">{project.title}</h3>
                          {project.award && (
                            <Badge variant="destructive" className="mb-2 bg-neon-pink text-black border-neon-pink font-cyber">
                              {project.award}
                            </Badge>
                          )}
                          <p className="text-sm text-neon-pink/70 font-mono">{project.category}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-neon-cyan/80 font-mono">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="cyber-bg text-neon-pink border-neon-pink/30 font-cyber text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-neon-cyan border-neon-cyan/50 font-cyber text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full text-neon-pink border-neon-pink hover:bg-neon-pink hover:text-black font-cyber">
                          View Details
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-2">
                            <project.icon className="w-6 h-6" />
                            <span>{project.title}</span>
                            {project.award && (
                              <Badge variant="destructive">{project.award}</Badge>
                            )}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <p className="leading-relaxed text-muted-foreground">
                            {project.fullDescription}
                          </p>
                          
                          <div>
                            <h4 className="mb-3 font-semibold">Key Features</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="mb-3 font-semibold">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {project.achievements && (
                            <div>
                              <h4 className="mb-3 font-semibold">Achievements</h4>
                              <div className="space-y-2">
                                {project.achievements.map((achievement, aIndex) => (
                                  <div key={aIndex} className="flex items-center space-x-2">
                                    <Award className="w-4 h-4 text-primary" />
                                    <span className="text-sm">{achievement}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Removed 3D Background for performance */}
      {/* <ProjectsThreeBackground /> */}
    </section>
  );
};

export default Projects;