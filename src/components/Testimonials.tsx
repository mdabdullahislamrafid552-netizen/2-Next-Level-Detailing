import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "James L.",
    date: "1 month ago",
    text: "Absolutely mind-blowing results. The team ceramic coated my brand new 911, and the gloss is deeper than the day I picked it up from the dealership. Highly recommend Next Level to anyone who cares about their car.",
  },
  {
    name: "Sarah M.",
    date: "3 months ago",
    text: "Had full front PPF and window tint installed on my Model Y. Professional from start to finish. You literally cannot see the edges of the film. Their St. Joseph facility is immaculate.",
  },
  {
    name: "David H.",
    date: "2 weeks ago",
    text: "They revived my black truck's paint that was riddled with swirl marks from automatic car washes. The paint correction is top-tier. I will only be bringing my vehicles here from now on.",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#0B0C10] relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#094dad]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#094dad] font-bold tracking-widest uppercase text-sm">Real Results</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            WHAT OUR CLIENTS <br/> SAY ABOUT US
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/[0.02] border border-white/5 p-8 rounded-sm backdrop-blur-xl hover:bg-white/[0.04] transition-colors relative"
            >
              <div className="flex items-center space-x-1 mb-6 text-[#094dad]">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              
              <p className="text-gray-300 font-light leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                    <span className="text-gray-500 text-xs">{testimonial.date}</span>
                  </div>
                </div>
                {/* Google "G" Logo mock */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
