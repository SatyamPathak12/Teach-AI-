"use client";

import { useState, ReactNode } from "react";

interface CursorBorderSectionProps {
  children: ReactNode;
  className?: string;
}

const CursorBorderSection = ({ children, className = "" }: CursorBorderSectionProps) => {
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

  const getSectionStyle = () => {
    if (!isHovered) return {};

    const { x, y } = mousePosition;

    return {
      backgroundImage: `radial-gradient(600px circle at ${x}px ${y}px, rgba(74, 108, 247, 0.3), transparent 40%)`,
    };
  };

  return (
    <div
      className={`rounded-3xl p-8 md:p-12 lg:p-16 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={getSectionStyle()}
    >
      {children}
    </div>
  );
};

export default CursorBorderSection;
