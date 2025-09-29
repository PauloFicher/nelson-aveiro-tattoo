import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/bannernelson.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            <span className="text-red-600 drop-shadow-lg">El Arte del Tatuaje</span>
            <span className="block text-yellow-500"></span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Diseños únicos, poderosos y eternos que cuentan tu historia
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.link/zvkhdk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/50 transform hover:scale-105 inline-block"
            >
              <span className="relative z-10">Reserva tu Cita</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="#galeria"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Ver Galería
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 text-red-600 text-6xl opacity-20 rotate-12 hidden lg:block">
          龍
        </div>
        <div className="absolute bottom-1/4 right-10 text-yellow-500 text-6xl opacity-20 -rotate-12 hidden lg:block">
          鬼
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col space-y-1">
          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;