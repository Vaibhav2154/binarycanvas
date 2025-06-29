"use client";

import React, { createContext, useContext, useRef, useState, useEffect, ReactNode } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  play: () => void;
  pause: () => void;
  toggleMute: () => void;
  setVolume: (volume: number) => void;
  userInteracted: boolean;
  setUserInteracted: (interacted: boolean) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

interface AudioProviderProps {
  children: ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start muted for better UX
  const [volume, setVolumeState] = useState(0.3);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    // Initialize audio
    const audio = new Audio('/bgm.mp3');
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    // Cleanup function
    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current || !userInteracted) return;

    if (isPlaying && !isMuted) {
      audioRef.current.play().catch((error: Error) => {
        console.log('Audio playback failed:', error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, isMuted, userInteracted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const play = () => {
    if (!userInteracted) setUserInteracted(true);
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
  };

  const toggleMute = () => {
    if (!userInteracted) setUserInteracted(true);
    setIsMuted(!isMuted);
    if (isMuted) {
      setIsPlaying(true); // Auto-play when unmuting
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(Math.max(0, Math.min(1, newVolume)));
  };

  const value: AudioContextType = {
    isPlaying,
    isMuted,
    volume,
    play,
    pause,
    toggleMute,
    setVolume,
    userInteracted,
    setUserInteracted,
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
