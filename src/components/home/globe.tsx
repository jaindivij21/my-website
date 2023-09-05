"use client"

// Essential Imports
import { useEffect, useRef } from "react";

// Component Imports
import createGlobe from "cobe";
import { AspectRatio } from "../shared/ui/aspect-ratio";

const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

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
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1.2, 1.2, 1.2],
      markers: [],
      onRender: (state) => {
        // This prevents rotation while dragging
        if (!pointerInteracting.current) {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          phi += 0.005
        }
        state.phi = phi
        state.width = width * 2
        state.height = width * 2
      }
    })
    setTimeout(() => canvas.style.opacity = '1')
    return () => globe.destroy()
  }, [])

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
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (pointerInteracting.current !== null && e.touches[0]) {
      const delta = e.touches[0].clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
    }
  }

  return (
    <div className="max-w-5xl w-full m-auto">
      <AspectRatio ratio={1 / 1}>
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerOut={handlePointerOut}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="w-full h-full cursor-grab transition-opacity duration-1000 ease-in-out contain-layout contain-paint contain-size"
        />
      </AspectRatio>
    </div>
  );
}

export default Globe;