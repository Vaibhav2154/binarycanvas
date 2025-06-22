"use client";

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Sphere, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

function HeroParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  const particles = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Create a more focused distribution around the center
      const radius = Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      const colorMix = Math.random();
      if (colorMix < 0.33) {
        colors[i * 3] = 0.545; // Purple
        colors[i * 3 + 1] = 0.361;
        colors[i * 3 + 2] = 0.965;
      } else if (colorMix < 0.66) {
        colors[i * 3] = 0.024; // Cyan
        colors[i * 3 + 1] = 0.714;
        colors[i * 3 + 2] = 0.831;
      } else {
        colors[i * 3] = 0.063; // Green
        colors[i * 3 + 1] = 0.725;
        colors[i * 3 + 2] = 0.506;
      }
      
      sizes[i] = Math.random() * 0.02 + 0.01;
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
        
        // Create flowing motion
        positions[i] = x + Math.sin(time * 0.5 + y * 0.1) * 0.01;
        positions[i + 1] = y + Math.cos(time * 0.3 + x * 0.1) * 0.01;
        positions[i + 2] = z + Math.sin(time * 0.4 + x * 0.1 + y * 0.1) * 0.01;
        
        // Mouse attraction
        const mouseInfluence = 0.1;
        const dx = mouse.x * 5 - x;
        const dy = mouse.y * 5 - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 2) {
          positions[i] += dx * mouseInfluence * 0.01;
          positions[i + 1] += dy * mouseInfluence * 0.01;
        }
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.rotation.y = time * 0.1;
    }
  });
  
  const handlePointerMove = (event: any) => {
    setMouse({
      x: event.point.x,
      y: event.point.y
    });
  };
  
  return (
    <points ref={particlesRef} onPointerMove={handlePointerMove}>
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
        size={0.015}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}


function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[0, 0, 10]} color="#8b5cf6" intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#06b6d4" intensity={0.6} />
      
      {/* <EnergyField /> */}
      <HeroParticles />
      {/* <FloatingElements /> */}
    </>
  );
}

export default function HeroThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
