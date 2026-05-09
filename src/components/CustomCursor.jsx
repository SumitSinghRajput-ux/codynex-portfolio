import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hover-target")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      height: 20,
      width: 20,
      backgroundColor: "#e7f9a9", // New Theme Accent
      borderRadius: "50%",
      transition: { type: "spring", stiffness: 700, damping: 30, mass: 0.5 },
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: "rgba(231, 249, 169, 0.2)", // New Theme Accent with opacity
      border: "1px solid #e7f9a9",
      borderRadius: "50%",
      transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
    },
  };

  // Hide cursor if it's off-screen initially
  if (mousePosition.x === -100) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block backdrop-blur-[1px]"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
    />
  );
};

export default CustomCursor;
