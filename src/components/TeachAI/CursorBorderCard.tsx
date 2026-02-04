"use client";

import { useState, ReactNode } from "react";

interface CursorBorderCardProps {
  children: ReactNode;
  className?: string;
}

const CursorBorderCard = ({ children, className = "" }: CursorBorderCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getCardStyle = () => {
    if (!isHovered) {
      return {
        boxShadow: 'none',
        borderColor: 'transparent',
      };
    }

    const rect = { width: 400, height: 300 }; // Approximate card dimensions
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - centerX, 2) + Math.pow(mousePosition.y - centerY, 2)
    );
    const intensity = Math.max(0, 1 - distance / 400);

    return {
      boxShadow: `0 0 ${20 + intensity * 30}px rgba(255, 165, 0, ${0.5 + intensity * 0.5}), 
                  0 0 ${40 + intensity * 60}px rgba(255, 140, 0, ${0.3 + intensity * 0.4}),
                  inset 0 0 ${60 + intensity * 80}px rgba(255, 165, 0, ${0.1 + intensity * 0.2})`,
      borderColor: `rgba(255, 165, 0, ${0.3 + intensity * 0.7})`,
      transition: 'box-shadow 0.2s ease-out, border-color 0.2s ease-out',
    };
  };

  return (
    <div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={getCardStyle()}
    >
      {children}
    </div>
  );
};

export default CursorBorderCard;
