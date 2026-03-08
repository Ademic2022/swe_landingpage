"use client";

import { useState, useEffect, useRef } from "react";

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
}

export function useCursor(enabled: boolean): CursorState {
  const [state, setState] = useState<CursorState>({
    x: -100,
    y: -100,
    isHovering: false,
  });

  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const hoverable = el.closest("a, button, [data-hover]");
      setState((prev) => ({ ...prev, isHovering: !!hoverable }));
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.12);
      current.current.y = lerp(current.current.y, target.current.y, 0.12);
      setState((prev) => ({
        ...prev,
        x: current.current.x,
        y: current.current.y,
      }));
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [enabled]);

  return state;
}
