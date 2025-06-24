import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  interactive?: boolean;
}

export const ModernCard: React.FC<ModernCardProps> = ({
  children,
  className,
  hover = true,
  glow = false,
  interactive = false,
}) => {
  return (
    <motion.div
      className={cn(
        'glass rounded-2xl p-6 border border-border/50',
        hover && 'hover:glass-strong hover:shadow-glass-strong transition-all duration-300',
        glow && 'shadow-interactive',
        interactive && 'interactive-hover cursor-pointer',
        className
      )}
      whileHover={interactive ? { scale: 1.02 } : undefined}
      whileTap={interactive ? { scale: 0.98 } : undefined}
    >
      {children}
    </motion.div>
  );
};

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

export const GradientCard: React.FC<GradientCardProps> = ({
  children,
  className,
  gradient = 'primary',
}) => {
  const gradients = {
    primary: 'from-primary/10 via-primary/5 to-transparent',
    secondary: 'from-secondary/10 via-secondary/5 to-transparent',
    success: 'from-green-500/10 via-green-500/5 to-transparent',
    warning: 'from-yellow-500/10 via-yellow-500/5 to-transparent',
    danger: 'from-red-500/10 via-red-500/5 to-transparent',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl p-6 border border-border/50',
        'before:absolute before:inset-0 before:bg-gradient-to-br',
        `before:${gradients[gradient]}`,
        'before:opacity-50',
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  className,
  delay = 0,
}) => {
  return (
    <motion.div
      className={cn('glass rounded-2xl p-6', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
};
