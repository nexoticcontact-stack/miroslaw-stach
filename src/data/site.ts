// Jedno źródło prawdy dla danych firmy (NAP). Zmieniaj tylko tutaj.
export const site = {
  url: 'https://www.miroslawstach.pl',
  // Kod weryfikacyjny Google Search Console (sama wartość content z tagu HTML).
  googleSiteVerification: 'OhCkoMl9N-1Y1MclmyzmH2DYAZHlZRE8ZkTVxhEbo6Y',
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

// Obszar działania: cała Polska.
export const areaServed = "Polska";
