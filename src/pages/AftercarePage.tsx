import React, { useState, useEffect } from 'react';
import { Shield, Clock, Droplets, Sun, AlertTriangle, CheckCircle, Phone, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

const AftercareLanding = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Back to top functionality
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

 const toggleStep = (stepIndex: number) => {
    setExpandedStep(expandedStep === stepIndex ? null : stepIndex);
  };

  const careSteps = [
    {
      title: "Primeras 2-4 Horas",
      icon: <Clock className="w-6 h-6" />,
      summary: "Mantén el vendaje inicial",
      details: [
        "Deja el vendaje o film protector puesto durante 2-4 horas",
        "No toques ni manipules el área",
        "Evita actividades que causen sudoración excesiva",
        "Mantén el área elevada si es posible"
      ]
    },
    {
      title: "Primera Limpieza (Día 1)",
      icon: <Droplets className="w-6 h-6" />,
      summary: "Limpieza suave y cuidadosa",
      details: [
        "Lávate bien las manos antes de tocar el tatuaje",
        "Retira suavemente el vendaje",
        "Limpia con agua tibia y jabón neutro (sin perfume)",
        "Seca con toques suaves usando toalla limpia",
        "Aplica una capa fina de pomada recomendada"
      ]
    },
    {
      title: "Días 2-7: Cuidado Diario",
      icon: <Shield className="w-6 h-6" />,
      summary: "Rutina de limpieza y hidratación",
      details: [
        "Limpia 2-3 veces al día con jabón neutro",
        "Aplica pomada cicatrizante (Bepanthen, Aquaphor)",
        "No uses ropa ajustada sobre el tatuaje",
        "Evita piscinas, jacuzzis y baños prolongados",
        "No rasques ni quites las costras que se formen"
      ]
    },
    {
      title: "Semanas 2-4: Cicatrización",
      icon: <CheckCircle className="w-6 h-6" />,
      summary: "Transición a loción hidratante",
      details: [
        "Cambia a loción hidratante sin perfume",
        "Continúa evitando la exposición solar directa",
        "El tatuaje puede verse opaco - es normal",
        "Mantén la piel hidratada pero no en exceso",
        "Consulta si notas signos de infección"
      ]
    }
  ];

  const prohibitions = [
    { icon: <Sun className="w-8 h-8" />, title: "Sol Directo", desc: "Evita 4-6 semanas" },
    { icon: <Droplets className="w-8 h-8" />, title: "Piscinas/Mar", desc: "Evita 2-3 semanas" },
    { icon: <AlertTriangle className="w-8 h-8" />, title: "Rascar", desc: "Nunca rasques las costras" }
  ];

  const products = [
    { name: "Bepanthen Pomada", use: "Días 1-7", desc: "Para cicatrización inicial" },
    { name: "Aquaphor", use: "Días 1-7", desc: "Alternativa a Bepanthen" },
    { name: "Loción Eucerin", use: "Semanas 2-4", desc: "Para hidratación posterior" },
    { name: "Jabón Neutro", use: "Todo el proceso", desc: "Sin perfumes ni químicos" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/cuidar-tatuajes.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/85"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="mb-8">
            <Shield className="w-20 h-20 text-red-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Cuidado</span>
              <span className="block text-red-600">Post-Tatuaje</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Guía completa para el cuidado perfecto de tu nuevo tatuaje
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.link/zvkhdk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/50 transform hover:scale-105 inline-block"
            >
              <span className="relative z-10">Consulta Ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="#cuidados"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Ver Guía Completa
            </a>
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

      {/* Timeline Section */}
      <section id="cuidados" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cronograma de <span className="text-red-600">Cuidados</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Sigue estos pasos para una cicatrización perfecta
            </p>
          </div>

          <div className="space-y-6">
            {careSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-red-600/50"
              >
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      <p className="text-gray-400">{step.summary}</p>
                    </div>
                  </div>
                  {expandedStep === index ? 
                    <ChevronUp className="w-6 h-6 text-red-600" /> : 
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  }
                </button>
                
                {expandedStep === index && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <ul className="mt-4 space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibitions Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Qué <span className="text-red-600">Evitar</span>
            </h2>
            <p className="text-xl text-gray-400">
              Actividades que pueden dañar tu tatuaje
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {prohibitions.map((item, index) => (
              <div key={index} className="text-center p-8 bg-gray-900 rounded-xl border border-gray-800 hover:border-red-600/50 transition-all duration-300">
                <div className="text-red-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Productos <span className="text-red-600">Recomendados</span>
            </h2>
            <p className="text-xl text-gray-400">
              Solo los mejores productos para tu tatuaje
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-600/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                <div className="text-red-600 font-medium mb-2">{product.use}</div>
                <p className="text-gray-400 text-sm">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            <span className="text-red-600">Señales de Alarma</span>
          </h2>
          
          <div className="bg-red-600/10 border-2 border-red-600 rounded-xl p-8 mb-8">
            <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Consulta Inmediatamente Si Observas:</h3>
            <ul className="text-left space-y-3 max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-300">Enrojecimiento excesivo que se extiende</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-300">Pus o secreción maloliente</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-300">Fiebre o escalofríos</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-300">Dolor que empeora después del tercer día</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-300">Líneas rojas que salen del tatuaje</span>
              </li>
            </ul>
          </div>

          <a 
            href="https://wa.link/zvkhdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Contactar Urgente
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Dudas sobre tu tatuaje?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Estoy aquí para ayudarte en todo el proceso de cicatrización. No dudes en contactarme.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.link/zvkhdk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Directo
            </a>
            
            
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Volver arriba"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default AftercareLanding;