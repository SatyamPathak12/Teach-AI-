"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [show, setShow] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    // Start animation (scale up and fade in)
    const timeout1 = setTimeout(() => setAnimate(true), 100);

    // Fade out
    const timeout2 = setTimeout(() => {
      setShow(false);
    }, 2500);

    // Remove from DOM
    const timeout3 = setTimeout(() => {
      setRemove(true);
    }, 3000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  if (remove) return null;

  return (
    <div 
      className={`fixed left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center bg-[#090E34] transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div 
        className={`relative transform transition-all duration-1000 ease-out ${
          animate ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-10"
        }`}
      >
        <Image
          src="/images/logo/teach-ai-logo.png"
          alt="Teach AI"
          width={400}
          height={100}
          className="h-auto w-auto"
          priority
        />
      </div>
    </div>
  );
};

export default Preloader;
