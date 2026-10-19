import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IMAGES } from '../data/config'
gsap.registerPlugin(ScrollTrigger)
const STAGES = [
  { n: 6, t: 'PRIPREMA TERENA', d: 'Prvo se priprema teren i postavlja oplata, jer od osnove zavisi cela površina.', alt: 'Betonska staza sa oplatom pre završetka radova' },
  { n: 10, t: 'BETONIRANJE', d: 'Beton se postavlja i poravnava po planiranim linijama i nivoima.', alt: 'Betonski plato u izradi' },
  { n: 12, t: 'ZAVRŠNA OBRADA', d: 'Površina se obrađuje, a detalji se ugrađuju pažljivo i uredno.', alt: 'Obrađena betonska površina sa ugrađenim kanalom za odvodnjavanje' },
  { n: 2, t: 'GOTOV REZULTAT', d: 'Čvrsta i uredna betonska površina, spremna za upotrebu.', alt: IMAGES.hero.alt },
]
export default function Story() {
  const ref = useRef<HTMLElement>(null)
  const [reduce] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    if (reduce) return
    const c = gsap.context(() => {
      const imgs = gsap.utils.toArray<HTMLElement>('.story-img'), txt = gsap.utils.toArray<HTMLElement>('.stage-t')
      const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=350%', pin: true, scrub: 0.6, anticipatePin: 1 } })
      tl.fromTo('.story-frame', { clipPath: 'inset(16% 26% 16% 26% round 16px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 1 })
        .fromTo(imgs[0], { scale: 1.25 }, { scale: 1, duration: 1 }, 0).to('.story-bar', { scaleX: 1, duration: 6 }, 0)
      for (let i = 1; i < imgs.length; i++) {
        const t = 1 + (i - 1) * 1.5 + 0.5
        tl.to(txt[i - 1], { opacity: 0, y: -30, duration: 0.4 }, t).to(imgs[i], { opacity: 1, duration: 0.8 }, t)
          .fromTo(imgs[i], { scale: 1.2 }, { scale: 1, duration: 1.5 }, t).fromTo(txt[i], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, t + 0.7)
      }
    }, ref)
    return () => c.revert()
  }, [reduce])
  return (
    <section ref={ref} className={`story ${reduce ? 'static' : ''}`} aria-label="Od pripreme terena do gotovog rezultata">
      <div className="story-frame">
        {STAGES.map(s => <div key={s.n} className="story-img"><img src={`./images/i${String(s.n).padStart(2, '0')}.jpg`} alt={s.alt} loading="lazy" /></div>)}
        <div className="story-shade" />
      </div>
      <div className="story-texts">
        {STAGES.map((s, i) => <div key={s.t} className="stage-t glass"><span className="step">{i + 1} / 4</span><h3>{s.t}</h3><p>{s.d}</p></div>)}
      </div>
      <div className="story-bar" />
    </section>
  )
}
