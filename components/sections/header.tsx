"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/theme-toggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mounted, setMounted] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Vaibhav2154", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vaibhav-m-n-a6b071282/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:vaibhavvaibhu2005@gmail.com", label: "Email" }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, mounted]);

  const scrollToSection = (href: string) => {
    if (!mounted) return;
    
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = (element as HTMLElement).offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    if (!mounted) return;
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mounted) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen, mounted]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (!mounted) return;
    
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, mounted]);

  return (
    <>
      <motion.header
        initial={false}
        animate={mounted ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ duration: mounted ? 0.5 : 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-800/20'
            : 'bg-transparent'
        }`}
        suppressHydrationWarning
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={mounted ? { scale: 1.05 } : {}}
              whileTap={mounted ? { scale: 0.95 } : {}}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection('#hero')}
              suppressHydrationWarning
            >
              <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white hidden sm:block">
                Vaibhav M N
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={mounted ? { scale: 1.05 } : {}}
                  whileTap={mounted ? { scale: 0.95 } : {}}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-violet-600 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  suppressHydrationWarning
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Social Links */}
              <div className="flex items-center space-x-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    whileHover={mounted ? { scale: 1.1, y: -2 } : {}}
                    whileTap={mounted ? { scale: 0.9 } : {}}
                    className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    title={social.label}
                    suppressHydrationWarning
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              {/* Mobile Theme Toggle */}
              <ThemeToggle size="sm" />

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={toggleMobileMenu}
                whileHover={mounted ? { scale: 1.1 } : {}}
                whileTap={mounted ? { scale: 0.9 } : {}}
                className="mobile-menu-button p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle mobile menu"
                suppressHydrationWarning
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={mounted ? { rotate: -90, opacity: 0 } : { rotate: 0, opacity: 1 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={mounted ? { rotate: 90, opacity: 0 } : { rotate: 0, opacity: 1 }}
                      transition={{ duration: mounted ? 0.2 : 0 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={mounted ? { rotate: 90, opacity: 0 } : { rotate: 0, opacity: 1 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={mounted ? { rotate: -90, opacity: 0 } : { rotate: 0, opacity: 1 }}
                      transition={{ duration: mounted ? 0.2 : 0 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && mounted && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="mobile-menu fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white dark:bg-black shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600">
                      <span className="text-sm font-bold text-white">V</span>
                    </div>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      Vaibhav M N
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-500 transition-colors rounded-lg hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-6 py-6">
                  <nav className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        initial={mounted ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: mounted ? index * 0.1 : 0 }}
                        className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                          activeSection === item.href.substring(1)
                            ? 'bg-violet-600 text-white shadow-lg'
                            : 'text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </nav>
                </div>

                {/* Mobile Social Links */}
                <div className="px-6 py-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-center space-x-6">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        whileHover={mounted ? { scale: 1.1, y: -2 } : {}}
                        whileTap={mounted ? { scale: 0.9 } : {}}
                        className="p-3 text-gray-700 transition-colors bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
                        title={social.label}
                        suppressHydrationWarning
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;