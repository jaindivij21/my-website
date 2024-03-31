"use client"

// Essential Imports
import { useEffect, useRef } from "react";

// Component Imports
import createGlobe from "cobe";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0)
  const spring = useSpring(r, {
    damping: 3000,
    mass: 100,
    stiffness: 50,
  })

  useEffect(() => {
    const canvas = canvasRef.current || document.createElement('canvas');
    let phi = 0;
    let width = 0;
    const onResize = () => canvas && (width = canvas.offsetWidth)
    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
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
        { location: [28.61, 77.20], size: 0.1 },
        { location: [40.71, -74.00], size: 0.1 }
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.002
        }
        state.phi = phi + r.get()
        state.width = width * 2
        state.height = width * 2
      }
    })
    setTimeout(() => canvas.style.opacity = '1')
    return () => globe.destroy()
  }, [r])

  // Functions
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
    canvasRef.current && (canvasRef.current.style.cursor = 'grabbing');
  }

  const handlePointerUp = () => {
    pointerInteracting.current = null;
    canvasRef.current && (canvasRef.current.style.cursor = 'grab');
  }

  const handlePointerOut = () => {
    pointerInteracting.current = null;
    canvasRef.current && (canvasRef.current.style.cursor = 'grab');
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(delta / 200)
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (pointerInteracting.current !== null && e.touches[0]) {
      const delta = e.touches[0].clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(delta / 50)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="max-w-5xl w-full m-auto"
    >
      <motion.div
        whileHover={{ scale: [null, 1.1, 1.05] }}
      >
        <AspectRatio ratio={1 / 1}>
          <motion.canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerOut={handlePointerOut}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            transition={{ type: 'spring', damping: 3000, mass: 100, stiffness: 50 }}
            className="w-full h-full cursor-grab transition-opacity duration-1000 ease-in-out contain-layout contain-paint contain-size"
          />
        </AspectRatio >
      </motion.div >
    </motion.div >
  );
}

export default Globe;