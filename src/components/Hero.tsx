import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://detailingnextlevel.com/wp-content/uploads/2025/08/Next-Level-HP.png" 
          alt="Cinematic car detail" 
          className="object-cover w-full h-full scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C10] via-[#0B0C10]/80 to-[#0B0C10]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-black/30" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'69.2820323027551\' viewBox=\'0 0 40 69.2820323027551\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 69.282v-15.396l-13.333-7.698v-15.396l13.333-7.698l13.333 7.698v15.396z\' fill=\'%23094dad\' fill-opacity=\'0.02\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#094dad] animate-pulse" />
            <span className="text-xs font-medium tracking-widest text-gray-300 uppercase">St. Joseph's Premier Detailer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[1.05] tracking-tight mb-8 drop-shadow-2xl">
            NEXT LEVEL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">PROTECTION.</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10">
            Uncompromising automotive detailing and advanced protection. We preserve perfection so you can drive with absolute confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#quote" 
              className="inline-flex items-center justify-between px-8 py-4 border border-transparent text-sm font-bold uppercase tracking-wider rounded-sm text-[#0B0C10] bg-[#094dad] hover:bg-white hover:shadow-[0_0_30px_rgba(9,77,173,0.3)] transition-all duration-300 group"
            >
              Get A Quote
              <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-white/60 text-sm font-bold uppercase tracking-wider rounded-sm text-white bg-white/5 backdrop-blur-md transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-8 lg:left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
      <div className="absolute right-8 lg:right-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
    </section>
  );
}
