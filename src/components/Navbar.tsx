import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-background/80 backdrop-blur-md border-b-neonGreen/20 shadow-[0_4px_30px_rgba(57,255,20,0.05)]' : 'bg-transparent'
      }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="p-2 rounded-lg bg-surfaceLight border border-neonGreen/30 group-hover:border-neonGreen transition-colors box-glow-green">
              <Code2 className="text-neonGreen w-6 h-6" />
            </div>
            <span className="font-mono font-bold text-xl tracking-wider uppercase hidden sm:block">
              Ahmed<span className="text-neonGreen">.</span>Murtaza
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-mono text-sm text-textMuted hover:text-neonGreen transition-colors duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neonGreen transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textMuted hover:text-white p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-surface border-b border-neonGreen/20 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-textMuted hover:text-neonGreen hover:bg-surfaceLight block px-3 py-2 rounded-md text-base font-mono transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
