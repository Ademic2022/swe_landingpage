"use client";

import { useScrollProgress } from "../hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 2,
        width: `${progress}%`,
        backgroundColor: "#ff3c00",
        zIndex: 10000,
        transition: "width 0.1s linear",
        pointerEvents: "none",
      }}
    />
  );
}
