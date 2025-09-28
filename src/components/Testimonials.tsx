import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      text: 'Mi dragón japonés es una obra maestra. Cada detalle cuenta una historia y la técnica es impecable.',
      rating: 5,
      tattoo: 'Dragón Tradicional'
    },
    {
      name: 'María González',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      text: 'La experiencia fue increíble. El ambiente, la profesionalidad y el resultado superaron mis expectativas.',
      rating: 5,
      tattoo: 'Geisha y Sakura'
    },
    {
      name: 'Diego Ruiz',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      text: 'Un verdadero maestro del arte japonés. Mi máscara oni es perfecta, respeta la tradición al 100%.',
      rating: 5,
      tattoo: 'Máscara Oni'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl text-red-600">波</div>
        <div className="absolute top-1/3 right-20 text-6xl text-yellow-500">雲</div>
        <div className="absolute bottom-20 left-1/4 text-6xl text-red-600">花</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Historias de <span className="text-red-600">Transformación</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cada tatuaje es único, cada cliente tiene su historia. Descubre lo que dicen sobre su experiencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-red-600/50 transition-all duration-300 transform hover:scale-105"
            >
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-red-600 mr-4"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-red-600 text-sm">{testimonial.tattoo}</div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 text-red-600/20 text-2xl">
                証
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-400 mb-8">
            ¿Listo para ser parte de nuestras historias de éxito?
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-600/50">
            Comparte tu Historia
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;