"use client";

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaDocker,
  FaAws,
  FaJava
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiTensorflow,
  SiExpress,
  SiMysql
} from 'react-icons/si';

interface TechIcon {
  position: [number, number, number];
  color: string;
  skill: string;
  icon: React.ComponentType<{ size?: number; color?: string; }>;
  scale?: number;
  rotationSpeed?: number;
}

// Performance settings based on device capabilities
const getPerformanceSettings = () => {
  if (typeof window === 'undefined') return { iconCount: 8, quality: 'low' };
  
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  
  if (!gl) return { iconCount: 6, quality: 'low' };
  
  // Basic performance detection
  if (navigator.hardwareConcurrency >= 8) {
    return { iconCount: 15, quality: 'high' };
  } else if (navigator.hardwareConcurrency >= 4) {
    return { iconCount: 12, quality: 'medium' };
  } else {
    return { iconCount: 8, quality: 'low' };
  }
};

function FloatingIcon({ 
  position, 
  color, 
  skill, 
  icon: IconComponent,
  scale = 1,
  rotationSpeed = 1
}: TechIcon) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      
      // Uniform floating animation - all icons move together
      groupRef.current.position.y = position[1] + Math.sin(time * 0.8) * 0.4;
      groupRef.current.position.x = position[0] + Math.cos(time * 0.5) * 0.2;
      
      // Synchronized rotation - all icons rotate uniformly
      groupRef.current.rotation.y = time * 0.25;
      groupRef.current.rotation.z = Math.sin(time * 0.6) * 0.08;
      
      // Uniform scale pulsing - all icons pulse together
      const scaleMultiplier = 0.95 + Math.sin(time * 1.0) * 0.05;
      groupRef.current.scale.setScalar(scale * scaleMultiplier);
    }
  });
  
  return (
    <group ref={groupRef} position={position}>
      <Html
        center
        transform
        occlude
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: 0.3, // Same delay for all icons
            duration: 0.6,
            type: "spring",
            stiffness: 100 
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(8px)',
            borderRadius: '50%',
            padding: '16px',
            border: `1px solid ${color}40`,
            boxShadow: `0 0 20px ${color}30`,
          }}
        >
          <IconComponent size={36} color={color} />
        </motion.div>
      </Html>
    </group>
  );
}

function OptimizedIconScene() {
  const [settings] = useState(getPerformanceSettings);
  
  const techIcons = useMemo<TechIcon[]>(() => {
    const allIcons: TechIcon[] = [
      { position: [8, 4, -2], color: '#61DAFB', skill: 'React', icon: FaReact, scale: 1.2, rotationSpeed: 1.5 },
      { position: [12, 2, -1], color: '#3178C6', skill: 'TypeScript', icon: SiTypescript, scale: 1.1 },
      { position: [10, 6, 1], color: '#000000', skill: 'Next.js', icon: SiNextdotjs, scale: 1.0 },
      { position: [14, 0, -2], color: '#F7DF1E', skill: 'JavaScript', icon: FaJs, scale: 1.3 },
      { position: [9, 3, 2], color: '#38B2AC', skill: 'Tailwind', icon: SiTailwindcss, scale: 0.9 },
      { position: [13, 5, -3], color: '#E34F26', skill: 'HTML5', icon: FaHtml5, scale: 1.0 },
      { position: [11, 1, 3], color: '#1572B6', skill: 'CSS3', icon: FaCss3Alt, scale: 1.0 },
      { position: [15, -1, 2], color: '#02569B', skill: 'Flutter', icon: SiFlutter, scale: 1.1 },
      { position: [9, -2, -1], color: '#339933', skill: 'Node.js', icon: FaNodeJs, scale: 1.1 },
      { position: [12, -3, 1], color: '#3776AB', skill: 'Python', icon: FaPython, scale: 1.2 },
      { position: [8, 0, 4], color: '#47A248', skill: 'MongoDB', icon: SiMongodb, scale: 1.0 },
      { position: [14, -4, 0], color: '#336791', skill: 'PostgreSQL', icon: SiPostgresql, scale: 1.0 },
      { position: [10, -1, -4], color: '#FF9900', skill: 'AWS', icon: FaAws, scale: 1.1 },
      { position: [9, 2, -3], color: '#2496ED', skill: 'Docker', icon: FaDocker, scale: 1.0 },
      { position: [13, -2, 4], color: '#F05032', skill: 'Git', icon: FaGitAlt, scale: 1.0 },
    ];
    
    // Return only the number of icons based on performance settings
    return allIcons.slice(0, settings.iconCount);
  }, [settings.iconCount]);

  return (
    <>
      {techIcons.map((icon, index) => (
        <FloatingIcon key={index} {...icon} />
      ))}
    </>
  );
}

export default function OptimizedBackground() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]} // Limit DPR for performance
        performance={{ min: 0.8 }} // Automatically reduce quality if FPS drops
        frameloop="demand" // Only render when needed
        gl={{ antialias: false, alpha: true }} // Disable antialias for performance
      >
        <ambientLight intensity={0.4} />
        <OptimizedIconScene />
      </Canvas>
    </div>
  );
}
