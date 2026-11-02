// Jedno źródło prawdy dla danych firmy (NAP). Zmieniaj tylko tutaj.
export const site = {
  url: 'https://www.miroslawstach.pl',
  name: 'Mirosław Stach Firma Usługowa',
  shortName: 'Mirosław Stach',
  tagline: 'Roboty ziemne, wyburzenia i maszyny z operatorem',
  phone: '+48794742706',
  phoneDisplay: '794 742 706',
  email: 'miroslawstach88@gmail.com',
  nip: '5130134954',
  address: {
    street: 'Przeginia 87',
    postalCode: '32-049',
    city: 'Przeginia',
    commune: 'gm. Jerzmanowice-Przeginia',
    county: 'powiat krakowski',
    region: 'małopolskie',
    country: 'PL',
  },
  mapsUrl:
    'https://www.google.com/maps/place/Przeginia+87,+32-049,+Polska/data=!4m2!3m1!1s0x4716fbed46e8553f:0x38a385ba1d45c5',
  // [[DO UZUPEŁNIENIA]] rok założenia – gdy podany, pojawi się na stronie i w schema
  foundingYear: null as number | null,
  // [[DO UZUPEŁNIENIA]] linki do profilu Google, Facebooka itp. (schema sameAs)
  sameAs: [] as string[],
};

// Obszar działania – ZAŁOŻENIE do potwierdzenia przez właściciela.
// lat/lon przybliżone, używane tylko do schematycznej mapki.
type Town = { name: string; lat: number; lon: number; left?: boolean };

export const area: { center: Town; towns: Town[] } = {
  center: { name: 'Przeginia', lat: 50.2, lon: 19.66 },
  towns: [
    { name: 'Jerzmanowice', lat: 50.205, lon: 19.755 },
    { name: 'Olkusz', lat: 50.281, lon: 19.565 },
    { name: 'Krzeszowice', lat: 50.135, lon: 19.633, left: true },
    { name: 'Skała', lat: 50.228, lon: 19.853 },
    { name: 'Sułoszowa', lat: 50.29, lon: 19.733 },
    { name: 'Zabierzów', lat: 50.113, lon: 19.8 },
    { name: 'Wielka Wieś', lat: 50.143, lon: 19.795 },
    { name: 'Trzebinia', lat: 50.16, lon: 19.47, left: true },
    { name: 'Bolesław', lat: 50.292, lon: 19.48, left: true },
    { name: 'Wolbrom', lat: 50.38, lon: 19.76 },
    { name: 'Kraków', lat: 50.062, lon: 19.938 },
  ],
};
