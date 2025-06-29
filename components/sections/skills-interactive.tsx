"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Smartphone, 
  Database, 
  Shield, 
  Brain, 
  Palette,
  Server,
  Globe,
  Zap,
  Star
} from 'lucide-react';

const SkillsInteractive = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: Star },
    { id: 'frontend', name: 'Frontend', icon: Globe },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'ai', name: 'AI/ML', icon: Brain },
  ];

  const skills = [
    // Frontend
    { name: 'React', level: 95, category: 'frontend', color: 'from-blue-500 to-cyan-500', description: 'Building dynamic user interfaces' },
    { name: 'Next.js', level: 90, category: 'frontend', color: 'from-gray-700 to-gray-900', description: 'Full-stack React framework' },
    { name: 'TypeScript', level: 88, category: 'frontend', color: 'from-blue-600 to-blue-800', description: 'Type-safe JavaScript development' },
    { name: 'Tailwind CSS', level: 92, category: 'frontend', color: 'from-teal-400 to-blue-500', description: 'Utility-first CSS framework' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'backend', color: 'from-green-500 to-green-700', description: 'Server-side JavaScript runtime' },
    { name: 'Python', level: 90, category: 'backend', color: 'from-yellow-400 to-blue-500', description: 'Versatile programming language' },
    { name: 'Express.js', level: 82, category: 'backend', color: 'from-gray-600 to-gray-800', description: 'Fast Node.js web framework' },
    { name: 'FastAPI', level: 78, category: 'backend', color: 'from-green-400 to-blue-500', description: 'Modern Python web framework' },
    
    // Mobile
    { name: 'Flutter', level: 93, category: 'mobile', color: 'from-blue-400 to-blue-600', description: 'Cross-platform mobile development' },
    { name: 'Dart', level: 88, category: 'mobile', color: 'from-blue-500 to-indigo-600', description: 'Flutter programming language' },
    { name: 'React Native', level: 75, category: 'mobile', color: 'from-purple-500 to-pink-500', description: 'Native mobile apps with React' },
    
    // Database
    { name: 'MongoDB', level: 85, category: 'database', color: 'from-green-500 to-green-700', description: 'NoSQL document database' },
    { name: 'PostgreSQL', level: 80, category: 'database', color: 'from-blue-600 to-indigo-700', description: 'Advanced relational database' },
    { name: 'Firebase', level: 82, category: 'database', color: 'from-yellow-500 to-orange-500', description: 'Google cloud platform' },
    
    // Security
    { name: 'Cybersecurity', level: 87, category: 'security', color: 'from-red-500 to-red-700', description: 'Security frameworks & practices' },
    { name: 'Penetration Testing', level: 75, category: 'security', color: 'from-purple-600 to-red-600', description: 'Ethical hacking & testing' },
    
    // AI/ML
    { name: 'Machine Learning', level: 85, category: 'ai', color: 'from-purple-500 to-pink-500', description: 'ML algorithms & models' },
    { name: 'TensorFlow', level: 78, category: 'ai', color: 'from-orange-500 to-red-500', description: 'Deep learning framework' },
    { name: 'Langchain', level: 82, category: 'ai', color: 'from-green-400 to-blue-500', description: 'LLM application framework' },
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950 dark:via-slate-900 dark:to-purple-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Technical Expertise
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore my technical skills across different domains. Click on categories to filter skills.
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {skillCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105' 
                    : 'hover:scale-105'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </Button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="group"
                >
                  <Card className="h-full border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <CardContent className="p-6">
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold">{skill.name}</h3>
                        <Badge 
                          variant="secondary" 
                          className={`bg-gradient-to-r ${skill.color} text-white border-0`}
                        >
                          {skill.level}%
                        </Badge>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <AnimatePresence>
                        {hoveredSkill === skill.name && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm text-muted-foreground"
                          >
                            {skill.description}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      {/* Skill Level Indicator */}
                      <div className="flex items-center space-x-1 mt-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < Math.floor(skill.level / 20) 
                                ? `bg-gradient-to-r ${skill.color}` 
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                            initial={{ scale: 0 }}
                            animate={inView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Skills Summary */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Card className="max-w-2xl mx-auto border-0 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  I believe in staying current with technology trends and continuously expanding my skill set. 
                  These percentages reflect my current proficiency and comfort level with each technology.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsInteractive;