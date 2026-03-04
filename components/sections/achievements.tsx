"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Star, Target, Crown, Medal } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const colors = ["bg-[#FFE500]", "bg-[#FF6B9D]", "bg-[#00D4FF]", "bg-[#00FF94]", "bg-[#FF9500]", "bg-[#B388FF]"];

  const achievements = [
    {
      title: "Top 10 Campus Ambassador",
      description: "Techfest'24 IIT-Bombay - Ranked 9th among 11,500+ CAs",
      icon: Crown,
      category: "Leadership",
      year: "2024"
    },
    {
      title: "10x Hackathon Grand Finales",
      description: "Consistently reached finals in major national hackathons",
      icon: Trophy,
      category: "Competition",
      year: "2023-24"
    },
    {
      title: "Winner - CodeQuest Hackathon",
      description: "First place in hackathon by Inovact Social (Microbreaks)",
      icon: Medal,
      category: "Hackathon",
      year: "2024"
    },
    {
      title: "Runner Up - Sustain-AI-Thon",
      description: "Second place at VIT Chennai with MindFull project",
      icon: Award,
      category: "AI/ML",
      year: "2024"
    },
    {
      title: "Runner Up - HackElite'24 Quiz",
      description: "Second place in quiz contest by JSSSTU",
      icon: Star,
      category: "Academic",
      year: "2024"
    },
    {
      title: "Top CTF Scorer",
      description: "Highest scorer in Capture The Flag event by DSC-JSSSTU",
      icon: Target,
      category: "Security",
      year: "2024"
    }
  ];

  const stats = [
    { label: "HACKATHON FINALS", value: "10+", icon: Trophy },
    { label: "PROJECTS", value: "20+", icon: Star },
    { label: "CERTIFICATIONS", value: "5+", icon: Award },
    { label: "AWARDS", value: "8+", icon: Medal }
  ];

  return (
    <section id="achievements" className="py-20 bg-white brutal-grid relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-16 left-10 w-20 h-20 bg-[#FFE500] border-4 border-black rotate-12 hidden md:block" />
      <div className="absolute top-40 right-16 w-16 h-16 bg-[#FF6B9D] border-4 border-black -rotate-6 hidden md:block" />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-[#00D4FF] border-4 border-black rotate-45 hidden md:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              className="inline-block mb-6"
            >
              <div className="px-8 py-3 bg-[#FFE500] border-4 border-black shadow-brutal inline-flex items-center gap-3">
                <Trophy className="w-8 h-8" />
                <h2 className="text-3xl sm:text-4xl font-black uppercase">ACHIEVEMENTS</h2>
              </div>
            </motion.div>
            <p className="text-lg font-bold max-w-xl mx-auto bg-black text-white inline-block px-6 py-2 border-4 border-black">
              Milestones throughout my journey
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`${colors[index]} border-4 border-black shadow-brutal p-4 lg:p-6 text-center hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all duration-150`}
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-white border-4 border-black shadow-brutal-sm flex items-center justify-center">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl lg:text-3xl font-black mb-1">{stat.value}</div>
                <div className="text-xs lg:text-sm font-bold uppercase">{stat.label}</div>
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${colors[index % colors.length]} border-4 border-black shadow-brutal p-5 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all duration-150`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white border-4 border-black shadow-brutal-sm flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <Badge variant="outline" className="bg-white text-xs">
                        {achievement.category}
                      </Badge>
                      <span className="text-xs font-bold bg-black text-white px-2 py-0.5">{achievement.year}</span>
                    </div>
                    <h3 className="font-black mb-2 text-sm sm:text-base uppercase leading-tight">{achievement.title}</h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-[#00FF94] border-4 border-black shadow-brutal p-8">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-black uppercase mb-4">Always Striving for Excellence</h3>
                <p className="font-medium mb-6">
                  These achievements reflect my commitment to continuous learning, innovation, and making a 
                  positive impact through technology.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge className="bg-white text-black border-2 border-black">PROBLEM SOLVER</Badge>
                  <Badge className="bg-white text-black border-2 border-black">TEAM LEADER</Badge>
                  <Badge className="bg-white text-black border-2 border-black">INNOVATION</Badge>
                  <Badge className="bg-white text-black border-2 border-black">LEARNER</Badge>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-black" />
    </section>
  );
};

export default Achievements;