"use client";

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Plane } from '@react-three/drei';
import * as THREE from 'three';

function WaveGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.PlaneGeometry>(null);
  
  const { size } = useThree();
  
  useFrame((state) => {
    if (meshRef.current && geometryRef.current) {
      const time = state.clock.elapsedTime;
      const positions = geometryRef.current.attributes.position;
      
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const wave = Math.sin(x * 0.5 + time) * Math.cos(y * 0.5 + time * 0.5) * 0.3;
        positions.setZ(i, wave);
      }
      
      positions.needsUpdate = true;
      geometryRef.current.computeVertexNormals();
      
      meshRef.current.rotation.z = time * 0.1;
    }
  });

  return (
    <Plane ref={meshRef} args={[20, 20, 50, 50]} position={[0, 0, -5]}>
      <planeGeometry ref={geometryRef} args={[20, 20, 50, 50]} />
      <meshStandardMaterial 
        color="#8b5cf6" 
        wireframe 
        transparent 
        opacity={0.3}
      />
    </Plane>
  );
}

function MorphingSphere({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.rotation.x = time * 0.4;
      meshRef.current.rotation.y = time * 0.6;
      
      // Morphing effect
      const scale = 1 + Math.sin(time * 2) * 0.2;
      meshRef.current.scale.setScalar(hovered ? scale * 1.5 : scale);
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.5;
    }
  });

  return (
    <Sphere 
      ref={meshRef} 
      position={position} 
      args={[0.5, 32, 32]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={hovered ? 0.8 : 0.6}
        emissive={color}
        emissiveIntensity={hovered ? 0.3 : 0.1}
      />
    </Sphere>
  );
}

function ParticleSystem() {
  const particlesRef = useRef<THREE.Points>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { size } = useThree();
  
  const particles = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    const colorPalette = [
      new THREE.Color('#8b5cf6'),
      new THREE.Color('#06b6d4'),
      new THREE.Color('#10b981'),
      new THREE.Color('#f59e0b'),
    ];
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      sizes[i] = Math.random() * 0.01 + 0.005;
    }
    
    return { positions, colors, sizes };
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.elapsedTime;
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];
        
        // Wave motion
        positions[i] = x + Math.sin(time + y * 0.1) * 0.001;
        positions[i + 1] = y + Math.cos(time + x * 0.1) * 0.001;
        positions[i + 2] = z + Math.sin(time + x * 0.1 + y * 0.1) * 0.001;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.rotation.y = time * 0.05;
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
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
          args={[particles.colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particles.sizes.length}
          array={particles.sizes}
          itemSize={1}
          args={[particles.sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        transparent
        opacity={0.8}
        size={0.01}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene() {
  const spheres = [
    { position: [-4, 2, 0] as [number, number, number], color: '#8b5cf6' },
    { position: [4, -1, 2] as [number, number, number], color: '#06b6d4' },
    { position: [-3, -3, -1] as [number, number, number], color: '#10b981' },
    { position: [3, 3, 1] as [number, number, number], color: '#f59e0b' },
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
      
      <WaveGeometry />
      <ParticleSystem />
      
      {spheres.map((sphere, index) => (
        <MorphingSphere key={index} {...sphere} />
      ))}
    </>
  );
}

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 -z-10">
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