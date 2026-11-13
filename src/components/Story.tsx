import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { OPTIMIZED_IMAGES } from '../data/config'

gsap.registerPlugin(ScrollTrigger)

const STAGES = [
  {
    image: OPTIMIZED_IMAGES.salovanjeArmiranje,
    t: 'PRIPREMA TERENA',
    d: 'Prvo se priprema teren i postavlja oplata, jer od osnove zavisi cela površina.',
  },
  {
    image: OPTIMIZED_IMAGES.platoPodloga,
    t: 'BETONIRANJE',
    d: 'Beton se postavlja i poravnava po planiranim linijama i nivoima.',
  },
  {
    image: OPTIMIZED_IMAGES.odvodnjavanjeKanal,
    t: 'ZAVRŠNA OBRADA',
    d: 'Površina se obrađuje, a detalji se ugrađuju pažljivo i uredno.',
  },
  {
    image: OPTIMIZED_IMAGES.prilazDvoriste,
    t: 'GOTOV REZULTAT',
    d: 'Čvrsta i uredna betonska površina, spremna za upotrebu.',
  },
]

export default function Story() {
  const ref = useRef<HTMLElement>(null)
  const [reduce] = useState(() => typeof window !== 'undefined' && typeof window.matchMedia === 'function' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false)
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
        {STAGES.map(s => (
          <div key={s.t} className="story-img">
            <img
              src={s.image.src}
              alt={s.image.alt}
              width={s.image.w}
              height={s.image.h}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
        <div className="story-shade" />
      </div>
      <div className="story-texts">
        {STAGES.map((s, i) => (
          <div key={s.t} className="stage-t glass">
            <span className="step">{i + 1} / 4</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </div>
        ))}
      </div>
      <div className="story-bar" />
    </section>
  )
}
