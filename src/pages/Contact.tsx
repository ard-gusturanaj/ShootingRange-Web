import { Clock, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  addressLines,
  formattedPrimaryPhoneNumber,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  primaryPhoneNumber,
} from '../content/site';

type ContactCard = {
  icon: typeof Phone;
  title: string;
  details: readonly string[];
  href?: string;
};

const contactCards: ContactCard[] = [
  {
    icon: Phone,
    title: 'Telefon',
    details: [formattedPrimaryPhoneNumber],
    href: `tel:${primaryPhoneNumber}`,
  },
  {
    icon: MapPin,
    title: 'Adresa',
    details: addressLines,
    href: mapsDirectionsUrl,
  },
  {
    icon: Clock,
    title: 'Orari i punës',
    details: ['E hënë - e premte: 08:00 - 18:00', 'E shtunë: 08:00 - 18:00'],
  },
] as const;

export default function Contact() {
  return (
    <div className="bg-gray-50 pt-20">
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-red-100 py-14">
        <div className="absolute inset-0 parallax-bg bg-[url('https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-10"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-2 text-4xl font-bold text-gray-900 md:text-6xl">Na kontaktoni</h1>
          <div className="mx-auto mb-2 h-1 w-20 bg-gradient-to-r from-red-600 to-red-800"></div>
          <p className="mx-auto max-w-3xl text-gray-700 leading-relaxed">
            Jemi këtu për pyetje rreth trajnimeve, poligonit dhe procedurave të licencimit.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-gray-100 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Kontakti</h2>
            <div className="mb-6 h-1 w-16 bg-gradient-to-r from-red-600 to-red-800"></div>

            <div className="space-y-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const cardInner = (
                  <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 p-6 transition-all duration-300 hover:border-red-600/50">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-800">
                        <Icon className="h-6 w-6 text-gray-900" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="mb-2 text-lg font-bold text-gray-900">{card.title}</h3>
                        {card.details.map((detail) => (
                          <p key={detail} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );

                if (!card.href) {
                  return <div key={card.title}>{cardInner}</div>;
                }

                const isExternal = card.title === 'Adresa';

                return (
                  <a
                    key={card.title}
                    href={card.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                    className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                    aria-label={`${card.title}: ${card.details.join(', ')}`}
                  >
                    {cardInner}
                  </a>
                );
              })}
            </div>

            <div className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 p-6">
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold text-gray-900">Harta</h3>
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-5 py-3 font-semibold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:from-red-500 hover:to-red-600"
                >
                  Directions
                </a>
              </div>
              <div className="aspect-video overflow-hidden rounded-lg border border-gray-200">
                <iframe
                  title="Harta e Poligonit Tekniku"
                  src={mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-red-600/30 bg-gradient-to-br from-red-900/30 to-red-100/30 p-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Vizitoni poligonin tonë</h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-700">
              Na vizitoni për të parë ambientet, për të biseduar me stafin dhe për të marrë informacion të saktë rreth shërbimeve që ofrojmë.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${primaryPhoneNumber}`}
                className="rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:from-red-500 hover:to-red-600"
              >
                Telefono tani
              </a>
              <Link
                to="/services"
                className="rounded-lg border border-gray-200 bg-gray-100 px-8 py-4 font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-200"
              >
                Shiko shërbimet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
