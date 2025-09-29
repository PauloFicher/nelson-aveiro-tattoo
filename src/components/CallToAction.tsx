import React from 'react';

const CallToAction = () => {
  return (
    <section id="reservas" className="py-20 bg-black relative ">
      {/* Background Image */}
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: 'url("/assets/banner3.jpg")',
  }}
>
  <div className="absolute inset-0 bg-black/70"></div>
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
  <a 
    href="https://wa.link/zvkhdk"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative px-10 py-5 bg-red-600 text-white font-bold text-xl rounded-lg overflow-hidden transition-all duration-300 hover:bg-red-700 transform hover:scale-110 hover:shadow-2xl hover:shadow-red-600/50 inline-block"
  >
    <span className="relative z-10 flex items-center">
      Agenda Ahora
      <span className="ml-2 text-2xl"></span>
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </a>
</div>

         

          {/* Philosophy Quote */}
          
        </div>
      </div>
    </section>
  );
};

export default CallToAction;