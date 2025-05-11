import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Biography() {
  return (
    <div>
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Biografia</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
          Joaquim (Quinca), filho da lavoura, cresceu em meio ao trabalho simples. Virou pedreiro, construiu não apenas casas, mas uma família presente, criando dois filhos com firmeza e afeto. Deixou como legado a força do trabalho honesto e o valor de cuidar dos seus.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Primeiros Anos
          </h2>
          <p className="text-gray-600 mb-6">
          Nascido em uma família humilde e trabalhadora da lavoura, Joaquim, mais conhecido como Quinca cresceu aprendendo os valores do trabalho duro e da simplicidade.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Vida Adulta
          </h2>
          <p className="text-gray-600 mb-6">
          Tornou-se pedreiro, profissão que exerceu com dedicação. Formou família e foi um pai presente, criando seus dois filhos com amor e responsabilidade.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Legado
          </h2>
          <p className="text-gray-600 mb-6">
          Deixou como herança a lição de perseverança, o compromisso com o trabalho e o cuidado com a família, inspirando todos ao seu redor.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
