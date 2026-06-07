import { motion } from 'motion/react';

const valueProps = [
  {
    number: "01",
    title: "EVERYDAY VEHICLES WELCOME",
    desc: "We treat daily drivers with the same uncompromising care as luxury exotics."
  },
  {
    number: "02",
    title: "EXPERT CRAFTSMANSHIP",
    desc: "Certified technicians trained in advanced paint correction and paint protection film."
  },
  {
    number: "03",
    title: "CONVENIENCE INCLUDED",
    desc: "Seamless drop-off and pickup options at our state-of-the-art St. Joseph facility."
  }
];

export function ValueProps() {
  return (
    <section className="bg-[#0B0C10] border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {valueProps.map((prop, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="py-12 md:py-16 px-6 lg:px-12 group"
            >
              <div className="flex items-baseline space-x-4 mb-4">
                <span className="text-3xl font-heading font-light text-white/20 group-hover:text-[#094dad] transition-colors">{prop.number}</span>
                <span className="text-[#094dad] opacity-50 font-mono text-sm">/</span>
                <h3 className="text-sm font-bold tracking-widest text-white uppercase leading-snug">
                  {prop.title}
                </h3>
              </div>
              <p className="text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                {prop.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
