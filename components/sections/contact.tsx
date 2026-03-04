"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Download, ExternalLink, MessageSquare } from 'lucide-react';
import ContactExperience from '@/components/contact/ContactExperience';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "vaibhavvaibhu2005@gmail.com",
      href: "mailto:vaibhavvaibhu2005@gmail.com"
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "+91 9900450852",
      href: "tel:+919900450852"
    },
    {
      icon: MapPin,
      label: "LOCATION",
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
      label: "RESUME",
      href: "https://drive.google.com/file/d/1eaXr1S-7nZONYJFIvz9fD5xXaGsC5jk3/view?usp=sharing",
      icon: Download
    },
    {
      label: "LEETCODE",
      href: "https://www.leetcode.com/vaibhav2154",
      icon: ExternalLink
    },
    {
      label: "HACKERRANK",
      href: "https://www.hackerrank.com/vaibhav-m-n",
      icon: ExternalLink
    },
    {
      label: "GFG",
      href: "https://auth.geeksforgeeks.org/user/vaibhavvalhev",
      icon: ExternalLink
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#00FF94] brutal-stripes overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-16 right-16 w-24 h-24 bg-[#FFE500] border-4 border-black rotate-12 hidden md:block" />
      <div className="absolute top-40 left-10 w-16 h-16 bg-white border-4 border-black -rotate-6 hidden md:block" />
      <div className="absolute bottom-32 right-1/4 w-20 h-20 bg-[#FF6B9D] border-4 border-black rotate-45 hidden md:block" />

      <div className="container px-4 mx-auto sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              className="inline-block mb-6"
            >
              <div className="px-8 py-3 bg-white border-4 border-black shadow-brutal inline-flex items-center gap-3">
                <MessageSquare className="w-8 h-8" />
                <h2 className="text-3xl sm:text-4xl font-black uppercase">GET IN TOUCH</h2>
              </div>
            </motion.div>
            <p className="text-lg font-bold max-w-xl mx-auto bg-black text-white inline-block px-6 py-2 border-4 border-black">
              Let's build something amazing together
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-12 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border-4 border-black shadow-brutal p-6"
            >
              <h3 className="text-xl font-black uppercase mb-6 pb-4 border-b-4 border-black">CONTACT INFO</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#FFE500] border-4 border-black shadow-brutal-sm flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-bold hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-bold">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t-4 border-black">
                <h4 className="font-black uppercase mb-4">SOCIALS</h4>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-[#FF6B9D] border-3 border-black shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal transition-all duration-150"
                    >
                      <social.icon className="w-5 h-5" />
                      <div>
                        <div className="font-black uppercase text-sm">{social.label}</div>
                        <div className="text-xs font-bold">{social.username}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 3D Experience */}
            <div className="bg-[#cd7c2e] w-full h-full min-h-[400px] hover:cursor-grab border-4 border-black shadow-brutal overflow-hidden">
              <ContactExperience />
            </div>
          </div>

          {/* Quick Links & CTA */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#00D4FF] border-4 border-black shadow-brutal p-6"
            >
              <h3 className="text-xl font-black uppercase mb-6">QUICK LINKS</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-white border-3 border-black shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal transition-all duration-150"
                  >
                    <link.icon className="w-4 h-4" />
                    <span className="font-bold text-sm">{link.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Collaborate CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#FFE500] border-4 border-black shadow-brutal p-6"
            >
              <h3 className="text-xl font-black uppercase mb-4">LET'S COLLABORATE</h3>
              <p className="font-medium mb-6">
                Interested in working together? Whether it's a hackathon, open source project,
                or innovative startup idea, I'm excited to collaborate!
              </p>
              <Button
                size="lg"
                className="w-full bg-black text-white border-4 border-black hover:bg-white hover:text-black text-lg font-black uppercase"
                asChild
              >
                <a href="mailto:vaibhavvaibhu2005@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  SEND EMAIL
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12"
          >
            <div className="bg-white border-4 border-black shadow-brutal p-8 text-center">
              <h3 className="text-2xl font-black uppercase mb-4">READY TO BUILD SOMETHING AMAZING?</h3>
              <p className="font-medium max-w-2xl mx-auto mb-6">
                I'm currently open to new opportunities and exciting projects.
                Let's connect and create something extraordinary together.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="bg-[#FF6B9D] text-black border-4 border-black hover:bg-[#FFE500] font-black uppercase" asChild>
                  <a href="mailto:vaibhavvaibhu2005@gmail.com">
                    START A CONVERSATION
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="font-black uppercase" asChild>
                  <a href="https://drive.google.com/file/d/1eaXr1S-7nZONYJFIvz9fD5xXaGsC5jk3/view?usp=sharing" target="_blank">
                    VIEW MY RESUME
                  </a>
                </Button>
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

export default Contact;