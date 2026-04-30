import { motion } from "framer-motion";
import portfolioData from "../data/portfolio-data.json";

const Hero = () => {
  const { name, role, tagline } = portfolioData.hero;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background glowing orbs - now using pinks/whites */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300/40 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-300/40 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-pulse delay-1000" />

      <div className="z-10 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-pink-600 font-mono mb-4 tracking-wider uppercase text-sm font-semibold"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-slate-900"
        >
          {name}.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-8 text-slate-600"
        >
          I'm a {role}.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="hover-target relative px-8 py-4 bg-white/40 backdrop-blur-md text-slate-900 font-medium rounded-full overflow-hidden group border border-white/60 hover:border-pink-300 shadow-xl shadow-pink-500/5 transition-all duration-300"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/50 to-rose-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="hover-target px-8 py-4 text-slate-600 hover:text-pink-600 transition-colors duration-300 relative group font-medium"
          >
            Contact Me
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full duration-300" />
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-slate-400 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
      </motion.div>
    </section>
  );
};

export default Hero;
