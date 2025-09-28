import React from 'react';

const CallToAction = () => {
  return (
    <section id="reservas" className="py-20 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1260264/pexels-photo-1260264.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* Japanese Art Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 text-9xl text-red-600 rotate-12">龍</div>
        <div className="absolute bottom-1/4 right-1/6 text-9xl text-yellow-500 -rotate-12">魂</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-red-600">芸術</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Tu Piel, <span className="text-red-600">Tu Historia</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
            ¿Listo para tu próxima <span className="text-yellow-500 font-semibold">obra de arte</span>?
          </p>

          <div className="space-y-6 text-lg text-gray-400 max-w-2xl mx-auto">
            <p>
              Cada tatuaje es una colaboración única entre artista y cliente. 
              Juntos crearemos una pieza que represente tu esencia y se conecte 
              con la milenaria tradición japonesa.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button className="group relative px-10 py-5 bg-red-600 text-white font-bold text-xl rounded-lg overflow-hidden transition-all duration-300 hover:bg-red-700 transform hover:scale-110 hover:shadow-2xl hover:shadow-red-600/50">
              <span className="relative z-10 flex items-center">
                Agenda Ahora
                <span className="ml-2 text-2xl">⚡</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-10 py-5 border-2 border-yellow-500 text-yellow-500 font-bold text-xl rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-110">
              Consulta Gratuita
            </button>
          </div>

          {/* Contact Info */}
          <div className="pt-12 border-t border-gray-800 mt-16">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl mb-2">📱</div>
                <div className="text-white font-semibold">WhatsApp</div>
                <div className="text-gray-400">+1 (555) 123-4567</div>
              </div>
              <div>
                <div className="text-2xl mb-2">📧</div>
                <div className="text-white font-semibold">Email</div>
                <div className="text-gray-400">info@inkdarkness.com</div>
              </div>
              <div>
                <div className="text-2xl mb-2">📍</div>
                <div className="text-white font-semibold">Estudio</div>
                <div className="text-gray-400">Calle Arte 123, Ciudad</div>
              </div>
            </div>
          </div>

          {/* Philosophy Quote */}
          <div className="pt-12">
            <blockquote className="text-2xl text-gray-300 italic leading-relaxed">
              "En cada línea vive el espíritu del dragón, <br />
              en cada sombra descansa la sabiduría ancestral"
            </blockquote>
            <cite className="text-red-600 font-semibold text-lg mt-4 block">
              - Filosofía del Estudio
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;