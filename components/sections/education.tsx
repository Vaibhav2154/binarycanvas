"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const education = [
    {
      institution: "JSS Science and Technology University",
      degree: "Bachelor of Engineering in Computer Science",
      period: "September 2023 - May 2027",
      location: "Mysore, India",
      grade: "CGPA: 9.58 (Till 3rd Sem)",
      description: "Focusing on Computer Science fundamentals, software engineering, and emerging technologies."
    },
    {
      institution: "Google Cybersecurity Professional",
      degree: "Coursera Certification Program",
      period: "December 2023 - March 2024",
      location: "Online",
      grade: "Overall Grade: 93%",
      description: "Comprehensive cybersecurity program covering threat detection, incident response, and security frameworks."
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Education</h2>
            <p className="text-lg text-muted-foreground">
              My academic journey and professional certifications
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -8 }}
                className="group"
              >
                <Card className="border-0 bg-gradient-to-br from-white to-slate-50/80 dark:from-slate-900 dark:to-slate-800/80 shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 glass">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-primary/30 group-hover:from-primary/30 group-hover:to-primary/40 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                          {index === 0 ? (
                            <GraduationCap className="h-6 w-6 text-primary" />
                          ) : (
                            <Award className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{edu.institution}</h3>
                          <p className="text-muted-foreground">{edu.location}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span className="text-xs">{edu.period}</span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{edu.grade}</Badge>
                      </div>
                      <p className="text-muted-foreground">{edu.description}</p>
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

export default Education;