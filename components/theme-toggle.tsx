"use client";

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ThemeToggle = ({ className = "", size = 'md' }: ThemeToggleProps) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconSize = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }[size];

  const handleClick = () => {
    if (mounted) {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    }
  };

  // Always render the button with consistent styling to avoid hydration mismatch
  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
      title="Toggle theme"
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      <div className={iconSize} suppressHydrationWarning>
        {mounted ? (
          resolvedTheme === 'dark' ? (
            <Sun className={iconSize} />
          ) : (
            <Moon className={iconSize} />
          )
        ) : (
          // Show a neutral icon during SSR
          <div className={`${iconSize} bg-gray-400 rounded-full opacity-50`} />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
