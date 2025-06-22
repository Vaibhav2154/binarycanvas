"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function MorphingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1, 4);
    const originalPositions = geo.attributes.position.array.slice();
    geo.userData = { originalPositions };
    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current && geometry.userData.originalPositions) {
      const time = state.clock.elapsedTime;
      const positions = geometry.attributes.position.array as Float32Array;
      const originalPositions = geometry.userData.originalPositions as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions[i];
        const y = originalPositions[i + 1];
        const z = originalPositions[i + 2];
        
        // Create morphing effect
        const noise = Math.sin(x * 3 + time) * Math.cos(y * 3 + time) * Math.sin(z * 3 + time);
        const morph = 0.3 + noise * 0.3;
        
        positions[i] = x * morph;
        positions[i + 1] = y * morph;
        positions[i + 2] = z * morph;
      }
      
      geometry.attributes.position.needsUpdate = true;
      geometry.computeVertexNormals();
      
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial 
        color="#8b5cf6"
        wireframe
        transparent
        opacity={0.7}
        emissive="#8b5cf6"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function TunnelEffect() {
  const groupRef = useRef<THREE.Group>(null);
  
  const rings = useMemo(() => {
    const ringArray = [];
    for (let i = 0; i < 20; i++) {
      ringArray.push({
        position: [0, 0, -i * 2] as [number, number, number],
        scale: 1 + i * 0.1,
        color: `hsl(${260 + i * 10}, 70%, 60%)`
      });
    }
    return ringArray;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      groupRef.current.rotation.z = time * 0.2;
      
      groupRef.current.children.forEach((child, index) => {
        child.rotation.x = time * (0.5 + index * 0.1);
        child.rotation.y = time * (0.3 + index * 0.05);
        
        // Move rings through tunnel
        child.position.z = (-index * 2 + (time * 3) % 40) - 20;
        if (child.position.z > 10) {
          child.position.z -= 40;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {rings.map((ring, index) => (
        <mesh key={index} position={ring.position}>
          <torusGeometry args={[ring.scale, 0.1, 8, 32]} />
          <meshStandardMaterial 
            color={ring.color}
            transparent
            opacity={0.6}
            emissive={ring.color}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

function SphericalParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Create spherical distribution
      const radius = 5 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      const color = new THREE.Color().setHSL((i / count) * 0.3 + 0.7, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.elapsedTime;
      particlesRef.current.rotation.x = time * 0.1;
      particlesRef.current.rotation.y = time * 0.15;
      
      // Pulsing effect
      const scale = 1 + Math.sin(time * 2) * 0.2;
      particlesRef.current.scale.setScalar(scale);
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
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        transparent
        opacity={0.8}
        size={0.02}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[0, 0, 10]} color="#8b5cf6" intensity={1} />
      
      <MorphingGeometry />
      <TunnelEffect />
      <SphericalParticles />
    </>
  );
}

export default function GeometricMorph() {
  return (
    <div className="fixed inset-0 -z-20 opacity-60">
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
