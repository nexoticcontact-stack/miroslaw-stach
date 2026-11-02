import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

// Dwie wersje do podglądu pełnoekranowego: mniejsza (telefony) i duża (komputery).
export async function lightboxSrc(src: ImageMetadata) {
  const [mid, big] = await Promise.all([
    getImage({ src, width: 1024, format: 'webp', quality: 68 }),
    getImage({ src, width: 1600, format: 'webp', quality: 70 }),
  ]);
  return { mid: mid.src, big: big.src };
}
