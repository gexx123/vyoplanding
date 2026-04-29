"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";

export default function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const previousValue = useRef(0);

  useEffect(() => {
    const controls = animate(previousValue.current, value, {
      duration: previousValue.current === 0 ? duration : 0.5,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      ease: "easeOut",
    });
    
    previousValue.current = value;
    
    return () => controls.stop();
  }, [value, duration]);

  return <span>{displayValue.toLocaleString()}</span>;
}
