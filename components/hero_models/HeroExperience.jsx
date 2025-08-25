import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { useRef, useState, useEffect } from "react";
import "./hero-frame.css";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const [isMouseInFrame, setIsMouseInFrame] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (frameRef.current) {
        const rect = frameRef.current.getBoundingClientRect();
        const isInside = 
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;
        setIsMouseInFrame(isInside);
      }
    };

    const handleMouseLeave = () => {
      setIsMouseInFrame(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={frameRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{ 
        background: 'none', 
        border: 'none', 
        boxShadow: 'none', 
        padding: 0, 
        margin: 0,
        aspectRatio: '2/1', // Wider landscape aspect ratio for smaller height
        maxWidth: '100%',
        maxHeight: '100%'
      }}
    >
      {/* Backdrop effect */}
      <div className={`absolute inset-0 rounded-lg hero-frame-backdrop ${isMouseInFrame ? 'hero-frame-active' : ''}`}></div>
      
      {/* Grid overlay */}
      <div className={`absolute inset-0 rounded-lg hero-frame-grid ${isMouseInFrame ? 'hero-frame-active' : ''}`}></div>
      
      {/* Futuristic Frame - Enhanced for landscape */}
      <div className={`absolute inset-0 pointer-events-none z-10 hero-frame ${isMouseInFrame ? 'hero-frame-active' : ''}`}>
        {/* Main frame border */}
        <div className="absolute inset-0 transition-all duration-300 border-2 rounded-lg border-cyan-400/70 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
          {/* Corner decorations - larger for landscape */}
          <div className="absolute w-8 h-8 border-t-4 border-l-4 rounded-tl-lg -top-1 -left-1 border-cyan-400 hero-frame-corner shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
          <div className="absolute w-8 h-8 border-t-4 border-r-4 rounded-tr-lg -top-1 -right-1 border-cyan-400 hero-frame-corner shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
          <div className="absolute w-8 h-8 border-b-4 border-l-4 rounded-bl-lg -bottom-1 -left-1 border-cyan-400 hero-frame-corner shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
          <div className="absolute w-8 h-8 border-b-4 border-r-4 rounded-br-lg -bottom-1 -right-1 border-cyan-400 hero-frame-corner shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
          
          {/* Inner corner accents */}
          <div className="absolute w-4 h-4 border-t-2 border-l-2 top-4 left-4 border-cyan-300/80"></div>
          <div className="absolute w-4 h-4 border-t-2 border-r-2 top-4 right-4 border-cyan-300/80"></div>
          <div className="absolute w-4 h-4 border-b-2 border-l-2 bottom-4 left-4 border-cyan-300/80"></div>
          <div className="absolute w-4 h-4 border-b-2 border-r-2 bottom-4 right-4 border-cyan-300/80"></div>
          
          {/* Scan lines effect */}
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent hero-frame-scan"></div>
          </div>
          
          {/* Side indicators - adjusted for landscape */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 w-3 h-12 bg-cyan-400/70 rounded-l-full shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-300"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-3 h-12 bg-cyan-400/70 rounded-r-full shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-300"></div>
          
          {/* Top/bottom indicators - adjusted for landscape */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-12 h-3 bg-cyan-400/70 rounded-t-full shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-300"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-12 h-3 bg-cyan-400/70 rounded-b-full shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-300"></div>
          
          {/* Additional frame elements for landscape */}
          <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1 w-6 h-1 bg-cyan-400/60 transition-all duration-300"></div>
          <div className="absolute top-0 right-1/4 transform translate-x-1/2 -translate-y-1 w-6 h-1 bg-cyan-400/60 transition-all duration-300"></div>
          <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1 w-6 h-1 bg-cyan-400/60 transition-all duration-300"></div>
          <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 translate-y-1 w-6 h-1 bg-cyan-400/60 transition-all duration-300"></div>
        </div>
      
      </div>

      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 10], fov: 55 }}
        style={{
          outline: 'none',
          boxShadow: 'none',
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'block',
          borderRadius: '8px',
        }}
        gl={{ preserveDrawingBuffer: true }}
        frameloop="demand"
        onCreated={({ gl }) => {
          gl.setClearColor('rgba(0,0,0,0)', 0);
        }}
      >
        {/* deep blue ambient */}
      {/* <ambientLight intensity={0.2} color="#1a1a40" /> */}
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet && isMouseInFrame} // Only enable zoom when mouse is in frame
        enabled={isMouseInFrame} // Only enable controls when mouse is in frame
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
        dampingFactor={0.05} // Smooth damping
        enableDamping={true} // Enable damping for smoother controls
        autoRotate={!isMouseInFrame} // Auto-rotate when not interacting
        autoRotateSpeed={0.5} // Slow auto-rotation
        maxAzimuthAngle={Math.PI / 3} // Limit horizontal rotation
        minAzimuthAngle={-Math.PI / 3} // Limit horizontal rotation
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        <group
          scale={isMobile ? 0.5 : 0.7}
          position={[0, -2, 0]}
          rotation={[0, -Math.PI / 6, 0]}
        >
          <Room />
        </group>
      </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroExperience;
