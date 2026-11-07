# Betonski Radovi Bojnik – Zvanični Veb-Sajt

Moderan, ultra-brz i SEO/AEO optimizovan veb-sajt za majstorske betonske radove na teritoriji Bojnika, Leskovca i celog Jablaničkog okruga.

Izgrađen pomoću: **React 18 + TypeScript + Vite**.

---

## 🚀 Tehnološki stek i optimizacija

- **Performanse:** 100% WebP format slika kompresovanih na ~85–200 KB (ukupna težina svih slika na celom sajtu pala sa >5.5 MB na samo ~1.6 MB).
- **SEO & GEO:** Optimizovano za lokalne pretrage (Bojnik, Leskovac, Lebane, Vlasotince, Medveđa, Jablanički okrug).
- **AEO (Answer Engine Optimization):** Implementiran BLUF (Bottom Line Up Front) uvodni pasus od 50 reči skrojen za AI pretraživače (ChatGPT, Google Gemini, Perplexity).
- **Strukturirani podaci:** Validiran JSON-LD Schema markup za `HomeAndConstructionBusiness`.
- **Brzi kontakt:** Fiksni plutajući widget u uglu sa direktnim linkovima za:
  - **WhatsApp** (`https://wa.me/381638899797`)
  - **Viber** (`viber://chat?number=%2B381638899797`)
  - **Direktan telefonski poziv** (`tel:+381638899797`)
- **Cloudflare Edge Cache:** `public/_headers` fajl sa `immutable` keširanjem za slike i assets resurse na 1 godinu.

---

## 💻 Lokalno pokretanje (Development)

Sajt možete pokrenuti na dva načina:

### Opcija 1: Dvoklikom na prečicu
Pokrenite fajl:
```cmd
Pokreni-Sajt.bat
```

### Opcija 2: Putem terminala
```bash
npm install
npm run dev
```

---

## 🏗️ Produkciona izgradnja (Production Build)

Za testiranje produkcione verzije pre objave:
```bash
npm run build
npm run preview
```
Izlazni fajlovi se generišu u `dist/` direktorijumu.

---

## ☁️ Uputstvo za objavu na Cloudflare Pages

1. **Git inicijalizacija i push na GitHub:**
   ```bash
   git add .
   git commit -m "feat: optimizacija sajta, SEO, WebP slike i brzi kontakt"
   git push origin main
   ```

2. **Povezivanje na Cloudflare Pages:**
   - Idite na [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
   - Izaberite repozitorijum.
   - Podesite Build postavke:
     - **Framework preset:** `Vite`
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
     - **Node.js version:** `18` ili `20` (ili dodajte environment varijablu `NODE_VERSION = 20`)
   - Kliknite na **Save and Deploy**.

Cloudflare Pages će automatski izgraditi sajt, postaviti SSL sertifikat i primeniti sva pravila keširanja definisana u `_headers`.
