import type { Tag } from './gallery';

export type Service = {
  slug: string;
  no: string;
  name: string; // nazwa w nawigacji / liście
  h1: string;
  title: string; // <title> 50–60 znaków
  description: string; // meta description 140–160 znaków
  lead: string; // krótka, samodzielna odpowiedź (GEO)
  key: string; // krótki parametr na liście
  specs: { label: string; value: string }[];
  scope: string[];
  body: string[];
  forWhom?: string;
  cover: string; // plik z galerii
  tag: Tag;
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'koparka-gasienicowa',
    key: 'z operatorem',
    no: '01',
    name: 'Koparka gąsienicowa',
    h1: 'Usługi koparką gąsienicową',
    title: 'Usługi koparką gąsienicową – Olkusz, Krzeszowice, Kraków',
    description:
      'Wykopy pod fundamenty i baseny, przepusty, drogi i parkingi. Usługi koparką gąsienicową z operatorem – Przeginia, Olkusz, Krzeszowice, Kraków. Tel. 794 742 706.',
    lead:
      'Koparką gąsienicową wykonujemy wykopy pod fundamenty i baseny, przepusty, prace przy budowie dróg i parkingów oraz wyburzenia. Pracujemy z własnym operatorem dla klientów prywatnych, firm budowlanych, deweloperów i inwestorów.',
    specs: [
      { label: 'Typ', value: 'koparka gąsienicowa' },
      { label: 'Obsługa', value: 'z operatorem' },
      { label: 'Zastosowanie', value: 'wykopy, drogi, wyburzenia' },
    ],
    scope: [
      'wykopy pod fundamenty i ławy fundamentowe',
      'wykopy pod baseny',
      'przepusty i rowy',
      'roboty ziemne przy budowie dróg i parkingów',
      'wyburzenia i rozbiórki',
      'odwodnienia terenu',
    ],
    body: [
      'Gąsienice dobrze sprawdzają się tam, gdzie grunt jest miękki, podmokły albo nierówny. Maszyna stoi stabilnie przy głębokich wykopach, a nacisk rozkłada się na dużej powierzchni.',
      'Zakres i termin ustalamy telefonicznie. Najwięcej da się ustalić, gdy wiadomo, co ma powstać, gdzie leży działka i czy jest projekt lub szkic wykopu.',
    ],
    forWhom: 'Klienci prywatni (budowa domu, basen), firmy budowlane, deweloperzy, inwestorzy.',
    cover: '20230418_173640.jpg',
    tag: 'gasienicowa',
    faq: [
      {
        q: 'Kiedy lepsza jest koparka gąsienicowa, a kiedy kołowa?',
        a: 'Gąsienicowa lepiej radzi sobie na miękkim, podmokłym i nierównym terenie oraz przy głębokich wykopach. Kołowa szybciej się przemieszcza i nie niszczy utwardzonej nawierzchni, więc częściej wybiera się ją do prac przy drogach i na placach.',
      },
      {
        q: 'Czy wykonujecie wykopy pod fundamenty domu?',
        a: 'Tak. Wykopy pod fundamenty i ławy fundamentowe to jedna z głównych usług koparką gąsienicową. Wystarczy projekt lub wymiary wykopu oraz lokalizacja działki.',
      },
      {
        q: 'Od czego zależy cena usług koparką?',
        a: 'Od rodzaju maszyny, czasu pracy, odległości dojazdu, rodzaju gruntu i tego, czy urobek trzeba wywieźć. Dokładną wycenę podajemy po rozmowie o zakresie prac.',
      },
    ],
  },
  {
    slug: 'koparka-kolowa',
    key: '18 t · młot',
    no: '02',
    name: 'Koparka kołowa 18 t',
    h1: 'Usługi koparką kołową 18 t',
    title: 'Usługi koparką kołową 18 t – korytowanie, niwelacja',
    description:
      'Koparka kołowa 18 t z operatorem: korytowanie, niwelacja terenu, wykopy pod fundamenty, kanalizację i instalacje, młot wyburzeniowy. Przeginia i okolice.',
    lead:
      'Koparką kołową o masie 18 ton wykonujemy korytowanie, niwelację terenu, wykopy pod fundamenty, kanalizację i instalacje podziemne oraz prace przy budowie dróg i placów manewrowych. Maszynę można wyposażyć w młot wyburzeniowy.',
    specs: [
      { label: 'Masa', value: '18 t' },
      { label: 'Osprzęt', value: 'łyżki, młot wyburzeniowy' },
      { label: 'Obsługa', value: 'z operatorem' },
    ],
    scope: [
      'korytowanie pod drogi, place i kostkę',
      'niwelacja terenu',
      'wykopy pod fundamenty',
      'wykopy pod kanalizację i instalacje podziemne',
      'budowa dróg i placów manewrowych',
      'kucie młotem: ściany, fundamenty, przygotowanie terenu pod budowę',
    ],
    body: [
      'Koparka kołowa szybko przejeżdża między miejscami pracy i nie wymaga lawety na krótkich odcinkach. Dobrze sprawdza się przy pracach liniowych, takich jak drogi, place czy wykopy pod sieci.',
      'Z młotem wyburzeniowym ta sama maszyna rozbija beton, stare fundamenty i ściany. Teren pod nową budowę można więc przygotować bez zmiany sprzętu.',
    ],
    cover: '20220617_115517.jpg',
    tag: 'kolowa',
    faq: [
      {
        q: 'Co to jest korytowanie?',
        a: 'Korytowanie to usunięcie wierzchniej warstwy gruntu na określoną głębokość pod podbudowę drogi, placu, podjazdu lub kostki brukowej. Powstałe „koryto” wypełnia się potem kruszywem i zagęszcza.',
      },
      {
        q: 'Czy koparka kołowa może pracować z młotem wyburzeniowym?',
        a: 'Tak. Mamy młot wyburzeniowy do koparki, którym kujemy ściany, fundamenty i betonowe nawierzchnie.',
      },
      {
        q: 'Czy wykonujecie niwelację terenu pod trawnik lub kostkę?',
        a: 'Tak. Niwelację terenu wykonujemy zarówno na prywatnych działkach, jak i na większych placach, a także przed korytowaniem pod nawierzchnie.',
      },
    ],
  },
  {
    slug: 'wyburzenia-rozbiorki',
    key: 'młot wyburzeniowy',
    no: '03',
    name: 'Wyburzenia i rozbiórki',
    h1: 'Wyburzenia i rozbiórki',
    title: 'Wyburzenia i rozbiórki – Przeginia, Olkusz, Kraków',
    description:
      'Wyburzenia budynków, rozbiórki fundamentów i ścian koparką z młotem wyburzeniowym. Przygotowanie terenu pod budowę. Przeginia, Olkusz, Krzeszowice, Kraków.',
    lead:
      'Wyburzenia i rozbiórki wykonujemy koparką gąsienicową oraz koparką kołową z młotem wyburzeniowym. Rozbieramy ściany, fundamenty i betonowe elementy, a gruz ładujemy ładowarką. Po rozbiórce teren można od razu przygotować pod nową budowę.',
    specs: [
      { label: 'Sprzęt', value: 'koparki, młot wyburzeniowy, ładowarka' },
      { label: 'Zakres', value: 'ściany, fundamenty, beton' },
      { label: 'Po rozbiórce', value: 'przygotowanie terenu' },
    ],
    scope: [
      'wyburzenia budynków gospodarczych i starych zabudowań',
      'rozbiórka fundamentów i płyt betonowych',
      'kucie ścian i elementów betonowych młotem',
      'załadunek gruzu ładowarką',
      'niwelacja i przygotowanie terenu po rozbiórce',
    ],
    body: [
      'Przy rozbiórce liczy się dobór sprzętu. Koparką z chwytakiem lub łyżką rozbiera się konstrukcję, młotem wyburzeniowym kuje beton i fundamenty, a ładowarka sprawnie ładuje gruz.',
      'Przed zleceniem warto sprawdzić formalności. Część rozbiórek wymaga pozwolenia, część zgłoszenia w starostwie, a niektóre drobne obiekty nie wymagają żadnych formalności.',
    ],
    cover: 'IMG-20230406-WA0000.jpg',
    tag: 'wyburzenia',
    faq: [
      {
        q: 'Czy rozbiórka budynku wymaga pozwolenia?',
        a: 'To zależy od obiektu. Część rozbiórek wymaga pozwolenia na rozbiórkę, część wystarczy zgłosić, a niektóre drobne obiekty nie wymagają formalności. Dla gminy Jerzmanowice-Przeginia i okolic sprawy prowadzi Starostwo Powiatowe w Krakowie (wydział architektury) i tam najlepiej to potwierdzić.',
      },
      {
        q: 'Jakim sprzętem wykonujecie wyburzenia?',
        a: 'Koparką gąsienicową, koparką kołową 18 t z młotem wyburzeniowym oraz ładowarką do załadunku gruzu.',
      },
      {
        q: 'Czy po rozbiórce przygotujecie teren pod budowę?',
        a: 'Tak. Po wyburzeniu możemy wyrównać teren, wykonać niwelację i wykopy pod nowe fundamenty.',
      },
    ],
  },
  {
    slug: 'mulczowanie-karczowanie',
    key: 'na ciągniku',
    no: '04',
    name: 'Mulczer leśny',
    h1: 'Mulczowanie terenu mulczerem leśnym',
    title: 'Mulczowanie terenu mulczerem leśnym – Olkusz, Kraków',
    description:
      'Mulczowanie terenu i usuwanie zakrzaczeń mulczerem leśnym na ciągniku. Działki, lasy, parki, pobocza dróg. Przeginia, Olkusz, Krzeszowice, Kraków.',
    lead:
      'Mulczerem leśnym zamontowanym na ciągniku usuwamy zadrzewienia, zakrzaczenia i roślinność na działkach, w lasach, parkach i przy drogach. Mulczer rozdrabnia roślinność na miejscu, więc nie trzeba jej wywozić.',
    specs: [
      { label: 'Maszyna', value: 'mulczer leśny na ciągniku' },
      { label: 'Teren', value: 'działki, lasy, parki, pobocza' },
      { label: 'Efekt', value: 'rozdrobniona masa na miejscu' },
    ],
    scope: [
      'oczyszczanie zarośniętych działek',
      'usuwanie zakrzaczeń i samosiejek',
      'mulczowanie terenu przed budową',
      'utrzymanie poboczy i przydroży',
      'prace w lasach i parkach',
    ],
    body: [
      'Mulczer leśny rozdrabnia krzewy, młode drzewa i wysoką roślinność. Teren od razu nadaje się do dalszych prac: niwelacji, wykopów albo założenia trawnika.',
      'Karpy i większe korzenie, których mulczer nie rozdrobni, można usunąć koparką.',
    ],
    cover: '20230401_155849.jpg',
    tag: 'mulczowanie',
    faq: [
      {
        q: 'Co to jest mulczowanie terenu?',
        a: 'Mulczowanie to rozdrabnianie roślinności (krzewów, samosiejek, wysokiej trawy) bezpośrednio na miejscu. Rozdrobniona masa zostaje na gruncie jako ściółka, więc nie trzeba jej wywozić.',
      },
      {
        q: 'Czy mulczer poradzi sobie z zarośniętą działką?',
        a: 'Tak, to jego główne zastosowanie. Krzewy i młode drzewa rozdrabnia na miejscu, a pozostałe karpy i większe korzenie można usunąć koparką.',
      },
      {
        q: 'Od czego zależy koszt mulczowania?',
        a: 'Od powierzchni, gęstości i grubości roślinności, ukształtowania terenu i dojazdu. Wycenę podajemy po opisie lub zdjęciach terenu.',
      },
    ],
  },
  {
    slug: 'wynajem-ladowarki',
    key: '8,5–25 t',
    no: '05',
    name: 'Ładowarki 8,5–25 t',
    h1: 'Wynajem ładowarek kołowych 8,5–25 t',
    title: 'Wynajem ładowarki kołowej 8,5–25 t – Przeginia, Olkusz',
    description:
      'Wynajem ładowarek kołowych o masie od 8,5 do 25 ton. Załadunek ziemi, kruszywa i gruzu. Regularnie serwisowane maszyny. Przeginia, Olkusz, Krzeszowice, Kraków.',
    lead:
      'Wynajmujemy ładowarki o masie od 8,5 do 25 ton, w tym ładowarki kołowe. Służą do załadunku i przemieszczania ziemi, kruszywa i gruzu. Maszyny są regularnie serwisowane i przeglądane.',
    specs: [
      { label: 'Masa', value: '8,5–25 t' },
      { label: 'Typ', value: 'ładowarki kołowe' },
      { label: 'Stan', value: 'regularne serwisy i przeglądy' },
    ],
    scope: [
      'załadunek ziemi i urobku na wywrotki i przyczepy',
      'przemieszczanie kruszywa na placu',
      'załadunek gruzu z rozbiórek',
      'prace na składach i placach budowy',
    ],
    body: [
      'Duży wybór mas pozwala dobrać ładowarkę do zadania: mniejszą na ciasną budowę, większą do szybkiego załadunku dużych ilości materiału.',
    ],
    cover: 'IMG-20221115-WA0001.jpg',
    tag: 'ladowarka',
    faq: [
      {
        q: 'Jakie ładowarki są dostępne do wynajęcia?',
        a: 'Ładowarki o masie od 8,5 do 25 ton, w tym ładowarki kołowe.',
      },
      {
        q: 'Do czego najczęściej wynajmuje się ładowarkę kołową?',
        a: 'Do załadunku ziemi, kruszywa i gruzu na wywrotki lub przyczepy oraz do przemieszczania materiałów na placu budowy i składzie.',
      },
    ],
  },
  {
    slug: 'wynajem-wozidel',
    key: '1,5–16 t',
    no: '06',
    name: 'Wozidła 1,5–16 t',
    h1: 'Wynajem wozideł budowlanych 1,5–16 t',
    title: 'Wynajem wozideł budowlanych 1,5–16 t – Małopolska',
    description:
      'Wynajem wozideł budowlanych o ładowności od 1,5 do 16 ton, z operatorem lub bez. Transport urobku i kruszywa na budowie. Przeginia, Olkusz, Kraków.',
    lead:
      'Wynajmujemy wozidła budowlane o ładowności od 1,5 do 16 ton, z doświadczonym operatorem lub bez. Wozidło przewozi urobek, ziemię i kruszywo w obrębie budowy, także po nieutwardzonym terenie.',
    specs: [
      { label: 'Ładowność', value: '1,5–16 t' },
      { label: 'Obsługa', value: 'z operatorem lub bez' },
      { label: 'Teren', value: 'budowa, grunt nieutwardzony' },
    ],
    scope: [
      'przewóz urobku z wykopu na hałdę',
      'dowóz kruszywa i piasku w obrębie budowy',
      'praca w parze z koparką lub ładowarką',
    ],
    body: [
      'Małe wozidło zmieści się na ciasnej, prywatnej działce, a większe przyspiesza pracę przy dużych wykopach. Przy większych zleceniach wozidło pracuje razem z naszą koparką lub ładowarką.',
    ],
    cover: 'IMG-20230221-WA0003.jpg',
    tag: 'wozidla',
    faq: [
      {
        q: 'Czy wozidło można wynająć bez operatora?',
        a: 'Tak. Wozidła wynajmujemy z doświadczonym operatorem albo bez operatora.',
      },
      {
        q: 'Jaką ładowność mają wozidła?',
        a: 'Od 1,5 do 16 ton, więc można dobrać maszynę do wielkości budowy.',
      },
    ],
  },
  {
    slug: 'ciagnik-beczkowoz-zamiatarka',
    key: '10 m³ · 10 000 l',
    no: '07',
    name: 'Ciągnik, beczkowóz, zamiatarka',
    h1: 'Usługi ciągnikiem rolniczym, beczkowozem i zamiatarką',
    title: 'Usługi ciągnikiem, beczkowóz 10 000 l, zamiatarka',
    description:
      'Usługi ciągnikiem rolniczym z przyczepą 10 m³ i beczką 10 000 l: transport materiałów, polewanie dróg, stabilizacja. Zamiatarka uliczna. Przeginia i okolice.',
    lead:
      'Ciągnikiem rolniczym z przyczepą o pojemności 10 m³ przewozimy materiały sypkie. Z beczką o pojemności 10 000 litrów polewamy drogi i dowozimy wodę do stabilizacji. W ofercie jest też zamiatarka uliczna.',
    specs: [
      { label: 'Przyczepa', value: '10 m³' },
      { label: 'Beczka', value: '10 000 l' },
      { label: 'Dodatkowo', value: 'zamiatarka uliczna' },
    ],
    scope: [
      'transport ziemi, kruszywa i innych materiałów',
      'polewanie dróg (np. ograniczanie pylenia na budowie)',
      'dowóz wody do stabilizacji gruntu',
      'zamiatanie ulic i placów',
    ],
    body: [
      'Ciągnik z przyczepą dobrze sprawdza się na krótkich i średnich trasach oraz tam, gdzie trudno wjechać ciężarówką. Beczka 10 000 l pozwala w jednym kursie polać długi odcinek drogi.',
    ],
    cover: '20220812_164110.jpg',
    tag: 'ciagnik',
    faq: [
      {
        q: 'Jaką pojemność ma przyczepa i beczka?',
        a: 'Przyczepa ma pojemność 10 m³, a beczka 10 000 litrów.',
      },
      {
        q: 'Do czego służy polewanie dróg?',
        a: 'Polewanie ogranicza pylenie na budowach i drogach gruntowych. Wodę z beczki wykorzystuje się też przy stabilizacji gruntu.',
      },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
