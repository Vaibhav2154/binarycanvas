"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Shield, Smartphone, Brain, Sparkles, Zap, Target, Award, Terminal, Cpu, Database, Network } from 'lucide-react';

const CyberpunkAbout = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const systemModules = [
    {
      icon: Code,
      title: "FRONTEND_CORE",
      description: "React, Next.js, Flutter UI",
      color: "text-neon-pink",
      bgColor: "from-neon-pink/20 to-transparent",
      borderColor: "border-neon-pink",
      status: "OPTIMAL"
    },
    {
      icon: Cpu,
      title: "BACKEND_ENGINE", 
      description: "Node.js, Python, API Gateways",
      color: "text-neon-cyan",
      bgColor: "from-neon-cyan/20 to-transparent",
      borderColor: "border-neon-cyan",
      status: "HIGH"
    },
    {
      icon: Smartphone,
      title: "MOBILE_SYSTEM",
      description: "Flutter, React Native",
      color: "text-neon-purple",
      bgColor: "from-neon-purple/20 to-transparent",
      borderColor: "border-neon-purple",
      status: "OPTIMAL"
    },
    {
      icon: Brain,
      title: "AI_PROCESSOR",
      description: "TensorFlow, PyTorch, Neural Nets",
      color: "text-neon-green",
      bgColor: "from-neon-green/20 to-transparent",
      borderColor: "border-neon-green",
      status: "HIGH"
    }
  ];

  const cyberStats = [
    { icon: Target, label: "PROJECTS", value: "20+", color: "text-neon-pink", status: "ACTIVE" },
    { icon: Award, label: "HACKATHONS", value: "10+", color: "text-neon-cyan", status: "COMPLETED" },
    { icon: Zap, label: "TECHNOLOGIES", value: "15+", color: "text-neon-purple", status: "MASTERED" },
    { icon: Sparkles, label: "CERTIFICATIONS", value: "5+", color: "text-neon-green", status: "ACHIEVED" }
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

  const CyberGrid = () => (
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
  );


  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-black via-purple-900/10 to-black overflow-hidden">
      <CyberGrid />
      
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="mb-16 text-center"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-4"
            >
              <Terminal className="w-8 h-8 text-neon-pink animate-neon-glow" />
            </motion.div>
            <h2 className="mb-6 text-4xl font-bold sm:text-6xl gradient-text font-cyber">SYSTEM_PROFILE.EXE</h2>
            <p className="max-w-4xl mx-auto text-lg leading-relaxed text-neon-cyan/80 font-mono">
              Level 25 Cyber Developer • Specializing in Full Stack Development • 
              Currently processing AI/ML algorithms and Cybersecurity protocols • 
              Ready to integrate with your system and build amazing digital experiences!
            </p>
          </motion.div>

          {/* Cyber Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4 mb-16 md:grid-cols-4"
          >
            {cyberStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative"
              >
                <Card className="cyber-bg border-2 border-neon-pink/50 hover:border-neon-pink transition-all duration-300 hover:shadow-neon-strong">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded bg-gradient-to-r from-neon-pink/20 to-transparent border border-neon-pink/30 flex items-center justify-center">
                      <stat.icon className={`w-6 h-6 ${stat.color} animate-neon-glow`} />
                    </div>
                    <div className={`text-2xl font-bold mb-1 font-cyber ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs font-cyber text-neon-pink/80">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* System Modules */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-2 lg:grid-cols-4"
          >
            {systemModules.map((module, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card className={`h-full cyber-bg border-2 ${module.borderColor}/50 hover:${module.borderColor} transition-all duration-300 group-hover:shadow-neon-strong`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded bg-gradient-to-r ${module.bgColor} border-2 ${module.borderColor}/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <module.icon className={`w-8 h-8 ${module.color} animate-neon-glow`} />
                    </div>
                    <h3 className={`mb-3 text-lg font-bold font-cyber ${module.color}`}>{module.title}</h3>
                    <p className="text-sm leading-relaxed text-neon-cyan/70 font-mono mb-4">{module.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* System Information */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="cyber-bg border-2 border-neon-pink/50">
              <CardContent className="p-8">
                <h3 className="mb-8 text-3xl font-bold text-center gradient-text font-cyber">SYSTEM_INFORMATION.DAT</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xl font-bold text-neon-pink font-cyber">EDUCATION_PROTOCOL</h4>
                    <div className="p-4 rounded bg-black/30 border border-neon-pink/30">
                      <p className="leading-relaxed text-neon-cyan/80 font-mono">
                        B.E. Computer Science<br />
                        JSS Science and Technology University
                      </p>
                      <Badge className="mt-2 text-black border-0 bg-gradient-to-r from-neon-pink to-neon-purple font-cyber text-xs">
                        CGPA: 9.58
                      </Badge>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xl font-bold text-neon-cyan font-cyber">SPECIALIZATIONS</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Flutter Dev", "ML Engineer", "Cybersecurity", "Web Dev"].map((skill, index) => (
                        <Badge key={index} variant="secondary" className="cyber-bg text-neon-cyan border-neon-pink/30 font-cyber text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xl font-bold text-neon-purple font-cyber">ACHIEVEMENTS</h4>
                    <div className="p-4 rounded bg-black/30 border border-neon-purple/30">
                      <p className="leading-relaxed text-neon-cyan/80 font-mono">
                        10+ National Level Hackathon Finals<br />
                        Top 10 Campus Ambassador - Techfest'24 IIT Bombay
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xl font-bold text-neon-green font-cyber">CURRENT_PROCESS</h4>
                    <div className="p-4 rounded bg-black/30 border border-neon-green/30">
                      <p className="leading-relaxed text-neon-cyan/80 font-mono">
                        Flutter App Development<br />
                        AI/ML Projects<br />
                        Open Source Contributions
                      </p>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tech Stack Visualization */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <Card className="cyber-bg border-2 border-neon-cyan/50">
              <CardContent className="p-8">
                <h3 className="mb-8 text-2xl font-bold text-center gradient-text font-cyber">TECH_STACK.MAP</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: Code, label: "Frontend", tech: ["React", "Next.js", "Flutter"] },
                    { icon: Cpu, label: "Backend", tech: ["Node.js", "Python", "FastAPI"] },
                    { icon: Database, label: "Database", tech: ["MongoDB", "PostgreSQL", "Redis"] },
                    { icon: Network, label: "DevOps", tech: ["Docker", "AWS", "GitHub Actions"] }
                  ].map((category, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded bg-gradient-to-r from-neon-cyan/20 to-transparent border border-neon-cyan/30 flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-neon-cyan animate-neon-glow" />
                      </div>
                      <h4 className="text-sm font-bold text-neon-cyan font-cyber mb-2">{category.label}</h4>
                      <div className="space-y-1">
                        {category.tech.map((tech, techIndex) => (
                          <div key={techIndex} className="text-xs text-neon-pink/70 font-mono">
                            {tech}
                          </div>
                        ))}
                      </div>
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

export default CyberpunkAbout;