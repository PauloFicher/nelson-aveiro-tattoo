import React from 'react';
import { Instagram, Facebook, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="text-3xl font-bold text-red-600">
                <span className="text-white">鬼</span>INK
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Estudio especializado en tatuaje japonés tradicional. 
              Más de 15 años creando arte que trasciende el tiempo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-red-600 transition-colors">Tatuajes Tradicionales</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Diseños Personalizados</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Coberturas</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Restauraciones</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Consultas</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-3 text-red-600" />
                <div>
                  <div className="text-white font-medium">WhatsApp</div>
                  <div>+1 (555) 123-4567</div>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-red-600" />
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div>info@inkdarkness.com</div>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-red-600 mt-1" />
                <div>
                  <div className="text-white font-medium">Dirección</div>
                  <div>Calle del Arte 123<br />Ciudad, Estado 12345</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Horarios</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>Lunes - Viernes</span>
                <span className="text-white">10:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados</span>
                <span className="text-white">10:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos</span>
                <span className="text-red-600">Cerrado</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-800">
              <div className="flex items-center text-yellow-500 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span className="font-semibold text-sm">Solo con Cita Previa</span>
              </div>
              <p className="text-gray-400 text-sm">
                Reserva tu sesión con al menos 48h de anticipación
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 INK Darkness Studio. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-red-600 transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-red-600 transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-red-600 transition-colors">Cuidado Post-Tatuaje</a>
            </div>
          </div>
        </div>
      </div>

      {/* Japanese Characters Background */}
      <div className="absolute bottom-4 right-4 text-6xl text-red-600/5 pointer-events-none">
        芸術
      </div>
    </footer>
  );
};

export default Footer;