import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Target, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Ballina', href: '/' },
    { name: 'Shërbimet', href: '/services' },
    { name: 'Galeria', href: '/gallery' },
    { name: 'Kontakti', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-red-600 to-red-800 p-2.5 rounded-lg group-hover:from-red-500 group-hover:to-red-700 transition-all duration-300">
              <Target className="h-7 w-7 text-gray-900" />
            </div>
            <div>
              <span className="text-gray-900 font-bold text-xl tracking-tight">Poligoni Tekniku</span>
              <p className="text-gray-600 text-xs">Poligon profesional</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'bg-black/80 text-white'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-gray-900 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-gray-50 border-t border-gray-200 overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="transition-all duration-500">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'bg-black/80 text-white'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

