import Navigation from '../components/Navigation';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function Family() {
  return (
    <div>
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Família</h1>
        
        {/* Seção dos Pais */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Pais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pai */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/imagens/avos.jpg"
                  alt="Foto do Pai"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Francisco Canuto da Silva</h3>
                <p className="text-gray-600 mb-2">Pai</p>
              </div>
            </div>

            {/* Mãe */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/imagens/avos1.jpg"
                  alt="Foto da Mãe"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rita Facundo de Almeida</h3>
                <p className="text-gray-600 mb-2">Mãe</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção dos Filhos */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Filhos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primeiro Filho */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/imagens/nunes.jpg"
                  alt="Foto do Primeiro Filho"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nunes</h3>
                <p className="text-gray-600 mb-2">Filho</p>
                <p className="text-gray-500 text-sm">
                  Saudade Eterna!!!
                </p>
              </div>
            </div>

            {/* Segundo Filho */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/imagens/nayane.jpg"
                  alt="Foto do Segundo Filho"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nayane</h3>
                <p className="text-gray-600 mb-2">Filha</p>
                <p className="text-gray-500 text-sm">
                  Saudade Eterna!!!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Outros Membros Queridos */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Outros Membros Queridos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primeiro membro querido */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/imagens/esposa.jpg"
                  alt="Foto do Primeiro Membro Querido"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maria Auxiliadora Lopes da Silva</h3>
                <p className="text-gray-600 mb-2">Esposa</p>
                <p className="text-gray-500 text-sm">
                  Companheira de vida e amor eterno.
                </p>
              </div>
            </div>

            {/* Segundo membro querido */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/imagens/neto.png"
                  alt="Foto do Segundo Membro Querido"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enzo Gabriel</h3>
                <p className="text-gray-600 mb-2">neto</p>
                <p className="text-gray-500 text-sm">
                  
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

