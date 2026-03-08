"use client";

import { useState, useEffect, useRef } from "react";

export default function Cursor() {
  const [isFine, setIsFine] = useState(false);
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  const mouseRef = useRef({ x: -100, y: -100 });
  const ringRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setIsFine(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!isFine) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setDotPos({ x: e.clientX - 5, y: e.clientY - 5 });
    };

    const onMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsHovering(!!el.closest("a, button, [data-hover]"));
    };

    const tick = () => {
      ringRef.current.x += (mouseRef.current.x - ringRef.current.x - 18) * 0.12;
      ringRef.current.y += (mouseRef.current.y - ringRef.current.y - 18) * 0.12;
      setRingPos({ x: ringRef.current.x, y: ringRef.current.y });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isFine]);

  if (!isFine) return null;

  return (
    <>
      {/* Dot — follows mouse directly */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          left: dotPos.x,
          top: dotPos.y,
          width: 10,
          height: 10,
          backgroundColor: "#e8ff47",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: isHovering ? "scale(3)" : "scale(1)",
          transition: "transform 0.15s ease",
          mixBlendMode: "difference",
        }}
      />
      {/* Ring — lerps behind */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          left: ringPos.x,
          top: ringPos.y,
          width: 36,
          height: 36,
          border: "1px solid #e8ff47",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: 0.5,
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
