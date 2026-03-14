import { Fragment, useRef, useState } from 'react';
import { Target, Shield, Users, Building2, Crosshair, HardHat } from 'lucide-react';
import polImg from '../pol_img.jpg';
import poli2 from '../poli2.png';
import pol3 from '../pol3.jpg';

export default function Gallery() {
  const galleryItems = [
    {
      title: 'Poligoni - Pamje 1',
      category: 'Poligon',
      description: 'Hapësirë moderne per shfaqjen e armeve',
      icon: Target,
      image: poli2,
    },
    {
      title: 'Poligoni - Pamje 2',
      category: 'Poligon',
      description: 'Zona e stërvitjes me standarde ndërkombëtare',
      icon: Target,
      image: polImg,
    },
    {
      title: 'Poligoni - Pamje 3',
      category: 'Poligon',
      icon: Crosshair,
      image: pol3,
    },
    {
      title: 'XDM',
      category: 'Pajisje',
      description: 'Pistoletë striker-fired 9mm me kapacitet të lartë (seri XD-M Elite).',
      icon: Users,
      image:
        'https://springfieldarmory.b-cdn.net/wp-content/uploads/XDM-Elite-model-1600x1200-3.png',
    },
    {
      title: 'CZ Shadow',
      category: 'Pajisje',
      description: 'Pistoletë çeliku SA/DA për IPSC, e njohur për kontroll dhe saktësi.',
      icon: Shield,
      image:
        'https://czubpimstorage.blob.core.windows.net/strapi-pim/assets/CZ_SHADOW_2_left_black_c568e39ec2.png',
    },
    {
      title: 'Taurus G2C',
      category: 'Pajisje',
      description: 'Pistoletë kompakte 9mm për mbajtje të përditshme (EDC).',
      icon: Users,
      image:
        'https://www.taurususa.com/wp-content/uploads/2025/05/1-G3C4031_R-b84fc506.webp',
    },
    {
      title: 'Hellcat Springfield',
      category: 'Pajisje',
      description: 'Micro-compact 9mm për mbajtje të fshehtë, 11+1 ose 13+1.',
      icon: Building2,
      image:
        'https://springfieldarmory.b-cdn.net/wp-content/uploads/HCP9379BOSP-UWD.png',
    },
    {
      title: 'TT',
      category: 'Pajisje',
      description: 'Pistoletë sovjetike single-action, kalibri 7.62x25 Tokarev.',
      icon: HardHat,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/f/f9/Tokarev_TT-33-IMG_6551-white.jpg',
    },
    {
      title: 'Zastava AK47',
      category: 'Pajisje',
      description: 'Varianti Zastava M70, 7.62x39mm, derivat i platformës AK.',
      icon: Shield,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zastava_M70_AB2_noBG.png',
    },
    {
      title: 'M4 Patrolsman',
      category: 'Pajisje',
      description: 'Karabinë 5.56x45mm NATO, e lehtë dhe modulare.',
      icon: Building2,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/61/PEO_M4_Carbine_RAS_noBG.png',
    },
    {
      title: 'ATA Arms Meo12',
      category: 'Pajisje',
      description: 'Shotgun gjysmë-automatike me sistem inertia, 12GA/20GA.',
      icon: HardHat,
      image:
        'https://www.ataarms.com/content/files/products/2023/3/M_PRODUCT-625C4947-2825-4401-9D8D-BB0518F749C3.jpg',
    },
    {
      title: 'Huglu Av Kooperatifi',
      category: 'Pajisje',
      description: 'Huglu XR-8, shotgun me dizajn modern dhe karikator të shkëputshëm.',
      icon: Shield,
      image:
        'https://www.huglu.com.tr/upload/product/xr-8-black.jpg',
    },
    {
      title: 'Khan Arms ST Arista',
      category: 'Pajisje',
      description: 'Model nga linja Arista, i fokusuar te thjeshtësia dhe besueshmëria.',
      icon: Building2,
      image:
        'https://khanarms.com/images/product.photos/large/CD4E0026.png?maxwidth=1170',
    },
    {
      title: 'Kalibri 308Win',
      category: 'Pajisje',
      description: 'Pushkë bolt-action në .308 Winchester, shumë e përdorur për precizion.',
      icon: Users,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/7/7e/Bolt_Action_.308_Rifle.jpg',
    },
    {
      title: 'Utas Defense 512',
      category: 'Pajisje',
      description: 'UTAS UTS-15, shotgun bullpup 12GA pump-action me dy tuba 7+7.',
      icon: Shield,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/c1/Utas-15-bitmap.png',
    },
    {
      title: 'Sabbati',
      category: 'Pajisje',
      description: 'Sabatti: pushkë italiane sportive/gjuetie, e njohur për cilësinë e tytës.',
      icon: HardHat,
      image:
        'https://www.sabatti.it/storage/app/uploads/public/69a/9ae/7ca/69a9ae7ca431a545262640.png',
    },
    {
      title: 'M1 Garand',
      category: 'Pajisje',
      description: 'Pushkë gjysmë-automatike .30-06, ikonike e SHBA në Luftën II Botërore.',
      icon: Shield,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/d1/M1_Garand_rifle_USA_noBG_new.png',
    },
  ];

  const categories = ['Të Gjitha', 'Poligon', 'Pajisje'];
  const [activeCategory, setActiveCategory] = useState('Të Gjitha');
  const galleryTopRef = useRef<HTMLDivElement | null>(null);
  const pajisjeRef = useRef<HTMLDivElement | null>(null);
  const firstPajisjeIndex = galleryItems.findIndex((item) => item.category === 'Pajisje');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    if (category === 'Pajisje') {
      pajisjeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    galleryTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-gray-50 pt-16">
      <section className="relative py-10 bg-gradient-to-br from-white via-gray-50 to-red-100">
        <div className="absolute inset-0 parallax-bg bg-[url('https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-10"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Galeria jonë</h1>
          <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Zbuloni ambientet tona moderne, të pajisura me standarde të larta sigurie dhe profesionalizmi
          </p>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={galleryTopRef}></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Fragment key={index}>
                  {index === firstPajisjeIndex ? <div ref={pajisjeRef} className="col-span-full"></div> : null}
                  <div
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-white to-gray-100 border border-gray-200 hover:border-red-600/50 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-black/50 to-transparent z-10"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      {'image' in item && item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-contain bg-white p-4"
                          loading="lazy"
                        />
                      ) : (
                        <Icon className="h-24 w-24 text-gray-700 group-hover:text-red-600/30 transition-all duration-300 group-hover:scale-110" />
                      )}
                    </div>

                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 bg-red-600/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform transition-transform duration-300 group-hover:translate-y-0">
                      <h3 className="text-gray-900 font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-700 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.description}
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 transition-colors duration-300"></div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}


