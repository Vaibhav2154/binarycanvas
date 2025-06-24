"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Vaibhav2154", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/vaibhav-m-n", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/vaibhavmn2154", label: "Twitter" },
    { icon: Mail, href: "mailto:vaibhavvaibhu2005@gmail.com", label: "Email" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Vaibhav M N
              </h3>
              <p className="text-muted-foreground">
                Computer Science Student • Flutter Developer • AI/ML Enthusiast
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-4 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl glass hover:glass-strong transition-all duration-300 group"
                title={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-border pt-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                © {currentYear} Vaibhav M N. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="h-4 w-4 text-red-500 fill-current" />
                </motion.div>
                <span>using Next.js & Tailwind CSS</span>
              </div>
            </div>
            
            <div className="mt-4 text-center text-xs text-muted-foreground">
              <p>
                Open to opportunities • Available for collaborations • 
                <a href="mailto:vaibhavvaibhu2005@gmail.com" className="hover:text-primary transition-colors ml-1">
                  Let's connect!
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;