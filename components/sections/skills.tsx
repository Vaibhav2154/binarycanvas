"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Smartphone, Database, Cloud, Shield, Wrench } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90, color: "bg-green-500" },
        { name: "Java", level: 85, color: "bg-orange-500" },
        { name: "C/C++", level: 80, color: "bg-blue-500" },
        { name: "Dart", level: 88, color: "bg-cyan-500" },
        { name: "JavaScript", level: 82, color: "bg-yellow-500" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Smartphone,
      skills: [
        { name: "Flutter", level: 92, color: "bg-blue-600" },
        { name: "React/Next.js", level: 85, color: "bg-purple-500" },
        { name: "Flask/FastAPI", level: 88, color: "bg-green-600" },
        { name: "TensorFlow", level: 80, color: "bg-orange-600" },
        { name: "PyTorch", level: 78, color: "bg-red-500" }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: Database,
      skills: [
        { name: "Machine Learning", level: 87, color: "bg-indigo-500" },
        { name: "Langchain", level: 85, color: "bg-teal-500" },
        { name: "Transformers", level: 82, color: "bg-pink-500" },
        { name: "Scikit-Learn", level: 86, color: "bg-green-500" },
        { name: "NLTK", level: 80, color: "bg-blue-500" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", level: 90, color: "bg-gray-600" },
        { name: "Linux", level: 88, color: "bg-yellow-600" },
        { name: "Google Cloud", level: 82, color: "bg-blue-600" },
        { name: "Arduino", level: 75, color: "bg-cyan-600" },
        { name: "Docker", level: 70, color: "bg-blue-500" }
      ]
    }
  ];

  const certifications = [
    "Google Cybersecurity Professional (93%)",
    "Flutter Development Specialization",
    "Machine Learning Fundamentals",
    "Web Development with React"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 relative">
      {/* Removed 3D Background for performance */}
      {/* <SkillsThreeBackground /> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              My expertise across different technologies and domains
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -8 }}
                className="group"
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-slate-50/80 dark:from-slate-900 dark:to-slate-800/80 shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 glass">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary/20 to-primary/30 group-hover:from-primary/30 group-hover:to-primary/40 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.1) }}
                              className={`h-2 rounded-full ${skill.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group"
          >
            <Card className="border-0 bg-gradient-to-br from-white to-slate-50/80 dark:from-slate-900 dark:to-slate-800/80 shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 glass">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary/20 to-primary/30 group-hover:from-primary/30 group-hover:to-primary/40 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Certifications & Specializations</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{cert}</span>
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

export default Skills;