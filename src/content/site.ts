export const locationCoordinates = {
  lat: 42.78190857253984,
  lng: 20.490423237151255,
} as const;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${locationCoordinates.lat},${locationCoordinates.lng}`;
export const mapsEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d732.0762806227497!2d20.490181219674966!3d42.781899072567825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1774712685858!5m2!1sen!2s';

export const primaryPhoneNumber = '+38344281751';
export const formattedPrimaryPhoneNumber = '+383 44 281 751';
export const secondaryPhoneNumber = '+38349453958';
export const formattedSecondaryPhoneNumber = '+383 49 453 958';

export const addressLines = ['Istog, Rr. Fadil Ferati', 'Përballë Stacionit Policor'];

export const navigationItems = [
  { name: 'Ballina', href: '/' },
  { name: 'Shërbimet', href: '/services' },
  { name: 'Galeria', href: '/gallery' },
  { name: 'Kontakti', href: '/contact' },
] as const;

export const socialLinks = {
  facebook: 'https://www.facebook.com/PoligoniTekniku',
  instagram: 'https://www.instagram.com/poligonitekniku/',
} as const;
