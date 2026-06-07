import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const principles = [
  {
    id: "01",
    title: "Quality Craftsmanship",
    desc: "Every panel, edge, and curve receives meticulous attention. We treat detailing as a refined craft, utilizing techniques that safely cut, polish, and protect your vehicle's delicate surfaces without compromise."
  },
  {
    id: "02",
    title: "Premium Materials",
    desc: "We curate only the highest-grade ceramic coatings, self-healing PPF, and polishing compounds on the market. Better chemistry leads to superior durability and unrivaled gloss."
  },
  {
    id: "03",
    title: "Customer-Centric Experience",
    desc: "Transparent communication, accurate timelines, and a seamless drop-off/pickup process. We believe the luxury of our work should extend to how we treat our clients."
  },
  {
    id: "04",
    title: "Continuous Improvement",
    desc: "The automotive protection industry evolves rapidly. Our technicians undergo ongoing training and certification to master the latest technologies and methodologies."
  },
  {
    id: "05",
    title: "Local Commitment",
    desc: "Proudly serving St. Joseph and the broader Missouri/Kansas region. We stand behind our work and are here exactly when you need us, long after the service is complete."
  }
];

export function Principles() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-24 bg-[#0B0C10] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-[#094dad]/10 transform -translate-x-4 -translate-y-4 rounded-sm border border-[#094dad]/20"></div>
            <img 
              src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1200&auto=format&fit=crop" 
              alt="Technician polishing car paint" 
              className="absolute inset-0 object-cover w-full h-full rounded-sm filter grayscale-[30%] contrast-125"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0C10]/80 via-transparent to-transparent rounded-sm"></div>
          </motion.div>

          {/* Right Side: Accordion content */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 uppercase leading-snug">
              THE PRINCIPLES THAT <br />
              <span className="text-[#094dad]">DRIVE EVERY SERVICE</span> <br />
              WE PROVIDE.
            </h2>

            <div className="space-y-4">
              {principles.map((principle, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <div 
                    key={principle.id} 
                    className={`border-b ${isOpen ? 'border-[#094dad]' : 'border-white/10'} transition-colors duration-300 pb-2`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                    >
                      <div className="flex items-center space-x-6">
                        <span className={`font-mono text-sm ${isOpen ? 'text-[#094dad]' : 'text-gray-500'} group-hover:text-[#094dad] transition-colors`}>
                          {principle.id} /
                        </span>
                        <h4 className={`font-heading text-xl font-bold tracking-wide uppercase ${isOpen ? 'text-white' : 'text-gray-400'} group-hover:text-white transition-colors`}>
                          {principle.title}
                        </h4>
                      </div>
                      <div className={`p-2 rounded-full border ${isOpen ? 'border-[#094dad] text-[#094dad]' : 'border-white/10 text-gray-500'} group-hover:border-[#094dad] group-hover:text-[#094dad] transition-colors`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="pl-14 pr-12 pb-6 text-gray-400 font-light leading-relaxed">
                            {principle.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
