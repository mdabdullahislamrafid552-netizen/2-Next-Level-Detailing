import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = ['Ceramic Coatings', 'PPF', 'Colored PPF', 'Window Tinting', 'Paint Correction', 'Detailing'];

  return (
    <header className="fixed w-full top-0 z-50 bg-[#0B0C10]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://detailingnextlevel.com/wp-content/uploads/2025/04/logonooctagon-768x293.webp" 
              alt="Next Level Detailing Logo" 
              className="h-20 md:h-24 w-auto object-contain"
            />
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase">Home</a>
            
            <div 
              className="relative py-8" 
              onMouseEnter={() => setIsServicesOpen(true)} 
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase">
                Services <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-8 w-64 bg-[#0B0C10]/95 backdrop-blur-2xl border border-white/10 overflow-hidden shadow-2xl shadow-[#094dad]/5 pt-2"
                  >
                    {services.map((service) => (
                      <a 
                        key={service} 
                        href={`#${service.toLowerCase().replace(/ /g, '-')}`} 
                        className="block px-6 py-3 text-sm text-gray-400 hover:text-[#094dad] hover:bg-[#094dad]/5 transition-all border-b border-white/5 last:border-0"
                      >
                        {service}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+15555555555" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              (816) 555-0199
            </a>
            <a 
              href="#quote" 
              className="inline-flex items-center justify-center px-7 py-3.5 border border-transparent text-sm font-bold uppercase tracking-widest rounded-sm text-[#0B0C10] bg-[#094dad] hover:bg-white hover:shadow-[0_0_20px_rgba(9,77,173,0.4)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#094dad] focus:ring-offset-[#0B0C10]"
            >
              Get A Quote
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B0C10] border-t border-white/10 flex flex-col"
          >
            <div className="px-4 pt-8 pb-12 space-y-4 flex flex-col flex-1">
              <a href="#" className="block px-3 py-4 text-2xl font-light text-white border-b border-white/10">Home</a>
              <div className="space-y-2 py-4 border-b border-white/10">
                <span className="block px-3 text-sm tracking-widest text-[#094dad] uppercase mb-4">Services</span>
                {services.map((service) => (
                  <a key={service} href={`#${service.toLowerCase().replace(/ /g, '-')}`} className="block px-6 py-2 text-xl font-light text-gray-300">
                    {service}
                  </a>
                ))}
              </div>
              <a href="#" className="block px-3 py-4 text-2xl font-light text-white border-b border-white/10">About</a>
              <a href="#" className="block px-3 py-4 text-2xl font-light text-white border-b border-white/10">Contact</a>
              
              <div className="mt-auto px-3 pb-8">
               <a href="#quote" className="w-full inline-flex items-center justify-center px-6 py-4 text-lg font-bold uppercase tracking-wider text-[#0B0C10] bg-[#094dad] rounded-sm">
                 Get A Quote
               </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
