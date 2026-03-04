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
      color: "bg-[#FFE500]",
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
      color: "bg-[#FF6B9D]",
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
      color: "bg-[#00D4FF]",
      achievements: [
        "Organized hands-on workshops like 'Mystery of C' for in-depth learning",
        "Conducted engaging events: Bermuda Triangle, Smack D Bug, Track Back",
        "Provided comprehensive Linux and programming education",
        "Engaged participants in challenging problem-solving activities"
      ]
    },
    {
      title: "Freelancer & Open Source",
      company: "Various Projects",
      period: "2023 - Present",
      location: "Remote",
      type: "Freelance Work",
      icon: Briefcase,
      color: "bg-[#00FF94]",
      achievements: [
        "Flutter App development projects for multiple clients",
        "Open Source Contributor - PHICSIT, GSSOC'24",
        "Technical Coordinator - SOURCIFY, PERSONA+",
        "Built and deployed production-ready mobile applications"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-20 bg-[#FF6B9D] brutal-stripes overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#FFE500] border-4 border-black rotate-12 hidden md:block" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-white border-4 border-black -rotate-6 hidden md:block" />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-[#00D4FF] border-4 border-black rotate-45 hidden md:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              className="inline-block mb-6"
            >
              <div className="px-8 py-3 bg-white border-4 border-black shadow-brutal inline-flex items-center gap-3">
                <Briefcase className="w-8 h-8" />
                <h2 className="text-3xl sm:text-4xl font-black uppercase">EXPERIENCE</h2>
              </div>
            </motion.div>
            <p className="text-lg font-bold max-w-xl mx-auto bg-white inline-block px-6 py-2 border-4 border-black shadow-brutal-sm">
              A journey through leadership roles and technical contributions
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${exp.color} border-4 border-black shadow-brutal p-6 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all duration-150`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-white border-4 border-black shadow-brutal-sm flex items-center justify-center flex-shrink-0">
                    <exp.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black uppercase">{exp.title}</h3>
                    <p className="font-bold">{exp.company}</p>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-white">
                    <Calendar className="w-3 h-3 mr-1" />
                    {exp.period}
                  </Badge>
                  <Badge variant="outline" className="bg-white">
                    <MapPin className="w-3 h-3 mr-1" />
                    {exp.location}
                  </Badge>
                </div>

                {/* Type badge */}
                <Badge className="bg-black text-white mb-4">{exp.type}</Badge>

                {/* Achievements */}
                <div className="space-y-2 pt-4 border-t-4 border-black">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-black mt-2 flex-shrink-0" />
                      <p className="font-medium text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
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

export default Experience;