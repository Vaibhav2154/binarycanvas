"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Star, Target, Crown, Medal } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: "Top 10 Campus Ambassador",
      description: "Techfest'24 IIT-Bombay - Ranked 9th among 11,500+ CAs",
      icon: Crown,
      category: "Leadership",
      year: "2024",
      color: "bg-yellow-500"
    },
    {
      title: "10x National Level Hackathon Grand Finales",
      description: "Consistently reached finals in major national hackathons",
      icon: Trophy,
      category: "Competition",
      year: "2023-2024",
      color: "bg-blue-500"
    },
    {
      title: "Winner - CodeQuest Hackathon",
      description: "First place in hackathon by Inovact Social (Microbreaks)",
      icon: Medal,
      category: "Hackathon",
      year: "2024",
      color: "bg-green-500"
    },
    {
      title: "Runner Up - Sustain-AI-Thon",
      description: "Second place at VIT Chennai with MindFull project",
      icon: Award,
      category: "AI/ML",
      year: "2024",
      color: "bg-purple-500"
    },
    {
      title: "Runner Up - HackElite'24 Quiz",
      description: "Second place in quiz contest by JSSSTU",
      icon: Star,
      category: "Academic",
      year: "2024",
      color: "bg-orange-500"
    },
    {
      title: "Top CTF Scorer",
      description: "Highest scorer in Capture The Flag event by DSC-JSSSTU",
      icon: Target,
      category: "Cybersecurity",
      year: "2024",
      color: "bg-red-500"
    },
    {
      title: "Rajya Puraskar Scout",
      description: "Highest state-level honor by The Bharat Scouts and Guides",
      icon: Medal,
      category: "Service",
      year: "2023",
      color: "bg-indigo-500"
    },
    {
      title: "Google Cybersecurity Professional",
      description: "Completed with 93% overall grade",
      icon: Award,
      category: "Certification",
      year: "2024",
      color: "bg-teal-500"
    }
  ];

  const stats = [
    { label: "Hackathon Finals", value: "10+", icon: Trophy },
    { label: "Projects Completed", value: "20+", icon: Star },
    { label: "Certifications", value: "5+", icon: Award },
    { label: "Recognition Awards", value: "8+", icon: Medal }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Achievements & Recognition</h2>
            <p className="text-lg text-muted-foreground">
              Milestones and accomplishments throughout my journey
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="text-center p-4 lg:p-6 border-0 bg-gradient-to-br from-white to-slate-50/80 dark:from-slate-900 dark:to-slate-800/80 shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 glass">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-3 bg-gradient-to-r from-primary/20 to-primary/30 group-hover:from-primary/30 group-hover:to-primary/40 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <stat.icon className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
                  </div>
                  <div className="text-xl lg:text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -8 }}
                className="group"
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-slate-50/80 dark:from-slate-900 dark:to-slate-800/80 shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 glass overflow-hidden">
                  <CardContent className="p-6 h-full">
                    <div className="flex items-start space-x-4 h-full">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${achievement.color} group-hover:scale-110 transition-transform`}>
                        <achievement.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2 flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">
                            {achievement.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{achievement.year}</span>
                        </div>
                        <h3 className="font-bold mb-2 text-sm sm:text-base leading-tight">{achievement.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="text-center mt-16"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 glass">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Always Striving for Excellence</h3>
                <p className="text-muted-foreground mb-6">
                  These achievements reflect my commitment to continuous learning, innovation, and making a 
                  positive impact through technology. I'm always looking for new challenges and opportunities 
                  to grow and contribute to meaningful projects.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">Problem Solver</Badge>
                  <Badge variant="secondary">Team Leader</Badge>
                  <Badge variant="secondary">Innovation Focused</Badge>
                  <Badge variant="secondary">Continuous Learner</Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;