"use client";

import React, { useRef, useMemo } from 'react';
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
      
      // Floating animation with different phases for each icon
      groupRef.current.position.y = position[1] + Math.sin(time * 0.5 + position[0] * 2) * 0.8;
      groupRef.current.position.x = position[0] + Math.cos(time * 0.3 + position[2]) * 0.5;
      
      // Gentle rotation
      groupRef.current.rotation.y = time * rotationSpeed * 0.2;
      groupRef.current.rotation.z = Math.sin(time * 0.4 + position[1]) * 0.1;
      
      // Scale pulsing
      const scaleMultiplier = 0.8 + Math.sin(time * 1.5 + position[0]) * 0.2;
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
            delay: Math.random() * 2,
            duration: 0.5,
            type: "spring",
            stiffness: 100 
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50%',
            padding: '20px',
            border: `2px solid ${color}`,
            boxShadow: `0 0 30px ${color}40, 0 0 60px ${color}20`,
            animation: `float 3s ease-in-out infinite`,
          }}
          whileHover={{
            scale: 1.2,
            boxShadow: `0 0 40px ${color}60, 0 0 80px ${color}30`,
          }}
        >
          <IconComponent size={48} color={color} />
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
  const techIcons = useMemo<TechIcon[]>(() => [
    // Right Side Top - Frontend Technologies
    { position: [8, 6, -3], color: '#61DAFB', skill: 'React', icon: FaReact, scale: 1.2, rotationSpeed: 1.5 },
    { position: [12, 4, -2], color: '#3178C6', skill: 'TypeScript', icon: SiTypescript, scale: 1.1 },
    { position: [10, 8, 2], color: '#000000', skill: 'Next.js', icon: SiNextdotjs, scale: 1.0 },
    { position: [14, 2, -1], color: '#F7DF1E', skill: 'JavaScript', icon: FaJs, scale: 1.3, rotationSpeed: 2 },
    { position: [9, 5, 1], color: '#38B2AC', skill: 'Tailwind', icon: SiTailwindcss, scale: 0.9 },
    { position: [13, 7, -3], color: '#E34F26', skill: 'HTML5', icon: FaHtml5, scale: 1.0 },
    { position: [11, 3, 2], color: '#1572B6', skill: 'CSS3', icon: FaCss3Alt, scale: 1.0 },
    { position: [8, 1, 3], color: '#7952B3', skill: 'Bootstrap', icon: FaBootstrap, scale: 0.8 },
    
    // Right Side Middle - Mobile & Backend
    { position: [15, 0, 3], color: '#02569B', skill: 'Flutter', icon: SiFlutter, scale: 1.2, rotationSpeed: 1.2 },
    { position: [9, -2, -4], color: '#0175C2', skill: 'Dart', icon: SiDart, scale: 1.0 },
    { position: [12, -1, -4], color: '#339933', skill: 'Node.js', icon: FaNodeJs, scale: 1.1 },
    { position: [10, 1, 3], color: '#3776AB', skill: 'Python', icon: FaPython, scale: 1.2, rotationSpeed: 0.8 },
    { position: [14, -3, 4], color: '#000000', skill: 'Express', icon: SiExpress, scale: 0.9 },
    { position: [8, -1, -1], color: '#E10098', skill: 'GraphQL', icon: SiGraphql, scale: 1.0 },
    { position: [11, -4, -5], color: '#E535AB', skill: 'NestJS', icon: SiNestjs, scale: 0.9 },
    { position: [13, 0, 4], color: '#009688', skill: 'FastAPI', icon: SiFastapi, scale: 0.8 },
    
    // Right Side Bottom - Databases
    { position: [9, -6, 1], color: '#47A248', skill: 'MongoDB', icon: SiMongodb, scale: 1.0 },
    { position: [12, -8, 0], color: '#336791', skill: 'PostgreSQL', icon: SiPostgresql, scale: 1.0 },
    { position: [15, -2, -2], color: '#DC382D', skill: 'Redis', icon: SiRedis, scale: 0.9 },
    { position: [10, -5, -5], color: '#4479A1', skill: 'MySQL', icon: SiMysql, scale: 0.9 },
    { position: [8, -3, 5], color: '#003B57', skill: 'SQLite', icon: SiSqlite, scale: 0.8 },
    
    // Right Side - AI/ML
    { position: [14, -6, -5], color: '#FF6F00', skill: 'TensorFlow', icon: SiTensorflow, scale: 1.1, rotationSpeed: 1.3 },
    { position: [11, -7, 2], color: '#EE4C2C', skill: 'PyTorch', icon: SiPytorch, scale: 1.0 },
    
    // Right Side - Cloud & DevOps
    { position: [13, -4, 4], color: '#FF9900', skill: 'AWS', icon: FaAws, scale: 1.1 },
    { position: [9, 2, -1], color: '#2496ED', skill: 'Docker', icon: FaDocker, scale: 1.0 },
    { position: [15, 6, -1], color: '#000000', skill: 'Vercel', icon: SiVercel, scale: 0.9 },
    { position: [8, 4, -2], color: '#326CE5', skill: 'Kubernetes', icon: SiKubernetes, scale: 0.9 },
    
    // Right Side - Tools
    { position: [12, 6, 2], color: '#F05032', skill: 'Git', icon: FaGitAlt, scale: 1.0 },
    { position: [14, -1, -4], color: '#F24E1E', skill: 'Figma', icon: FaFigma, scale: 0.9 },
    { position: [10, -2, 5], color: '#646CFF', skill: 'Vite', icon: SiVite, scale: 0.9 },
    { position: [15, 3, -6], color: '#FF6C37', skill: 'Postman', icon: SiPostman, scale: 0.8 },
    { position: [9, 0, 4], color: '#000000', skill: 'IntelliJ', icon: SiIntellijidea, scale: 0.8 },
  ], []);

  return (
    <>
      {techIcons.map((icon, index) => (
        <FloatingIcon key={index} {...icon} />
      ))}
    </>
  );
}

export default function FloatingTechIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      `}</style>
      <Canvas
        camera={{ position: [0, 0, 20], fov: 90 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Scene />
      </Canvas>
    </div>
  );
}
