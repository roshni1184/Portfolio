import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../hooks/useMousePosition";

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);

    const handleMouseOver = (e) => {
      const target = e.target;
      const clickable =
        target.closest("a, button, [role='button'], input, textarea, .cursor-pointer");
      setIsPointer(Boolean(clickable));
    };
    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="custom-cursor fixed top-0 left-0 z-[9998] rounded-full border border-primary/70"
        animate={{
          x: x - (isPointer ? 24 : 12),
          y: y - (isPointer ? 24 : 12),
          width: isPointer ? 48 : 24,
          height: isPointer ? 48 : 24,
          opacity: isPointer ? 0.6 : 0.4,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
      />
      <motion.div
        className="custom-cursor fixed top-0 left-0 z-[9998] w-1.5 h-1.5 rounded-full bg-primary"
        animate={{ x: x - 3, y: y - 3 }}
        transition={{ type: "spring", damping: 40, stiffness: 900 }}
      />
    </>
  );
}
