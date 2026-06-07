import { ArrowRight } from 'lucide-react';

const teslaCards = [
  {
    num: "01",
    title: "ARMOR FOR PAINT",
    desc: "Tesla's notoriously soft paint requires robust protection against chips, chemical etching, and premature clear-coat failure.",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "FACE THE ELEMENTS",
    desc: "Ceramic coatings create a sacrificial layer over the paint, making washing a breeze and preventing dirt from bonding to the surface.",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "COOL & COMFORTABLE",
    desc: "Massive glass roofs demand high heat-rejection infrared tinting to keep cabin temperatures strictly optimized and manageable.",
    image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "FLAWLESS START",
    desc: "Protecting your vehicle immediately upon delivery ensures zero miles of damage. We specialize in day-one PPF wrap packages.",
    image: "https://images.unsplash.com/photo-1620891549495-2ca739c9f28d?q=80&w=800&auto=format&fit=crop"
  }
];

export function TeslaFocus() {
  return (
    <section className="py-24 bg-[#0B0C10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase mt-2">
              SPECIALIZING IN <br />
              <span className="text-[#094dad]">TESLA PROTECTION</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm font-light mt-6 md:mt-0">
            We understand the unique challenges and vulnerabilities of EV manufacturing. Protect your pristine surfaces with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teslaCards.map((card, i) => (
            <div 
              key={i}
              className="group relative overflow-hidden h-[450px] bg-[#1a1c23] rounded-sm cursor-pointer"
            >
              {/* Background Image Wrapper */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover filter grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Fade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>

              {/* Content Box */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-[#094dad] font-mono text-xs tracking-widest mb-4 opacity-70 border-b border-white/10 pb-2 w-max">
                  {card.num} / TESLA FOCUS
                </span>
                
                {/* Translating Wrapper */}
                <div className="transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] flex flex-col">
                  <h3 className="text-2xl font-heading font-bold text-white uppercase mb-4 leading-tight">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm text-gray-300 font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-20">
                    {card.desc}
                  </p>
                  
                  <button className="flex items-center text-xs font-bold text-[#094dad] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 w-max hover:text-white pb-1 border-b border-transparent hover:border-[#094dad]">
                    Explore Packages
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
