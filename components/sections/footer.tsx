"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Code, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FooterModern = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Vaibhav2154", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Linkedin, href: "https://linkedin.com/in/vaibhav-m-n", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, href: "https://twitter.com/vaibhavmn2154", label: "Twitter", color: "hover:text-blue-300" },
    { icon: Mail, href: "mailto:vaibhavvaibhu2005@gmail.com", label: "Email", color: "hover:text-green-400" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-br from-black via-purple-900/30 to-black">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-bg w-full h-full" />
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-pink"
            animate={{
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center mb-4 space-x-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-neon-pink to-neon-purple">
                  <Code className="w-6 h-6 text-black animate-neon-glow" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text font-cyber">
                    VAIBHAV M N
                  </h3>
                  <p className="text-sm text-neon-cyan font-mono">Cyber Developer</p>
                </div>
              </div>
              <p className="max-w-md mb-6 leading-relaxed text-neon-cyan/80 font-mono">
                Passionate about creating innovative cyber solutions that make a difference. 
                Always processing, always building, always pushing the boundaries of what's possible.
              </p>
              <div className="flex items-center space-x-2 text-sm text-neon-pink/70 font-cyber">
                <Coffee className="w-4 h-4 animate-neon-glow" />
                <span>Fueled by coffee and cyber curiosity</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="mb-4 text-lg font-semibold text-neon-pink font-cyber">QUICK_LINKS</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="inline-block text-neon-cyan/80 transition-colors duration-200 hover:text-neon-pink hover:translate-x-1 font-mono"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="mb-4 text-lg font-semibold text-neon-cyan font-cyber">ESTABLISH_CONNECTION</h4>
              <div className="space-y-3">
                <p className="text-sm text-neon-cyan/80 font-mono">
                  📧 vaibhavvaibhu2005@gmail.com
                </p>
                <p className="text-sm text-neon-pink/80 font-mono">
                  📱 +91 9900450852
                </p>
                <p className="text-sm text-neon-purple/80 font-mono">
                  📍 Mysore, Karnataka, India
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mb-8 space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`p-3 rounded-full cyber-bg border border-neon-pink/30 hover:border-neon-pink ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-neon`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                <social.icon className="w-5 h-5 animate-neon-glow" />
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-8 border-t border-neon-pink/30"
          >
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <div className="flex items-center space-x-2 text-neon-cyan/80 font-mono">
                <span>© {currentYear} Vaibhav M N. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-neon-pink fill-current animate-neon-glow" />
                </motion.div>
                <span>and lots of</span>
                <Coffee className="w-4 h-4 text-neon-orange animate-neon-glow" />
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-neon-pink/70 font-cyber">
                  Built with Next.js, TypeScript & Tailwind CSS
                </span>
                <Button
                  onClick={scrollToTop}
                  size="sm"
                  variant="outline"
                  className="text-neon-pink border-neon-pink/50 hover:bg-neon-pink/10 font-cyber"
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="mt-4 text-sm text-center text-neon-cyan/70 font-mono">
              <p>
                Open to opportunities • Available for collaborations • 
                <a href="mailto:vaibhavvaibhu2005@gmail.com" className="ml-1 transition-colors hover:text-neon-pink font-cyber">
                  Let's build something cyber amazing together!
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed z-50 p-3 text-black transition-all duration-300 rounded-full shadow-lg bottom-8 right-8 bg-gradient-to-r from-neon-pink to-neon-purple hover:shadow-neon-strong"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default FooterModern;