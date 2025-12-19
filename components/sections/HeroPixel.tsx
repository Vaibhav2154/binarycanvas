"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, Pause, Volume2, VolumeX, Terminal, Cpu, Code2, Zap, Shield, Brain, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAudio } from '@/components/AudioContext';

const Hero = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [showSystem, setShowSystem] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState('');
  const { isMuted, toggleMute, setUserInteracted, userInteracted } = useAudio();

  const cyberModules = [
    {
      title: "FULLSTACK_CORE",
      subtitle: "NEXT JS DEVELOPER",
      description: "Building digital ecosystems with cutting-edge technology",
      color: "text-neon-pink",
      icon: Code2,
      bgPattern: "from-neon-pink/10 to-transparent"
    },
    {
      title: "MOBILE_CORE", 
      subtitle: "FLUTTER APP DEVELOPER",
      description: "Crafting immersive mobile experiences that users adore",
      color: "text-neon-cyan",
      icon: Smartphone,
      bgPattern: "from-neon-cyan/10 to-transparent"
    },
    {
      title: "AI_ENGINE", 
      subtitle: "AI/ML ENGINEER", 
      description: "Programming neural networks to think and learn",
      color: "text-neon-purple",
      icon: Brain,
      bgPattern: "from-neon-purple/10 to-transparent"
    }
  ];

  const systemMetrics = [
    { label: "CPU", value: 98, max: 100, color: "bg-neon-pink" },
    { label: "RAM", value: 87, max: 100, color: "bg-neon-cyan" },
    { label: "NET", value: 92, max: 100, color: "bg-neon-purple" },
    { label: "SEC", value: 96, max: 100, color: "bg-neon-green" }
  ];

  useEffect(() => {
    setMounted(true);
    // Initialize display text after component mounts
    if (cyberModules.length > 0) {
      setDisplayText('');
    }
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const timer = setTimeout(() => {
      setCurrentModule((prev) => (prev + 1) % cyberModules.length);
      setDisplayText('');
      setTerminalOutput('');
    }, 5000);

    return () => clearTimeout(timer);
  }, [isActive, cyberModules.length]);

  useEffect(() => {
    if (!displayText) return;

    const currentText = cyberModules[currentModule].description;
    if (displayText.length < currentText.length) {
      setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, 30);
    }
  }, [displayText, currentModule, cyberModules]);

  useEffect(() => {
    const terminalCommands = [
      "Initializing neural pathways...",
      "Loading cyber modules...",
      "Establishing secure connections...",
      "Deploying AI algorithms...",
      "Activating defense protocols..."
    ];
    
    const currentCommand = terminalCommands[currentModule];
    let index = 0;
    
    const typeCommand = () => {
      if (index < currentCommand.length) {
        setTerminalOutput(currentCommand.substring(0, index + 1));
        index++;
        setTimeout(typeCommand, 50);
      }
    };
    
    if (currentCommand) {
      setTimeout(typeCommand, 1000);
    }
  }, [currentModule]);

  const handleUserInteraction = () => {
    if (!userInteracted) {
      setUserInteracted(true);
    }
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };


  const CyberGrid = () => (
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="w-full h-full grid-bg" />
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-neon-pink"
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
        />
      ))}
    </div>
  );

  const ScanLines = () => (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-px bg-neon-pink/20"
          animate={{
            opacity: [0, 0.5, 0],
            y: [0, 1000],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            top: 0,
          }}
        />
      ))}
    </div>
  );

  const FloatingIcons = () => (
    <div className="absolute inset-0 pointer-events-none">
      {[
        { Icon: Terminal, delay: 0, x: 10, y: 15, color: "text-neon-pink" },
        { Icon: Code2, delay: 0.5, x: 85, y: 20, color: "text-neon-cyan" },
        { Icon: Cpu, delay: 1, x: 15, y: 80, color: "text-neon-purple" },
        { Icon: Zap, delay: 1.5, x: 80, y: 75, color: "text-neon-green" },
      ].map(({ Icon, delay, x, y, color }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 0.7, scale: 1, rotate: 0 }}
          transition={{ delay, duration: 1.5, ease: "easeOut" }}
          className={`absolute ${color} w-8 h-8`}
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <Icon className="w-full h-full animate-neon-glow" />
        </motion.div>
      ))}
    </div>
  );

  const SystemMetrics = () => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="absolute z-20 top-8 left-8"
    >
      <div className="p-4 rounded-lg cyber-bg">
        <div className="mb-2 text-xs tracking-wider text-neon-pink font-cyber">SYSTEM METRICS</div>
        <div className="space-y-2">
          {systemMetrics.map((metric, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-8 font-mono text-xs text-neon-cyan">{metric.label}</div>
              <div className="flex-1 h-2 overflow-hidden rounded-full bg-black/50">
                <motion.div
                  className={`h-full ${metric.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${(metric.value / metric.max) * 100}%` }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 1 }}
                />
              </div>
              <div className="w-8 text-xs text-neon-pink font-cyber">{metric.value}%</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const TerminalWindow = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute z-20 top-8 right-8"
    >
      <div className="cyber-bg p-4 rounded-lg min-w-[300px]">
        <div className="flex items-center mb-3 space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-xs tracking-wider text-neon-cyan font-cyber">TERMINAL</div>
        </div>
        <div className="space-y-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsActive(!isActive)}
            className="mr-2 text-xs text-neon-pink border-neon-pink hover:bg-neon-pink hover:text-black font-cyber"
          >
            {isActive ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMute}
            className="text-xs text-neon-cyan border-neon-cyan hover:bg-neon-cyan hover:text-black font-cyber"
          >
            {!isMuted ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
          </Button>
        </div>
        <div className="mt-3 font-mono text-xs text-neon-green">
          <div className="mb-1">vaibhav@cyber:~$ {terminalOutput}</div>
          <div className="text-neon-pink">Status: {isActive ? 'ONLINE' : 'STANDBY'}</div>
        </div>
      </div>
    </motion.div>
  );

  if (!mounted) {
    return (
      <section id="hero" className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
        <div className="text-center text-white">
          <div className="mb-4 text-6xl font-cyber">VAIBHAV</div>
          <div className="text-xl text-neon-cyan font-cyber">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
      {/* Cyber Grid */}
      <CyberGrid />
      
      {/* Scan Lines */}
      <ScanLines />
      
      {/* Floating Icons */}
      <FloatingIcons />

      {/* System Metrics */}
      <SystemMetrics />

      {/* Terminal Window */}
      <TerminalWindow />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col items-center justify-center w-full max-w-6xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          onClick={handleUserInteraction}
        >
          {/* Cyberpunk Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              className="mb-4 text-6xl font-bold text-white md:text-8xl lg:text-9xl font-cyber"
              animate={{ 
                textShadow: [
                  "0 0 10px #ff0080, 0 0 20px #ff0080",
                  "0 0 20px #ff0080, 0 0 40px #ff0080, 0 0 60px #ff0080",
                  "0 0 10px #ff0080, 0 0 20px #ff0080"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              VAIBHAV
            </motion.h1>
            <motion.div
              className="text-lg tracking-wider md:text-xl lg:text-2xl text-neon-cyan font-cyber"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              DEVELOPER.EXE
            </motion.div>
          </motion.div>

          {/* Current Module Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentModule}
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 1.2, rotateY: 90 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="max-w-2xl p-8 mx-auto rounded-lg cyber-bg">
                <div className="flex items-center justify-center mb-4">
                  {React.createElement(cyberModules[currentModule].icon, { className: `w-8 h-8 mr-3 ${cyberModules[currentModule].color}` })}
                  <motion.div
                    className={`text-2xl md:text-3xl font-cyber ${cyberModules[currentModule].color}`}
                    animate={{ 
                      textShadow: [
                        "0 0 5px currentColor",
                        "0 0 15px currentColor, 0 0 25px currentColor",
                        "0 0 5px currentColor"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {cyberModules[currentModule].title}
                  </motion.div>
                </div>
                
                <motion.div
                  className="mb-4 text-lg md:text-xl font-cyber text-neon-cyan"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {cyberModules[currentModule].subtitle}
                </motion.div>

                <motion.div
                  className="text-base md:text-lg text-neon-green font-mono min-h-[2rem] flex items-center justify-center"
                >
                  <span className="mr-2 text-neon-pink">&gt;</span>
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="ml-1 text-neon-pink"
                  >
                    _
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Module Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="w-full max-w-md mb-8"
          >
            <div className="flex justify-between mb-2 text-xs text-neon-pink font-cyber">
              <span>MODULE_{currentModule + 1}_OF_{cyberModules.length}</span>
              <span>{Math.round(((currentModule + 1) / cyberModules.length) * 100)}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-black/50">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-pink to-neon-purple"
                initial={{ width: 0 }}
                animate={{ width: `${((currentModule + 1) / cyberModules.length) * 100}%` }}
                transition={{ delay: 2, duration: 1 }}
              />
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button
              onClick={() => scrollToNext()}
              className="px-8 py-4 text-sm text-black transition-all duration-300 bg-neon-pink hover:bg-neon-pink/80 font-cyber hover:shadow-neon-strong animate-neon-glow"
            >
              INITIALIZE_SYSTEM
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSystem(!showSystem)}
              className="text-xs text-neon-cyan border-neon-cyan hover:bg-neon-cyan hover:text-black font-cyber"
            >
              SYSTEM_INFO
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-neon-pink/70" />
      </motion.div>
    </section>
  );
};

export default Hero;

