import type { Tag } from './gallery';

export type Service = {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  short: string; // krótki opis na kartę
  icon: 'excavator' | 'wheel' | 'demolition' | 'mulcher' | 'loader' | 'dumper' | 'tractor';
  body: string[]; // treść ze starej strony
  scope: string[];
  cover: string;
  tag: Tag;
  faq: { q: string; a: string }[];
};

// Treści usług pochodzą ze starej strony (poprawione tylko literówki).
export const services: Service[] = [
  {
    slug: 'koparka-gasienicowa',
    name: 'Usługi koparką gąsienicową',
    h1: 'Usługi koparką gąsienicową',
    title: 'Usługi koparką gąsienicową – Olkusz, Krzeszowice, Kraków',
    description:
      'Wykopy pod fundamenty i baseny, przepusty, drogi i parkingi, wyburzenia. Usługi koparką gąsienicową dla klientów prywatnych i firm. Przeginia, tel. 794 742 706.',
    short: 'Wykopy fundamentów, wykopy pod baseny, przepusty, wyburzenia, drogi i parkingi.',
    icon: 'excavator',
    body: [
      'Oferujemy kompleksowe usługi koparką gąsienicową dla klientów prywatnych, firm budowlanych, deweloperów oraz inwestorów.',
      'Nasze koparki to maszyny o wysokiej wydajności, pozwalające na wykonanie nawet najtrudniejszych zadań związanych z pracami ziemnymi, jak wykopy fundamentów, wykopy pod baseny, przepusty, wyburzenia czy prace związane z budową dróg i parkingów.',
      'Zapewniamy elastyczność w podejściu do potrzeb naszych klientów, dlatego oferujemy konkurencyjne ceny oraz dostosowanie usług do indywidualnych potrzeb. Nasze usługi koparką gąsienicową są realizowane terminowo i z najwyższą starannością, co przekłada się na zadowolenie naszych klientów.',
      'Skontaktuj się z nami, aby uzyskać więcej informacji na temat naszych usług.',
    ],
    scope: ['Wykopy fundamentów', 'Wykopy pod baseny', 'Przepusty', 'Wyburzenia', 'Budowa dróg i parkingów', 'Odwodnienia terenu'],
    cover: '20230418_173640.jpg',
    tag: 'gasienicowa',
    faq: [
      {
        q: 'Czy wykonujecie wykopy pod fundamenty domu?',
        a: 'Tak. Wykopy fundamentów to jedna z naszych głównych usług koparką gąsienicową, zarówno dla klientów prywatnych, jak i firm budowlanych.',
      },
      {
        q: 'Ile kosztują usługi koparką gąsienicową?',
        a: 'Cenę dostosowujemy do indywidualnych potrzeb: zależy od zakresu prac, czasu pracy, dojazdu i rodzaju gruntu. Zadzwoń pod 794 742 706, a przygotujemy wycenę.',
      },
    ],
  },
  {
    slug: 'koparka-kolowa',
    name: 'Usługi koparką kołową',
    h1: 'Usługi koparką kołową 18 t',
    title: 'Usługi koparką kołową 18 t – korytowanie, niwelacja',
    description:
      'Koparka kołowa 18 t: korytowanie, niwelacja terenu, wykopy pod fundamenty, kanalizację i instalacje, młot wyburzeniowy. Przeginia, Olkusz, Krzeszowice.',
    short: 'Koparka 18 t: korytowanie, niwelacja terenu, kanalizacja, młot wyburzeniowy.',
    icon: 'wheel',
    body: [
      'Oferujemy usługi koparką kołową o masie 18 ton. Nasz sprzęt jest nowoczesny i wydajny, co pozwala nam na wykonanie różnorodnych zadań związanych z pracami ziemnymi.',
      'Dzięki koparce kołowej możemy wykonywać prace takie jak korytowanie, niwelacja terenu, wykopy pod fundamenty, podziemne instalacje, kanalizację, a także prace związane z budową dróg i placów manewrowych.',
      'W naszej ofercie posiadamy również młot wyburzeniowy, co pozwala nam na jeszcze większą elastyczność w wykonywaniu prac związanych z wyburzeniami, burzeniem ścian, fundamentów, a także przygotowaniem terenu pod budowę.',
      'Działamy szybko i sprawnie, zawsze z myślą o jak najlepszych efektach i satysfakcji klienta. Zapraszamy do skorzystania z naszych usług i do kontaktu z nami w celu uzyskania szczegółowych informacji.',
    ],
    scope: ['Korytowanie', 'Niwelacja terenu', 'Wykopy pod fundamenty', 'Podziemne instalacje i kanalizacja', 'Drogi i place manewrowe', 'Młot wyburzeniowy'],
    cover: '20220617_115517.jpg',
    tag: 'kolowa',
    faq: [
      {
        q: 'Co to jest korytowanie?',
        a: 'Korytowanie to usunięcie wierzchniej warstwy gruntu na określoną głębokość pod podbudowę drogi, placu, podjazdu lub kostki brukowej. „Koryto” wypełnia się potem kruszywem i zagęszcza.',
      },
      {
        q: 'Czy koparka kołowa może pracować z młotem wyburzeniowym?',
        a: 'Tak. Mamy młot wyburzeniowy, którym burzymy ściany, fundamenty i przygotowujemy teren pod budowę.',
      },
    ],
  },
  {
    slug: 'wyburzenia-rozbiorki',
    name: 'Wyburzenia i rozbiórki',
    h1: 'Wyburzenia i rozbiórki',
    title: 'Wyburzenia i rozbiórki – Przeginia, Olkusz, Kraków',
    description:
      'Wyburzenia i rozbiórki koparką gąsienicową i koparką kołową z młotem wyburzeniowym: burzenie ścian, fundamentów, przygotowanie terenu pod budowę.',
    short: 'Burzenie ścian i fundamentów, młot wyburzeniowy, przygotowanie terenu pod budowę.',
    icon: 'demolition',
    body: [
      'Wyburzenia wykonujemy koparką gąsienicową oraz koparką kołową o masie 18 ton.',
      'W naszej ofercie posiadamy młot wyburzeniowy, co pozwala nam na jeszcze większą elastyczność w wykonywaniu prac związanych z wyburzeniami, burzeniem ścian, fundamentów, a także przygotowaniem terenu pod budowę.',
      'Do załadunku gruzu dysponujemy ładowarkami o masie od 8,5 do 25 ton.',
      'Skontaktuj się z nami, aby uzyskać więcej informacji.',
    ],
    scope: ['Wyburzenia budynków', 'Burzenie ścian', 'Rozbiórka fundamentów', 'Załadunek gruzu', 'Przygotowanie terenu pod budowę'],
    cover: 'IMG-20230406-WA0000.jpg',
    tag: 'wyburzenia',
    faq: [
      {
        q: 'Czy rozbiórka budynku wymaga pozwolenia?',
        a: 'To zależy od obiektu: część rozbiórek wymaga pozwolenia, część zgłoszenia, a niektóre drobne obiekty nie wymagają formalności. Dla gminy Jerzmanowice-Przeginia i okolic sprawy prowadzi Starostwo Powiatowe w Krakowie i tam najlepiej to potwierdzić.',
      },
      {
        q: 'Jakim sprzętem wykonujecie wyburzenia?',
        a: 'Koparką gąsienicową, koparką kołową 18 t z młotem wyburzeniowym oraz ładowarkami do załadunku gruzu.',
      },
    ],
  },
  {
    slug: 'mulczowanie-karczowanie',
    name: 'Mulczer leśny',
    h1: 'Usługi mulczerem leśnym',
    title: 'Mulczowanie terenu mulczerem leśnym – Olkusz, Kraków',
    description:
      'Usługi mulczerem leśnym: szybkie i skuteczne usuwanie zadrzewień i roślinności w lesie, parkach i przy drogach. Przeginia, Olkusz, Krzeszowice, Kraków.',
    short: 'Szybkie i skuteczne usuwanie zadrzewień i roślinności w lesie, parkach i przy drogach.',
    icon: 'mulcher',
    body: [
      'W naszej ofercie znajdują się usługi mulczerem leśnym, które wykonywane są przez naszą specjalistyczną maszynę.',
      'Dzięki niej jesteśmy w stanie szybko i skutecznie usuwać zadrzewienia oraz elementy roślinne w lesie, parkach czy przydrożach.',
      'Staramy się zawsze spełniać oczekiwania naszych klientów i zapewnić im wysoką jakość usług.',
    ],
    scope: ['Usuwanie zadrzewień', 'Usuwanie zakrzaczeń i roślinności', 'Lasy i parki', 'Przydroża', 'Oczyszczanie działek'],
    cover: '20230401_155849.jpg',
    tag: 'mulczowanie',
    faq: [
      {
        q: 'Co to jest mulczowanie terenu?',
        a: 'Mulczowanie to rozdrabnianie roślinności (krzewów, samosiejek, młodych drzew) bezpośrednio na miejscu. Rozdrobniona masa zostaje na gruncie, więc nie trzeba jej wywozić.',
      },
    ],
  },
  {
    slug: 'wynajem-ladowarki',
    name: 'Wynajem ładowarek 8,5–25 t',
    h1: 'Wynajem ładowarek 8,5–25 ton',
    title: 'Wynajem ładowarki kołowej 8,5–25 t – Przeginia, Olkusz',
    description:
      'Wynajem ładowarek o masie od 8,5 do 25 ton, w tym ładowarek kołowych. Maszyny regularnie serwisowane i przeglądane. Przeginia, Olkusz, Krzeszowice, Kraków.',
    short: 'Ładowarki od 8,5 do 25 ton, w tym kołowe. Regularnie serwisowane.',
    icon: 'loader',
    body: [
      'Oferujemy wynajem ładowarek o masie od 8,5 do 25 ton, w tym ładowarek kołowych.',
      'Maszyny są regularnie serwisowane i przeglądane, a nasze doświadczenie i wysoka jakość zapewniają niezawodność i bezpieczeństwo.',
      'Skontaktuj się z nami, aby uzyskać więcej informacji.',
    ],
    scope: ['Ładowarki 8,5–25 t', 'Ładowarki kołowe', 'Załadunek ziemi, kruszywa i gruzu'],
    cover: 'IMG-20221115-WA0001.jpg',
    tag: 'ladowarka',
    faq: [
      {
        q: 'Jakie ładowarki są dostępne do wynajęcia?',
        a: 'Ładowarki o masie od 8,5 do 25 ton, w tym ładowarki kołowe. Maszyny są regularnie serwisowane i przeglądane.',
      },
    ],
  },
  {
    slug: 'wynajem-wozidel',
    name: 'Wynajem wozideł budowlanych',
    h1: 'Wynajem wozideł budowlanych',
    title: 'Wynajem wozideł budowlanych 1,5–16 t – Małopolska',
    description:
      'Wynajem wozideł budowlanych o nośności od 1,5 do 16 ton, z doświadczonymi operatorami lub bez. Przeginia, Olkusz, Krzeszowice, Kraków.',
    short: 'Nośność od 1,5 do 16 ton, z doświadczonym operatorem lub bez.',
    icon: 'dumper',
    body: [
      'Oferujemy wynajem wozideł budowlanych o różnych nośnościach od 1,5 tony do 16 ton z doświadczonymi operatorami lub bez.',
      'Zachęcamy do kontaktu w celu uzyskania szczegółowych informacji.',
    ],
    scope: ['Nośność 1,5–16 t', 'Z operatorem lub bez', 'Transport urobku na budowie'],
    cover: 'IMG-20230221-WA0003.jpg',
    tag: 'wozidla',
    faq: [
      {
        q: 'Czy wozidło można wynająć bez operatora?',
        a: 'Tak. Wozidła budowlane wynajmujemy z doświadczonym operatorem lub bez operatora.',
      },
    ],
  },
  {
    slug: 'ciagnik-beczkowoz-zamiatarka',
    name: 'Usługi ciągnikiem rolniczym',
    h1: 'Usługi ciągnikiem rolniczym',
    title: 'Usługi ciągnikiem, beczkowóz 10 000 l, zamiatarka',
    description:
      'Usługi ciągnikiem rolniczym z przyczepą 10 m³ i beczką 10 000 l: przewóz materiałów, polewanie dróg, stabilizacja. Zamiatarka uliczna. Przeginia i okolice.',
    short: 'Przyczepa 10 m³, beczka 10 000 l, polewanie dróg, zamiatarka uliczna.',
    icon: 'tractor',
    body: [
      'Oferujemy usługi ciągnikiem rolniczym. Nasza firma dysponuje nowoczesnym ciągnikiem z przyczepą o pojemności 10 metrów sześciennych oraz beczką o pojemności 10 000 litrów.',
      'Dzięki temu dysponujemy możliwością przewozu różnorodnych materiałów. W ramach naszych usług oferujemy między innymi polewanie dróg lub stabilizacji.',
      'Dodatkowo w naszej ofercie znajdują się usługi zamiatarką uliczną. Staramy się zawsze spełniać oczekiwania naszych klientów i zapewnić im wysoką jakość usług.',
    ],
    scope: ['Przyczepa 10 m³', 'Beczka 10 000 l', 'Polewanie dróg i stabilizacji', 'Przewóz materiałów', 'Zamiatarka uliczna'],
    cover: '20220812_164110.jpg',
    tag: 'ciagnik',
    faq: [
      {
        q: 'Jaką pojemność ma przyczepa i beczka?',
        a: 'Przyczepa ma pojemność 10 m³, a beczka 10 000 litrów.',
      },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
