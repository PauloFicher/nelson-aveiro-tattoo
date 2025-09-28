import React from 'react';
import { Brush, Star, RefreshCw, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brush className="w-8 h-8" />,
      title: 'Tatuajes Tradicionales Japoneses',
      description: 'Dragones, koi, samuráis y máscaras oni con técnicas ancestrales',
      symbol: '龍'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Diseños Personalizados',
      description: 'Creamos tu historia única con elementos japoneses auténticos',
      symbol: '芸'
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Coberturas y Mejoras',
      description: 'Transformamos tatuajes existentes en obras maestras japonesas',
      symbol: '新'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Sesiones Exclusivas',
      description: 'Ambiente privado y cómodo para proyectos de gran formato',
      symbol: '極'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Servicios <span className="text-red-600">Especializados</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cada tatuaje es una obra maestra única, creada con pasión y respeto por la tradición japonesa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-red-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20"
            >
              {/* Japanese Symbol Background */}
              <div className="absolute top-4 right-4 text-6xl text-red-600/10 group-hover:text-red-600/20 transition-all duration-300">
                {service.symbol}
              </div>
              
              <div className="relative z-10">
                <div className="text-red-600 mb-4 group-hover:text-red-500 transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-red-600/5 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;