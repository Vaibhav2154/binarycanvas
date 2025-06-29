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
    <footer className="relative overflow-hidden text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                    Vaibhav M N
                  </h3>
                  <p className="text-sm text-gray-300">Full Stack Developer</p>
                </div>
              </div>
              <p className="max-w-md mb-6 leading-relaxed text-gray-300">
                Passionate about creating innovative solutions that make a difference. 
                Always learning, always building, always pushing the boundaries of what's possible.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Coffee className="w-4 h-4" />
                <span>Fueled by coffee and curiosity</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="inline-block text-gray-300 transition-colors duration-200 hover:text-white hover:translate-x-1"
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
              <h4 className="mb-4 text-lg font-semibold">Let's Connect</h4>
              <div className="space-y-3">
                <p className="text-sm text-gray-300">
                  📧 vaibhavvaibhu2005@gmail.com
                </p>
                <p className="text-sm text-gray-300">
                  📱 +91 9900450852
                </p>
                <p className="text-sm text-gray-300">
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
                className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-8 border-t border-white/20"
          >
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-300">
                <span>© {currentYear} Vaibhav M N. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-400 fill-current" />
                </motion.div>
                <span>and lots of</span>
                <Coffee className="w-4 h-4 text-amber-400" />
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">
                  Built with Next.js, TypeScript & Tailwind CSS
                </span>
                <Button
                  onClick={scrollToTop}
                  size="sm"
                  variant="outline"
                  className="text-white border-white/20 hover:bg-white/10"
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="mt-4 text-sm text-center text-gray-400">
              <p>
                Open to opportunities • Available for collaborations • 
                <a href="mailto:vaibhavvaibhu2005@gmail.com" className="ml-1 transition-colors hover:text-white">
                  Let's build something amazing together!
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed z-50 p-3 text-white transition-all duration-300 rounded-full shadow-lg bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-xl"
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