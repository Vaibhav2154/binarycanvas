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
  FaFigma,
  FaJava,
  FaPhp,
  FaVuejs,
  FaAngular,
  FaBootstrap
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiThreedotjs, 
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiRedis,
  SiGraphql,
  SiFirebase,
  SiVercel,
  SiVite,
  SiExpress,
  SiFlutter,
  SiDart,
  SiTensorflow,
  SiPytorch,
  SiKubernetes,
  SiMysql,
  SiSqlite,
  SiSupabase,
  SiStrapi,
  SiSocketdotio,
  SiNestjs,
  SiFastapi,
  SiPostman,
  SiIntellijidea,
  SiLinux,
  SiUbuntu
} from 'react-icons/si';

interface TechIcon {
  position: [number, number, number];
  color: string;
  skill: string;
  icon: React.ComponentType<{ size?: number; color?: string; }>;
  scale?: number;
  rotationSpeed?: number;
}

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
      
      // Wave motion based on position - creates a ripple effect
      const wavePhase = (position[0] + position[1]) * 0.1;
      const waveAmplitude = 0.5;
      
      // Uniform floating with wave propagation
      groupRef.current.position.y = position[1] + Math.sin(time * 0.8 + wavePhase) * waveAmplitude;
      groupRef.current.position.x = position[0] + Math.cos(time * 0.5 + wavePhase * 0.5) * 0.2;
      groupRef.current.position.z = position[2] + Math.sin(time * 0.6 + wavePhase * 0.3) * 0.3;
      
      // Synchronized rotation with slight wave offset
      groupRef.current.rotation.y = time * 0.3 + wavePhase * 0.2;
      groupRef.current.rotation.z = Math.sin(time * 0.6 + wavePhase) * 0.1;
      
      // Uniform scale pulsing with wave effect
      const scaleMultiplier = 0.9 + Math.sin(time * 1.2 + wavePhase) * 0.1;
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
      >        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: 0.5,
            duration: 0.8,
            type: "spring",
            stiffness: 120 
          }}
          className="tech-icon-container"          style={{
            width: '72px',
            height: '72px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50%',
            padding: '16px',
            border: `2px solid ${color}`,
            boxShadow: `0 0 25px ${color}40, 0 0 50px ${color}20`,
            animation: `uniformFloat 4s ease-in-out infinite`,
            overflow: 'hidden',
          }}          whileHover={{
            scale: 1.15,
            boxShadow: `0 0 35px ${color}60, 0 0 70px ${color}30`,
          }}
        >
          <IconComponent size={40} color={color} />
        </motion.div>
        
        {/* Skill name tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '8px',
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            border: `1px solid ${color}`,
            pointerEvents: 'none',
          }}
        >
          {skill}
        </motion.div>
      </Html>
    </group>
  );
}

function Scene() {
  const techIcons = useMemo<TechIcon[]>(() => {
    // Desktop layout - positioned for the right column of the hero section
    return [
      // Arranged in a grid pattern, centered in the right column
      // Top row - closer to the center
      { position: [2, 6, -3], color: '#61DAFB', skill: 'React', icon: FaReact, scale: 1.2, rotationSpeed: 1.0 },
      { position: [6, 6, -2], color: '#3178C6', skill: 'TypeScript', icon: SiTypescript, scale: 1.1, rotationSpeed: 1.0 },
      { position: [10, 6, 2], color: '#000000', skill: 'Next.js', icon: SiNextdotjs, scale: 1.0, rotationSpeed: 1.0 },
      
      // Second row
      { position: [2, 3, -1], color: '#F7DF1E', skill: 'JavaScript', icon: FaJs, scale: 1.3, rotationSpeed: 1.0 },
      { position: [6, 3, 1], color: '#38B2AC', skill: 'Tailwind', icon: SiTailwindcss, scale: 0.9, rotationSpeed: 1.0 },
      { position: [10, 3, -3], color: '#E34F26', skill: 'HTML5', icon: FaHtml5, scale: 1.0, rotationSpeed: 1.0 },
      
      // Third row
      { position: [2, 0, 2], color: '#1572B6', skill: 'CSS3', icon: FaCss3Alt, scale: 1.0, rotationSpeed: 1.0 },
      { position: [6, 0, 3], color: '#7952B3', skill: 'Bootstrap', icon: FaBootstrap, scale: 0.8, rotationSpeed: 1.0 },
      { position: [10, 0, -1], color: '#02569B', skill: 'Flutter', icon: SiFlutter, scale: 1.2, rotationSpeed: 1.0 },
      
      // Fourth row
      { position: [2, -3, -4], color: '#0175C2', skill: 'Dart', icon: SiDart, scale: 1.0, rotationSpeed: 1.0 },
      { position: [6, -3, -4], color: '#339933', skill: 'Node.js', icon: FaNodeJs, scale: 1.1, rotationSpeed: 1.0 },
      { position: [10, -3, 3], color: '#3776AB', skill: 'Python', icon: FaPython, scale: 1.2, rotationSpeed: 1.0 },
      
      // Bottom row
      { position: [2, -6, 4], color: '#000000', skill: 'Express', icon: SiExpress, scale: 0.9, rotationSpeed: 1.0 },
      { position: [6, -6, -1], color: '#E10098', skill: 'GraphQL', icon: SiGraphql, scale: 1.0, rotationSpeed: 1.0 },
      { position: [10, -6, -5], color: '#E535AB', skill: 'NestJS', icon: SiNestjs, scale: 0.9, rotationSpeed: 1.0 },
      
      // Database row - more centered
      { position: [4, -9, 1], color: '#47A248', skill: 'MongoDB', icon: SiMongodb, scale: 1.0, rotationSpeed: 1.0 },
      { position: [8, -9, 0], color: '#336791', skill: 'PostgreSQL', icon: SiPostgresql, scale: 1.0, rotationSpeed: 1.0 },
      
      // Tools - edge positions
      { position: [0, 2, -1], color: '#F05032', skill: 'Git', icon: FaGitAlt, scale: 1.0, rotationSpeed: 1.0 },
      { position: [12, 2, -2], color: '#2496ED', skill: 'Docker', icon: FaDocker, scale: 1.0, rotationSpeed: 1.0 },
      { position: [0, -2, 3], color: '#FF9900', skill: 'AWS', icon: FaAws, scale: 1.1, rotationSpeed: 1.0 },
    ];
  }, []);

  return (
    <>
      {techIcons.map((icon, index) => (
        <FloatingIcon key={index} {...icon} />
      ))}
    </>
  );
}

export default function FloatingTechIcons() {
  const [isLaptop, setIsLaptop] = useState(false);
  
  useEffect(() => {
    const checkIsLaptop = () => {
      // Only show on laptop screens (desktop with width >= 1024px)
      setIsLaptop(window.innerWidth >= 1024);
    };
    
    checkIsLaptop();
    window.addEventListener('resize', checkIsLaptop);
    return () => window.removeEventListener('resize', checkIsLaptop);
  }, []);

  // Don't render anything if not on laptop
  if (!isLaptop) {
    return null;
  }
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      <style jsx>{`
        @keyframes uniformFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(90deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
          75% { transform: translateY(-8px) rotate(270deg); }
        }
      `}</style>
      <Canvas
        camera={{ 
          position: [6, 0, 15], 
          fov: 75 
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      ><ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Scene />
      </Canvas>
    </div>
  );
}
