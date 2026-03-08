
import { motion } from 'framer-motion';
import { FolderGit2, ArrowUpRight, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Multimodal RAG System",
      category: "Artificial Intelligence",
      objective: "Enhance search accuracy for semantic product search.",
      strategy: "Integrated text and image data using advanced generative AI and deep learning models to enable highly accurate cross-modal retrieval.",
      tech: ["PyTorch", "Transformers", "Python"],
      color: "group-hover:text-neonPurple"
    },
    {
      title: "HD Lane-Level Mapping",
      category: "AI Internship at AAI GmbH",
      objective: "Improve automated agent navigation for autonomous vehicles.",
      strategy: "Handled dynamic geospatial data processing to create precise, scalable autonomous vehicle maps for real-world navigation simulation.",
      tech: ["Python", "Geospatial Data", "Linux"],
      color: "group-hover:text-neonGreen"
    },
    {
      title: "GANs vs. Diffusion Optimization",
      category: "Generative AI",
      objective: "Optimize generative AI inference for consumer GPUs.",
      strategy: "Compared downscaled Generative Adversarial Networks against Diffusion models to find optimal performance-to-quality trade-offs.",
      tech: ["PyTorch", "CUDA", "GANs"],
      color: "group-hover:text-white"
    },
    {
      title: "DNA Sequence Alignment Cluster",
      category: "High-Performance Computing",
      objective: "Accelerate complex bioinformatics processing tasks.",
      strategy: "Implemented a high-performance cluster-based solution for Multiple Sequence Alignment scaling computation linearly using MPI.",
      tech: ["C++", "MPI", "Linux Cluster"],
      color: "group-hover:text-neonGreen"
    },
    {
      title: "Butterfly Computing Optimizations",
      category: "Parallel Computing",
      objective: "Enhance algorithmic parallel processing efficiency.",
      strategy: "Developed low-level parallel optimizations for Butterfly Computing Algorithms, drastically reducing execution time using MPI and OpenMP.",
      tech: ["C++", "OpenMP", "MPI"],
      color: "group-hover:text-neonPurple"
    },
    {
      title: "Custom Language Compiler Phase",
      category: "Software Engineering",
      objective: "Architect robust software and compiler foundation.",
      strategy: "Designed and implemented a modular front-end compiler phase for a custom programming language utilizing robust object-oriented patterns.",
      tech: ["C++", "Java", "Object-Oriented Design"],
      color: "group-hover:text-white"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono uppercase tracking-tight mb-4 flex items-center gap-4">
            <span className="text-neonPurple">03.</span> Featured_Projects
            <div className="h-[1px] flex-1 bg-surfaceLight ml-4"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-surface border border-surfaceLight hover:border-neonPurple/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-surfaceLight/50 cursor-pointer flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <FolderGit2 className={`w-10 h-10 text-neonGreen transition-colors duration-300 ${project.color}`} />
                <div className="flex gap-2">
                  <a href="#" className="p-1 text-textMuted hover:text-white transition-colors" aria-label="GitHub Repository">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-1 text-textMuted hover:text-white transition-colors" aria-label="External Link">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 font-onto text-white group-hover:text-neonPurple transition-colors duration-300">
                {project.title}
              </h3>
              
              <div className="text-xs font-mono text-neonGreen mb-4 uppercase tracking-wider bg-neonGreen/10 self-start px-2 py-1 rounded">
                {project.category}
              </div>

              <div className="flex-1">
                <p className="text-textMain text-sm mb-2 font-medium">
                  <span className="text-textMuted">Objective:</span> {project.objective}
                </p>
                <p className="text-textMuted text-sm mb-6 leading-relaxed">
                  <span className="text-white/70">Strategy:</span> {project.strategy}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-surfaceLight flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="font-mono text-xs text-textMuted">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://github.com/ahmedmurtazamalik" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 group px-6 py-3 border border-surfaceLight hover:border-neonGreen rounded-md transition-all">
            <span className="font-mono text-sm tracking-wide group-hover:text-neonGreen transition-colors">View More on GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:text-neonGreen transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
