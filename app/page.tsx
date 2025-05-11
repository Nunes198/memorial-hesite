"use client";

import Image from 'next/image';
import Navigation from './components/Navigation';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';

export default function Home() {
  const [count, setCount] = useState(0); // Estado para o contador

  // Carrega o valor do contador do localStorage ao carregar a página
  useEffect(() => {
    const savedCount = localStorage.getItem('velaCount');
    if (savedCount) {
      setCount(parseInt(savedCount, 10)); // Converte o valor salvo para número
    }
  }, []);

  // Atualiza o localStorage sempre que o contador mudar
  const handleButtonClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('velaCount', newCount.toString());
  };

  return (
    <div>
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Foto Responsiva */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
            <Image
              src="/imagens/pai5.png" // Caminho correto
              alt="Foto do Ente Querido"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Em Memória de:
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-8">
            Joaquim Almeida da Silva
            <br />
            <span className="text-xl text-gray-500">✰ 09 de setembro de 1953 - ✞ 05 de setembro de 2012  (58 anos)</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            A memória é um modo de ter as pessoas que amamos sempre por perto.
          </p>

          <div className="mt-8">
            <p className="text-gray-600">
              Este é um espaço dedicado à memória e celebração da vida de nosso querido ente.
              Aqui compartilhamos histórias, memórias e momentos especiais que mantêm vivo
              seu legado em nossos corações.
            </p>
          </div>

          {/* Botão e Imagem Responsivos */}
          <div className="mt-12">
            {/* Imagem da vela */}
            <div className="mb-4">
              <Image
                src="/imagens/vela1.png" // Caminho correto para a imagem da vela
                alt="Imagem de uma vela"
                width={160} // Largura ajustada para corresponder ao botão
                height={48} // Altura ajustada para corresponder ao botão
                className="mx-auto"
              />
            </div>

            <p className="text-xl font-semibold text-gray-700 mb-4">
              Acenda uma vela para essa pessoa
            </p>
            <button
              onClick={handleButtonClick}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-lg sm:py-3 sm:px-6 lg:py-4 lg:px-8 transition-shadow duration-300 hover:shadow-xl"
            >
              Clique Aqui
            </button>
            <p className="mt-4 text-gray-700 text-lg">
              Vela(s) acesa(s): <span className="font-bold">{count}</span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


