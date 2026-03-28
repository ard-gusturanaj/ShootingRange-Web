import { Facebook, Instagram, MapPin, Phone, Target } from 'lucide-react';
import {
  addressLines,
  formattedPrimaryPhoneNumber,
  formattedSecondaryPhoneNumber,
  mapsDirectionsUrl,
  primaryPhoneNumber,
  secondaryPhoneNumber,
  socialLinks,
} from '../content/site';

const phoneLinks = [
  { href: `tel:${primaryPhoneNumber}`, label: formattedPrimaryPhoneNumber },
  { href: `tel:${secondaryPhoneNumber}`, label: formattedSecondaryPhoneNumber },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-400 bg-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="rounded-lg bg-gradient-to-br from-red-600 to-red-800 p-2">
                <Target className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900">Poligoni Tekniku</span>
                <p className="text-xs text-gray-600">Poligon profesional</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              Poligon i specializuar për stërvitje të sigurt, trajnim praktik dhe orientim të qartë për procedurat e licencimit.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-gray-900">Kontakti</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                <div className="space-y-1">
                  {phoneLinks.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="block text-gray-600 transition-colors hover:text-gray-900"
                    >
                      {phone.label}
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 transition-colors hover:text-gray-900"
                >
                  {addressLines[0]}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center space-x-6">
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 transition-colors hover:text-red-500"
            aria-label="Facebook"
          >
            <Facebook className="h-7 w-7" />
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 transition-colors hover:text-red-500"
            aria-label="Instagram"
          >
            <Instagram className="h-7 w-7" />
          </a>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Poligoni Tekniku. Të gjitha të drejtat e rezervuara.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Përdorimi i armëve të zjarrit kërkon licencë të vlefshme dhe respektim të ligjit në fuqi.
          </p>
        </div>
      </div>
    </footer>
  );
}
