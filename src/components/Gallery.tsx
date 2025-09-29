import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: '/PUBLIC/assets/DragonEspalda.jpeg',
      alt: 'Tatuaje de dragón japonés',
      title: 'Dragón Japonés',
      description: 'Perseverancia y determinación'
    },
    {
      src: 'https://images.pexels.com/photos/1545996/pexels-photo-1545996.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tatuaje de koi',
      title: 'Carpas Koi',
      description: 'Perseverancia y determinación'
    },
    {
      src: 'https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tatuaje de samurái',
      title: 'Carpas Koi',
      description: 'Perseverancia y determinación'
    },
    {
      src: 'https://images.pexels.com/photos/1308484/pexels-photo-1308484.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tatuaje de máscara oni',
      title: 'Carpas Koi',
      description: 'Perseverancia y determinación'
    },
    {
      src: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tatuaje de geisha',
      title: 'Carpas Koi',
      description: 'Perseverancia y determinación'
    },
    {
      src: 'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tatuaje de flores de cerezo',
      title: 'Carpas Koi',
      description: 'Perseverancia y determinación'
    },
    {
      src: 'https://images.pexels.com/photos/1407323/pexels-photo-1407323.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tatuaje de fénix japonés',
      title: 'Carpas Koi',
      description: 'Perseverancia y determinación'
    },
    {
      src: 'https://images.pexels.com/photos/1701208/pexels-photo-1701208.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tatuaje de tigre japonés',
      title: 'Carpas Koi',
      description: 'Perseverancia y determinación'
    }
  ];

  const openModal = useCallback((index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  }, [selectedImage, images.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  }, [selectedImage, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeModal, nextImage, prevImage]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <section id="galeria" className="py-20 bg-gray-900 min-h-screen">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800 aspect-square cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20"
              onClick={() => openModal(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openModal(index);
                }
              }}
              aria-label={`Ver imagen: ${image.title}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                </div>
              </div>
              {/* View Icon */}
              <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                <Maximize2 className="text-red-600" size={20} />
              </div>
              {/* Japanese character overlay */}
              <div className="absolute top-4 left-4 text-red-600 text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                見
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="fixed top-6 right-6 z-50 text-white hover:text-red-600 transition-colors bg-black/70 p-3 rounded-full"
            >
              <X size={28} />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="fixed left-6 top-1/2 -translate-y-1/2 z-50 text-white hover:text-red-600 transition-colors bg-black/70 p-3 rounded-full"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="fixed right-6 top-1/2 -translate-y-1/2 z-50 text-white hover:text-red-600 transition-colors bg-black/70 p-3 rounded-full"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image Container */}
            <div 
              className="relative max-w-4xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
              />
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full">
                <p className="text-white text-sm font-medium">
                  {selectedImage + 1} / {images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;