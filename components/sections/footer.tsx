"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Code, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FooterModern = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Vaibhav2154", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/vaibhav-m-n", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/vaibhavmn2154", label: "Twitter" },
    { icon: Mail, href: "mailto:vaibhavvaibhu2005@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "SKILLS", href: "#skills" },
    { name: "CONTACT", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Top border */}
      <div className="h-4 bg-[#FFE500] border-b-4 border-black" />

      <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center mb-4 gap-4">
                <div className="w-14 h-14 bg-[#FFE500] border-4 border-white flex items-center justify-center">
                  <Code className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase">
                    VAIBHAV M N
                  </h3>
                  <p className="font-bold text-[#FFE500]">DEVELOPER</p>
                </div>
              </div>
              <p className="max-w-md mb-6 leading-relaxed font-medium">
                Passionate about creating innovative solutions that make a difference. 
                Always learning, always building, always pushing boundaries.
              </p>
              <div className="flex items-center gap-2 text-[#FF6B9D] font-bold">
                <Coffee className="w-5 h-5" />
                <span>Fueled by coffee and curiosity</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="mb-4 text-lg font-black text-[#00D4FF]">QUICK LINKS</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="inline-block font-bold hover:text-[#FFE500] transition-colors"
                    >
                      → {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="mb-4 text-lg font-black text-[#00FF94]">GET IN TOUCH</h4>
              <div className="space-y-3 font-medium">
                <p className="text-sm">
                  📧 vaibhavvaibhu2005@gmail.com
                </p>
                <p className="text-sm">
                  📱 +91 9900450852
                </p>
                <p className="text-sm">
                  📍 Mysore, Karnataka, India
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mb-8 gap-4"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white text-black border-4 border-white flex items-center justify-center hover:bg-[#FFE500] transition-all duration-150"
                title={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-8 border-t-4 border-white"
          >
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-2 font-bold">
                <span>© {currentYear} VAIBHAV M N. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-5 h-5 text-[#FF6B9D] fill-current" />
                </motion.div>
                <span>and</span>
                <Coffee className="w-5 h-5 text-[#FF9500]" />
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-[#00D4FF]">
                  Next.js + TypeScript + Tailwind
                </span>
                <Button
                  onClick={scrollToTop}
                  size="sm"
                  className="bg-[#FFE500] text-black border-4 border-white hover:bg-white font-black"
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="font-bold">
                OPEN TO OPPORTUNITIES • AVAILABLE FOR COLLABORATIONS •{' '}
                <a href="mailto:vaibhavvaibhu2005@gmail.com" className="text-[#FFE500] hover:underline">
                  LET'S BUILD SOMETHING AMAZING!
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed z-50 w-14 h-14 bottom-8 right-8 bg-[#FFE500] text-black border-4 border-black shadow-brutal flex items-center justify-center hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all duration-150"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default FooterModern;