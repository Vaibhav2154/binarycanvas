"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

interface InteractiveButtonProps extends ButtonProps {
  icon?: React.ReactNode;
  pulse?: boolean;
  glow?: boolean;
  magneticEffect?: boolean;
}

export function InteractiveButton({ 
  children, 
  className, 
  icon,
  pulse = false,
  glow = false,
  magneticEffect = false,
  ...props 
}: InteractiveButtonProps) {
  const baseClasses = cn(
    "relative overflow-hidden group transition-all duration-300",
    pulse && "animate-pulse-soft",
    glow && "shadow-interactive hover:shadow-interactive-hover",
    className
  );

  const buttonContent = (
    <Button className={baseClasses} {...props}>
      <span className="relative z-10 flex items-center space-x-2">
        {icon && <span className="group-hover:scale-110 transition-transform">{icon}</span>}
        <span>{children}</span>
      </span>
      
      {/* Ripple effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg border-2 border-primary/0 group-hover:border-primary/20 transition-colors duration-300" />
    </Button>
  );

  if (magneticEffect) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {buttonContent}
      </motion.div>
    );
  }

  return buttonContent;
}
