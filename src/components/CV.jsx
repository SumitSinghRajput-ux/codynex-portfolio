import { motion } from "framer-motion";
import portfolioData from "../data/portfolio-data.json";
import { FaDownload, FaEye } from "react-icons/fa";

const CV = () => {
  const cvUrl = `${import.meta.env.BASE_URL}Sumit_Kumar_CV.pdf`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="cv" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4 text-slate-900"
        >
          <span className="text-pink-600 font-mono text-xl md:text-3xl">04.</span>
          Resume / CV
          <div className="h-[1px] bg-slate-300 flex-grow ml-4 max-w-xs" />
        </motion.h2>

        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto flex flex-col items-center justify-center space-y-6 hover:border-pink-300 transition-colors duration-300 shadow-xl shadow-pink-500/5">
          <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-2 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">Curriculum Vitae</h3>
          <p className="text-slate-600 max-w-md mx-auto">
            Get a comprehensive overview of my skills, experience, and educational background. Feel free to view or download my resume.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-pink-50 text-pink-600 border border-pink-200 rounded-md font-mono hover:bg-pink-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm font-medium"
            >
              <FaEye /> View Resume
            </a>
            <a 
              href={cvUrl}
              download
              className="px-8 py-3 bg-pink-600 text-white rounded-md font-mono hover:bg-pink-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md font-medium"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CV;
