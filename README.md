# Betonski radovi – sajt

React + TypeScript + Vite. Bez Tailwind-a (običan CSS u `src/styles/global.css`), bez biblioteke za animacije (IntersectionObserver + CSS transform). Jedina runtime zavisnost osim Reacta je `lucide-react`.

## Pokretanje
```
npm install
npm run dev      # razvoj
npm run build    # produkcija -> dist/
```

## Izmene
Sve u `src/data/config.ts`: naziv firme, telefon (`phoneHref`), usluge, mapiranje slika, FAQ. Slike su u `public/images/i01–i12.jpg`, hero video u `public/video/hero.mp4`.

## Cloudflare Pages
Povežite GitHub repo → Framework preset: Vite → Build command: `npm run build` → Build output directory: `dist`. Node 18+.

## Napomene
- Slika 13 je duplikat slike 5 i nije uključena.
- Before/after slajder (opciono) nije izrađen – nema PRE/POSLE fotografija.
- Pre objave razmotrite kompresiju `hero.mp4` i JPG-ova (WebP).
