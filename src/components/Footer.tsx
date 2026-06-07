import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer id="quote" className="bg-[#0B0C10] relative pt-24 z-10 border-t border-[#094dad]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info & Map */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white uppercase mb-4 leading-tight">
              GET A FREE QUOTE <br />
              <span className="text-[#094dad]">FOR YOUR VEHICLE.</span>
            </h2>
            <p className="text-gray-400 font-light mb-12 max-w-md">
              Secure your appointment today. Quality profiling, surface inspection, and premium installations await.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[#094dad] mt-1 shrink-0" />
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Call Us</h4>
                    <a href="tel:+18165550199" className="text-gray-400 hover:text-[#094dad] transition-colors">(816) 555-0199</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-[#094dad] mt-1 shrink-0" />
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Email Us</h4>
                    <a href="mailto:info@nextleveldetailing.com" className="text-gray-400 hover:text-[#094dad] transition-colors">info@nextleveldetailing.com</a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#094dad] mt-1 shrink-0" />
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Located</h4>
                    <p className="text-gray-400">123 Detailer Ave<br/>St. Joseph, MO 64501</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#094dad] mt-1 shrink-0" />
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Hours</h4>
                    <p className="text-gray-400">Mon - Fri: 8am - 6pm<br/>Sat: by Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Mode Map Hack (CSS Filter Trick on standard embedded map) */}
            <div className="w-full h-[250px] rounded-sm overflow-hidden border border-white/10 bg-gray-900">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154443.3400507204!2d-94.9458998!3d39.7570487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e008aa2dbb0ac5%3A0x6ecabfdcad89cf6!2sSt.%20Joseph%2C%20MO!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%) grayscale(20%)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: The High-End Form */}
          <div className="bg-[#101217] p-8 md:p-10 rounded-sm border border-white/5 shadow-2xl relative overflow-hidden">
             {/* Decorative form accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#094dad]/10 blur-3xl" />

            <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="block w-full px-0 py-3 text-white bg-transparent border-0 border-b border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#094dad] peer" 
                    placeholder=" "
                  />
                  <label htmlFor="name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#094dad] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="block w-full px-0 py-3 text-white bg-transparent border-0 border-b border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#094dad] peer" 
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#094dad] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="tel" 
                    id="phone" 
                    className="block w-full px-0 py-3 text-white bg-transparent border-0 border-b border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#094dad] peer" 
                    placeholder=" "
                  />
                  <label htmlFor="phone" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#094dad] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="vehicle" 
                    required
                    className="block w-full px-0 py-3 text-white bg-transparent border-0 border-b border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#094dad] peer" 
                    placeholder=" "
                  />
                  <label htmlFor="vehicle" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#094dad] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Vehicle Make/Model/Year</label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative">
                  <select 
                    id="services" 
                    defaultValue=""
                    className="block w-full px-0 py-3 text-white bg-transparent border-0 border-b border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#094dad] peer [&>option]:bg-[#101217] [&>option]:text-white"
                  >
                    <option value="" disabled>Select Primary Service</option>
                    <option value="ceramic">Ceramic Coating</option>
                    <option value="ppf">Paint Protection Film (PPF)</option>
                    <option value="tint">Window Tinting</option>
                    <option value="correction">Paint Correction</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
                <div className="relative flex flex-col justify-end border-b border-gray-600 focus-within:border-[#094dad] transition-colors pb-1">
                   {/* Fallback to simple date picker for aesthetics without extra libs. Native dark mode calendar varies by browser, so we keep text white */}
                   <label htmlFor="date" className="text-xs text-gray-500 mb-1">Preferred Drop-off Date</label>
                   <input 
                     type="date" 
                     id="date" 
                     className="w-full bg-transparent text-white border-0 p-0 focus:ring-0 [&::-webkit-calendar-picker-indicator]:filter-invert"
                   />
                </div>
              </div>

              <div className="relative pt-4">
                <button 
                  type="submit" 
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-sm text-sm font-bold uppercase tracking-widest text-[#0B0C10] bg-[#094dad] hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#094dad] focus:ring-offset-[#101217] transition-all duration-300"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="bg-[#050505] border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-shrink-0 flex items-center mb-4 md:mb-0">
            <img 
              src="https://detailingnextlevel.com/wp-content/uploads/2025/04/logonooctagon-768x293.webp" 
              alt="Next Level Detailing Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
          <div className="text-sm text-gray-600 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Next Level Detailing LLC.
          </div>
        </div>
      </div>
    </footer>
  );
}
