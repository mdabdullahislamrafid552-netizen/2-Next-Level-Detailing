import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const services = [
  {
    id: "ceramic",
    title: "CERAMIC",
    subtitle: "Dynamic Coating",
    desc: "Shield your paint with an ultra-slick, hydrophobic layer. Our certified ceramic coatings offer years of protection against environmental damage while maintaining a stunning candy-like gloss.",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "ppf",
    title: "PPF",
    subtitle: "Invisible Armor",
    desc: "Paint Protection Film (Clear Bra) is the ultimate defense against rock chips, scratches, and road debris. Self-healing technology keeps your finish looking flawless.",
    image: "https://images.unsplash.com/photo-1604928148866-26e63283f5fb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "tint",
    title: "TINT",
    subtitle: "Heat Rejection",
    desc: "Premium ceramic window tinting blocks 99% of UV rays and significantly reduces cabin heat, offering superior comfort, privacy, and interior protection.",
    image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "detail",
    title: "DETAIL",
    subtitle: "Restorative Care",
    desc: "From extensive paint correction to deep interior cleansing, our detailing services breathe life back into your vehicle, restoring it to better-than-factory condition.",
    image: "https://images.unsplash.com/photo-1605810738245-56041695de9c?q=80&w=1200&auto=format&fit=crop"
  }
];

export function ServicesAccordion() {
  const [activePanel, setActivePanel] = useState<string>("ceramic");

  return (
    <section id="services" className="py-24 bg-hexagons relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          NEXT LEVEL FILM & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#094dad] to-white/50">DETAIL EXPERTS</span>
        </h2>
        <p className="text-gray-400 max-w-xl font-light">Explore our specialized services designed to protect, enhance, and maintain the beauty of your investment.</p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Accordion Container */}
        <div className="flex flex-col lg:flex-row h-[800px] lg:h-[600px] w-full gap-2 lg:gap-4 overflow-hidden rounded-sm">
          {services.map((service) => {
            const isActive = activePanel === service.id;
            
            return (
              <motion.div
                key={service.id}
                layout
                onClick={() => setActivePanel(service.id)}
                className={`relative cursor-pointer overflow-hidden group 
                  ${isActive ? 'flex-[2_2_0%] lg:flex-[3_3_0%]' : 'flex-1'}
                  transition-all duration-700 ease-[0.16,1,0.3,1] bg-[#1a1c23] border border-white/5`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className={`object-cover w-full h-full transition-transform duration-1000 ${isActive ? 'scale-105' : 'scale-100 opacity-60 grayscale-[50%]'} group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500
                    ${isActive ? 'from-[#0B0C10] via-[#0B0C10]/40 to-transparent' : 'from-[#0B0C10] via-[#0B0C10]/80 to-[#0B0C10]/20'}`} 
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  <div className={`flex items-center justify-between mb-4 lg:mb-6 transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-2'}`}>
                    <div>
                      <p className="text-[#094dad] text-xs md:text-sm font-bold tracking-widest uppercase mb-1">
                        {service.subtitle}
                      </p>
                      <h3 className={`font-heading font-bold uppercase transition-all duration-500
                        ${isActive ? 'text-3xl md:text-5xl text-white' : 'text-2xl md:text-3xl text-white/70'}`}>
                        {service.title}
                      </h3>
                    </div>
                    {!isActive && (
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 hidden lg:flex group-hover:border-[#094dad] group-hover:text-[#094dad] transition-colors">
                        <Plus className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${isActive ? 'max-h-64 opacity-100 delay-200' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed mb-6 max-w-sm lg:max-w-md">
                      {service.desc}
                    </p>
                    <a href={`#${service.id}`} className="inline-flex items-center text-xs font-bold text-[#094dad] tracking-widest uppercase hover:text-white transition-colors">
                      Learn More
                      <motion.span 
                        initial={{ x: 0 }} 
                        animate={{ x: isActive ? 5 : 0 }} 
                        className="ml-2"
                      >
                        →
                      </motion.span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
