const fs = require('fs');

const html = fs.readFileSync('dist/index.html', 'utf8');
console.log('Total dist/index.html length:', html.length);
const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>/);
console.log('Pre-rendered HTML inside <div id="root"> length:', rootMatch ? rootMatch[1].length : 0);

const checks = [
  ['H1 Title ("Betonski Radovi Bojnik")', html.includes('Betonski Radovi Bojnik')],
  ['BLUF Paragraph (50 words)', html.includes('pouzdan majstorski tim specijalizovan za profesionalno betoniranje')],
  ['Business description (Hero/Footer)', html.includes('Profesionalni betonski radovi: dvorišta, prilazi, parking površine, staze i platoi u Bojniku')],
  ['Service 1 (Dvorišta)', html.includes('Betoniranje dvorišta')],
  ['Service 2 (Prilazi)', html.includes('Betoniranje prilaza kućama i garažama')],
  ['Service 3 (Parking)', html.includes('Betonske parking površine')],
  ['Service 4 (Staze)', html.includes('Betonske staze i trotoari')],
  ['Service 5 (Platoi)', html.includes('Betonski platoi i podloge')],
  ['Service 6 (Šalovanje)', html.includes('Priprema terena, oplata, armiranje i obrada')],
  ['Gallery ALT text (Stepenice)', html.includes('Izrada betonskih stepenica i potpornih zidova Bojnik i Leskovac - Betonski Radovi Bojnik')],
  ['Gallery ALT text (Dvorište)', html.includes('Betoniranje dvorišta i platoa Bojnik i Jablanički okrug - izdržljiva ravna betonska ploča')],
  ['Territory (Bojnik, Leskovac, Lebane...)', html.includes('Bojnik, Leskovac, Lebane, Vlasotince, Jablanički okrug i cela Srbija')],
  ['FAQ Q1', html.includes('Na kojim lokacijama u Jablaničkom okrugu izvodite betonske radove?')],
  ['FAQ Q2', html.includes('Da li radite manje betonske poslove poput staza i stepenica?')],
  ['FAQ Q3', html.includes('Kako se određuje cena betoniranja po kvadratu?')],
  ['FAQ Q4', html.includes('Kako se dogovara izlazak majstora na teren?')],
  ['Phone link (tel:+381638899797)', html.includes('tel:+381638899797')],
  ['WhatsApp link', html.includes('https://wa.me/381638899797')],
  ['Viber link', html.includes('viber://chat?number=%2B381638899797')],
  ['JSON-LD Schema preserved', html.includes('"@type": "HomeAndConstructionBusiness"')],
  ['Canonical URL preserved', html.includes('https://betonski-radovi-bojnik.pages.dev/')],
  ['Meta Title preserved', html.includes('<title>Betonski Radovi Bojnik | Betoniranje Dvorišta i Prilaza | Leskovac i Jablanički Okrug</title>')],
  ['Meta Description preserved', html.includes('content="Betonski Radovi Bojnik – Profesionalno betoniranje dvorišta')],
  ['Robots & Sitemap present', fs.existsSync('dist/robots.txt') && fs.existsSync('dist/sitemap.xml')],
  ['Cloudflare _headers present', fs.existsSync('dist/_headers')]
];

let allPassed = true;
checks.forEach(([name, pass]) => {
  if (!pass) allPassed = false;
  console.log(`${pass ? '[PASS]' : '[FAIL]'} ${name}`);
});

console.log('\nOVERALL RESULT:', allPassed ? 'ALL CHECKS PASSED!' : 'SOME CHECKS FAILED!');
