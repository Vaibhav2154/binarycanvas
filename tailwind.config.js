/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-share-tech-mono)', 'JetBrains Mono', 'monospace'],
        cyber: ['var(--font-orbitron)', 'var(--font-rajdhani)', 'system-ui', 'sans-serif'],
        neon: ['var(--font-orbitron)', 'var(--font-rajdhani)', 'system-ui', 'sans-serif'],
        matrix: ['var(--font-share-tech-mono)', 'Courier New', 'monospace'],
        display: ['var(--font-orbitron)', 'var(--font-rajdhani)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'system-ui', 'sans-serif'],
        rajdhani: ['var(--font-rajdhani)', 'system-ui', 'sans-serif'],
        'share-tech': ['var(--font-share-tech-mono)', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
        '5': 'hsl(var(--chart-5))',
      },
      // Cyberpunk Theme Colors
      neon: {
        pink: 'hsl(var(--neon-pink))',
        blue: 'hsl(var(--neon-blue))',
        cyan: 'hsl(var(--neon-cyan))',
        purple: 'hsl(var(--neon-purple))',
        green: 'hsl(var(--neon-green))',
        orange: 'hsl(var(--neon-orange))',
      },
      matrix: 'hsl(var(--matrix-bg))',
      grid: 'hsl(var(--grid-pattern))',
    },
      borderRadius: {
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'bounce-gentle': 'bounce-gentle 2s infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'neon-glow': 'neon-glow 2s ease-in-out infinite',
        'neon-flicker': 'neon-flicker 0.1s infinite',
        'cyber-scan': 'cyber-scan 4s linear infinite',
        'matrix-rain': 'matrix-rain 3s linear infinite',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 0, 128, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 0, 128, 0.6)' },
        },
        'neon-glow': {
          '0%, 100%': {
            textShadow: '0 0 5px #ff0080, 0 0 10px #ff0080, 0 0 15px #ff0080',
            boxShadow: '0 0 10px rgba(255, 0, 128, 0.3), 0 0 0 1px #ff0080',
          },
          '50%': {
            textShadow: '0 0 10px #ff0080, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080',
            boxShadow: '0 0 20px rgba(255, 0, 128, 0.6), 0 0 0 2px #ff0080',
          },
        },
        'neon-flicker': {
          '0%, 98%, 100%': { opacity: '1' },
          '1%, 3%': { opacity: '0.7' },
          '2%': { opacity: '0.9' },
        },
        'cyber-scan': {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '0.3' },
          '90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          to: { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        'bounce-gentle': {
          '0%, 100%': { 
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': { 
            transform: 'translateY(-10px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      boxShadow: {
        'glass': '0 0 0 1px #ff0080, 0 0 20px rgba(255, 0, 128, 0.3)',
        'glass-strong': '0 0 0 2px #ff0080, 0 0 30px rgba(255, 0, 128, 0.5)',
        'interactive': '0 0 10px rgba(255, 0, 128, 0.3), 0 0 0 1px #ff0080',
        'interactive-hover': '0 0 20px rgba(255, 0, 128, 0.6), 0 0 0 2px #ff0080',
        'neon': '0 0 0 1px #ff0080, 0 0 10px rgba(255, 0, 128, 0.3)',
        'neon-strong': '0 0 0 2px #ff0080, 0 0 20px rgba(255, 0, 128, 0.6)',
        'cyber': '0 0 0 1px #ff0080, 0 0 20px rgba(255, 0, 128, 0.3), inset 0 0 20px rgba(255, 0, 128, 0.1)',
        'matrix': '0 0 0 1px #ff0080, 0 0 30px rgba(255, 0, 128, 0.4), inset 0 0 30px rgba(255, 0, 128, 0.1)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
