"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, Trophy, Code, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
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
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Experience & Involvement</h2>
            <p className="text-lg text-muted-foreground">
              My professional journey and leadership roles
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <exp.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-lg text-primary font-semibold">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-3 mt-2">
                            <Badge variant="outline" className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span className="text-xs">{exp.period}</span>
                            </Badge>
                            <Badge variant="outline" className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span className="text-xs">{exp.location}</span>
                            </Badge>
                            <Badge variant="secondary">{exp.type}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;