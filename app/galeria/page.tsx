"use client";

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Image from 'next/image';
import Footer from '../components/Footer';

// Defina o tipo para as fotos
type Photo = {
  id: number;
  src: string;
  title: string;
  date: string;
};

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    { id: 1, src: '/imagens/pai-8.png', title: 'Foto quando jovem', date: '1975' },
    { id: 2, src: '/imagens/pai-6.png', title: 'Momento Especial', date: '1984' },
    { id: 3, src: '/imagens/pai-2.jpg', title: 'Casamento', date: '1984' },
    { id: 4, src: '/imagens/pai-1.jpg', title: 'Batismo do filho', date: '1987' },
    { id: 5, src: '/imagens/pai-3.jpg', title: 'Formatura da Filha', date: '2009' },
    { id: 6, src: '/imagens/pai-7.png', title: 'Momento Especial', date: '1988' },
  ];

  return (
    <div>
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Galeria de Fotos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => setSelectedPhoto(photo)} // Define a foto selecionada ao clicar
            >
              <div className="relative w-full h-64">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{photo.title}</h2>
                <p className="text-gray-500">{photo.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedPhoto(null)} // Fecha o modal
              >
                ✕
              </button>
              <div className="relative w-full h-96">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  fill
                  style={{ objectFit: 'contain' }} // Mostra a imagem completa
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{selectedPhoto.title}</h3>
                <p className="text-sm text-gray-500">{selectedPhoto.date}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
