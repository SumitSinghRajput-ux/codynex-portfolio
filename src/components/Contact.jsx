import { useState } from "react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolio-data.json";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const iconMap = {
  FaGithub,
  FaLinkedin,
  FaXTwitter: FaTwitter
};

const Contact = () => {
  const { email, socials } = portfolioData.contact;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 text-center max-w-4xl mx-auto flex flex-col items-center relative z-10">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-pink-600 mb-4 tracking-widest text-sm font-semibold"
      >
        05. What's Next?
      </motion.p>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
      >
        Get In Touch
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-slate-600 max-w-xl mx-auto mb-12 text-lg"
      >
        I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative mb-20"
      >
        <button
          onClick={handleCopyEmail}
          className="hover-target px-8 py-4 bg-pink-50 border border-pink-200 text-pink-600 rounded-md font-mono hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all shadow-sm font-medium"
        >
          {copied ? "Email Copied!" : "Say Hello"}
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex gap-8 justify-center items-center"
      >
        {socials.map((social) => {
          const Icon = iconMap[social.icon] || FaGithub;
          return (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="hover-target text-slate-400 hover:text-pink-600 transition-colors duration-300 transform hover:-translate-y-1"
            >
              <Icon size={28} />
            </a>
          );
        })}
      </motion.div>
      
      <div className="mt-24 text-slate-400 font-mono text-sm">
        <p>Built with React, Vite & Tailwind</p>
        <p className="mt-2 text-slate-300">Inspired by minhpham.design</p>
      </div>
    </section>
  );
};

export default Contact;
