import { motion } from "framer-motion";
import portfolioData from "../data/portfolio-data.json";
import { cn } from "../utils/cn";

const About = () => {
  const { intro } = portfolioData.about;
  const skills = portfolioData.skills;

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
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
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
          <span className="text-pink-600 font-mono text-xl md:text-3xl">01.</span>
          About Me
          <div className="h-[1px] bg-slate-300 flex-grow ml-4 max-w-xs" />
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div variants={itemVariants} className="text-slate-600 text-lg leading-relaxed">
            <p className="mb-6">{intro}</p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing to open-source, 
              or refining my design sensibilities to bridge the gap between engineering and aesthetics.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            {Object.entries(skills).map(([category, skillList], idx) => (
              <div key={category}>
                <h3 className="text-slate-800 font-mono mb-4 flex items-center gap-2 text-sm uppercase tracking-wider font-semibold">
                  <span className="text-pink-500">&gt;</span> {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill) => (
                    <div
                      key={skill}
                      className={cn(
                        "px-4 py-2 rounded-md glass-panel text-sm text-slate-700 font-medium",
                        "hover:bg-pink-50 hover:border-pink-300 hover:text-pink-700 transition-all duration-300 cursor-default hover-target shadow-sm"
                      )}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
