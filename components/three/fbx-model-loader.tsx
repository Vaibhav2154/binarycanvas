"use client";

import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import { AnimationMixer, Group, AnimationAction, AnimationClip, Box3, Vector3 } from 'three';
import { useLoader } from '@react-three/fiber';

interface FBXModelProps {
  url: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  enableAnimation?: boolean;
  animationSpeed?: number;
}

export const FBXModel: React.FC<FBXModelProps> = ({
  url,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  enableAnimation = true,
  animationSpeed = 1
}) => {
  const groupRef = useRef<Group>(null);
  const mixerRef = useRef<AnimationMixer | null>(null);
  const [actions, setActions] = useState<AnimationAction[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load the FBX model
  const fbx = useLoader(FBXLoader, url);

  useEffect(() => {
    if (!fbx) {
      console.warn('FBX model not loaded yet');
      return;
    }

    try {
      if (enableAnimation) {
        // Clone the FBX model to avoid issues with multiple instances
        const clonedFBX = fbx.clone();
        
        // Set up animation mixer
        const mixer = new AnimationMixer(clonedFBX);
        mixerRef.current = mixer;

        // Set up animations if they exist
        if (clonedFBX.animations && clonedFBX.animations.length > 0) {
          const animationActions = clonedFBX.animations.map((clip: AnimationClip) => {
            const action = mixer.clipAction(clip);
            action.play();
            return action;
          });
          setActions(animationActions);
          console.log(`Loaded ${animationActions.length} animations`);
        } else {
          console.log('No animations found in FBX model');
        }

        // Add the cloned model to the group
        if (groupRef.current) {
          groupRef.current.clear();
          groupRef.current.add(clonedFBX);
          
          // Center the model
          const box = new Box3().setFromObject(clonedFBX);
          const center = box.getCenter(new Vector3());
          clonedFBX.position.sub(center);
        }

        setIsLoaded(true);
        console.log('FBX model loaded successfully with animations');

        return () => {
          mixer.stopAllAction();
          setActions([]);
        };
      } else if (groupRef.current) {
        // No animation, just add the model
        const clonedFBX = fbx.clone();
        groupRef.current.clear();
        groupRef.current.add(clonedFBX);
        
        // Center the model
        const box = new Box3().setFromObject(clonedFBX);
        const center = box.getCenter(new Vector3());
        clonedFBX.position.sub(center);
        
        setIsLoaded(true);
        console.log('FBX model loaded successfully without animations');
      }
    } catch (err) {
      console.error('Error setting up FBX model:', err);
      setError('Error setting up 3D model');
    }
  }, [fbx, enableAnimation]);

  // Update animation mixer on each frame
  useFrame((state, delta) => {
    if (mixerRef.current && enableAnimation) {
      mixerRef.current.update(delta * animationSpeed);
    }
  });

  return (
    <>
      <group
        ref={groupRef}
        scale={[scale, scale, scale]}
        position={position}
        rotation={rotation}
      />
      
      {/* Fallback visualization if model doesn't load or for debugging */}
      {!isLoaded && !error && (
        <mesh position={position} scale={[scale, scale, scale]} rotation={rotation}>
          <boxGeometry args={[1, 2, 0.5]} />
          <meshStandardMaterial color="orange" wireframe />
        </mesh>
      )}
      
      {error && (
        <mesh position={position} scale={[scale, scale, scale]} rotation={rotation}>
          <boxGeometry args={[1, 2, 0.5]} />
          <meshStandardMaterial color="red" />
        </mesh>
      )}
    </>
  );
};
