import { Target, Shield, Users, Award, UserCheck, FileCheck, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Target,
      title: 'Sesione në Poligon',
      description: 'Akses në poligonin tonë modern për praktikë individuale ose në grup. Ofrojmë hapësira të pajisura me standarde të larta sigurie dhe pajisje moderne për një përvojë profesionale.',
      features: ['Poligon modern dhe i sigurt', 'Hapësirë për praktikë individuale', 'Mbikëqyrje profesionale', 'Pajisje cilësore'],
    },
    {
      icon: Shield,
      title: 'Trajnim sigurie për fillestarë',
      description: 'Kurs bazë për të gjithë ata që po fillojnë. Mësoni rregullat themelore të sigurisë, manipulimin e sigurt të armëve dhe parimet bazë të qitjes në një mjedis të kontrolluar.',
      features: ['Edukimi teorik dhe praktik', 'Certifikatë përfundimi', 'Materiale trajnimi', 'Instruktorë të certifikuar'],
    },
    {
      icon: Award,
      title: 'Trajnim i avancuar',
      description: 'Për ata që kanë përvojë dhe dëshirojnë të përmirësojnë teknikat e tyre. Fokusohet në saktësi, shpejtësi dhe teknika të avancuara të qitjes në skenarë të ndryshëm.',
      features: ['Teknika të avancuara', 'Skenarë realistë', 'Analizë e performancës', 'Programe të personalizuara'],
    },
    {
      icon: Users,
      title: 'Trajnim në grup',
      description: 'Sesione trajnimi për grupe të vogla deri në 8 persona. Ideale për ekipe, kompani ose grupe miqsh që dëshirojnë të mësojnë së bashku në një ambient profesional.',
      features: ['Maksimumi 8 pjesëmarrës', 'Çmime të reduktuara për grup', 'Sesione të personalizuara', 'Aktivitet bashkëpunues për ekipin'],
    },
    {
      icon: UserCheck,
      title: 'Instruktim individual',
      description: 'Mësime private një-për-një me instruktor të dedikuar. Përshtatje e plotë e programit sipas nevojave dhe objektivave tuaja personale.',
      features: ['Vëmendje e plotë nga instruktori', 'Program i personalizuar', 'Fleksibilitet në orar', 'Përparim i shpejtë'],
    },
    {
      icon: FileCheck,
      title: 'Këshillim për procedurat e licencës',
      description: 'Asistencë dhe informacion i përgjithshëm për procedurat e aplikimit për licencë të armëve të zjarrit. Ju ndihmojmë të kuptoni kërkesat dhe hapat e nevojshëm.',
      features: ['Informacion i përgjithshëm', 'Orientim në proces', 'Dokumentacion bazë', 'Përgjigje për pyetje'],
    },
  ];

  return (
    <div className="bg-gray-50 pt-20">
      <section className="relative pt-14 pb-8 bg-gradient-to-br from-white via-gray-50 to-red-100">
        <div className="absolute inset-0 parallax-bg bg-[url('https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">Shërbimet tona</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-4"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ofrojmë një gamë të plotë shërbimesh profesionale për të gjitha nivelet e përvojës,
            nga fillestarët deri te sportistët e avancuar.
          </p>
        </div>
      </section>

      <section className="pt-8 pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-100 border border-gray-200 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 flex flex-col"
                >
                  <div
                    className={`bg-gradient-to-br from-red-600 to-red-800 w-16 h-16 rounded-xl flex items-center justify-center ${
                      service.title === 'Këshillim për procedurat e licencës' ? 'mb-2' : 'mb-4'
                    }`}
                  >
                    <Icon className="h-8 w-8 text-gray-900" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pt-0 pb-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-900/20 to-red-100/20 border border-red-600/30 rounded-2xl p-10">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-red-600/20 rounded-full p-3">
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Të gjitha shërbimet ofrohen në përputhje me legjislacionin shqiptar për armët dhe municionin.
              Klientët duhet të plotësojnë kërkesat ligjore për përdorim të armëve të zjarrit. Ne rezervojmë të
              drejtën për të refuzuar shërbime në rast të mospërmbushjes së kushteve ligjore ose të rregullave
              të brendshme të sigurisë. Informacioni i dhënë në këtë faqe është i karakterit të përgjithshëm
              dhe nuk zëvendëson këshillimin ligjor profesional apo udhëzimet zyrtare të autoriteteve kompetente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
