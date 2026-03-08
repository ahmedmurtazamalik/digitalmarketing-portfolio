
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "AI & Machine Learning Engineering",
      icon: <BrainCircuit className="w-8 h-8 text-neonGreen" />,
      description: "Developing custom predictive models, Generative AI applications (like RAG systems), and deep learning architectures to automate and optimize complex business processes.",
      glowColor: "hover:box-glow-green hover:border-neonGreen/50",
      accent: "bg-neonGreen/10"
    },
    {
      title: "High-Performance Computing",
      icon: <Cpu className="w-8 h-8 text-neonPurple" />,
      description: "Optimizing software and algorithms using CUDA, MPI, and OpenMP to significantly reduce processing times for data-heavy and mission-critical business tasks.",
      glowColor: "hover:box-glow-purple hover:border-neonPurple/50",
      accent: "bg-neonPurple/10"
    },
    {
      title: "Software Engineering & Security",
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      description: "Building robust software systems and implementing security best practices—from low-level compiler design to network vulnerability assessments—ensuring data integrity.",
      glowColor: "hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:border-white/50",
      accent: "bg-white/10"
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-surface/50 border-y border-surfaceLight">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-right flex justify-end"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono uppercase tracking-tight mb-4 flex items-center gap-4 flex-row-reverse">
            <span className="text-neonGreen">02.</span> Technical_Services
            <div className="h-[1px] w-32 md:w-64 bg-surfaceLight mr-4"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-background border border-surfaceLight p-8 rounded-xl transition-all duration-300 group ${service.glowColor}`}
            >
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${service.accent}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-mono text-white tracking-wide">
                {service.title}
              </h3>
              <p className="text-textMuted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
