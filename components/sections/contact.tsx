"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Download, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vaibhavvaibhu2005@gmail.com",
      href: "mailto:vaibhavvaibhu2005@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9900450852",
      href: "tel:+919900450852"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mysore, Karnataka, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Vaibhav2154",
      username: "@Vaibhav2154"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vaibhav-m-n-a6b071282/",
      username: "Vaibhav M N"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/vaibhavmn2154",
      username: "@vaibhavmn2154"
    }
  ];

  const quickLinks = [
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1eaXr1S-7nZONYJFIvz9fD5xXaGsC5jk3/view?usp=sharing",
      icon: Download
    },
    {
      label: "LeetCode Profile",
      href: "https://www.leetcode.com/vaibhav2154",
      icon: ExternalLink
    },
    {
      label: "HackerRank Profile",
      href: "https://www.hackerrank.com/vaibhav-m-n",
      icon: ExternalLink
    },
    {
      label: "GeeksforGeeks Profile",
      href: "https://auth.geeksforgeeks.org/user/vaibhavvalhev",
      icon: ExternalLink
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Get In Touch</h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a conversation about technology and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-12 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="border-0 bg-gradient-to-br from-white to-slate-50/80 dark:from-slate-900 dark:to-slate-800/80 shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 glass">
                <CardContent className="p-8">
                  <h3 className="mb-6 text-xl font-bold">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-primary/20 to-primary/30 group-hover:from-primary/30 group-hover:to-primary/40 transition-all duration-300 group-hover:scale-110">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{info.label}</div>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="font-medium transition-colors hover:text-primary"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="font-medium">{info.value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h4 className="mb-4 font-semibold">Social Media</h4>
                    <div className="space-y-3">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center p-3 space-x-3 transition-colors rounded-lg bg-accent/50 hover:bg-accent"
                        >
                          <social.icon className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium">{social.label}</div>
                            <div className="text-sm text-muted-foreground">{social.username}</div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <motion.div whileHover={{ scale: 1.02, y: -5 }} className="group">
                <Card className="border-0 bg-gradient-to-br from-white to-slate-50/80 dark:from-slate-900 dark:to-slate-800/80 shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 glass">
                  <CardContent className="p-8">
                    <h3 className="mb-6 text-xl font-bold">Quick Actions</h3>
                    <div className="space-y-3">
                      {quickLinks.map((link, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="justify-start w-full"
                          asChild
                        >
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            <link.icon className="w-4 h-4 mr-2" />
                            {link.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, y: -5 }} className="group">
                <Card className="border-0 bg-gradient-to-br from-white to-slate-50/80 dark:from-slate-900 dark:to-slate-800/80 shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 glass">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-xl font-bold">Let's Collaborate</h3>
                  <p className="mb-6 text-muted-foreground">
                    Interested in working together? Whether it's a hackathon, open source project, 
                    or innovative startup idea, I'm always excited to collaborate with fellow 
                    developers and creators.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    asChild
                  >
                    <a href="mailto:vaibhavvaibhu2005@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Me an Email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="text-center"
          >
            <Card className="p-8 border-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 shadow-xl hover:shadow-2xl transition-all duration-300 glass">
              <h3 className="mb-4 text-2xl font-bold">Ready to Build Something Amazing?</h3>
              <p className="max-w-2xl mx-auto mb-6 text-muted-foreground">
                I'm currently open to new opportunities and exciting projects. 
                Whether you're looking for a developer, a team member, or a collaborator, 
                let's connect and create something extraordinary together.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="mailto:vaibhavvaibhu2005@gmail.com">
                    Start a Conversation
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://drive.google.com/file/d/1eaXr1S-7nZONYJFIvz9fD5xXaGsC5jk3/view?usp=sharing" target="_blank">
                    View My Resume
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;