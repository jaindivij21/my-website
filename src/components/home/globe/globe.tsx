'use client';

// Essential Imports
import { useEffect, useRef } from 'react';

// Component Imports
import createGlobe from 'cobe';

// Utils Imports
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { motion, useMotionValue } from 'motion/dist/react';
import { useSpring } from 'motion/dist/react';

const Globe = () => {
  console.log('Globe component rendering');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const spring = useSpring(r, {
    damping: 3000,
    mass: 100,
    stiffness: 50
  });

  useEffect(() => {
    console.log('useEffect running, r value:', r.get());
    let phi = 0;

    if (!canvasRef.current) {
      console.error('Canvas ref is not available');
      return;
    }

    const canvas = canvasRef.current;
    let width = canvas.offsetWidth || 0;
    console.log('Canvas initialized', {
      width: canvas.offsetWidth,
      height: canvas.offsetHeight
    });

    // Ensure we have a valid width before proceeding
    if (width === 0) {
      console.error('Canvas width is 0, waiting for proper initialization');
      return;
    }

    const onResize = () => {
      if (canvas) {
        width = canvas.offsetWidth;
        console.log('Resize event', { width });
      }
    };

    window.addEventListener('resize', onResize);
    onResize();

    try {
      console.log('Creating globe with width:', width);
      const globe = createGlobe(canvas, {
        devicePixelRatio: window.devicePixelRatio || 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 2.8,
        mapSamples: 16000,
        mapBrightness: 1.1,
        baseColor: [1, 1, 1],
        markerColor: [251 / 255, 200 / 255, 21 / 255],
        glowColor: [1.2, 1.2, 1.2],
        markers: [
          { location: [28.61, 77.2], size: 0.1 },
          { location: [40.71, -74.0], size: 0.1 }
        ],
        onRender: (state) => {
          if (!pointerInteracting.current) {
            phi += 0.002;
          }
          state.phi = phi + r.get();
          state.width = width * 2;
          state.height = width * 2;
        }
      });

      console.log('Globe created successfully');
      setTimeout(() => {
        if (canvas) {
          canvas.style.opacity = '1';
          console.log('Canvas opacity set to 1');
        }
      });

      return () => {
        console.log('Cleaning up globe');
        globe.destroy();
      };
    } catch (error) {
      console.error('Error creating globe:', error);
    }
  }, [r]);

  // Functions
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
    canvasRef.current && (canvasRef.current.style.cursor = 'grabbing');
  };

  const handlePointerUp = () => {
    pointerInteracting.current = null;
    canvasRef.current && (canvasRef.current.style.cursor = 'grab');
  };

  const handlePointerOut = () => {
    pointerInteracting.current = null;
    canvasRef.current && (canvasRef.current.style.cursor = 'grab');
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(delta / 200);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (pointerInteracting.current !== null && e.touches[0]) {
      const delta = e.touches[0].clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(delta / 50);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className='m-auto w-full max-w-5xl'
    >
      <motion.div whileHover={{ scale: [null, 1.1, 1.05] }}>
        <AspectRatio ratio={1 / 1}>
          <motion.canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerOut={handlePointerOut}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            transition={{
              type: 'spring',
              damping: 3000,
              mass: 100,
              stiffness: 50
            }}
            style={{ opacity: 0 }}
            className='h-full w-full cursor-grab transition-opacity duration-1000 ease-in-out contain-size contain-layout contain-paint'
          />
        </AspectRatio>
      </motion.div>
    </motion.div>
  );
};

export default Globe;
