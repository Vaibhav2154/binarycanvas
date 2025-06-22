"use client";

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Text, Plane } from '@react-three/drei';
import * as THREE from 'three';

function ProjectCard({ 
  position, 
  project,
  index 
}: { 
  position: [number, number, number], 
  project: { name: string, tech: string, color: string },
  index: number 
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      
      // Floating animation
      groupRef.current.position.y = position[1] + Math.sin(time + index) * 0.2;
      
      // Rotation
      groupRef.current.rotation.y = hovered ? 
        Math.sin(time * 3) * 0.1 : 
        Math.sin(time * 0.5 + index) * 0.05;
      
      // Scale effect on hover
      const targetScale = hovered ? 1.1 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });
  
  return (
    <group 
      ref={groupRef} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Main card */}
      <Box args={[2, 1.2, 0.1]}>
        <meshStandardMaterial 
          color={project.color}
          transparent
          opacity={hovered ? 0.9 : 0.7}
          emissive={project.color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </Box>
      
      {/* Project name */}
      <Text
        position={[0, 0.2, 0.06]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {project.name}
      </Text>
      
      {/* Technology */}
      <Text
        position={[0, -0.2, 0.06]}
        fontSize={0.1}
        color="#cccccc"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {project.tech}
      </Text>
      
      {/* Glow effect */}
      {hovered && (
        <Box args={[2.2, 1.4, 0.05]} position={[0, 0, -0.05]}>
          <meshBasicMaterial 
            color={project.color}
            transparent
            opacity={0.3}
          />
        </Box>
      )}
    </group>
  );
}

function DataStream() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = React.useMemo(() => {
    const count = 100;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return { positions, velocities };
  }, []);
  
  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += particles.velocities[i];
        positions[i + 1] += particles.velocities[i + 1];
        positions[i + 2] += particles.velocities[i + 2];
        
        // Reset particles that go too far
        if (Math.abs(positions[i]) > 10) {
          positions[i] = (Math.random() - 0.5) * 20;
        }
        if (Math.abs(positions[i + 1]) > 5) {
          positions[i + 1] = (Math.random() - 0.5) * 10;
        }
        if (Math.abs(positions[i + 2]) > 5) {
          positions[i + 2] = (Math.random() - 0.5) * 10;
        }
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
          args={[particles.positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#06b6d4"
        transparent
        opacity={0.6}
        size={0.05}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene() {
  const projects = [
    { name: "E-Commerce Platform", tech: "React, Node.js, MongoDB", color: "#e74c3c" },
    { name: "Task Management App", tech: "Vue.js, Express, PostgreSQL", color: "#3498db" },
    { name: "Data Visualization Tool", tech: "D3.js, Python, Flask", color: "#2ecc71" },
    { name: "Mobile Chat App", tech: "React Native, Firebase", color: "#f39c12" },
    { name: "AI Image Processor", tech: "TensorFlow, Python, Docker", color: "#9b59b6" },
    { name: "Blockchain Wallet", tech: "Web3.js, Solidity, React", color: "#1abc9c" },
  ];
  
  const positions: [number, number, number][] = [
    [-4, 2, 0], [0, 2, 0], [4, 2, 0],
    [-4, -2, 0], [0, -2, 0], [4, -2, 0]
  ];
  
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[0, 0, 5]} color="#8b5cf6" intensity={1} />
      
      <DataStream />
      
      {projects.map((project, index) => (
        <ProjectCard 
          key={index} 
          position={positions[index]} 
          project={project} 
          index={index}
        />
      ))}
    </>
  );
}

export default function ProjectsThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
