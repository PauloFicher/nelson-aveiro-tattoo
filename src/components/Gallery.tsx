import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: '/PUBLIC/assets/Japones/Brazo.webp',
      alt: 'Tatuaje de dragón japonés',
      title: 'Dragón Tradicional'
    },
    {
      src: 'https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tatuaje de koi',
      title: 'Carpas Koi'
    },
    {
      src: 'https://images.pexels.com/photos/1545996/pexels-photo-1545996.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tatuaje de samurái',
      title: 'Guerrero Samurái'
    },
    {
      src: 'https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tatuaje de máscara oni',
      title: 'Máscara Oni'
    },
    {
      src: 'https://images.pexels.com/photos/1308484/pexels-photo-1308484.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tatuaje de geisha',
      title: 'Geisha Clásica'
    },
    {
      src: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tatuaje de flores de cerezo',
      title: 'Sakura y Olas'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galería de <span className="text-red-600">Obras</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explora nuestras creaciones más representativas del arte japonés del tatuaje
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800 aspect-square cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>
              </div>
              {/* Japanese character overlay */}
              <div className="absolute top-4 right-4 text-red-600 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                見
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-red-600 transition-colors"
              >
                <X size={32} />
              </button>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-600 transition-colors"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-600 transition-colors"
              >
                <ChevronRight size={32} />
              </button>
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-white font-bold text-xl">{images[selectedImage].title}</h3>
                <p className="text-gray-300 mt-2">{selectedImage + 1} de {images.length}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;