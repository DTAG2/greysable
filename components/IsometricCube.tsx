"use client";

import { useRef, useState, useCallback } from "react";

export default function IsometricCube() {
  const sphereRadius = 140;
  const containerRef = useRef<HTMLDivElement>(null);

  // Rotation state
  const [rotation, setRotation] = useState({ x: -20, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Longitude lines (vertical rings)
  const longitudeLines = [0, 30, 60, 90, 120, 150];

  // Latitude lines (horizontal rings at different heights)
  const latitudeAngles = [-60, -30, 0, 30, 60];

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;

    setRotation(prev => ({
      x: prev.x - deltaY * 0.2,
      y: prev.y + deltaX * 0.2,
    }));

    lastMousePos.current = { x: e.clientX, y: e.clientY };
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const deltaX = e.touches[0].clientX - lastMousePos.current.x;
    const deltaY = e.touches[0].clientY - lastMousePos.current.y;

    setRotation(prev => ({
      x: prev.x - deltaY * 0.2,
      y: prev.y + deltaX * 0.2,
    }));

    lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className="w-full aspect-square flex items-center justify-center">
      <div
        ref={containerRef}
        className="relative w-80 h-80 md:w-[420px] md:h-[420px] cursor-grab active:cursor-grabbing"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          touchAction: "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main rotating container */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          {/* Solid sphere shell - Longitude lines (meridians) */}
          {longitudeLines.map((angle, i) => (
            <div
              key={`long-${i}`}
              className="absolute top-1/2 left-1/2"
              style={{
                width: `${sphereRadius * 2}px`,
                height: `${sphereRadius * 2}px`,
                marginLeft: `-${sphereRadius}px`,
                marginTop: `-${sphereRadius}px`,
                borderRadius: "50%",
                border: "1px solid",
                borderColor: "var(--gray-600)",
                transformStyle: "preserve-3d",
                transform: `rotateY(${angle}deg)`,
              }}
            />
          ))}

          {/* Latitude lines (parallels) */}
          {latitudeAngles.map((lat, i) => {
            const latRadius = Math.cos((lat * Math.PI) / 180) * sphereRadius;
            const yOffset = Math.sin((lat * Math.PI) / 180) * sphereRadius;
            return (
              <div
                key={`lat-${i}`}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: `${latRadius * 2}px`,
                  height: `${latRadius * 2}px`,
                  marginLeft: `-${latRadius}px`,
                  marginTop: `-${latRadius}px`,
                  borderRadius: "50%",
                  border: "1px solid",
                  borderColor: "var(--gray-600)",
                  transformStyle: "preserve-3d",
                  transform: `rotateX(90deg) translateZ(${yOffset}px)`,
                }}
              />
            );
          })}

          {/* Equator ring - thicker */}
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              width: `${sphereRadius * 2}px`,
              height: `${sphereRadius * 2}px`,
              marginLeft: `-${sphereRadius}px`,
              marginTop: `-${sphereRadius}px`,
              borderRadius: "50%",
              border: "2px solid",
              borderColor: "var(--gray-500)",
              transformStyle: "preserve-3d",
              transform: "rotateX(90deg)",
            }}
          />

          {/* Tesseract - Outer cube */}
          <div
            className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2"
            style={{
              transformStyle: "preserve-3d",
              animation: "tesseractOuter 12s linear infinite",
            }}
          >
            <div className="absolute w-full h-full border border-gray-400" style={{ transform: "translateZ(40px)" }} />
            <div className="absolute w-full h-full border border-gray-400" style={{ transform: "translateZ(-40px)" }} />
            <div className="absolute w-full h-full border border-gray-400" style={{ transform: "rotateY(90deg) translateZ(40px)" }} />
            <div className="absolute w-full h-full border border-gray-400" style={{ transform: "rotateY(90deg) translateZ(-40px)" }} />
            <div className="absolute w-full h-full border border-gray-400" style={{ transform: "rotateX(90deg) translateZ(40px)" }} />
            <div className="absolute w-full h-full border border-gray-400" style={{ transform: "rotateX(90deg) translateZ(-40px)" }} />
          </div>

          {/* Tesseract - Inner cube */}
          <div
            className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2"
            style={{
              transformStyle: "preserve-3d",
              animation: "tesseractInner 8s linear infinite reverse",
            }}
          >
            <div className="absolute w-full h-full border border-gray-300 bg-gray-700/30" style={{ transform: "translateZ(16px)" }} />
            <div className="absolute w-full h-full border border-gray-300 bg-gray-700/30" style={{ transform: "translateZ(-16px)" }} />
            <div className="absolute w-full h-full border border-gray-300 bg-gray-700/30" style={{ transform: "rotateY(90deg) translateZ(16px)" }} />
            <div className="absolute w-full h-full border border-gray-300 bg-gray-700/30" style={{ transform: "rotateY(90deg) translateZ(-16px)" }} />
            <div className="absolute w-full h-full border border-gray-300 bg-gray-700/30" style={{ transform: "rotateX(90deg) translateZ(16px)" }} />
            <div className="absolute w-full h-full border border-gray-300 bg-gray-700/30" style={{ transform: "rotateX(90deg) translateZ(-16px)" }} />
          </div>

          {/* Connecting edges - tesseract links */}
          {[
            { x: -1, y: -1, z: -1 },
            { x: 1, y: -1, z: -1 },
            { x: -1, y: 1, z: -1 },
            { x: 1, y: 1, z: -1 },
            { x: -1, y: -1, z: 1 },
            { x: 1, y: -1, z: 1 },
            { x: -1, y: 1, z: 1 },
            { x: 1, y: 1, z: 1 },
          ].map((corner, i) => (
            <div
              key={`edge-${i}`}
              className="absolute top-1/2 left-1/2 w-px bg-gray-500"
              style={{
                height: "24px",
                transformOrigin: "center top",
                transform: `
                  translate(-50%, -50%)
                  translate3d(${corner.x * 16}px, ${corner.y * 16}px, ${corner.z * 16}px)
                  rotateX(${corner.y > 0 ? 180 : 0}deg)
                `,
              }}
            />
          ))}

          {/* Axis indicators - precision engineering look */}
          <div
            className="absolute top-1/2 left-1/2 h-px bg-gray-500"
            style={{
              width: `${sphereRadius * 2 + 20}px`,
              marginLeft: `-${sphereRadius + 10}px`,
              transform: "rotateY(0deg)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 h-px bg-gray-500"
            style={{
              width: `${sphereRadius * 2 + 20}px`,
              marginLeft: `-${sphereRadius + 10}px`,
              transform: "rotateY(90deg)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-px bg-gray-500"
            style={{
              height: `${sphereRadius * 2 + 20}px`,
              marginTop: `-${sphereRadius + 10}px`,
            }}
          />
        </div>

        {/* Ambient glow - matches site black background */}
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(47,47,47,0.3) 0%, transparent 70%)",
            animation: "glowPulse 4s ease-in-out infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes tesseractOuter {
          from {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          to {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(0deg);
          }
        }
        @keyframes tesseractInner {
          from {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          to {
            transform: rotateX(360deg) rotateY(0deg) rotateZ(360deg);
          }
        }
        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
