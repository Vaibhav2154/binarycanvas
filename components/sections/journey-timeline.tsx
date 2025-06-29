"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, Code, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const JourneyTimeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const journeyItems = [
    {
      year: "2023",
      title: "Started B.E. Computer Science",
      subtitle: "JSS Science and Technology University",
      description: "Began my formal journey in computer science with a focus on modern technologies and innovation.",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
      achievements: ["CGPA: 9.58", "Dean's List", "Programming Club Member"]
    },
    {
      year: "2024",
      title: "Google Cybersecurity Professional",
      subtitle: "Coursera Certification",
      description: "Completed comprehensive cybersecurity training with 93% grade, focusing on threat detection and incident response.",
      icon: Award,
      color: "from-green-500 to-emerald-500",
      achievements: ["93% Overall Grade", "Security Frameworks", "Risk Assessment"]
    },
    {
      year: "2024",
      title: "Hackathon Champion",
      subtitle: "10+ National Finals",
      description: "Consistently reached finals in major national hackathons, winning multiple awards for innovative solutions.",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      achievements: ["Winner - CodeQuest", "Runner Up - Sustain-AI-Thon", "Top 10 Finishes"]
    },
    {
      year: "2024",
      title: "Tech Leadership Roles",
      subtitle: "Multiple Organizations",
      description: "Led technical teams and managed projects across various organizations and initiatives.",
      icon: Briefcase,
      color: "from-orange-500 to-red-500",
      achievements: ["Technology Officer", "Campus Ambassador", "Technical Coordinator"]
    }
  ];

  return (
    <section id="journey-start" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every step has been a building block towards creating meaningful impact through technology
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Path */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 to-purple-500"
              style={{ height: `${scrollYProgress.get() * 100}%` }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {journeyItems.map((item, index) => {
              const [ref, inView] = useInView({
                threshold: 0.5,
                triggerOnce: false,
              });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  onViewportEnter={() => setActiveItem(index)}
                >
                  {/* Content Card */}
                  <div className="w-5/12">
                    <Card className={`${
                      inView ? 'shadow-2xl scale-105' : 'shadow-lg'
                    } transition-all duration-500 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm`}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-muted-foreground">{item.year}</div>
                            <div className="text-lg font-bold">{item.title}</div>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-primary mb-2">{item.subtitle}</h3>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        
                        <div className="space-y-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="w-2/12 flex justify-center">
                    <motion.div
                      className={`w-6 h-6 rounded-full border-4 ${
                        inView 
                          ? 'bg-white border-primary shadow-lg scale-125' 
                          : 'bg-muted border-muted-foreground/30'
                      } transition-all duration-500`}
                      animate={inView ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Progress Indicator */}
        <motion.div
          className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col space-y-2">
            {journeyItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const element = document.querySelectorAll('[data-timeline-item]')[index];
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeItem === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyTimeline;