// Centralna konfiguracija – ovde menjate naziv firme, telefon, usluge i slike.
export const BUSINESS = {
  name: 'BETONSKI RADOVI', // privremeni naziv
  phoneDisplay: '063 889 9797',
  phoneHref: 'tel:+381638899797',
  territory: 'Srbija (osim Kosova i Metohije)',
  credit: 'Kreator sajta: Viktor OS',
}
export const NAV = [
  { href: '#pocetna', label: 'Početna' }, { href: '#usluge', label: 'Usluge' },
  { href: '#radovi', label: 'Naši radovi' }, { href: '#o-nama', label: 'O nama' },
  { href: '#kontakt', label: 'Kontakt' },
]
export type Img = { src: string; alt: string; w: number; h: number }
const img = (n: number, alt: string, w: number, h: number): Img => ({ src: `/images/i${String(n).padStart(2, '0')}.jpg`, alt, w, h })
// Mapiranje slika (redosled slanja: slika 1–12; slika 13 je duplikat slike 5 i nije korišćena).
export const IMAGES = {
  hero: img(2, 'Široka betonska površina ispred kuće', 720, 960),
  heroVideo: '/video/hero.mp4',
  background: img(9, 'Betonska površina u zalasku sunca', 1080, 1080),
  aboutA: img(1, 'Betonske stepenice i potporni zid', 528, 960),
  aboutB: img(7, 'Zakrivljena betonska staza sa stepenicama', 1350, 1800),
}
export const SERVICES = [
  { title: 'Betoniranje dvorišta', text: 'Ravne, čvrste i uredne betonske površine za celo dvorište.', image: img(3, 'Betonirano dvorište pored kuće', 1350, 1800) },
  { title: 'Betoniranje prilaza kućama i garažama', text: 'Prilazi koji podnose svakodnevno opterećenje vozila.', image: img(2, 'Betonski prilaz ispred kuće i garaže', 720, 960) },
  { title: 'Betonske parking površine', text: 'Izdržljive betonske podloge za parkiranje vozila.', image: img(11, 'Betonska parking površina u dvorištu', 1080, 1080) },
  { title: 'Betonske staze i trotoari', text: 'Staze i trotoari pažljivo izvedeni po liniji objekta.', image: img(4, 'Betonska staza pored kuće', 1350, 1800) },
  { title: 'Betonski platoi i podloge', text: 'Stabilne podloge i platoi za različite namene.', image: img(10, 'Betonski plato u izradi', 1080, 1080) },
  { title: 'Priprema terena, oplata, armiranje i obrada', text: 'Svaki posao počinje pripremom, a završava se pažljivom obradom betona.', image: img(6, 'Betonska staza sa oplatom u izradi', 1080, 1080) },
]
export const GALLERY: Img[] = [
  img(3, 'Betonirano dvorište', 1350, 1800), img(9, 'Betonska površina u zalasku sunca', 1080, 1080),
  img(7, 'Zakrivljena betonska staza', 1350, 1800), img(11, 'Betonska površina sa dekorativnim detaljima', 1080, 1080),
  img(1, 'Betonske stepenice', 528, 960), img(10, 'Betonski plato u izradi', 1080, 1080),
  img(5, 'Betonska staza sa ivičnjacima', 1350, 1800), img(6, 'Betonska staza u izradi', 1080, 1080),
  img(4, 'Betonska staza uz objekat', 1350, 1800), img(12, 'Beton sa ugrađenim kanalom za odvodnjavanje', 1350, 1800),
  img(2, 'Betonski prilaz', 720, 960), img(8, 'Betonska ivica uz zid objekta', 1536, 2048),
]
export const STEPS = ['POZOVITE MAJSTORA', 'OPIŠITE POSAO I LOKACIJU', 'DOGOVORITE PROCENU I CENU', 'REALIZACIJA RADOVA']
export const FAQ = [
  ['Da li radite manje betonske poslove?', 'Da. Manje betonske radove majstor obavlja samostalno. Pozovite, opišite posao i dogovorićemo sve ostalo.'],
  ['Da li dolazite sa ekipom majstora?', 'Za veće i zahtevnije projekte, nakon procene obima posla, organizuje se odgovarajuća ekipa majstora.'],
  ['Kako se određuje cena betoniranja?', 'Cena zavisi od složenosti i veličine posla, uslova na terenu i lokacije. Zato se procena i cena dogovaraju direktno, nakon razgovora o planiranim radovima.'],
  ['Da li radite i van svog mesta?', 'Da. Radove izvodimo širom Srbije, osim Kosova i Metohije. Pozovite nas i dogovorićemo mogućnosti za vašu lokaciju.'],
  ['Kako se dogovara izlazak na teren?', 'Pozovite na 063 889 9797, opišite posao i lokaciju, pa se termin izlaska na teren i organizacija radova dogovaraju direktno sa majstorom.'],
]
