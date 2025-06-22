// Performance monitoring utilities
export const performanceConfig = {
  // Three.js performance settings
  three: {
    antialias: false, // Disable for better performance
    alpha: false,
    powerPreference: "high-performance",
    stencil: false,
    depth: true,
    preserveDrawingBuffer: false,
  },
  
  // Animation performance settings
  framerMotion: {
    // Reduce motion for accessibility and performance
    shouldReduceMotion: typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    
    // Default transition settings for better performance
    defaultTransition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3,
    },
  },
  
  // Intersection Observer settings
  intersectionObserver: {
    threshold: 0.1,
    rootMargin: "50px",
  },
  
  // Mobile detection and performance
  mobile: {
    disableThreeJS: true,
    reduceAnimations: true,
    maxParticles: 0,
    simplifyEffects: true,
  },
};

// Device detection - safe for SSR
export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  
  try {
    return window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (error) {
    return false;
  }
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window !== 'undefined' && window.performance) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  } else {
    fn();
  }
};

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance
export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Frame rate optimization
export const optimizeFrameRate = () => {
  if (typeof window === 'undefined') return;
  
  let lastFrameTime = 0;
  const targetFPS = isMobileDevice() ? 30 : 60;
  const frameInterval = 1000 / targetFPS;
  
  return (callback: () => void) => {
    const now = performance.now();
    if (now - lastFrameTime >= frameInterval) {
      lastFrameTime = now;
      callback();
    }
  };
};
