"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';
import { FBXModel } from './fbx-model-loader';

interface FBXModelCanvasProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  enableAnimation?: boolean;
  animationSpeed?: number;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
  enableShadows?: boolean;
  enableLighting?: boolean;
}

const FBXModelCanvas: React.FC<FBXModelCanvasProps> = ({
  modelPath,
  scale = 1,
  position = [0, -50, 0],
  rotation = [0, 0, 0],
  enableAnimation = true,
  animationSpeed = 1,
  cameraPosition = [0, -50, 0],
  enableControls = true,
  enableShadows = true,
  enableLighting = true
}) => {
  
  // Add console log for debugging
  console.log('FBXModelCanvas rendering with:', {
    modelPath,
    scale,
    position,
    rotation,
    cameraPosition
  });

  return (
    <Canvas
      camera={{ 
        position: cameraPosition, 
        fov: 50,
        near: 0.1,
        far: 1000
      }}
      shadows={enableShadows}
      className="w-full h-full"
    >
      <Suspense fallback={
        <mesh position={position} scale={[scale, scale, scale]} rotation={rotation}>
          <boxGeometry args={[1, 2, 0.5]} />
          <meshStandardMaterial color="lightblue" wireframe />
        </mesh>
      }>
        {enableLighting && (
          <>
            <ambientLight intensity={0.4} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={1}
              castShadow={enableShadows}
              shadow-mapSize={[2048, 2048]}
            />
            <pointLight position={[-10, -10, -10]} intensity={0.3} />
          </>
        )}
        
        <FBXModel
          url={modelPath}
          scale={scale}
          position={position}
          rotation={rotation}
          enableAnimation={enableAnimation}
          animationSpeed={animationSpeed}
        />
        
        {enableShadows && (
          <ContactShadows
            position={[0, -1.6, 0]}
            opacity={0.4}
            scale={10}
            blur={2.5}
            far={4}
          />
        )}
        
        {enableLighting && <Environment preset="studio" />}
        
        {enableControls && (
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={8}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 6}
          />
        )}
      </Suspense>
    </Canvas>
  );
};

export default FBXModelCanvas;