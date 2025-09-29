import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 text-8xl text-red-600 rotate-45">龍</div>
        <div className="absolute bottom-1/4 right-1/4 text-8xl text-yellow-500 -rotate-45">鬼</div>
        <div className="absolute top-1/2 right-1/3 text-6xl text-red-600 rotate-12">武</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/assets/aboutme.jpeg"  // ✅ Ahora coincide con la ruta correcta
                alt="Maestro tatuador en acción"
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-full shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Años</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                El Maestro detrás del <span className="text-red-600">Arte</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Durante más de 15 años, he dedicado mi vida al arte ancestral del tatuaje japonés. 
                  Mi pasión por la cultura nipona y su profunda filosofía se refleja en cada trazo, 
                  cada sombra y cada detalle de mis creaciones.
                </p>
                
                <p>
                  Especializado en <span className="text-red-600 font-semibold">irezumi tradicional</span>, 
                  mis diseños van más allá de la simple decoración corporal. Cada tatuaje cuenta una historia, 
                  transmite una emoción y conecta al portador con la rica tradición japonesa.
                </p>
                
                <p>
                  Mi estudio es un santuario donde el arte cobra vida, donde cada cliente recibe no solo 
                  un tatuaje, sino una experiencia transformadora que durará toda la vida.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">1500+</div>
                <div className="text-gray-400">Tatuajes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">15+</div>
                <div className="text-gray-400">Años</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-gray-400">Satisfacción</div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <blockquote className="text-gray-300 italic text-lg">
                "El tatuaje japonés no es solo tinta en la piel, es la manifestación física del alma. 
                Cada dragón que creo lleva el poder ancestral, cada flor de cerezo representa la belleza efímera de la vida."
              </blockquote>
              <cite className="text-red-600 font-semibold mt-4 block">- Maestro Hiroshi</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;