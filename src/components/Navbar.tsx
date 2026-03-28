import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Target, X } from 'lucide-react';
import { navigationItems } from '../content/site';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center space-x-3" onClick={() => setIsOpen(false)}>
          <div className="rounded-lg bg-gradient-to-br from-red-600 to-red-800 p-2.5 transition-all duration-300 group-hover:from-red-500 group-hover:to-red-700">
            <Target className="h-7 w-7 text-gray-900" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Poligoni Tekniku</span>
            <p className="text-xs text-gray-600">Poligon profesional</p>
          </div>
        </Link>

        <div className="hidden items-center space-x-1 md:flex">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                to={item.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive ? 'bg-black/80 text-white' : 'text-gray-700 hover:bg-white hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="text-gray-700 transition-colors hover:text-gray-900 md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Mbyll menunë' : 'Hap menunë'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-gray-200 bg-gray-50 transition-all duration-500 ease-out md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-2 px-4 pb-4 pt-2">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive ? 'bg-black/80 text-white' : 'text-gray-700 hover:bg-white hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
