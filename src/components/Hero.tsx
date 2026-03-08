
import { motion } from 'framer-motion';
import { ChevronRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonGreen/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonPurple/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surfaceLight border border-neonPurple/30 mb-8 box-glow-purple"
        >
          <Terminal className="w-4 h-4 text-neonPurple" />
          <span className="font-mono text-sm text-neonPurple tracking-wide">HELLO_WORLD.exe</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Transforming Data into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonGreen to-neonPurple text-glow-green">
            Intelligent Systems
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-textMuted mb-10 leading-relaxed font-light"
        >
          Leveraging advanced AI, Machine Learning, and High-Performance Computing to solve complex business challenges and drive innovation.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#projects" className="group relative px-8 py-4 bg-neonGreen text-black font-mono font-bold uppercase tracking-wider rounded-md overflow-hidden transition-all hover:box-glow-green flex items-center justify-center gap-2">
            <span className="relative z-10">View My Work</span>
            <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20 z-0"></div>
          </a>
          
          <a href="#contact" className="px-8 py-4 bg-surface border border-surfaceLight hover:border-neonPurple text-white font-mono uppercase tracking-wider rounded-md transition-all hover:box-glow-purple flex items-center justify-center">
            Let's Connect
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-textMuted/50 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-textMuted/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
