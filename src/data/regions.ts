// Strony regionalne. Każda ma własną treść – nie kopiujemy tego samego tekstu z podmienioną nazwą.
export type Region = {
  slug: string;
  name: string; // Małopolska
  locative: string; // w Małopolsce
  voivodeship: string; // województwo małopolskie
  title: string;
  description: string;
  intro: string[];
  cities: string[];
  cover: string;
  faq: { q: string; a: string }[];
};

export const regions: Region[] = [
  {
    slug: 'roboty-ziemne-malopolska',
    name: 'Małopolska',
    locative: 'w Małopolsce',
    voivodeship: 'województwo małopolskie',
    title: 'Roboty ziemne i wyburzenia Małopolska | Mirosław Stach',
    description:
      'Roboty ziemne, wyburzenia i usługi koparką w Małopolsce: Kraków, Olkusz, Chrzanów, Tarnów, Nowy Sącz. Wynajem ładowarek i wozideł. Tel. 794 742 706.',
    intro: [
      'Małopolska to nasz macierzysty region – siedziba firmy znajduje się w powiecie krakowskim. Dzięki temu na budowy w Krakowie i okolicznych powiatach dojeżdżamy szybko i bez dodatkowej logistyki.',
      'Wykonujemy tu prace ziemne, budowlane i drogowe, korytowanie, odwodnienia terenów i wyburzenia, a także wynajmujemy ładowarki 8,5–25 t i wozidła budowlane 1,5–16 t.',
    ],
    cities: ['Kraków', 'Olkusz', 'Krzeszowice', 'Chrzanów', 'Trzebinia', 'Oświęcim', 'Wieliczka', 'Niepołomice', 'Bochnia', 'Myślenice', 'Wadowice', 'Miechów', 'Tarnów', 'Nowy Sącz', 'Nowy Targ'],
    cover: '20230418_173640.jpg',
    faq: [
      {
        q: 'Czy wykonujecie roboty ziemne w Krakowie?',
        a: 'Tak. Siedziba firmy znajduje się w powiecie krakowskim, więc Kraków i okolice to jeden z głównych obszarów naszej pracy.',
      },
      {
        q: 'Czy dojeżdżacie do południowej Małopolski (Nowy Sącz, Nowy Targ)?',
        a: 'Tak, działamy na terenie całej Małopolski i całej Polski. Termin i dojazd ustalamy telefonicznie – zadzwoń pod 794 742 706.',
      },
    ],
  },
  {
    slug: 'roboty-ziemne-slask',
    name: 'Śląsk',
    locative: 'na Śląsku',
    voivodeship: 'województwo śląskie',
    title: 'Roboty ziemne i wyburzenia Śląsk | Mirosław Stach',
    description:
      'Roboty ziemne, wyburzenia i usługi koparką na Śląsku: Katowice, Sosnowiec, Jaworzno, Gliwice, Częstochowa. Wynajem ładowarek i wozideł. Tel. 794 742 706.',
    intro: [
      'Nasza siedziba leży w zachodniej Małopolsce, niedaleko granicy z województwem śląskim. Na Śląsk – zwłaszcza do Jaworzna, Sosnowca, Dąbrowy Górniczej i Katowic – mamy więc blisko.',
      'Na Śląsku wykonujemy prace ziemne i drogowe, korytowanie, niwelację terenu, odwodnienia i wyburzenia. Wynajmujemy też ładowarki 8,5–25 t i wozidła budowlane 1,5–16 t, z operatorem lub bez.',
    ],
    cities: ['Katowice', 'Sosnowiec', 'Jaworzno', 'Dąbrowa Górnicza', 'Chorzów', 'Bytom', 'Gliwice', 'Zabrze', 'Tychy', 'Mysłowice', 'Zawiercie', 'Częstochowa', 'Bielsko-Biała', 'Rybnik'],
    cover: '20220516_114202.jpg',
    faq: [
      {
        q: 'Czy dojeżdżacie do Katowic i Zagłębia?',
        a: 'Tak. Z naszej siedziby w zachodniej Małopolsce do Jaworzna, Sosnowca, Dąbrowy Górniczej i Katowic jest blisko, więc dojazd na Śląsk nie stanowi problemu.',
      },
      {
        q: 'Czy wynajmujecie wozidła i ładowarki na Śląsku?',
        a: 'Tak. Wozidła budowlane 1,5–16 t (z operatorem lub bez) i ładowarki 8,5–25 t wynajmujemy na terenie całego Śląska i całej Polski.',
      },
    ],
  },
];
