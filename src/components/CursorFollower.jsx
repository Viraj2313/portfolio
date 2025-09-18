import { useEffect, useState, useRef } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    let targetX = 0,
      targetY = 0,
      currentX = 0,
      currentY = 0;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.1);
      currentY = lerp(currentY, targetY, 0.1);
      setPosition({ x: currentX, y: currentY });
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setIsMoving(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsMoving(false), 100);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timeoutRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: `translate(-50%, -50%) scale(${isMoving ? 0.9 : 1})`,
  };

  return (
    <div
      style={cursorStyle}
      className="pointer-events-none fixed z-50 w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-md transition-all duration-150 ease-out"
    />
  );
};

export default CursorFollower;
