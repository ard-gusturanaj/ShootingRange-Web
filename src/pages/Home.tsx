import { Link } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';
import heroImage from '../poligon.png';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-start md:items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-red-100 opacity-90"></div>
        <img
          src={heroImage}
          alt="Poligoni Tekniku"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8 sm:pt-32 sm:pb-10 md:py-28 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-600/30 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-red-500" />
              <span className="text-gray-900 text-sm font-medium">Siguri · Profesionalizëm · Përsosmëri</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Poligoni Tekniku
            </h1>

            <p className="text-xl md:text-2xl text-black-900 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ofrojmë një mjedis të sigurt, profesional dhe ligjor për praktikë me armë zjarri,
              trajnime sigurie dhe asistencë në procedurat e licencimit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-2xl shadow-red-600/40 flex items-center space-x-2"
              >
                <span>Na kontaktoni</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-gray-100 backdrop-blur-sm text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 border border-gray-200"
              >
                Shiko shërbimet
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Rreth nesh</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-800 mb-4"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Jemi një nga poligonet më moderne dhe profesionale në vend, të dedikuar për të ofruar
                shërbime cilësore në fushën e trajnimeve me armë zjarri dhe sigurisë. Me vite përvojë
                dhe një ekip të specializuar instruktorësh të certifikuar, ne sigurojmë një mjedis të
                sigurt dhe të kontrolluar për të gjithë sportistët dhe entuziastët që dëshirojnë të zhvillojnë
                aftësitë e tyre në qitje.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Misioni ynë është të promovojmë përdorimin e përgjegjshëm dhe ligjor të armëve të zjarrit,
                duke respektuar standardet më të larta të sigurisë dhe të ligjit në fuqi.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                <span>Mëso më shumë</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Gati për të filluar?</h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Na kontaktoni sot për më shumë informacion rreth trajnimeve, aksesit në poligon
            dhe këshillimit për procedurat e licencimit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg shadow-red-600/30"
            >
              Kontaktoni tani
            </Link>
            <Link
              to="/gallery"
              className="px-8 py-4 bg-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-400 transition-all duration-300 border border-gray-300"
            >
              Shiko galerinë
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

