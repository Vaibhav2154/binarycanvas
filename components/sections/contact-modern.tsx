"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Send,
  MessageCircle,
  Calendar,
  Coffee,
  Zap
} from 'lucide-react';

const ContactModern = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "Drop me a line anytime",
      value: "vaibhavvaibhu2005@gmail.com",
      action: "mailto:vaibhavvaibhu2005@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Me",
      description: "Let's have a conversation",
      value: "+91 9900450852",
      action: "tel:+919900450852",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageCircle,
      title: "Quick Chat",
      description: "Schedule a meeting",
      value: "Book a slot",
      action: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Coffee,
      title: "Coffee Chat",
      description: "Let's meet in person",
      value: "Mysore, Karnataka",
      action: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      username: "@Vaibhav2154",
      url: "https://github.com/Vaibhav2154",
      color: "hover:text-gray-600"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      username: "Vaibhav M N",
      url: "https://www.linkedin.com/in/vaibhav-m-n-a6b071282/",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      username: "@vaibhavmn2154",
      url: "https://twitter.com/vaibhavmn2154",
      color: "hover:text-blue-400"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
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
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's Build Something Amazing
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to turn your ideas into reality? Let's connect and create something extraordinary together.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.action}
                      className="block group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <Card className="h-full border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6 text-center">
                          <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <method.icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-semibold mb-2">{method.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                          <p className="text-sm font-medium">{method.value}</p>
                        </CardContent>
                      </Card>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 ${social.color} group`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    >
                      <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Card className="border-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Zap className="w-6 h-6 text-blue-600" />
                      <h4 className="font-semibold">Quick Response</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      I typically respond to emails within 24 hours. For urgent matters, 
                      feel free to call or schedule a quick chat!
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="bg-white/50 dark:bg-slate-700/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-white/50 dark:bg-slate-700/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or idea..."
                        rows={6}
                        required
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactModern;