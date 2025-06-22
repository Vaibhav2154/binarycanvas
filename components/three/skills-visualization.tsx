"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

function SkillOrb({ 
  position, 
  color, 
  skill, 
  level 
}: { 
  position: [number, number, number], 
  color: string, 
  skill: string,
  level: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<any>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.3;
      
      // Rotation based on skill level
      meshRef.current.rotation.x = time * (level * 0.1);
      meshRef.current.rotation.y = time * (level * 0.15);
      
      // Scale pulsing based on level
      const scale = 0.3 + (level / 100) * 0.4 + Math.sin(time * 2) * 0.05;
      meshRef.current.scale.setScalar(scale);
    }
    
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });
  
  return (
    <group>
      <Sphere ref={meshRef} position={position} args={[1, 32, 32]}>
        <meshStandardMaterial 
          color={color}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </Sphere>
      <Text
        ref={textRef}
        position={[position[0], position[1] + 1, position[2]]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {skill}
      </Text>
    </group>
  );
}

function SkillConnections({ skills }: { skills: any[] }) {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const connectionGeometry = useMemo(() => {
    const points = [];
    
    // Create connections between related skills
    for (let i = 0; i < skills.length; i++) {
      for (let j = i + 1; j < skills.length; j++) {
        const skill1 = skills[i];
        const skill2 = skills[j];
        
        // Connect skills that are related (you can customize this logic)
        if (Math.random() > 0.7) {
          points.push(
            new THREE.Vector3(...skill1.position),
            new THREE.Vector3(...skill2.position)
          );
        }
      }
    }
    
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [skills]);
  
  useFrame((state) => {
    if (linesRef.current) {
      const material = linesRef.current.material as THREE.LineBasicMaterial;
      if (material) {
        material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      }
    }
  });
  
  return (
    <lineSegments ref={linesRef} geometry={connectionGeometry}>
      <lineBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
    </lineSegments>
  );
}

function Scene() {
  const skills = useMemo(() => [
    { position: [-3, 1, 0] as [number, number, number], color: '#e74c3c', skill: 'React', level: 95 },
    { position: [3, 1, 0] as [number, number, number], color: '#3498db', skill: 'TypeScript', level: 90 },
    { position: [0, 2, -2] as [number, number, number], color: '#2ecc71', skill: 'Node.js', level: 85 },
    { position: [-2, -1, 1] as [number, number, number], color: '#f39c12', skill: 'Python', level: 80 },
    { position: [2, -1, 1] as [number, number, number], color: '#9b59b6', skill: 'MongoDB', level: 75 },
    { position: [0, 0, 2] as [number, number, number], color: '#1abc9c', skill: 'Three.js', level: 70 },
  ], []);
  
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.6} />
      
      <SkillConnections skills={skills} />
      
      {skills.map((skill, index) => (
        <SkillOrb key={index} {...skill} />
      ))}
    </>
  );
}

export default function SkillsThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-80">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
