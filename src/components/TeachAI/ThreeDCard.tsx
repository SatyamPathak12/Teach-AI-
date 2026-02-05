"use client";

import React, { useRef, useState } from "react";

const ThreeDCard = ({ children, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -25; // Max rotation 25deg
    const rotateY = ((x - centerX) / centerX) * 25;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setScale(1.1);
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setScale(1);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${scale}, ${scale}, ${scale})`,
        boxShadow: scale > 1 ? `${-rotation.y}px ${rotation.x * 0.5 + 10}px 30px rgba(74, 108, 247, 0.25)` : undefined,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

export default ThreeDCard;
