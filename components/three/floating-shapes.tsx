"use client";

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Octahedron, Dodecahedron } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ 
  position, 
  color, 
  type,
  index 
}: { 
  position: [number, number, number], 
  color: string, 
  type: 'sphere' | 'box' | 'torus' | 'octahedron' | 'dodecahedron',
  index: number
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      // Different rotation speeds for each shape
      meshRef.current.rotation.x = time * (0.3 + index * 0.1);
      meshRef.current.rotation.y = time * (0.4 + index * 0.15);
      meshRef.current.rotation.z = time * (0.2 + index * 0.05);
      
      // Morphing scale effect
      const scaleBase = 1 + Math.sin(time * 2 + index) * 0.3;
      const hoverScale = hovered ? 1.5 : 1;
      const clickScale = clicked ? 0.8 : 1;
      meshRef.current.scale.setScalar(scaleBase * hoverScale * clickScale);
      
      // Complex floating animation
      meshRef.current.position.x = position[0] + Math.sin(time + index) * 0.8;
      meshRef.current.position.y = position[1] + Math.cos(time * 0.7 + index) * 0.6;
      meshRef.current.position.z = position[2] + Math.sin(time * 0.5 + index) * 0.4;
    }
  });

  const getShape = () => {
    const commonProps = {
      ref: meshRef,
      onPointerOver: () => setHovered(true),
      onPointerOut: () => setHovered(false),
      onClick: () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 200);
      }
    };

    switch (type) {
      case 'sphere':
        return <Sphere {...commonProps} args={[0.5, 32, 32]} />;
      case 'box':
        return <Box {...commonProps} args={[0.8, 0.8, 0.8]} />;
      case 'torus':
        return <Torus {...commonProps} args={[0.4, 0.15, 16, 32]} />;
      case 'octahedron':
        return <Octahedron {...commonProps} args={[0.6]} />;
      case 'dodecahedron':
        return <Dodecahedron {...commonProps} args={[0.5]} />;
      default:
        return <Sphere {...commonProps} args={[0.5, 32, 32]} />;
    }
  };

  return (
    <>
      {getShape()}
      <meshStandardMaterial 
        attach="material"
        color={color} 
        transparent 
        opacity={hovered ? 0.9 : 0.7}
        emissive={color}
        emissiveIntensity={hovered ? 0.4 : 0.2}
        roughness={0.3}
        metalness={0.8}
      />
    </>
  );
}

function ConnectedLines() {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      const material = linesRef.current.material as THREE.LineBasicMaterial;
      if (material && material.opacity !== undefined) {
        material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      }
    }
  });

  const lineGeometry = React.useMemo(() => {
    const points = [];
    for (let i = 0; i < 50; i++) {
      points.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
    }
    return new THREE.BufferGeometry().setFromPoints(
      points.map((_, i, arr) => 
        i % 3 === 0 ? new THREE.Vector3(arr[i], arr[i + 1], arr[i + 2]) : null
      ).filter(Boolean) as THREE.Vector3[]
    );
  }, []);

  return (
    <lineSegments ref={linesRef} geometry={lineGeometry}>
      <lineBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
    </lineSegments>
  );
}

function Scene() {
  const shapes = [
    { position: [-3, 2, -2] as [number, number, number], color: '#8b5cf6', type: 'sphere' as const },
    { position: [3, -1, -3] as [number, number, number], color: '#06b6d4', type: 'box' as const },
    { position: [-2, -2, -1] as [number, number, number], color: '#10b981', type: 'torus' as const },
    { position: [2, 3, -4] as [number, number, number], color: '#f59e0b', type: 'octahedron' as const },
    { position: [0, -3, 2] as [number, number, number], color: '#ef4444', type: 'dodecahedron' as const },
    { position: [-4, 0, 3] as [number, number, number], color: '#8b5cf6', type: 'sphere' as const },
  ];

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.8} />
      <pointLight position={[10, -10, 10]} color="#06b6d4" intensity={0.6} />
      
      <ConnectedLines />
      
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} index={index} />
      ))}
    </>
  );
}

export default function FloatingShapesCanvas() {
  return (
    <div className="absolute inset-0 -z-10 opacity-40">
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