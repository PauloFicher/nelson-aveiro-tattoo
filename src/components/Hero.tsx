import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-scroll"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/7589352/pexels-photo-7589352.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
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
            <button className="group relative px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/50 transform hover:scale-105">
              <span className="relative z-10">Reserva tu Cita</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              Ver Galería
            </button>
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;