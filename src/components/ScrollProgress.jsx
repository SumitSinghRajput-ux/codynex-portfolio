import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-400 via-rose-500 to-pink-600 transform origin-left z-[9000]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
