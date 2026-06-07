export function Transition() {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden border-y border-white/5">
      {/* Background with parallax effect simulation */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed bg-no-repeat filter grayscale-[20%]"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2500&auto=format&fit=crop')` }}
      />
      <div className="absolute inset-0 bg-[#0B0C10]/80"></div>
      
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'69.2820323027551\' viewBox=\'0 0 40 69.2820323027551\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 69.282v-15.396l-13.333-7.698v-15.396l13.333-7.698l13.333 7.698v15.396z\' fill=\'%23ffffff\' fill-opacity=\'0.02\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')]"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white uppercase tracking-wider leading-tight drop-shadow-lg">
          SERVICES THAT KEEP YOUR <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#094dad] to-white">VEHICLE LOOKING ITS BEST</span>
        </h2>
      </div>
    </section>
  );
}
