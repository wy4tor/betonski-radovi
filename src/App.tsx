import { useState } from 'react'
import { ChevronDown, ClipboardList, Handshake, MapPin, Phone, Ruler, Users, HardHat } from 'lucide-react'
import { BUSINESS, FAQ, GALLERY, IMAGES, NAV, SERVICES, STEPS } from './data/config'
import { useParallax } from './hooks/useReveal'
import Header from './components/Header'
import CallButton from './components/CallButton'
import Reveal from './components/Reveal'
import Counter from './components/Counter'
import Lightbox from './components/Lightbox'
import TextFill from './components/TextFill'
import Story from './components/Story'
import { useMotion } from './hooks/useMotion'

const STEP_ICONS = [Phone, ClipboardList, Handshake, HardHat]

export default function App() {
  useParallax()
  useMotion()
  const [lb, setLb] = useState<number | null>(null)
  const [open, setOpen] = useState<number | null>(0)
  return (
    <>
      <Header />
      <main>
        <section id="pocetna" className="hero">
          <div className="layer hero-bg">
            <video autoPlay muted loop playsInline preload="metadata" poster={IMAGES.hero.src} aria-hidden="true"><source src={IMAGES.heroVideo} type="video/mp4" /></video>
          </div>
          <div className="layer hero-shade" />
          <div className="layer hero-tex" />
          <div className="wrap hero-content">
            <h1 aria-label="BETONIRANJE KOJE TRAJE.">{['BETONIRANJE','KOJE','TRAJE.'].map((w,wi)=><span key={w} className="hw" aria-hidden>{[...w].map((ch,i)=><span key={i} className="ch" style={{animationDelay:`${wi*260+i*40}ms`}}>{ch}</span>)} </span>)}</h1>
            <p className="lead">Betoniranje dvorišta, prilaza, staza i drugih površina. Od manjih zahvata do velikih projekata – pravi pristup svakom poslu.</p>
            <div className="row"><CallButton label={`POZOVITE: ${BUSINESS.phoneDisplay}`} size="lg" /><a href="#usluge" className="btn ghost">POGLEDAJTE USLUGE</a></div>
            <p className="small glass">Betonski radovi širom Srbije | Direktan dogovor sa majstorom</p>
          </div>
        </section>

        <section id="usluge" className="sec light stack">
          <div className="wrap">
            <Reveal><h2>BETONSKA REŠENJA ZA SVAKI PROSTOR</h2></Reveal>
            <div className="cards">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 120} className="card-wrap">
                  <article className="card">
                    <div className="zoom"><img src={s.image.src} alt={s.image.alt} width={s.image.w} height={s.image.h} loading="lazy" decoding="async" /></div>
                    <div className="card-b"><h3>{s.title}</h3><p>{s.text}</p><CallButton label="POZOVITE" size="sm" /></div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Story />

        <section id="o-nama" className="sec">
          <div className="wrap about">
            <div>
              <Reveal><h2><TextFill>OD MALIH RADOVA DO VELIKIH PROJEKATA</TextFill></h2></Reveal>
              <Reveal delay={100}><p className="lead">Svaki posao počinje razgovorom i dogovorom. Manje betonske radove majstor obavlja samostalno, dok se za veće i zahtevnije projekte, nakon procene obima posla, organizuje odgovarajuća ekipa majstora.</p></Reveal>
              <ul className="points">
                {[[Handshake, 'Direktan dogovor'], [Users, 'Individualni pristup'], [Ruler, 'Organizacija prema obimu radova'], [MapPin, 'Radovi širom Srbije']].map(([I, t], i) => {
                  const Icon = I as typeof Phone
                  return <Reveal key={t as string} delay={i * 90}><li><Icon aria-hidden /> {t as string}</li></Reveal>
                })}
              </ul>
            </div>
            <Reveal variant="scale" className="about-img">
              <img className="a1 zoom-scroll" data-speed="0.08" src={IMAGES.aboutB.src} alt={IMAGES.aboutB.alt} width={IMAGES.aboutB.w} height={IMAGES.aboutB.h} loading="lazy" />
              <img className="a2" data-speed="0.2" src={IMAGES.aboutA.src} alt={IMAGES.aboutA.alt} width={IMAGES.aboutA.w} height={IMAGES.aboutA.h} loading="lazy" />
            </Reveal>
          </div>
        </section>

        <section id="radovi" className="sec light">
          <div className="wrap">
            <Reveal><h2><TextFill>REZULTATI KOJI SE VIDE</TextFill></h2></Reveal>
            <div className="masonry">
              {GALLERY.map((g, i) => (
                <Reveal key={g.src} variant="scale" delay={(i % 3) * 80}>
                  <button className="g zoom" onClick={() => setLb(i)} aria-label={`Uvećaj: ${g.alt}`}>
                    <img src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" decoding="async" />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="sec dark">
          <div className="wrap">
            <Reveal><h2><TextFill onDark>KAKO DO NOVOG BETONSKOG DVORIŠTA?</TextFill></h2></Reveal>
            <ol className="steps">
              {STEPS.map((t, i) => { const Icon = STEP_ICONS[i]; return (
                <Reveal key={t} delay={i * 120}><li><span className="num"><Counter to={i + 1} /></span><Icon aria-hidden /><h3>{t}</h3></li></Reveal>
              ) })}
            </ol>
          </div>
        </section>

        <section className="cine" style={{ backgroundImage: `url(${IMAGES.background.src})` }}>
          <div className="cine-shade" />
          <div className="wrap"><Reveal><h2><TextFill onDark>ČVRSTA OSNOVA ZA SVAKI PROJEKAT.</TextFill></h2></Reveal></div>
        </section>

        <section className="sec">
          <div className="wrap area">
            <Reveal><h2><TextFill>DOLAZIMO DO VAS</TextFill></h2></Reveal>
            <Reveal delay={100}><p className="lead">Betonske radove izvodimo širom Srbije, osim Kosova i Metohije. Pozovite nas, opišite planirane radove i dogovorićemo mogućnosti izvođenja na vašoj lokaciji.</p></Reveal>
          </div>
        </section>

        <section className="sec light">
          <div className="wrap faq">
            <Reveal><h2>ČESTA PITANJA</h2></Reveal>
            {FAQ.map(([q, a], i) => (
              <div key={q} className="qa">
                <h3><button aria-expanded={open === i} aria-controls={`a${i}`} onClick={() => setOpen(open === i ? null : i)}>{q}<ChevronDown aria-hidden /></button></h3>
                <div id={`a${i}`} className={`ans ${open === i ? 'open' : ''}`} role="region"><div><p>{a}</p></div></div>
              </div>
            ))}
          </div>
        </section>

        <section id="kontakt" className="sec dark final">
          <div className="wrap">
            <Reveal><h2><TextFill onDark>PLANIRATE BETONIRANJE?</TextFill></h2></Reveal>
            <Reveal delay={100}><p className="lead glass panel">Vaše dvorište, prilaz ili betonska površina zaslužuju kvalitetnu izradu. Pozovite i dogovorimo najbolje rešenje.</p></Reveal>
            <Reveal delay={200}><CallButton label={`POZOVITE ${BUSINESS.phoneDisplay}`} size="xl" /></Reveal>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <div><strong className="logo">{BUSINESS.name}</strong><p>Betonski radovi: dvorišta, prilazi, parking površine, staze i platoi.</p></div>
          <div><p><a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a></p><p>Teritorija: {BUSINESS.territory}</p></div>
          <nav aria-label="Navigacija u podnožju">{NAV.map(n => <a key={n.href} href={n.href}>{n.label}</a>)}</nav>
        </div>
        <p className="credit">{BUSINESS.credit}</p>
      </footer>

      <a href={BUSINESS.phoneHref} className="btn mobile-call" aria-label={`Pozovite ${BUSINESS.phoneDisplay}`}><Phone size={20} aria-hidden /> POZOVITE MAJSTORA</a>
      <div className="cursor" aria-hidden />
      {lb !== null && <Lightbox items={GALLERY} index={lb} onClose={() => setLb(null)} onIndex={setLb} />}
    </>
  )
}
