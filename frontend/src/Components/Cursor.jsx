import React, { useEffect, useRef } from 'react';
import '../../public/fonts.css';

function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    let pc;

    // Dynamically import the particleCursor from threejs-toys
    import('https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js')
      .then((module) => {
        // Access particleCursor from the module
        const { particleCursor } = module;
        if (typeof particleCursor === 'function') {
          // Initialize the particle cursor
          pc = particleCursor({
            el: cursorRef.current,
            gpgpuSize: 512,
            color: 0xffffff,
            colors: [0x00fffc, 0x00ffcc],
            coordScale: 0.5,
            pointSize: 2,
            noiseIntensity: 0.005,
            noiseTimeCoef: 0.0001,
            pointDecay: 0.0025,
            sleepRadiusX: 250,
            sleepRadiusY: 250,
            sleepTimeCoefX: 0.0001,
            sleepTimeCoefY: 0.0002,
          });
        } else {
          console.error('particleCursor is not a function');
        }
      })
      .catch((err) => console.error('Failed to load particleCursor:', err));

    return () => {
      // Dispose of the particle cursor instance if it exists
      if (pc && pc.dispose) {
        pc.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1000,
        pointerEvents: 'none', // Ensure the cursor effect doesn't block user interactions
      }}
    />
  );
}

export default Cursor;