"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WavePlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_mouse: { value: new THREE.Vector2(0, 0) },
        u_resolution: { value: new THREE.Vector2(1, 1) },
        u_color1: { value: new THREE.Color('#8b5cf6') },
        u_color2: { value: new THREE.Color('#06b6d4') },
        u_color3: { value: new THREE.Color('#10b981') },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float u_time;
        
        void main() {
          vUv = uv;
          vPosition = position;
          
          vec3 pos = position;
          float wave = sin(pos.x * 2.0 + u_time) * cos(pos.y * 2.0 + u_time * 0.5) * 0.3;
          pos.z += wave;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec2 u_mouse;
        uniform vec2 u_resolution;
        uniform vec3 u_color1;
        uniform vec3 u_color2;
        uniform vec3 u_color3;
        
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          vec2 st = vUv;
          
          // Create moving waves
          float wave1 = sin(st.x * 10.0 + u_time * 2.0) * 0.5 + 0.5;
          float wave2 = cos(st.y * 8.0 + u_time * 1.5) * 0.5 + 0.5;
          float wave3 = sin((st.x + st.y) * 6.0 + u_time * 3.0) * 0.5 + 0.5;
          
          // Combine waves
          float combined = (wave1 + wave2 + wave3) / 3.0;
          
          // Create color gradient based on waves
          vec3 color = mix(u_color1, u_color2, wave1);
          color = mix(color, u_color3, wave2);
          
          // Add some brightness variation
          color *= (0.8 + combined * 0.4);
          
          // Add transparency based on distance from center
          float dist = distance(st, vec2(0.5));
          float alpha = 1.0 - smoothstep(0.2, 0.8, dist);
          
          gl_FragColor = vec4(color, alpha * 0.7);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, []);

  useFrame((state) => {
    if (material.uniforms) {
      material.uniforms.u_time.value = state.clock.elapsedTime;
      material.uniforms.u_mouse.value.set(
        state.mouse.x,
        state.mouse.y
      );
    }

    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -3]} material={material}>
      <planeGeometry args={[10, 10, 50, 50]} />
    </mesh>
  );
}

function RippleEffect() {
  const groupRef = useRef<THREE.Group>(null);
  
  const ripples = useMemo(() => {
    const rippleArray = [];
    for (let i = 0; i < 5; i++) {
      rippleArray.push({
        delay: i * 0.5,
        position: [0, 0, 0] as [number, number, number]
      });
    }
    return rippleArray;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      
      groupRef.current.children.forEach((child, index) => {
        const delay = ripples[index].delay;
        const adjustedTime = time - delay;
        
        if (adjustedTime > 0) {
          const scale = (adjustedTime % 3) * 2;
          child.scale.setScalar(scale);
          
          const material = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
          if (material) {
            material.opacity = Math.max(0, 1 - (adjustedTime % 3) / 3);
          }
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {ripples.map((ripple, index) => (
        <mesh key={index} position={ripple.position}>
          <ringGeometry args={[0.8, 1, 32]} />
          <meshBasicMaterial 
            color="#8b5cf6"
            transparent
            opacity={0}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

function EnergyOrbs() {
  const groupRef = useRef<THREE.Group>(null);
  
  const orbs = useMemo(() => {
    const orbArray = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      orbArray.push({
        angle,
        radius: 3,
        color: `hsl(${260 + i * 30}, 80%, 60%)`,
        speed: 0.5 + Math.random() * 0.5
      });
    }
    return orbArray;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      
      groupRef.current.children.forEach((child, index) => {
        const orb = orbs[index];
        const currentAngle = orb.angle + time * orb.speed;
        
        child.position.x = Math.cos(currentAngle) * orb.radius;
        child.position.y = Math.sin(currentAngle) * orb.radius * 0.5;
        child.position.z = Math.sin(currentAngle * 2) * 2;
        
        child.rotation.x = time * 2;
        child.rotation.y = time * 1.5;
        
        // Pulsing scale
        const pulse = 1 + Math.sin(time * 3 + index) * 0.3;
        child.scale.setScalar(pulse);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {orbs.map((orb, index) => (
        <mesh key={index}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial 
            color={orb.color}
            emissive={orb.color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} color="#8b5cf6" intensity={1} />
      <pointLight position={[-5, -5, 5]} color="#06b6d4" intensity={0.8} />
      
      <WavePlane />
      <RippleEffect />
      <EnergyOrbs />
    </>
  );
}

export default function ShaderWaves() {
  return (
    <div className="fixed inset-0 -z-30 opacity-50">
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
