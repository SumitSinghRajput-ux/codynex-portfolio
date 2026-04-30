import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background text-gray-200"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center max-w-sm w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-8 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple"
        >
          SUMIT.KUMAR
        </motion.div>

        <div className="w-full h-1 bg-surface rounded-full overflow-hidden relative border border-border">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-neonBlue to-neonPurple"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        
        <div className="w-full flex justify-between mt-4 text-xs font-mono text-gray-500">
          <span>Initializing workspace...</span>
          <span>{progress > 100 ? 100 : progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
