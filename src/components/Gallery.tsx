import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('japones');

  // Categorías de tatuajes
  const categories = [
    { id: 'japones', name: 'Japonés', icon: '鬼' },
    { id: 'realismo', name: 'Realismo', icon: '👁️' },
    { id: 'blackwork', name: 'Blackwork', icon: '⚫' },
    { id: 'otros', name: 'Otros Estilos', icon: '✨' },
    { id: 'cuadros', name: 'Arte & Cuadros', icon: '🖼️' }
  ];

  // Imágenes por categoría
  const imagesByCategory = {
    japones: [
      {
        src: '/assets/DragonEspalda.jpeg',
        alt: 'Tatuaje de dragón japonés en espalda completa',
        title: 'Dragón Japonés',
        description: 'Fuerza y sabiduría ancestral'
      },
      {
        src: '/assets/Samurai.jpeg',
        alt: 'Tatuaje de samurái japonés',
        title: 'Samurái',
        description: 'Honor y disciplina guerrera'
      },
      {
        src: '/assets/oni.webp',
        alt: 'Tatuaje de máscara oni',
        title: 'Máscara Oni',
        description: 'Protección contra el mal'
      },
      {
        src: '/assets/geishaconlentes.webp',
        alt: 'Tatuaje de geisha japonesa',
        title: 'Geisha',
        description: 'Elegancia y belleza tradicional'
      },
      {
        src: '/assets/peces.jpeg',
        alt: 'Tatuaje de carpas koi',
        title: 'Carpas Koi',
        description: 'Perseverancia y determinación'
      },
      {
        src: '/assets/mascaraoni.jpeg',
        alt: 'Tatuaje de máscara oni tradicional',
        title: 'Oni Tradicional',
        description: 'Poder y protección espiritual'
      },
      {
        src: '/assets/guerreri.webp',
        alt: 'Tatuaje de guerrero japonés',
        title: 'Guerrero',
        description: 'Valentía y honor samurái'
      },
      {
        src: '/assets/dragonpierna.jpg',
        alt: 'Tatuaje de dragón en pierna',
        title: 'Dragón Pierna',
        description: 'Arte tradicional japonés'
      },
      {
        src: '/assets/cuadrogeisha.jpeg',
        alt: 'Tatuaje estilo cuadro de geisha',
        title: 'Geisha Artística',
        description: 'Belleza y tradición'
      },
      {
        src: '/assets/ojolucifer.jpeg',
        alt: 'Tatuaje de ojo estilo lucifer',
        title: 'Ojo Místico',
        description: 'Misterio y poder'
      }
    ],
    realismo: [
      {
        src: '/assets/cuadro.jpeg',
        alt: 'Tatuaje realista',
        title: 'Retrato Realista',
        description: 'Detalle fotográfico'
      },
      {
        src: '/assets/cuadro2.jpeg',
        alt: 'Tatuaje realismo',
        title: 'Arte Realista',
        description: 'Precisión y sombras'
      },
      {
        src: '/assets/cuadrobigote.jpg',
        alt: 'Retrato con bigote',
        title: 'Retrato Clásico',
        description: 'Estilo vintage'
      }
    ],
    blackwork: [
      {
        src: '/assets/Aboutme.jpeg',
        alt: 'Tatuaje blackwork',
        title: 'Blackwork Abstracto',
        description: 'Tinta negra pura'
      }
    ],
    otros: [
      {
        src: '/assets/Bannerhero.jpg',
        alt: 'Otros trabajos',
        title: 'Trabajo Personalizado',
        description: 'Diseño único'
      }
    ],
    cuadros: [
      {
        src: '/assets/cuadros.jpg',
        alt: 'Cuadro artístico',
        title: 'Cuadro Decorativo',
        description: 'Arte físico para tu espacio'
      },
      {
        src: '/assets/cuadro.jpeg',
        alt: 'Arte en lienzo',
        title: 'Obra en Lienzo',
        description: 'Pieza única disponible'
      },
      {
        src: '/assets/cuadro2.jpeg',
        alt: 'Cuadro personalizado',
        title: 'Arte Personalizado',
        description: 'Diseños bajo pedido'
      },
      {
        src: '/assets/participacion de eventos.jpeg',
        alt: 'Evento artístico',
        title: 'Exposiciones',
        description: 'Participación en eventos'
      }
    ]
  };

  const currentImages = imagesByCategory[activeTab] || [];

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
      setSelectedImage((selectedImage + 1) % currentImages.length);
    }
  }, [selectedImage, currentImages.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + currentImages.length) % currentImages.length);
    }
  }, [selectedImage, currentImages.length]);

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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galería de <span className="text-red-600">Obras</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explora nuestras creaciones en diferentes estilos
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveTab(category.id);
                setSelectedImage(null);
              }}
              className={`
                relative px-6 py-3 rounded-xl font-semibold text-sm md:text-base
                transition-all duration-300 transform hover:scale-105
                flex items-center gap-2 min-w-[140px] justify-center
                ${activeTab === category.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }
              `}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
              {activeTab === category.id && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-red-400 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid con animación de entrada */}
        <div 
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
          {currentImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800 aspect-square cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20"
              style={{ animationDelay: `${index * 50}ms` }}
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
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 group-hover:opacity-0 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-4 transition-transform duration-300">
                  <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                </div>
              </div>
              {/* View Icon */}
              <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full opacity-100 group-hover:opacity-0 transition-all duration-300 transform scale-100 group-hover:scale-90">
                <Maximize2 className="text-red-600" size={20} />
              </div>
              {/* Category icon overlay */}
              <div className="absolute top-4 left-4 text-red-600 text-3xl font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                {categories.find(cat => cat.id === activeTab)?.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje si no hay imágenes */}
        {currentImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">Próximamente más trabajos en esta categoría...</p>
          </div>
        )}

        {/* Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="fixed top-6 right-6 z-50 text-white hover:text-red-600 transition-colors bg-black/70 p-3 rounded-full hover:scale-110 transition-transform"
              aria-label="Cerrar"
            >
              <X size={28} />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="fixed left-6 top-1/2 -translate-y-1/2 z-50 text-white hover:text-red-600 transition-all bg-black/70 p-3 rounded-full hover:scale-110"
              aria-label="Anterior"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="fixed right-6 top-1/2 -translate-y-1/2 z-50 text-white hover:text-red-600 transition-all bg-black/70 p-3 rounded-full hover:scale-110"
              aria-label="Siguiente"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image Container */}
            <div 
              className="relative max-w-4xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImages[selectedImage].src}
                alt={currentImages[selectedImage].alt}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 px-6 py-3 rounded-full backdrop-blur-sm">
                <p className="text-white text-sm font-medium">
                  {selectedImage + 1} / {currentImages.length}
                </p>
              </div>

              {/* Image Title */}
              <div className="absolute top-4 left-4 right-4 bg-black/80 px-6 py-3 rounded-xl backdrop-blur-sm">
                <h3 className="text-white font-bold text-lg">{currentImages[selectedImage].title}</h3>
                <p className="text-gray-300 text-sm">{currentImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;