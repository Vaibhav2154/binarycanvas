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
      grade: "CGPA: 9.42 (Till 4th Sem)",
      description: "Focusing on Computer Science fundamentals, software engineering, and emerging technologies.",
      color: "bg-[#FFE500]"
    },
    {
      institution: "Google Cybersecurity Professional",
      degree: "Coursera Certification Program",
      period: "December 2023 - March 2024",
      location: "Online",
      grade: "Overall Grade: 93%",
      description: "Comprehensive cybersecurity program covering threat detection, incident response, and security frameworks.",
      color: "bg-[#00D4FF]"
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#FFFEF0] brutal-dots relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-[#FF6B9D] border-4 border-black rotate-12 hidden md:block" />
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-[#00FF94] border-4 border-black -rotate-6 hidden md:block" />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              className="inline-block mb-6"
            >
              <div className="px-8 py-3 bg-[#FFE500] border-4 border-black shadow-brutal inline-block">
                <h2 className="text-3xl font-black uppercase sm:text-4xl">EDUCATION</h2>
              </div>
            </motion.div>
            <p className="max-w-xl mx-auto text-lg font-medium">
              My academic journey and professional certifications
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className={`${edu.color}`}>
                  <CardHeader className="pb-4 border-b-4 border-black">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center bg-white border-4 border-black w-14 h-14 shadow-brutal">
                          {index === 0 ? (
                            <GraduationCap className="h-7 w-7" />
                          ) : (
                            <Award className="h-7 w-7" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-black uppercase">{edu.institution}</h3>
                          <p className="font-bold">{edu.location}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="flex items-center space-x-2 bg-white">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-bold">{edu.period}</span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-black uppercase">{edu.degree}</h4>
                      <Badge className="text-white bg-black">{edu.grade}</Badge>
                      <p className="font-medium">{edu.description}</p>
                    </div>
                  </CardContent>
                </Card>
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

export default Education;