'use client';

// Essential Imports
import { useEffect, useRef, useCallback, useMemo, memo, useState } from 'react';

// Component Imports
import createGlobe from 'cobe';

// Utils Imports
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import {
  motion,
  useMotionValue,
  useSpring,
  TargetAndTransition
} from 'motion/react';

const Globe = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [globeConfig, setGlobeConfig] = useState({
    devicePixelRatio: 2,
    width: 0,
    height: 0,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 2.8,
    mapSamples: 16000,
    mapBrightness: 1.1,
    baseColor: [1, 1, 1] as [number, number, number],
    markerColor: [251 / 255, 200 / 255, 21 / 255] as [number, number, number],
    glowColor: [1.2, 1.2, 1.2] as [number, number, number],
    markers: [
      { location: [28.61, 77.2] as [number, number], size: 0.1 },
      { location: [40.71, -74.0] as [number, number], size: 0.1 }
    ]
  });

  const r = useMotionValue(0);
  const spring = useSpring(r, {
    damping: 3000,
    mass: 100,
    stiffness: 50
  });

  // Update device pixel ratio based on device
  useEffect(() => {
    setGlobeConfig((prev) => ({
      ...prev,
      devicePixelRatio: window.devicePixelRatio || 2
    }));
  }, []);

  // Handle resize properly and update dimensions
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const updateDimensions = () => {
      if (!canvasRef.current || !containerRef.current) return;

      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      // Set dimensions for proper centering
      setDimensions({
        width: containerWidth,
        height: containerHeight
      });

      // Update canvas size to match container
      if (canvasRef.current) {
        canvasRef.current.width =
          containerWidth * (window.devicePixelRatio || 2);
        canvasRef.current.height =
          containerHeight * (window.devicePixelRatio || 2);
        canvasRef.current.style.width = `${containerWidth}px`;
        canvasRef.current.style.height = `${containerHeight}px`;
      }
    };

    // Initial size update
    updateDimensions();

    // Set up resize listener
    window.addEventListener('resize', updateDimensions);

    // Also listen for orientation changes on mobile
    window.addEventListener('orientationchange', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('orientationchange', updateDimensions);
    };
  }, []);

  // Create and manage the globe
  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current || dimensions.width === 0) {
      return;
    }

    const canvas = canvasRef.current;

    try {
      const globe = createGlobe(canvas, {
        ...globeConfig,
        width: dimensions.width * (window.devicePixelRatio || 2),
        height: dimensions.height * (window.devicePixelRatio || 2),
        onRender: (state) => {
          if (!pointerInteracting.current) {
            phi += 0.002;
          }
          state.phi = phi + r.get();
          state.width = dimensions.width * (window.devicePixelRatio || 2);
          state.height = dimensions.height * (window.devicePixelRatio || 2);
        }
      });

      // Make canvas visible after initialization
      setTimeout(() => {
        if (canvas) {
          canvas.style.opacity = '1';
        }
      }, 200);

      return () => {
        globe.destroy();
      };
    } catch (error) {
      console.error('Error creating globe:', error);
    }
  }, [r, globeConfig, dimensions]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      pointerInteracting.current =
        e.clientX - pointerInteractionMovement.current;
      canvasRef.current && (canvasRef.current.style.cursor = 'grabbing');
    },
    []
  );

  const handlePointerUp = useCallback(() => {
    pointerInteracting.current = null;
    canvasRef.current && (canvasRef.current.style.cursor = 'grab');
  }, []);

  const handlePointerOut = useCallback(() => {
    pointerInteracting.current = null;
    canvasRef.current && (canvasRef.current.style.cursor = 'grab');
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (pointerInteracting.current !== null) {
        const delta = e.clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta;
        r.set(delta / 200);
      }
    },
    [r]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLCanvasElement>) => {
      if (pointerInteracting.current !== null && e.touches[0]) {
        const delta = e.touches[0].clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta;

        // More responsive touch movement for mobile (smaller divisor)
        r.set(delta / 100);

        // Prevent default touch behavior to avoid page scrolling while interacting with globe
        e.preventDefault();
      }
    },
    [r]
  );

  const containerVariants = useMemo(
    () => ({
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
      transition: {
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }
    }),
    []
  );

  const hoverVariants = useMemo(
    () => ({
      whileHover: { scale: [1, 1.05, 1.02] } as TargetAndTransition
    }),
    []
  );

  return (
    <motion.div
      {...containerVariants}
      ref={containerRef}
      className='m-auto flex w-full max-w-5xl items-center justify-center'
    >
      <motion.div {...hoverVariants} className='w-full'>
        <AspectRatio ratio={1 / 1}>
          <motion.canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerOut={handlePointerOut}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchStart={(e) => {
              if (e.touches[0]) {
                pointerInteracting.current =
                  e.touches[0].clientX - pointerInteractionMovement.current;
                canvasRef.current &&
                  (canvasRef.current.style.cursor = 'grabbing');
              }
            }}
            onTouchEnd={handlePointerUp}
            transition={{
              type: 'spring',
              damping: 3000,
              mass: 100,
              stiffness: 50
            }}
            style={{
              opacity: 0,
              touchAction: 'none' // Prevent browser touch actions while interacting
            }}
            className='m-auto h-full w-full cursor-grab transition-opacity duration-1000 ease-in-out contain-size contain-layout contain-paint'
          />
        </AspectRatio>
      </motion.div>
    </motion.div>
  );
});

Globe.displayName = 'Globe';

export default Globe;
