import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import CV from "./components/CV";
import Contact from "./components/Contact";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Basic SEO meta tags updates if needed, though most are handled in index.html
    document.title = "Sumit Kumar | Frontend Developer";
  }, []);

  return (
    <div className="bg-fluid min-h-screen font-sans text-slate-800 relative">
      <div className="noise-overlay"></div>
      <AnimatePresence>
        {loading && <Loader key="loader" onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />
      <ScrollProgress />

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full flex flex-col mx-auto overflow-hidden"
        >
          <Hero />
          <About />
          <Projects />
          <Experience />
          <CV />
          <Contact />
        </motion.main>
      )}
    </div>
  );
}

export default App;
