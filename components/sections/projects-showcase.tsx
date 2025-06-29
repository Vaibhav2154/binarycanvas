"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, 
  Github, 
  Play, 
  Award, 
  Users, 
  Calendar,
  Code,
  Smartphone,
  Brain,
  Shield,
  Heart,
  Zap
} from 'lucide-react';

const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'showcase'>('showcase');

  const projects = [
    {
      id: 1,
      title: "MindFull",
      subtitle: "AI-Powered Mental Wellness Platform",
      description: "A comprehensive mental wellness platform leveraging AI to provide personalized support through intelligent chatbots, sentiment analysis, and community features.",
      longDescription: "MindFull represents the intersection of technology and mental health, providing users with AI-driven insights into their emotional well-being. The platform features real-time sentiment analysis, personalized resource recommendations, and a supportive community environment.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["MERN Stack", "Langchain", "Transformers", "AI/ML", "React"],
      category: "AI/ML",
      status: "🏆 Runner Up - Sustain-AI-Thon",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI-powered personalized chatbot",
        "Real-time sentiment analysis",
        "Personalized resource recommendations",
        "Gamified wellness tracking",
        "Peer support community",
        "Professional counseling integration"
      ],
      metrics: {
        users: "500+",
        accuracy: "94%",
        satisfaction: "4.8/5"
      },
      demoUrl: "#",
      githubUrl: "#",
      year: "2024"
    },
    {
      id: 2,
      title: "DRAMS",
      subtitle: "Disaster Response and Management System",
      description: "Real-time disaster management system using machine learning to simulate disaster scenarios and generate location-based alerts with GIS mapping.",
      longDescription: "DRAMS revolutionizes disaster preparedness by combining machine learning with real-time data processing to predict and respond to natural disasters. The system provides critical insights for emergency responders and affected communities.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Machine Learning", "GIS Mapping", "Python", "Data Visualization"],
      category: "Machine Learning",
      status: "🚀 Production Ready",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      features: [
        "Real-time disaster data simulation",
        "Location-based alert system",
        "GIS mapping integration",
        "Resource allocation optimization",
        "Emergency decision support",
        "Multi-platform notifications"
      ],
      metrics: {
        coverage: "50+ cities",
        response: "<30s",
        accuracy: "96%"
      },
      demoUrl: "#",
      githubUrl: "#",
      year: "2024"
    },
    {
      id: 3,
      title: "eDigicator",
      subtitle: "AI-Powered Rural Education Platform",
      description: "Flutter-based educational platform designed to boost digital literacy for rural students with AI tutoring and multi-language support.",
      longDescription: "eDigicator bridges the digital divide by providing rural students with access to quality education through AI-powered tutoring, speech recognition, and native language support.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "Generative AI", "Node.js", "Speech-to-Text", "Translation API"],
      category: "Educational Technology",
      status: "🌟 Impact Project",
      icon: Smartphone,
      color: "from-green-500 to-blue-500",
      features: [
        "Speech-to-text functionality",
        "Multi-language translation",
        "AI-powered tutoring chatbots",
        "Personalized learning paths",
        "Native language support",
        "Offline-first design"
      ],
      metrics: {
        students: "1000+",
        languages: "5",
        completion: "85%"
      },
      demoUrl: "#",
      githubUrl: "#",
      year: "2024"
    },
    {
      id: 4,
      title: "Prenova",
      subtitle: "Maternal Health Monitoring App",
      description: "AI-driven maternal and fetal health monitoring application with pregnancy risk prediction and personalized care recommendations.",
      longDescription: "Prenova empowers expectant mothers with AI-driven health insights, risk assessments, and personalized care recommendations throughout their pregnancy journey.",
      image: "https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "Generative AI", "Flask", "Machine Learning", "Health Analytics"],
      category: "Healthcare Technology",
      status: "💝 Healthcare Innovation",
      icon: Heart,
      color: "from-pink-500 to-red-500",
      features: [
        "AI-based pregnancy risk assessment",
        "Fetal health prediction models",
        "Interactive health chatbot",
        "Kick and contraction timers",
        "Personalized diet recommendations",
        "Health progress tracking"
      ],
      metrics: {
        accuracy: "92%",
        users: "300+",
        satisfaction: "4.9/5"
      },
      demoUrl: "#",
      githubUrl: "#",
      year: "2024"
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentProject = projects[selectedProject];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Innovative solutions that make a real-world impact through technology
            </motion.p>

            {/* View Mode Toggle */}
            <div className="flex justify-center space-x-2">
              <Button
                variant={viewMode === 'showcase' ? 'default' : 'outline'}
                onClick={() => setViewMode('showcase')}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Showcase View
              </Button>
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                onClick={() => setViewMode('grid')}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Grid View
              </Button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === 'showcase' ? (
              <motion.div
                key="showcase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Project Navigation */}
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                        selectedProject === index 
                          ? 'bg-white/20 border-l-4 border-blue-400' 
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                      onClick={() => setSelectedProject(index)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{project.title}</h3>
                          <p className="text-gray-300 text-sm">{project.subtitle}</p>
                          <Badge variant="secondary" className="mt-1 text-xs">
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Project Details */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProject}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-2xl">
                      <img 
                        src={currentProject.image} 
                        alt={currentProject.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
                        <p className="text-gray-200">{currentProject.subtitle}</p>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-4">
                      <p className="text-gray-300 leading-relaxed">
                        {currentProject.longDescription}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="border-white/20 text-white">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold mb-2">Key Features</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {currentProject.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Zap className="w-4 h-4 text-blue-400" />
                              <span className="text-sm text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 p-4 bg-white/10 rounded-lg">
                        {Object.entries(currentProject.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-blue-400">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-4">
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <Play className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="h-full bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                            <project.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{project.title}</h3>
                            <p className="text-gray-300 text-sm">{project.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="border-white/20 text-white text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" className="border-white/20 text-white text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>

                        <div className="flex justify-between items-center">
                          <Badge variant="secondary" className="text-xs">
                            {project.status}
                          </Badge>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                              <Github className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;