
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-textMain">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <footer className="py-8 text-center border-t border-surfaceLight">
           <p className="text-textMuted font-mono text-sm">
             Designed & Built by <span className="text-neonGreen">Ahmed Murtaza Malik</span>
           </p>
           <p className="text-textMuted/50 font-mono text-xs mt-2">© 2026. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
