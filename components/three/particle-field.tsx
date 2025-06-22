"use client";

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { viewport } = useThree();
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    const velocities = new Float32Array(5000 * 3);
    
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return { positions, velocities };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime;
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];
        
        // Create spiral motion
        const radius = Math.sqrt(x * x + z * z);
        const angle = Math.atan2(z, x) + time * 0.1;
        
        positions[i] = Math.cos(angle) * radius + Math.sin(time + i * 0.01) * 0.5;
        positions[i + 1] = y + Math.sin(time * 0.5 + i * 0.01) * 0.3;
        positions[i + 2] = Math.sin(angle) * radius + Math.cos(time + i * 0.01) * 0.5;
        
        // Mouse interaction
        const mouseInfluence = 1 / (1 + Math.sqrt((x - mouse.x * 10) ** 2 + (y - mouse.y * 10) ** 2));
        positions[i] += mouseInfluence * Math.sin(time * 5) * 0.1;
        positions[i + 1] += mouseInfluence * Math.cos(time * 5) * 0.1;
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true;
      ref.current.rotation.y = time * 0.05;
    }
  });

  const handlePointerMove = (event: any) => {
    setMouse({
      x: (event.point.x / viewport.width) * 2,
      y: (event.point.y / viewport.height) * 2
    });
  };

  return (
    <Points 
      ref={ref} 
      positions={particlesPosition.positions} 
      stride={3} 
      frustumCulled={false}
      onPointerMove={handlePointerMove}
    >
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.008}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function ColorfulParticles() {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const colorPalette = [
      new THREE.Color('#8b5cf6'),
      new THREE.Color('#06b6d4'),
      new THREE.Color('#10b981'),
      new THREE.Color('#f59e0b'),
      new THREE.Color('#ef4444'),
    ];
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, []);
  
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime;
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];
        
        // Wave-like movement
        positions[i] = x + Math.sin(time + y * 0.1) * 0.02;
        positions[i + 1] = y + Math.cos(time + x * 0.1) * 0.02;
        positions[i + 2] = z + Math.sin(time + x * 0.1 + y * 0.1) * 0.02;
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true;
      ref.current.rotation.x = Math.sin(time * 0.3) * 0.2;
      ref.current.rotation.z = Math.cos(time * 0.2) * 0.1;
    }
  });
  
  return (
    <points ref={ref}>
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
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        transparent
        opacity={0.6}
        size={0.01}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleFieldCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <ParticleField />
        <ColorfulParticles />
      </Canvas>
    </div>
  );
}