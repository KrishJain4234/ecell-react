import React, { useEffect, useState } from 'react';
import './App.css'; // TailwindCSS must be set up

const words = ['Innovate', 'Create', 'Inspire'];
const bgColors = {
  Innovate: '#0F172A', // dark blue
  Create: '#4C1D95',   // dark purple
  Inspire: '#C2410C',  // dark orange
};

export default function App() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [phase, setPhase] = useState('text');

  useEffect(() => {
    if (phase === 'text') {
      if (currentWordIndex < words.length) {
        const timer = setTimeout(() => {
          setCurrentWordIndex((prev) => prev + 1);
        }, 500);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setPhase('bulb');
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [currentWordIndex, phase]);

  const currentWord = words[currentWordIndex - 1];
  const bgColor = bgColors[currentWord] || 'black';

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen transition-all duration-700"
      style={{ backgroundColor: phase === 'text' ? bgColor : 'black'  }}
    >
      {phase === 'bulb' && (
  <div className="absolute top-4 left-4 flex items-center space-x-2 animate-logo">
    <img src="/ecell.png" alt="E-Cell Logo" className="w-12 h-12" />
    <span className="text-xl font-bold text-white font-orbitron">E-Cell</span>
  </div>
)}


      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30 z-0" />
      {/* Background Money & Graph Images */}
      {phase === 'bulb' && (
  <>
    {/* Left side - Money (animated) */}
    <img
      src="/money.png"
      alt="Money"
      className="absolute left-0 bottom-0 w-[380px] opacity-100 animate-float-slow z-0"
    />

    {/* Right side - Graph (static) */}
    <img
      src="/graph.png"
      alt="Graph"
      className="absolute right-0 bottom-0 w-[440px] opacity-90 z-0"
    />
  </>
)}

     {/* Show nav only after bulb phase */}
{phase === 'bulb' && (
  <div className="absolute top-6 right-6 z-50">
    <div className="flex space-x-4 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-400">
      {['Home', 'About Us', 'Events', 'Team', 'Gallery'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
          className="text-white font-orbitron text-sm px-3 py-1 rounded-full border border-transparent hover:border-cyan-400 hover:text-cyan-300 transition duration-300"
        >
          {item}
        </a>
      ))}
    </div>
  </div>
)}



      {/* Animated Words */}
      {phase === 'text' && (
        <h1 className="text-6xl font-extrabold text-white font-orbitron tracking-wide transition-opacity duration-500 animate-text-fade">
          {currentWord}
        </h1>
      )}

      {/* Bulb Phase */}
      {phase === 'bulb' && (
  <div className="flex flex-col items-center space-y-6 animate-fade-in">

          {/* College Name Animation */}
          {/* Logo top-left with college name under it */}
<div className="absolute top-4 left-4 z-50">
  <div className="flex items-center space-x-2 animate-logo">
    <span className="text-white text-4xl md:text-5x1 font-bold font-orbitron tracking-wide">
      <span className="text-Cyan-300">E-</span><span className="text-dark pink-400">CELL</span>
    </span>
  </div>
  
  <p className="text-blue-400 text-lg md:text-xl font-semibold mt-[-2px] ml-[2px] font-orbitron tracking-wide">
  BMSIT & M
</p>

  
</div>


          {/* Glowing Bulb Animation */}
          <div className="relative w-[340px] aspect-[0.9148/1] z-10">
  {/* Static bulb image */}
  <img
  src="/bulb.png"
  alt="Bulb"
  className="w-[1000px] object-contain z-10 animate-bulb-flicker"
  style={{ aspectRatio: '0.9148 / 1' }}
/>

  {/* Glowing light inside the bulb */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[60%] h-[60%] bg-yellow-400 rounded-full blur-2xl opacity-0 animate-bulb-light-pulse" />
  </div>
</div>

        </div>
      )}

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes textFade {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes bulbGlow {
            0% { opacity: 0; filter: grayscale(10); transform: scale(0.95); }
            50% { opacity: 0.5; filter: grayscale(0.5); }
            100% { opacity: 1; filter: grayscale(0); transform: scale(1); }
          }
          @keyframes logoPulse {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); opacity: 0.9; }
          }
          @keyframes collegeZoom {
            0% { transform: scale(0.9); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }

          .animate-fade-in {
            animation: fadeIn 1.2s ease-in-out forwards;
          }
          .animate-text-fade {
            animation: textFade 0.7s ease-in-out;
          }
          .animate-bulb-glow {
            animation: bulbGlow 1.5s ease-in-out forwards;
          }
          .animate-logo {
            animation: logoPulse 1.5s ease-in-out 1;
          }
          .animate-college-zoom {
            animation: collegeZoom 1s ease-out forwards;
          }
        `}
      </style>
    </div>
    
  );
}
