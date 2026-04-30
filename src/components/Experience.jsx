import { motion } from "framer-motion";
import portfolioData from "../data/portfolio-data.json";

const Experience = () => {
  const { experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-3xl mx-auto relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4 text-slate-900"
        >
          <span className="text-pink-600 font-mono text-xl md:text-3xl">03.</span>
          Experience
          <div className="h-[1px] bg-slate-300 flex-grow ml-4" />
        </motion.h2>

        <div className="relative border-l-2 border-pink-200 ml-4 md:ml-0">
          {experience.map((exp, idx) => (
            <motion.div 
              key={exp.id} 
              variants={itemVariants}
              className="mb-12 ml-8 relative hover-target group"
            >
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-pink-400 group-hover:bg-pink-500 transition-colors duration-300 shadow-md" />
              
              <p className="font-mono text-pink-600 font-semibold text-sm mb-1">{exp.year}</p>
              <h3 className="text-xl font-bold text-slate-800 mb-1">{exp.title}</h3>
              <p className="text-slate-500 font-medium mb-4">{exp.company}</p>
              <p className="text-slate-600 leading-relaxed text-sm">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
