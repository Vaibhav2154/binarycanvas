"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    const handleScroll = () => {
      toggleVisibility();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check immediately on mount
    toggleVisibility();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsExpanded(false); // Close expanded state after scrolling
  };

  const fabActions = [
    {
      icon: Mail,
      label: 'Email',
      action: () => {
        window.open('mailto:vaibhavvaibhu2005@gmail.com');
        setIsExpanded(false);
      },
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: MessageCircle,
      label: 'Chat',
      action: () => {
        const element = document.querySelector('#contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsExpanded(false);
      },
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Phone,
      label: 'Call',
      action: () => {
        window.open('tel:+919900450852'); // Add your phone number
        setIsExpanded(false);
      },
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  const handleMainButtonClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      scrollToTop();
    }
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to prevent accidental closing
    setTimeout(() => {
      setIsExpanded(false);
    }, 200);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed z-50 flex flex-col items-end space-y-3 bottom-6 right-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Expanded Actions */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="flex flex-col space-y-2"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {fabActions.map((action, index) => (
                  <motion.div
                    key={action.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ 
                      delay: index * 0.05,
                      duration: 0.2,
                      ease: "easeOut"
                    }}
                    className="flex items-center space-x-2"
                  >
                    <motion.span
                      className="px-2 py-1 text-xs text-white rounded bg-black/80 whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: (index * 0.05) + 0.1 }}
                    >
                      {action.label}
                    </motion.span>
                    <Button
                      size="sm"
                      className={`${action.color} text-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-full w-12 h-12 p-0`}
                      onClick={action.action}
                      title={action.label}
                    >
                      <action.icon className="w-5 h-5" />
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Button
              className="relative overflow-hidden transition-all duration-300 rounded-full shadow-lg w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-xl"
              onClick={handleMainButtonClick}
              title={isExpanded ? "Close menu" : "Scroll to top"}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <ArrowUp className="w-6 h-6" />
              </motion.div>
            </Button>

            {/* Pulse effect when not expanded */}
            {!isExpanded && (
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20"
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: [0, 1.5, 2], opacity: [0.8, 0.3, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}