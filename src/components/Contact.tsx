
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-surface/30 border-t border-surfaceLight">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-neonGreen font-mono mb-4 text-sm tracking-widest uppercase">04. What's Next?</h2>
          <h3 className="text-4xl md:text-6xl font-bold font-sans tracking-tight mb-6">Get In Touch</h3>
          <p className="max-w-xl mx-auto text-textMuted text-lg leading-relaxed">
            I'm currently focused on building scalable, intelligent systems, but my inbox is always open. 
            Whether you have a challenging project, a business inquiry, or just want to connect, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <a 
              href="mailto:ahmedmurtazamalik@gmail.com" 
              className="flex items-center gap-4 text-textMuted hover:text-white group p-4 bg-surface rounded-lg border border-surfaceLight hover:border-neonGreen transition-all hover:bg-surfaceLight w-full md:w-80"
            >
              <div className="p-3 bg-background rounded-md group-hover:text-neonGreen transition-colors box-glow-green">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="font-mono text-sm uppercase text-white/50">Email</span>
                <span className="truncate">ahmedmurtazamalik@gmail.com</span>
              </div>
            </a>

            <a 
              href="https://linkedin.com/in/ahmed-murtaza-malik/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 text-textMuted hover:text-white group p-4 bg-surface rounded-lg border border-surfaceLight hover:border-neonPurple transition-all hover:bg-surfaceLight w-full md:w-80"
            >
              <div className="p-3 bg-background rounded-md group-hover:text-neonPurple transition-colors box-glow-purple">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-sm uppercase text-white/50">LinkedIn</span>
                <span>/in/ahmed-murtaza-malik</span>
              </div>
            </a>
            
            <a 
              href="https://github.com/ahmedmurtazamalik" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 text-textMuted hover:text-white group p-4 bg-surface rounded-lg border border-surfaceLight hover:border-white transition-all hover:bg-surfaceLight w-full md:w-80"
            >
              <div className="p-3 bg-background rounded-md transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Github className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-sm uppercase text-white/50">GitHub</span>
                <span>ahmedmurtazamalik</span>
              </div>
            </a>

            <div className="flex items-center gap-4 text-textMuted group p-4 bg-surface rounded-lg border border-surfaceLight w-full md:w-80">
              <div className="p-3 bg-background rounded-md">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-sm uppercase text-white/50">Phone</span>
                <span className="text-white">+923309509572</span>
              </div>
            </div>
          </motion.div>

          {/* Simple Email Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-shrink-0"
          >
             <a href="mailto:ahmedmurtazamalik@gmail.com" className="group relative flex flex-col items-center justify-center p-10 bg-surfaceLight border border-neonGreen/30 hover:border-neonGreen rounded-full h-48 w-48 transition-all hover:box-glow-green cursor-pointer">
                <Send className="w-10 h-10 text-neonGreen mb-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span className="font-mono font-bold tracking-widest uppercase text-sm group-hover:text-neonGreen transition-colors">Say Hello</span>
             </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
