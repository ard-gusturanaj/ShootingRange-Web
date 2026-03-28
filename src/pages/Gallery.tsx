import { useMemo, useRef, useState } from 'react';
import { Building2, Crosshair, HardHat, Shield, Target, Users } from 'lucide-react';
import pol3 from '../pol3.jpg';
import poli2 from '../poli2.png';
import polImg from '../pol_img.jpg';

type GalleryCategory = 'Të Gjitha' | 'Poligon' | 'Pajisje';

type GalleryItem = {
  title: string;
  category: Exclude<GalleryCategory, 'Të Gjitha'>;
  description: string;
  image: string;
  icon: typeof Target;
};

const galleryItems: GalleryItem[] = [
  {
    title: 'Poligoni - Pamje 1',
    category: 'Poligon',
    description: 'Hapësirë moderne për prezantimin e pajisjeve dhe punës praktike.',
    icon: Target,
    image: poli2,
  },
  {
    title: 'Poligoni - Pamje 2',
    category: 'Poligon',
    description: 'Zona e stërvitjes me standarde të larta sigurie dhe organizim të qartë.',
    icon: Target,
    image: polImg,
  },
  {
    title: 'Poligoni - Pamje 3',
    category: 'Poligon',
    description: 'Pamje nga ambienti i poligonit gjatë përgatitjes për seancat praktike.',
    icon: Crosshair,
    image: pol3,
  },
  {
    title: 'XDM',
    category: 'Pajisje',
    description: 'Pistoletë striker-fired 9mm me ergonomi sportive dhe kapacitet të lartë.',
    icon: Users,
    image: 'https://springfieldarmory.b-cdn.net/wp-content/uploads/XDM-Elite-model-1600x1200-3.png',
  },
  {
    title: 'CZ Shadow',
    category: 'Pajisje',
    description: 'Pistoletë çeliku SA/DA e njohur për kontroll të mirë dhe saktësi të lartë.',
    icon: Shield,
    image: 'https://czubpimstorage.blob.core.windows.net/strapi-pim/assets/CZ_SHADOW_2_left_black_c568e39ec2.png',
  },
  {
    title: 'Taurus G2C',
    category: 'Pajisje',
    description: 'Pistoletë kompakte 9mm për përdorim të përditshëm dhe trajnim bazë.',
    icon: Users,
    image: 'https://www.taurususa.com/wp-content/uploads/2025/05/1-G3C4031_R-b84fc506.webp',
  },
  {
    title: 'Hellcat Springfield',
    category: 'Pajisje',
    description: 'Micro-compact 9mm me profil të vogël dhe kapacitet efikas.',
    icon: Building2,
    image: 'https://springfieldarmory.b-cdn.net/wp-content/uploads/HCP9379BOSP-UWD.png',
  },
  {
    title: 'TT',
    category: 'Pajisje',
    description: 'Pistoletë klasike sovjetike single-action në kalibrin 7.62x25 Tokarev.',
    icon: HardHat,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Tokarev_TT-33-IMG_6551-white.jpg',
  },
  {
    title: 'Zastava AK47',
    category: 'Pajisje',
    description: 'Varianti Zastava M70 në 7.62x39mm, i ndërtuar mbi platformën AK.',
    icon: Shield,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zastava_M70_AB2_noBG.png',
  },
  {
    title: 'M4 Patrolsman',
    category: 'Pajisje',
    description: 'Karabinë 5.56x45mm NATO me platformë modulare dhe peshë të ulët.',
    icon: Building2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/PEO_M4_Carbine_RAS_noBG.png',
  },
  {
    title: 'ATA Arms Meo12',
    category: 'Pajisje',
    description: 'Shotgun gjysmë-automatike me sistem inertia në 12GA ose 20GA.',
    icon: HardHat,
    image: 'https://www.ataarms.com/content/files/products/2023/3/M_PRODUCT-625C4947-2825-4401-9D8D-BB0518F749C3.jpg',
  },
  {
    title: 'Huglu Av Kooperatifi',
    category: 'Pajisje',
    description: 'Shotgun modern me linja sportive dhe karikator të shkëputshëm.',
    icon: Shield,
    image: 'https://www.huglu.com.tr/upload/product/xr-8-black.jpg',
  },
  {
    title: 'Khan Arms ST Arista',
    category: 'Pajisje',
    description: 'Model i fokusuar te thjeshtësia, kontrolli dhe besueshmëria në përdorim.',
    icon: Building2,
    image: 'https://khanarms.com/images/product.photos/large/CD4E0026.png?maxwidth=1170',
  },
  {
    title: 'Kalibri 308Win',
    category: 'Pajisje',
    description: 'Pushkë bolt-action në .308 Winchester, e përshtatshme për qitje precize.',
    icon: Users,
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Bolt_Action_.308_Rifle.jpg',
  },
  {
    title: 'Utas Defense 512',
    category: 'Pajisje',
    description: 'Shotgun bullpup pump-action me konfigurim kompakt dhe kapacitet të lartë.',
    icon: Shield,
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Utas-15-bitmap.png',
  },
  {
    title: 'Sabbati',
    category: 'Pajisje',
    description: 'Pushkë italiane sportive dhe gjuetie, e njohur për cilësinë e tytës.',
    icon: HardHat,
    image: 'https://www.sabatti.it/storage/app/uploads/public/69a/9ae/7ca/69a9ae7ca431a545262640.png',
  },
  {
    title: 'M1 Garand',
    category: 'Pajisje',
    description: 'Pushkë gjysmë-automatike .30-06 me rëndësi historike dhe profil klasik.',
    icon: Shield,
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/M1_Garand_rifle_USA_noBG_new.png',
  },
];

const categories: GalleryCategory[] = ['Të Gjitha', 'Poligon', 'Pajisje'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Të Gjitha');
  const galleryTopRef = useRef<HTMLDivElement | null>(null);
  const pajisjeRef = useRef<HTMLDivElement | null>(null);

  const visibleItems = useMemo(() => {
    if (activeCategory === 'Të Gjitha') {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryClick = (category: GalleryCategory) => {
    setActiveCategory(category);

    if (category === 'Pajisje') {
      pajisjeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    galleryTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-gray-50 pt-16">
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-red-100 py-10">
        <div className="absolute inset-0 parallax-bg bg-[url('https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-10"></div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Galeria jonë</h1>
          <div className="mx-auto mb-4 h-1 w-16 bg-gradient-to-r from-red-600 to-red-800"></div>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg">
            Shihni ambientet e poligonit dhe një pjesë të pajisjeve që prezantohen në hapësirën tonë.
          </p>
        </div>
      </section>

      <section className="bg-white py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryClick(category)}
                className={`rounded-lg px-6 py-2.5 font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30'
                    : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-gray-100 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div ref={galleryTopRef}></div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item, index) => {
              const Icon = item.icon;
              const shouldMarkPajisjeAnchor = activeCategory === 'Pajisje' ? index === 0 : item.category === 'Pajisje';

              return (
                <div
                  key={`${item.category}-${item.title}`}
                  ref={shouldMarkPajisjeAnchor ? pajisjeRef : null}
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 transition-all duration-300 hover:-translate-y-1 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-600/20"
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-black/50 to-transparent"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={item.image} alt={item.title} className="h-full w-full bg-white p-4 object-contain" loading="lazy" />
                  </div>

                  <div className="absolute right-4 top-4 z-20">
                    <span className="rounded-full bg-red-600/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 z-20 p-4 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="mb-2 flex items-center gap-2">
                      <Icon className="h-4 w-4 text-red-500" />
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-red-600/0 transition-colors duration-300 group-hover:bg-red-600/5"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
