"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mounted, setMounted] = useState(false);
  const [isScrollingToSection, setIsScrollingToSection] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
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
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 50);
          
          if (!isScrollingToSection) {
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = scrollY + 120;
            
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
  }, [navItems, mounted, isScrollingToSection]);

  const scrollToSection = useCallback((href: string) => {
    if (!mounted) return;
    
    setIsScrollingToSection(true);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 90; 
      const elementPosition = (element as HTMLElement).offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      setActiveSection(href.substring(1));

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

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
        animate={mounted ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          mounted ? (isScrolled
            ? 'bg-[#FFE500] border-b-4 border-black shadow-brutal'
            : 'bg-[#FFFEF0] border-b-4 border-black') : 'opacity-0 pointer-events-none'
        }`}
        role="banner"
      >
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={mounted ? { scale: 1.05 } : {}}
              whileTap={mounted ? { scale: 0.95 } : {}}
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => scrollToSection('#hero')}
            >
              <div className="w-12 h-12 bg-black border-3 border-black flex items-center justify-center shadow-brutal-sm">
                <Image alt='logo' src={"/logo.png"} width={40} height={40} className="invert" />
              </div>
              <span className="hidden sm:block text-xl font-black uppercase">VAIBHAV</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="items-center hidden space-x-1 lg:flex" role="navigation">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={mounted ? { scale: 1.05, y: -2 } : {}}
                  whileTap={mounted ? { scale: 0.95 } : {}}
                  className={`px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all duration-150 border-2 border-transparent ${
                    activeSection === item.href.substring(1)
                      ? 'bg-black text-white border-black'
                      : 'hover:bg-black hover:text-white hover:border-black'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="items-center hidden space-x-3 lg:flex">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={mounted ? { scale: 1.1, y: -2 } : {}}
                  whileTap={mounted ? { scale: 0.9 } : {}}
                  initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-2 bg-white border-3 border-black shadow-brutal-sm hover:bg-[#FF6B9D] transition-all"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              whileHover={mounted ? { scale: 1.1 } : {}}
              whileTap={mounted ? { scale: 0.9 } : {}}
              className="p-2 bg-white border-3 border-black shadow-brutal-sm mobile-menu-button lg:hidden"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && mounted && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="mobile-menu fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-[#FFFEF0] z-50 lg:hidden border-l-4 border-black"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b-4 border-black bg-[#FFE500]">
                  <span className="text-xl font-black uppercase">MENU</span>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white border-3 border-black shadow-brutal-sm"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-6 py-6 overflow-y-auto">
                  <nav className="space-y-3">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`w-full text-left px-4 py-3 text-base font-bold uppercase border-3 border-black transition-all ${
                          activeSection === item.href.substring(1)
                            ? 'bg-[#FFE500] shadow-brutal'
                            : 'bg-white hover:bg-[#FF6B9D] shadow-brutal-sm hover:shadow-brutal'
                        }`}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </nav>
                </div>

                {/* Mobile Social Links */}
                <div className="px-6 py-6 border-t-4 border-black bg-[#00D4FF]">
                  <div className="flex items-center justify-center space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white border-3 border-black shadow-brutal"
                        title={social.label}
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