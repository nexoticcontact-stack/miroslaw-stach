import type { ImageMetadata } from 'astro';

export type Tag =
  | 'gasienicowa'
  | 'kolowa'
  | 'wyburzenia'
  | 'mulczowanie'
  | 'ladowarka'
  | 'wozidla'
  | 'ciagnik'
  | 'teren';

type Entry = { file: string; alt: string; tags: Tag[] };

// Opisy zdjęć z realizacji (alt) – opisują to, co faktycznie widać na zdjęciu.
const entries: Entry[] = [
  { file: '20230418_173640.jpg', alt: 'Koparka gąsienicowa na hałdzie ziemi podczas robót ziemnych na wiejskiej działce', tags: ['gasienicowa'] },
  { file: '20211117_131104.jpg', alt: 'Wyrównany teren działki po niwelacji, w tle nowy dom jednorodzinny', tags: ['teren', 'kolowa'] },
  { file: '20211220_154205.jpg', alt: 'Koparka wykonuje głęboki wykop pod instalacje podziemne', tags: ['gasienicowa'] },
  { file: '20220125_075227.jpg', alt: 'Ładowarka kołowa ładuje gruz do kontenera zimą', tags: ['ladowarka', 'wyburzenia'] },
  { file: '20220125_140152.jpg', alt: 'Koparka gąsienicowa ładuje ziemię na przyczepę ciągnika na zaśnieżonej budowie', tags: ['gasienicowa', 'ciagnik'] },
  { file: '20220314_175517.jpg', alt: 'Ładowarka kołowa załadowuje przyczepę ciągnika przy zbiorniku wodnym', tags: ['ladowarka', 'ciagnik'] },
  { file: '20220511_152449.jpg', alt: 'Koparka gąsienicowa usypuje groblę nad zbiornikiem wodnym', tags: ['gasienicowa'] },
  { file: '20220512_192519.jpg', alt: 'Plac budowy z ciągnikiem, maszynami i pryzmami kruszywa', tags: ['teren', 'ciagnik'] },
  { file: '20220516_114202.jpg', alt: 'Koparka gąsienicowa i koparka kołowa przy pracy na placu budowy', tags: ['gasienicowa', 'kolowa'] },
  { file: '20220517_083915.jpg', alt: 'Koparka ładuje urobek na wywrotkę nad wodą', tags: ['gasienicowa'] },
  { file: '20220607_122047.jpg', alt: 'Przyczepa ciągnika o pojemności 10 m³ wypełniona ziemią z wykopu', tags: ['ciagnik'] },
  { file: '20220614_144901.jpg', alt: 'Koparka gąsienicowa wykonuje wykop na działce budowlanej', tags: ['gasienicowa'] },
  { file: '20220617_115517.jpg', alt: 'Ciągnik z przyczepą i koparka kołowa podczas wykopu na łące', tags: ['kolowa', 'ciagnik'] },
  { file: '20220706_124327.jpg', alt: 'Plac utwardzony kruszywem po korytowaniu i niwelacji', tags: ['teren', 'kolowa'] },
  { file: '20220706_150017.jpg', alt: 'Dwie koparki kołowe przygotowane do pracy na placu', tags: ['kolowa'] },
  { file: '20220726_124154.jpg', alt: 'Koparka przy rozbiórce, na pierwszym planie gruz betonowy', tags: ['wyburzenia'] },
  { file: '20220812_164110.jpg', alt: 'Ciągnik rolniczy z beczkowozem do polewania dróg', tags: ['ciagnik'] },
  { file: '20220901_094422.jpg', alt: 'Koparka gąsienicowa na szczycie nasypu ziemnego', tags: ['gasienicowa'] },
  { file: '20220908_175902.jpg', alt: 'Ciągnik z beczką na wodę obok koparki na mokrym placu budowy', tags: ['ciagnik'] },
  { file: '20221222_091528.jpg', alt: 'Transport minikoparki i wozidła budowlanego na samochodzie ciężarowym', tags: ['wozidla'] },
  { file: '20230220_081827.jpg', alt: 'Koparka gąsienicowa podczas robót ziemnych na dużym terenie inwestycji', tags: ['gasienicowa'] },
  { file: '20230303_091050.jpg', alt: 'Wykop wzdłuż ściany budynku wykonany koparką', tags: ['gasienicowa'] },
  { file: '20230325_153138.jpg', alt: 'Koparka gąsienicowa na pryzmie ziemi, widok z przodu', tags: ['gasienicowa'] },
  { file: '20230331_134454.jpg', alt: 'Teren po mulczowaniu, rozdrobniona roślinność na łące', tags: ['mulczowanie'] },
  { file: '20230331_155159.jpg', alt: 'Ciągnik z mulczerem leśnym podczas usuwania zarośli', tags: ['mulczowanie', 'ciagnik'] },
  { file: '20230331_155208.jpg', alt: 'Pas terenu oczyszczony mulczerem leśnym', tags: ['mulczowanie'] },
  { file: '20230401_155842.jpg', alt: 'Wyrównany pas gruntu po przejeździe mulczera leśnego', tags: ['mulczowanie'] },
  { file: '20230401_155849.jpg', alt: 'Mulczer leśny zamontowany na ciągniku, widok z przodu', tags: ['mulczowanie', 'ciagnik'] },
  { file: 'IMG-20220427-WA0000.jpg', alt: 'Koparka przy pracy na budowie osiedla', tags: ['kolowa'] },
  { file: 'IMG-20221115-WA0001.jpg', alt: 'Ładowarka kołowa przy pryzmie gruzu z rozbiórki', tags: ['ladowarka', 'wyburzenia'] },
  { file: 'IMG-20230119-WA0001.jpg', alt: 'Koparka pracująca wieczorem przy oświetleniu roboczym', tags: ['gasienicowa'] },
  { file: 'IMG-20230210-WA0000.jpg', alt: 'Koparki przy rowie melioracyjnym zimą', tags: ['gasienicowa'] },
  { file: 'IMG-20230221-WA0003.jpg', alt: 'Wozidło budowlane i koparka kołowa na zimowym placu budowy', tags: ['wozidla', 'kolowa'] },
  { file: 'IMG-20230222-WA0001.jpg', alt: 'Koparka usuwa zarośla i karpy na skarpie', tags: ['mulczowanie', 'gasienicowa'] },
  { file: 'IMG-20230406-WA0000.jpg', alt: 'Koparka rozbiera betonowy fundament przy budynku', tags: ['wyburzenia'] },
];

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/gallery/*.jpg', { eager: true });

export const gallery = entries.map((e) => {
  const mod = files[`../assets/gallery/${e.file}`];
  if (!mod) throw new Error(`Brak zdjęcia: ${e.file}`);
  return { ...e, src: mod.default };
});

export const byTag = (tag: Tag, limit = 4) => gallery.filter((g) => g.tags.includes(tag)).slice(0, limit);
export const byFile = (file: string) => {
  const g = gallery.find((x) => x.file === file);
  if (!g) throw new Error(`Brak zdjęcia: ${file}`);
  return g;
};
