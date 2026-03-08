
import { motion } from 'framer-motion';
import { BookOpen, MapPin, Award, Terminal } from 'lucide-react';

export default function About() {
  const skills = [
    { category: 'Languages', items: ['C++', 'Python', 'Java', 'Rust', 'C#', 'SQL'] },
    { category: 'AI & ML', items: ['PyTorch', 'TensorFlow', 'Transformers', 'GANs', 'Diffusion Models'] },
    { category: 'HPC', items: ['CUDA', 'OpenCL', 'MPI', 'OpenMP', 'SIMD'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Linux', 'Wireshark'] },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono uppercase tracking-tight mb-4 flex items-center gap-4">
            <span className="text-neonPurple">01.</span> About_Me
            <div className="h-[1px] flex-1 bg-surfaceLight ml-4"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-textMuted text-lg leading-relaxed mb-6">
              I am a passionate <span className="text-neonGreen">AI & Systems Engineer</span> based in Islamabad, 
              focusing on Generative AI, Deep Learning, and High-Performance Computing. 
              My professional career is driven by a desire to architect robust software and 
              intelligent, scalable systems that solve complex business challenges.
            </p>
            
            <p className="text-textMuted text-lg leading-relaxed mb-8">
              Recently, I worked as an AI Intern at <span className="text-white font-medium">Automotive Artificial Intelligence GmbH</span>, 
              where I handled geospatial data for HD Lane-Level Mapping tailored for autonomous vehicle navigation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-textMuted p-4 rounded-lg bg-surface border border-surfaceLight">
                <MapPin className="text-neonPurple w-5 h-5 flex-shrink-0" />
                <span>Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-textMuted p-4 rounded-lg bg-surface border border-surfaceLight">
                <Award className="text-neonGreen w-5 h-5 flex-shrink-0" />
                <span>AI Implementation Specialist</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-textMuted p-4 rounded-lg bg-surface border border-surfaceLight sm:col-span-2">
                <BookOpen className="text-neonPurple w-5 h-5 flex-shrink-0" />
                <span>High-Performance Computing & Infrastructure</span>
              </div>
            </div>
          </motion.div>

          {/* Skills Component */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-surface border border-neonGreen/20 rounded-xl p-6 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neonGreen/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-surfaceLight">
              <Terminal className="text-neonGreen w-5 h-5" />
              <h3 className="text-xl font-mono font-bold">Tech_Stack</h3>
            </div>

            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-neonPurple font-mono text-sm mb-3 uppercase tracking-wider">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-surfaceLight hover:bg-neonGreen/10 hover:text-neonGreen border border-surfaceLight hover:border-neonGreen/50 text-textMuted text-sm font-mono rounded transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
