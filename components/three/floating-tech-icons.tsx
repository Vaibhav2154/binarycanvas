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
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      
      // Wave motion based on position - creates a ripple effect
      const wavePhase = (position[0] + position[1]) * 0.1;
      const waveAmplitude = isMobile ? 0.3 : 0.5; // Reduced amplitude on mobile
      
      // Uniform floating with wave propagation
      groupRef.current.position.y = position[1] + Math.sin(time * 0.8 + wavePhase) * waveAmplitude;
      groupRef.current.position.x = position[0] + Math.cos(time * 0.5 + wavePhase * 0.5) * (isMobile ? 0.1 : 0.2);
      groupRef.current.position.z = position[2] + Math.sin(time * 0.6 + wavePhase * 0.3) * (isMobile ? 0.15 : 0.3);
      
      // Synchronized rotation with slight wave offset
      groupRef.current.rotation.y = time * 0.3 + wavePhase * 0.2;
      groupRef.current.rotation.z = Math.sin(time * 0.6 + wavePhase) * (isMobile ? 0.05 : 0.1);
      
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
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: 0.5, // Same delay for all icons
            duration: 0.8,
            type: "spring",
            stiffness: 120 
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50%',
            padding: isMobile ? '12px' : '20px',
            border: `${isMobile ? '1px' : '2px'} solid ${color}`,
            boxShadow: `0 0 ${isMobile ? '15px' : '30px'} ${color}40, 0 0 ${isMobile ? '30px' : '60px'} ${color}20`,
            animation: `uniformFloat 4s ease-in-out infinite`,
          }}
          whileHover={{
            scale: isMobile ? 1.1 : 1.2,
            boxShadow: `0 0 ${isMobile ? '20px' : '40px'} ${color}60, 0 0 ${isMobile ? '40px' : '80px'} ${color}30`,
          }}
        >
          <IconComponent size={isMobile ? 32 : 48} color={color} />
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
            marginTop: isMobile ? '4px' : '8px',
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: isMobile ? '2px 6px' : '4px 8px',
            borderRadius: '4px',
            fontSize: isMobile ? '10px' : '12px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            border: `1px solid ${color}`,
            pointerEvents: 'none',
            display: isMobile ? 'none' : 'block', // Hide tooltips on mobile
          }}
        >
          {skill}
        </motion.div>
      </Html>
    </group>
  );
}

function Scene() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const techIcons = useMemo<TechIcon[]>(() => {
    if (isMobile) {
      // Mobile layout - fewer icons, closer together, centered
      return [
        // Center column for mobile
        { position: [0, 4, -1], color: '#61DAFB', skill: 'React', icon: FaReact, scale: 1.0, rotationSpeed: 1.0 },
        { position: [0, 2, 1], color: '#3178C6', skill: 'TypeScript', icon: SiTypescript, scale: 0.9, rotationSpeed: 1.0 },
        { position: [0, 0, -1], color: '#F7DF1E', skill: 'JavaScript', icon: FaJs, scale: 1.0, rotationSpeed: 1.0 },
        { position: [0, -2, 1], color: '#339933', skill: 'Node.js', icon: FaNodeJs, scale: 0.9, rotationSpeed: 1.0 },
        { position: [0, -4, -1], color: '#3776AB', skill: 'Python', icon: FaPython, scale: 1.0, rotationSpeed: 1.0 },
        
        // Side icons for mobile
        { position: [-3, 3, 0], color: '#000000', skill: 'Next.js', icon: SiNextdotjs, scale: 0.8, rotationSpeed: 1.0 },
        { position: [3, 3, 0], color: '#38B2AC', skill: 'Tailwind', icon: SiTailwindcss, scale: 0.8, rotationSpeed: 1.0 },
        { position: [-3, 1, 0], color: '#02569B', skill: 'Flutter', icon: SiFlutter, scale: 0.8, rotationSpeed: 1.0 },
        { position: [3, 1, 0], color: '#47A248', skill: 'MongoDB', icon: SiMongodb, scale: 0.8, rotationSpeed: 1.0 },
        { position: [-3, -1, 0], color: '#F05032', skill: 'Git', icon: FaGitAlt, scale: 0.8, rotationSpeed: 1.0 },
        { position: [3, -1, 0], color: '#2496ED', skill: 'Docker', icon: FaDocker, scale: 0.8, rotationSpeed: 1.0 },
        { position: [-3, -3, 0], color: '#FF9900', skill: 'AWS', icon: FaAws, scale: 0.8, rotationSpeed: 1.0 },
        { position: [3, -3, 0], color: '#336791', skill: 'PostgreSQL', icon: SiPostgresql, scale: 0.8, rotationSpeed: 1.0 },
      ];
    } else {
      // Desktop layout - full grid
      return [
        // Arranged in a more uniform grid pattern for better wave effect
        // Top row
        { position: [8, 6, -3], color: '#61DAFB', skill: 'React', icon: FaReact, scale: 1.2, rotationSpeed: 1.0 },
        { position: [12, 6, -2], color: '#3178C6', skill: 'TypeScript', icon: SiTypescript, scale: 1.1, rotationSpeed: 1.0 },
        { position: [16, 6, 2], color: '#000000', skill: 'Next.js', icon: SiNextdotjs, scale: 1.0, rotationSpeed: 1.0 },
        
        // Second row
        { position: [8, 3, -1], color: '#F7DF1E', skill: 'JavaScript', icon: FaJs, scale: 1.3, rotationSpeed: 1.0 },
        { position: [12, 3, 1], color: '#38B2AC', skill: 'Tailwind', icon: SiTailwindcss, scale: 0.9, rotationSpeed: 1.0 },
        { position: [16, 3, -3], color: '#E34F26', skill: 'HTML5', icon: FaHtml5, scale: 1.0, rotationSpeed: 1.0 },
        
        // Third row
        { position: [8, 0, 2], color: '#1572B6', skill: 'CSS3', icon: FaCss3Alt, scale: 1.0, rotationSpeed: 1.0 },
        { position: [12, 0, 3], color: '#7952B3', skill: 'Bootstrap', icon: FaBootstrap, scale: 0.8, rotationSpeed: 1.0 },
        { position: [16, 0, -1], color: '#02569B', skill: 'Flutter', icon: SiFlutter, scale: 1.2, rotationSpeed: 1.0 },
        
        // Fourth row
        { position: [8, -3, -4], color: '#0175C2', skill: 'Dart', icon: SiDart, scale: 1.0, rotationSpeed: 1.0 },
        { position: [12, -3, -4], color: '#339933', skill: 'Node.js', icon: FaNodeJs, scale: 1.1, rotationSpeed: 1.0 },
        { position: [16, -3, 3], color: '#3776AB', skill: 'Python', icon: FaPython, scale: 1.2, rotationSpeed: 1.0 },
        
        // Bottom row
        { position: [8, -6, 4], color: '#000000', skill: 'Express', icon: SiExpress, scale: 0.9, rotationSpeed: 1.0 },
        { position: [12, -6, -1], color: '#E10098', skill: 'GraphQL', icon: SiGraphql, scale: 1.0, rotationSpeed: 1.0 },
        { position: [16, -6, -5], color: '#E535AB', skill: 'NestJS', icon: SiNestjs, scale: 0.9, rotationSpeed: 1.0 },
        
        // Database row
        { position: [10, -9, 1], color: '#47A248', skill: 'MongoDB', icon: SiMongodb, scale: 1.0, rotationSpeed: 1.0 },
        { position: [14, -9, 0], color: '#336791', skill: 'PostgreSQL', icon: SiPostgresql, scale: 1.0, rotationSpeed: 1.0 },
        
        // Tools
        { position: [6, 2, -1], color: '#F05032', skill: 'Git', icon: FaGitAlt, scale: 1.0, rotationSpeed: 1.0 },
        { position: [18, 2, -2], color: '#2496ED', skill: 'Docker', icon: FaDocker, scale: 1.0, rotationSpeed: 1.0 },
        { position: [6, -2, 3], color: '#FF9900', skill: 'AWS', icon: FaAws, scale: 1.1, rotationSpeed: 1.0 },
      ];
    }
  }, [isMobile]);

  return (
    <>
      {techIcons.map((icon, index) => (
        <FloatingIcon key={index} {...icon} />
      ))}
    </>
  );
}

export default function FloatingTechIcons() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          position: isMobile ? [0, 0, 12] : [0, 0, 20], 
          fov: isMobile ? 60 : 90 
        }}
        style={{ background: 'transparent' }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={isMobile ? 0.4 : 0.3} />
        <pointLight position={[10, 10, 10]} intensity={isMobile ? 0.6 : 0.5} />
        <Scene />
      </Canvas>
    </div>
  );
}
