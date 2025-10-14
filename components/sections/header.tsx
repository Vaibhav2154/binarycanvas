"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/theme-toggle';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mounted, setMounted] = useState(false);
  const [isScrollingToSection, setIsScrollingToSection] = useState(false);

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
    
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 50);
          
          if (!isScrollingToSection) {
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = scrollY + 120; // Increased offset for better UX
            
            for (let i = sections.length - 1; i >= 0; i--) {
              const section = document.getElementById(sections[i]);
              if (section && section.offsetTop <= scrollPosition) {
                setActiveSection(sections[i]);
                break;
              }
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, mounted, isScrollingToSection]);  const scrollToSection = useCallback((href: string) => {
    if (!mounted) return;
    
    setIsScrollingToSection(true);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 90; 
      const elementPosition = (element as HTMLElement).offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      // Update active section immediately for better UX
      setActiveSection(href.substring(1));

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Reset scrolling flag after animation completes
      setTimeout(() => {
        setIsScrollingToSection(false);
      }, 1000);
    }
    setIsMobileMenuOpen(false);
  }, [mounted]);
  const toggleMobileMenu = useCallback(() => {
    if (!mounted) return;
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [mounted, isMobileMenuOpen]);
  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    if (!mounted) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen, mounted]);
  // Prevent body scroll when mobile menu is open and add focus trap
  useEffect(() => {
    if (!mounted) return;
    
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      
      // Focus trap for mobile menu
      const mobileMenu = document.querySelector('.mobile-menu');
      const focusableElements = mobileMenu?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements && focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        };
        
        document.addEventListener('keydown', handleTabKey);
        
        // Focus first element when menu opens
        setTimeout(() => firstElement.focus(), 100);
        
        return () => {
          document.removeEventListener('keydown', handleTabKey);
        };
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, mounted]);

  // Keyboard navigation support
  useEffect(() => {
    if (!mounted) return;
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        return;
      }
      
      // Navigate between sections with arrow keys when header is focused
      if (document.activeElement?.closest('nav')) {
        const currentIndex = navItems.findIndex(item => 
          item.href.substring(1) === activeSection
        );
        
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
          event.preventDefault();
          const nextIndex = (currentIndex + 1) % navItems.length;
          scrollToSection(navItems[nextIndex].href);
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
          event.preventDefault();
          const prevIndex = currentIndex === 0 ? navItems.length - 1 : currentIndex - 1;
          scrollToSection(navItems[prevIndex].href);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mounted, isMobileMenuOpen, activeSection, navItems, scrollToSection]);  return (
    <>
      {!mounted && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg bg-violet-600" />
                <div className="hidden w-32 h-6 bg-gray-300 rounded dark:bg-gray-700 sm:block" />
              </div>
              <div className="hidden space-x-1 lg:flex">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="w-16 h-8 bg-gray-200 rounded-lg dark:bg-gray-800" />
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-lg dark:bg-gray-800" />
                <div className="w-8 h-8 bg-gray-200 rounded-lg dark:bg-gray-800 lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      )}

      <motion.header
        initial={false}
        animate={mounted ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
        transition={{ 
          duration: mounted ? 0.5 : 0,
          ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smoother animation
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mounted ? (isScrolled
            ? 'bg-black/95 backdrop-blur-md border-b-2 border-neon-pink shadow-cyber'
            : 'bg-black/60 backdrop-blur-sm border-b border-neon-pink/30 shadow-neon') : 'opacity-0 pointer-events-none'
        }`}
        suppressHydrationWarning
        role="banner"
      >
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">            {/* Logo */}
            <motion.div
              whileHover={mounted ? { scale: 1.05 } : {}}
              whileTap={mounted ? { scale: 0.95 } : {}}
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => scrollToSection('#hero')}
              suppressHydrationWarning
            >
            <Image alt='logo' src={"/logo.png"} width={40} height={40} className="ml-10" />
            
            </motion.div>
            <nav className="items-center hidden ml-10 space-x-1 lg:flex" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={mounted ? { scale: 1.05, y: -1 } : {}}
                  whileTap={mounted ? { scale: 0.95 } : {}}
                  className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 relative overflow-hidden font-cyber ${
                    activeSection === item.href.substring(1)
                      ? 'bg-neon-pink text-black shadow-lg shadow-neon-strong animate-neon-glow'
                      : 'text-neon-pink hover:text-white hover:bg-neon-pink/20 hover:shadow-neon'
                  }`}
                  suppressHydrationWarning
                  aria-label={`Navigate to ${item.name} section`}
                  tabIndex={0}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 rounded bg-neon-pink"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>            {/* Desktop Actions */}
            <div className="items-center hidden space-x-4 lg:flex">
              {/* Social Links */}
              <div className="flex items-center space-x-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    whileHover={mounted ? { scale: 1.1, y: -2 } : {}}
                    whileTap={mounted ? { scale: 0.9 } : {}}
                    initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                    animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={mounted ? { delay: index * 0.1 } : {}}
                    className="p-2 text-neon-cyan transition-all duration-200 rounded-lg hover:text-white hover:bg-neon-cyan/20 hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-opacity-50"
                    title={social.label}
                    suppressHydrationWarning
                    aria-label={`Visit ${social.label} profile`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Theme Toggle */}
              <div className="pl-2 border-l border-neon-cyan/20">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              {/* Mobile Theme Toggle */}
              <ThemeToggle size="sm" />              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={toggleMobileMenu}
                whileHover={mounted ? { scale: 1.1 } : {}}
                whileTap={mounted ? { scale: 0.9 } : {}}
                className="p-2 text-neon-cyan transition-all duration-200 rounded-lg mobile-menu-button hover:text-white hover:bg-neon-cyan/20 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-opacity-50"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
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
            />            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 200,
                mass: 0.8
              }}
              className="mobile-menu fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-black shadow-2xl z-50 lg:hidden overflow-y-auto border-l border-neon-pink"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-title"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-neon-pink">
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={mounted ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: mounted ? 0.2 : 0 }}
                    id="mobile-menu-title"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-neon-pink to-neon-purple">
                      <span className="text-sm font-bold text-black font-cyber">V</span>
                    </div>                    <span className="text-lg font-bold text-white font-cyber">
                      Vaibhav M N
                    </span>
                  </motion.div>                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-neon-cyan transition-all duration-200 rounded-lg hover:text-white hover:bg-neon-cyan/20 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-opacity-50"
                    aria-label="Close mobile menu"
                    whileHover={mounted ? { scale: 1.1, rotate: 90 } : {}}
                    whileTap={mounted ? { scale: 0.9 } : {}}
                    initial={mounted ? { opacity: 0, rotate: -90 } : { opacity: 1, rotate: 0 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: mounted ? 0.3 : 0 }}
                  >                    <X className="w-5 h-5" />
                  </motion.button>
                </div>                {/* Navigation Links */}
                <div className="flex-1 px-6 py-6">
                  <nav className="space-y-2" role="navigation" aria-label="Mobile navigation">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        initial={mounted ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: mounted ? index * 0.1 : 0 }}
                        className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 relative overflow-hidden group font-cyber ${
                          activeSection === item.href.substring(1)
                            ? 'bg-neon-pink text-black shadow-lg shadow-neon-strong animate-neon-glow'
                            : 'text-neon-cyan hover:text-white hover:bg-neon-pink/20 hover:shadow-neon'
                        }`}
                        aria-label={`Navigate to ${item.name} section`}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {activeSection !== item.href.substring(1) && (
                          <div className="absolute inset-0 transition-transform duration-300 translate-x-full bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 group-hover:translate-x-0" />
                        )}
                      </motion.button>
                    ))}
                  </nav>
                </div>                {/* Mobile Social Links */}
                <div className="px-6 py-6 border-t border-neon-pink">
                  <div className="flex items-center justify-center space-x-6">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        whileHover={mounted ? { scale: 1.1, y: -2 } : {}}
                        whileTap={mounted ? { scale: 0.9 } : {}}
                        initial={mounted ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
                        animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                        transition={mounted ? { delay: 0.3 + index * 0.1 } : {}}
                        className="p-3 text-neon-cyan transition-all duration-200 bg-neon-pink/10 rounded-full hover:text-white hover:bg-neon-pink/20 hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-neon-pink focus:ring-opacity-50"
                        title={social.label}
                        suppressHydrationWarning
                        aria-label={`Visit ${social.label} profile`}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;