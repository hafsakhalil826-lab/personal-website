"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  color: string;
  alpha: number;
  speed: number;
  twinkleSpeed: number;
}

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Color palette matching your pinkish theme & sparkling gold/white
    const STAR_COLORS = [
      "rgba(244, 63, 94, ",   // Pinkish / Rose
      "rgba(251, 113, 133, ", // Soft Pink
      "rgba(251, 191, 36, ",  // Soft Gold/Amber
      "rgba(226, 232, 240, ", // Crisp Sparkle White
    ];

    // Generate 60 floating stars
    const stars: Star[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      alpha: Math.random(),
      speed: Math.random() * 0.3 + 0.1,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
    }));

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        // Floating motion
        star.y -= star.speed;
        if (star.y < -10) star.y = height + 10;

        // Twinkle effect
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${Math.abs(star.alpha)})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}