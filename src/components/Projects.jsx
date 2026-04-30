import { motion } from "framer-motion";
import portfolioData from "../data/portfolio-data.json";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import projectImg from "../assets/screenshot-project.png";

const Projects = () => {
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          variants={projectVariants}
          className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4 text-slate-900"
        >
          <span className="text-pink-600 font-mono text-xl md:text-3xl">02.</span>
          Featured Projects
          <div className="h-[1px] bg-slate-300 flex-grow ml-4 max-w-xs" />
        </motion.h2>

        <div className="flex flex-col gap-24">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={project.id} 
                variants={projectVariants}
                className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-0`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-3/5 relative group cursor-pointer hover-target">
                  <div className="absolute inset-0 bg-pink-200/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10 rounded-xl" />
                  <img 
                    src={projectImg}
                    alt={project.title} 
                    className="w-full h-auto object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl"
                  />
                </div>

                {/* Project Details */}
                <div className={`w-full lg:w-2/5 flex flex-col ${isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} z-20`}>
                  <p className="font-mono text-pink-600 mb-2 text-sm font-semibold">Featured Project</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800 hover:text-pink-500 transition-colors cursor-pointer hover-target">
                    {project.title}
                  </h3>
                  
                  <div className={`glass-panel p-6 rounded-xl mb-6 w-full ${isEven ? 'lg:-ml-12' : 'lg:-mr-12'} relative z-30 group hover:border-pink-300 transition-colors duration-300`}>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <ul className={`flex flex-wrap gap-4 font-mono text-sm text-slate-500 mb-8 font-medium ${isEven ? 'justify-end' : 'justify-start'}`}>
                    {project.tech.map(tech => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>

                  <div className={`flex items-center gap-6 ${isEven ? 'justify-end' : 'justify-start'}`}>
                    <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-target text-slate-600 hover:text-pink-600 transition-colors"
                    aria-label="GitHub Link">
                      <FiGithub size={24} />
                    </a>
                    <a href={project.demoLink} className="hover-target text-slate-600 hover:text-pink-500 transition-colors" aria-label="External Link">
                      <FiExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
