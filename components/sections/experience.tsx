"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, Trophy, Code, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Techfest Coordinator",
      company: "TECHFEST'24 - IIT BOMBAY",
      period: "June 2024 - December 2024",
      location: "Mumbai, India",
      type: "Leadership Role",
      icon: Trophy,
      achievements: [
        "Engaged 2500+ Indian & 500+ international colleges in outreach and marketing",
        "Ranked 9th among 11,500+ Campus Ambassadors with 28,950 points",
        "Promoted Techfest's vision and increased global participation",
        "Demonstrated strong leadership, organizational, and communication skills"
      ]
    },
    {
      title: "Technology Officer",
      company: "ARTSY TECHNOLOGIES",
      period: "June 2024 - December 2024",
      location: "Remote",
      type: "Technical Leadership",
      icon: Code,
      achievements: [
        "Led technical teams ensuring effective communication and task management",
        "Managed seamless workflow for projects and internships",
        "Managed ML-focused blog on LinkedIn with educational content",
        "Simplified complex machine learning concepts for broader audience"
      ]
    },
    {
      title: "Technical Coordinator",
      company: "LINUX CAMPUS CLUB",
      period: "May 2024 - Present",
      location: "JSS STU, Mysore",
      type: "Technical Role",
      icon: Users,
      achievements: [
        "Organized hands-on workshops like 'Mystery of C' for in-depth learning",
        "Conducted engaging events: Bermuda Triangle, Smack D Bug, Track Back",
        "Provided comprehensive Linux and programming education",
        "Engaged participants in challenging problem-solving activities"
      ]
    },
    {
      title: "Freelancer & Open Source Contributor",
      company: "Various Projects",
      period: "2023 - Present",
      location: "Remote",
      type: "Freelance Work",
      icon: Briefcase,
      achievements: [
        "Flutter App development projects for multiple clients",
        "Open Source Contributor - PHICSIT, GSSOC'24",
        "Technical Coordinator - SOURCIFY, PERSONA+",
        "Built and deployed production-ready mobile applications"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-32 overflow-hidden bg-gradient-to-br from-black via-purple-900/10 to-black">
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
          className="max-w-7xl mx-auto"
        >
          {/* Unique Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <Briefcase className="relative w-16 h-16 text-neon-pink animate-neon-glow" />
              </div>
            </motion.div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text font-cyber">
              EXPERIENCE_LOG.DAT
            </h2>
            <p className="text-xl text-neon-cyan/80 max-w-2xl mx-auto font-mono">
              A journey through leadership roles and technical contributions
            </p>
          </div>

          {/* Zigzag Timeline Layout */}
          <div className="relative">
            {/* Central connecting line (hidden on mobile) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-neon-pink/50 transform -translate-x-1/2" />

            <div className="space-y-32">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -150 : 150, y: 50 }}
                    animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
                    className={`relative flex flex-col lg:flex-row items-center gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Timeline node */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                        className="w-16 h-16 rounded-full bg-neon-pink shadow-2xl ring-4 ring-black flex items-center justify-center"
                      >
                        <exp.icon className="w-8 h-8 text-black animate-neon-glow" />
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 w-full ${isEven ? 'lg:pr-24' : 'lg:pl-24'}`}>
                      <motion.div
                        whileHover={{ scale: 1.03, y: -10 }}
                        className="relative group"
                      >
                        <div className="relative cyber-bg backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-neon-strong transition-all duration-300 glass">
                          {/* Mobile icon */}
                          <div className="lg:hidden mb-6">
                            <div className="inline-flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-lg bg-gradient-to-r from-neon-pink/20 to-neon-pink/30 group-hover:from-neon-pink/30 group-hover:to-neon-pink/40 group-hover:scale-110">
                              <exp.icon className="w-6 h-6 text-neon-pink animate-neon-glow" />
                            </div>
                          </div>

                          {/* Header */}
                          <div className="mb-6">
                            <div className="flex items-start justify-between gap-4 mb-4">
                              <div>
                                <h3 className="text-2xl font-bold text-neon-cyan mb-2 font-cyber">{exp.title}</h3>
                                <p className="text-xl font-semibold gradient-text font-cyber">
                                  {exp.company}
                                </p>
                              </div>
                              <Badge className="bg-neon-pink text-black border-neon-pink font-cyber">
                                {exp.type}
                              </Badge>
                            </div>

                            <div className="flex flex-wrap gap-3 text-sm">
                              <Badge variant="outline" className="cyber-bg border-neon-pink/30 text-neon-cyan font-cyber">
                                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                                {exp.period}
                              </Badge>
                              <Badge variant="outline" className="cyber-bg border-neon-pink/30 text-neon-cyan font-cyber">
                                <MapPin className="w-3.5 h-3.5 mr-1.5" />
                                {exp.location}
                              </Badge>
                            </div>
                          </div>

                          {/* Achievements */}
                          <div className="space-y-3 pt-4 border-t border-neon-pink/30">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.div
                                key={achIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: index * 0.2 + achIndex * 0.1 }}
                                className="flex items-start gap-3 group/item"
                              >
                                <div className="w-2 h-2 rounded-full bg-neon-pink mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform animate-neon-glow" />
                                <p className="text-neon-cyan/80 leading-relaxed flex-1 font-mono">{achievement}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer for zigzag effect */}
                    <div className={`hidden lg:block flex-1 ${isEven ? 'pl-24' : 'pr-24'}`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;