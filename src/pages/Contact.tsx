import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const handleCallNow = () => {
    window.location.href = 'tel:+38344281751';
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: ['+383 44 281 751'],
      link: 'tel:+38344281751',
    },
    
    {
      icon: MapPin,
      title: 'Adresa',
      details: ['Istog, Rr. Fadil Ferati', 'Përballë Stacionit Policor'],
      link: '#',
    },
    {
      icon: Clock,
      title: 'Orari i punës',
      details: ['E hënë - e premte: 08:00 - 18:00', 'E shtunë: 08:00 - 18:00'],
      link: '#',
    },
  ];

  return (
    <div className="bg-gray-50 pt-20">
      <section className="relative py-14 bg-gradient-to-br from-white via-gray-50 to-red-100">
        <div className="absolute inset-0 parallax-bg bg-[url('https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">Na kontaktoni</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-2"></div>
          <p className="text-1.5xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Jemi këtu për t'ju ndihmuar me çdo pyetje rreth trajnimeve, poligonit dhe procedurave të licencimit.
          </p>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kontakti</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-red-800 mb-6"></div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-100 border border-gray-200 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-red-600 to-red-800 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-gray-900" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-white to-gray-100 border border-gray-200 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Harta</h3>
              <div className="aspect-video rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  title="Harta e Poligonit Tekniku"
                  src="https://www.google.com/maps?q=42.78190857253984,20.490423237151255&z=18&t=k&output=embed"
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

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-900/30 to-red-100/30 border border-red-600/30 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vizitoni poligonin tonë</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Jeni të mirëpritur të na vizitoni për të parë ambientet tona moderne, për të takuar stafin tonë profesional
              dhe për të marrë më shumë informacion rreth shërbimeve që ofrojmë. Ju rekomandojmë të na kontaktoni paraprakisht
              për të rezervuar një orar vizite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={handleCallNow}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg shadow-red-600/30"
              >
                Telefono tani
              </button>
              <Link
                to="/services"
                className="px-8 py-4 bg-gray-100 backdrop-blur-sm text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 border border-gray-200"
              >
                Shikoni shërbimet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



