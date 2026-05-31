'use client';

import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import Overlay from './Overlay';

const FRAME_COUNT = 40;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));
  const [loadedPercentage, setLoadedPercentage] = useState(0);

  const drawImage = useCallback((canvas: HTMLCanvasElement, img: HTMLImageElement) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Ensure canvas dimensions match the window perfectly right before drawing to fix mobile resize glitches
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const ctxWidth = canvas.width;
    const ctxHeight = canvas.height;
    
    if (ctxWidth === 0 || ctxHeight === 0) return;

    const imgRatio = img.width / img.height;
    const canvasRatio = ctxWidth / ctxHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = ctxWidth;
      drawHeight = ctxWidth / imgRatio;
      offsetX = 0;
      offsetY = (ctxHeight - drawHeight) / 2;
    } else {
      drawHeight = ctxHeight;
      drawWidth = ctxHeight * imgRatio;
      offsetY = 0;
      offsetX = (ctxWidth - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, ctxWidth, ctxHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Centralized robust draw logic requesting any loaded frame immediately
  const requestDraw = useCallback(() => {
    if (!canvasRef.current) return;
    const currentFrame = Math.round(frameIndex.get());
    let imgToDraw = imagesRef.current[currentFrame];
    
    // Look backward for a loaded frame if we scrolled faster than the network
    if (!imgToDraw) {
      for (let i = currentFrame - 1; i >= 0; i--) {
        if (imagesRef.current[i]) {
          imgToDraw = imagesRef.current[i];
          break;
        }
      }
    }
    
    // Look forward if backward fails
    if (!imgToDraw) {
      for (let i = currentFrame + 1; i < FRAME_COUNT; i++) {
        if (imagesRef.current[i]) {
          imgToDraw = imagesRef.current[i];
          break;
        }
      }
    }

    if (imgToDraw) {
      const finalImg = imgToDraw; // Scope for animation frame
      requestAnimationFrame(() => {
        if (canvasRef.current) drawImage(canvasRef.current, finalImg);
      });
    }
  }, [drawImage, frameIndex]);

  // Update canvas when user scrolls
  useMotionValueEvent(frameIndex, 'change', requestDraw);

  // Progressive image loading: trigger a redraw on *every* new image load for bad networks
  useEffect(() => {
    let loadedCount = 0;
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `/sequence/ezgif-frame-${frameNum}.png`;
      
      const index = i - 1;
      img.onload = () => {
        imagesRef.current[index] = img;
        loadedCount++;
        setLoadedPercentage(Math.round((loadedCount / FRAME_COUNT) * 100));
        requestDraw();
      };
    }
  }, [requestDraw]);

  // Handle window resizing safely on mobile limits
  useEffect(() => {
    const handleResize = () => requestDraw();
    window.addEventListener('resize', handleResize);
    // Force an initial layout pass
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, [requestDraw]);

  return (
    <div ref={containerRef} className="relative h-[500dvh] w-full bg-[#121212]">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-[#121212]">
        
        {loadedPercentage < 25 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-500 font-mono text-xs z-0">
            <div className="w-32 h-1 bg-zinc-800 rounded-full mb-3 overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${loadedPercentage * 4}%` }} 
              />
            </div>
            Loading cinematic assets...
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full z-0 pointer-events-none"
        />
        
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
