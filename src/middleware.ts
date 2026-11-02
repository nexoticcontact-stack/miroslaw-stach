import { defineMiddleware } from 'astro:middleware';

// Polska typografia: twarde spacje po jednoliterowych słowach (a, i, o, u, w, z)
// oraz między liczbą a jednostką (25 t, 10 000 l, 10 m³), żeby nie zostawały same na końcu linii.
const NBSP = ' ';

function fixText(t: string): string {
  return (
    t
      // jednoliterowe słowa (dwukrotnie, bo mogą stać obok siebie: „i w”)
      .replace(/(^|[\s(„"])([aiouwzAIOUWZ])\s+/g, `$1$2${NBSP}`)
      .replace(/(^|[\s(„"])([aiouwzAIOUWZ])\s+/g, `$1$2${NBSP}`)
      // liczba + jednostka
      .replace(/(\d)\s+(t|l|ton|tony|km|m³|m2|m²|zł|lat|lata)(?=[\s.,;:)!?]|$)/g, `$1${NBSP}$2`)
      // grupy tysięcy: 10 000
      .replace(/(\d)\s(\d{3})(?!\d)/g, `$1${NBSP}$2`)
  );
}

function typography(html: string): string {
  const parts = html.split(/(<[^>]+>)/);
  let skip = 0; // wewnątrz <script>, <style>, <title>-owe atrybuty nie dotyczą, bo to tagi
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (p.startsWith('<')) {
      if (/^<(script|style|pre|code|textarea)\b/i.test(p)) skip++;
      else if (/^<\/(script|style|pre|code|textarea)>/i.test(p)) skip = Math.max(0, skip - 1);
      continue;
    }
    if (!skip && p.trim()) parts[i] = fixText(p);
  }
  return parts.join('');
}

export const onRequest = defineMiddleware(async (_ctx, next) => {
  const res = await next();
  const type = res.headers.get('content-type') || '';
  if (!type.includes('text/html')) return res;
  const html = await res.text();
  return new Response(typography(html), { status: res.status, headers: res.headers });
});
