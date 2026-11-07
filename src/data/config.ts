// Centralna konfiguracija – naziv firme, telefon, SEO podaci, usluge i optimizovane WebP slike.
export const BUSINESS = {
  name: 'Betonski Radovi Bojnik',
  nameUpper: 'BETONSKI RADOVI BOJNIK',
  phoneDisplay: '063 889 9797',
  phoneRaw: '0638899797',
  phoneHref: 'tel:+381638899797',
  whatsappHref: 'https://wa.me/381638899797?text=Pozdrav%2C%20zainteresovan%20sam%20za%20betonske%20radove%20u%20Bojniku%20i%20okolini.',
  viberHref: 'viber://chat?number=%2B381638899797',
  territory: 'Bojnik, Leskovac, Lebane, Vlasotince, Jablanički okrug i cela Srbija',
  credit: 'Kreator sajta: Viktor OS',
}

export const NAV = [
  { href: '#pocetna', label: 'Početna' },
  { href: '#usluge', label: 'Usluge' },
  { href: '#radovi', label: 'Naši radovi' },
  { href: '#o-nama', label: 'O nama' },
  { href: '#kontakt', label: 'Kontakt' },
]

export type Img = { src: string; alt: string; w: number; h: number }

// Optimizovane WebP slike sa lokalnim SEO, GEO i AEO ključnim rečima
export const OPTIMIZED_IMAGES = {
  stepeniceZid: {
    src: './images/izrada-betonskih-stepenica-i-zidova-bojnik.webp',
    alt: 'Izrada betonskih stepenica i potpornih zidova Bojnik i Leskovac - Betonski Radovi Bojnik',
    w: 528,
    h: 960,
  },
  prilazDvoriste: {
    src: './images/betoniranje-prilaza-i-dvorista-bojnik-leskovac.webp',
    alt: 'Betoniranje prilaza kući i garaži Bojnik i Leskovac - Betonski Radovi Bojnik',
    w: 720,
    h: 960,
  },
  dvoriste: {
    src: './images/betoniranje-dvorista-bojnik.webp',
    alt: 'Betoniranje dvorišta i platoa Bojnik i Jablanički okrug - izdržljiva ravna betonska ploča',
    w: 800,
    h: 1067,
  },
  stazeTrotoari: {
    src: './images/betonske-staze-i-trotoari-leskovac.webp',
    alt: 'Izrada betonskih staza i trotoara oko kuće Leskovac i Bojnik',
    w: 800,
    h: 1067,
  },
  ivicnjaciStaza: {
    src: './images/postavljanje-ivicnjaka-i-betonske-staze-juzna-srbija.webp',
    alt: 'Postavljanje ivičnjaka i izrada betonskih staza južna Srbija',
    w: 800,
    h: 1067,
  },
  salovanjeArmiranje: {
    src: './images/salovanje-i-armiranje-jablanicki-okrug.webp',
    alt: 'Šalovanje, armiranje i mašinska priprema terena za betoniranje Jablanički okrug',
    w: 800,
    h: 800,
  },
  zakrivljenaStaza: {
    src: './images/zakrivljene-betonske-staze-dvorista-bojnik.webp',
    alt: 'Zakrivljene dekorativne betonske staze i stepeništa u dvorištu Bojnik',
    w: 850,
    h: 1133,
  },
  zavrsnaObradaZid: {
    src: './images/zavrsna-obrada-betona-oko-kuce-leskovac.webp',
    alt: 'Precizna završna obrada betonskih površina uz zidove objekta Leskovac',
    w: 800,
    h: 1067,
  },
  podlogaZalazak: {
    src: './images/kvalitetno-betoniranje-povrsina-bojnik.webp',
    alt: 'Kvalitetno mašinsko betoniranje površina Bojnik i okolina',
    w: 1080,
    h: 1080,
  },
  platoPodloga: {
    src: './images/izrada-betonskih-platoa-i-podloga-bojnik.webp',
    alt: 'Izrada i ravnanje betonskog platoa i temeljne podloge Bojnik',
    w: 800,
    h: 800,
  },
  parking: {
    src: './images/betonske-parking-povrsine-leskovac-bojnik.webp',
    alt: 'Izrada izdržljivih betonskih parking površina za automobile Leskovac i Bojnik',
    w: 850,
    h: 850,
  },
  odvodnjavanjeKanal: {
    src: './images/odvodnjavanje-kanali-betonski-radovi-leskovac.webp',
    alt: 'Ugradnja kanala za odvodnjavanje vode i završna obrada betona Leskovac',
    w: 800,
    h: 1067,
  },
}

export const IMAGES = {
  hero: OPTIMIZED_IMAGES.prilazDvoriste,
  heroVideo: './video/hero.mp4',
  background: OPTIMIZED_IMAGES.podlogaZalazak,
  aboutA: OPTIMIZED_IMAGES.stepeniceZid,
  aboutB: OPTIMIZED_IMAGES.zakrivljenaStaza,
}

export const SERVICES = [
  {
    title: 'Betoniranje dvorišta',
    text: 'Izrada ravnih, stabilnih i dugotrajnih betonskih dvorišta u Bojniku, Leskovcu i okolini, uz optimalne padove za odvodnjavanje vode.',
    image: OPTIMIZED_IMAGES.dvoriste,
  },
  {
    title: 'Betoniranje prilaza kućama i garažama',
    text: 'Armirani betonski prilazi otporni na svakodnevni teret automobila i mehanizacije u opštinama Bojnik, Lebane i Vlasotince.',
    image: OPTIMIZED_IMAGES.prilazDvoriste,
  },
  {
    title: 'Betonske parking površine',
    text: 'Čvrste betonske podloge za privatne i poslovne parking prostore na teritoriji Leskovca, Bojnika i Jablaničkog okruga.',
    image: OPTIMIZED_IMAGES.parking,
  },
  {
    title: 'Betonske staze i trotoari',
    text: 'Precizno trasirane i izlivene pešačke staze oko kuća i vikendica u Bojniku, Lebanu, Vučju i celoj okolini.',
    image: OPTIMIZED_IMAGES.stazeTrotoari,
  },
  {
    title: 'Betonski platoi i podloge',
    text: 'Armirane betonske ploče i platoi za pomoćne objekte, terase, letnjikovce i radionice širom Jablaničkog okruga.',
    image: OPTIMIZED_IMAGES.platoPodloga,
  },
  {
    title: 'Priprema terena, oplata, armiranje i obrada',
    text: 'Kompletna priprema podloge, precizno šalovanje, postavljanje armature i završna mašinska obrada betona pre sušenja.',
    image: OPTIMIZED_IMAGES.salovanjeArmiranje,
  },
]

export const GALLERY: Img[] = [
  OPTIMIZED_IMAGES.dvoriste,
  OPTIMIZED_IMAGES.podlogaZalazak,
  OPTIMIZED_IMAGES.zakrivljenaStaza,
  OPTIMIZED_IMAGES.parking,
  OPTIMIZED_IMAGES.stepeniceZid,
  OPTIMIZED_IMAGES.platoPodloga,
  OPTIMIZED_IMAGES.ivicnjaciStaza,
  OPTIMIZED_IMAGES.salovanjeArmiranje,
  OPTIMIZED_IMAGES.stazeTrotoari,
  OPTIMIZED_IMAGES.odvodnjavanjeKanal,
  OPTIMIZED_IMAGES.prilazDvoriste,
  OPTIMIZED_IMAGES.zavrsnaObradaZid,
]

export const STEPS = ['POZOVITE MAJSTORA', 'OPIŠITE POSAO I LOKACIJU', 'DOGOVORITE PROCENU I CENU', 'REALIZACIJA RADOVA']

export const FAQ = [
  [
    'Na kojim lokacijama u Jablaničkom okrugu izvodite betonske radove?',
    'Radove primarno izvodimo u Bojniku, Leskovcu, Lebanu, Vlasotincu, Medveđi i svim okolnim mestima Jablaničkog okruga. Po dogovoru radimo i na široj teritoriji južne Srbije.',
  ],
  [
    'Da li radite manje betonske poslove poput staza i stepenica?',
    'Da. Manje poslove poput betonskih staza, trotoara, stepenica ili manjih platoa majstor obavlja samostalno, dok za veća dvorišta i prilaze angažujemo kompletnu ekipu majstora.',
  ],
  [
    'Kako se određuje cena betoniranja po kvadratu?',
    'Cena zavisi od pripreme terena, debljine ploče, armaturne mreže, oplate i lokacije u Bojniku ili Leskovcu. Nakon kratkog razgovora i uvida na terenu dogovaramo tačnu i fiksnu cenu bez skrivenih troškova.',
  ],
  [
    'Kako se dogovara izlazak majstora na teren?',
    'Pozovite nas direktno na 063 889 9797 ili pošaljite poruku na WhatsApp/Viber. Opišite posao i lokaciju, i termin izlaska na teren dogovorićete u direktnom razgovoru sa majstorom.',
  ],
]
