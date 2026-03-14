import { Target, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-300 border-t border-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-red-600 to-red-800 p-2 rounded-lg">
                <Target className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <span className="text-gray-900 font-bold text-lg">Poligoni Tekniku</span>
                <p className="text-gray-600 text-xs">Poligon profesional</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Poligon modern dhe profesional për stërvitje të sigurt me armë zjarri, trajnime sigurie dhe këshillim për procedurat e licencimit.
            </p>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Kontakti</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="h-5 w-5 text-red-500 flex-shrink-0 mt-2" />
                <div>
                  <p className="text-gray-600">+383 44 281 751 <br />+383 49 453 958</p>
                </div>
              </li>

              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-600">Istog, Rr. Fadil Ferati</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-6 mt-6">
          <a
            href="https://www.facebook.com/PoligoniTekniku"
            className="text-gray-600 hover:text-red-500 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-7 w-7" />
          </a>
          <a
            href="https://www.instagram.com/poligonitekniku/"
            className="text-gray-600 hover:text-red-500 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-7 w-7" />
          </a>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Poligoni Tekniku. Të gjitha të drejtat e rezervuara.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Përdorimi i armëve të zjarrit kërkon licencë të vlefshme dhe respektim të ligjit në fuqi.
          </p>
        </div>
      </div>
    </footer>
  );
}

