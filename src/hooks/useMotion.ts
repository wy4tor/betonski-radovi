import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
// Jedan sistem: Lenis (smooth scroll) + GSAP ScrollTrigger, plus magnetic dugmad i prsten kursora (samo miš).
export function useMotion() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const off: (() => void)[] = []
    const lenis = new Lenis({ lerp: 0.1 })
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (t: number) => lenis.raf(t * 1000)
    gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0)
    const click = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]'); if (!a) return
      const id = a.getAttribute('href')!, t = id === '#pocetna' ? 0 : document.querySelector<HTMLElement>(id)
      if (t !== null) { e.preventDefault(); lenis.scrollTo(t, { offset: -72 }) }
    }
    document.addEventListener('click', click)
    const refresh = () => ScrollTrigger.refresh(); addEventListener('load', refresh)
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-speed]').forEach(el => gsap.to(el, { yPercent: -Number(el.dataset.speed) * 100, ease: 'none', scrollTrigger: { trigger: el, scrub: true } }))
      gsap.utils.toArray<HTMLElement>('.zoom-scroll').forEach(el => gsap.fromTo(el, { scale: 1.18 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: el, scrub: true } }))
    })
    off.push(() => { document.removeEventListener('click', click); removeEventListener('load', refresh); gsap.ticker.remove(tick); lenis.destroy(); ctx.revert() })
    if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
      const ring = document.querySelector<HTMLElement>('.cursor')
      const sel = '.btn,.g,.nav a,.qa button,.lb button'
      let mx = 0, my = 0, rx = 0, ry = 0, raf = 0
      const pos = new WeakMap<Element, { x: number; y: number }>()
      const move = (e: PointerEvent) => { mx = e.clientX; my = e.clientY; ring?.classList.add('on'); ring?.classList.toggle('big', !!(e.target as HTMLElement).closest(sel)) }
      addEventListener('pointermove', move)
      const loop = () => {
        rx += (mx - rx) * 0.2; ry += (my - ry) * 0.2
        if (ring) ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`
        document.querySelectorAll<HTMLElement>('.btn,.g').forEach(el => {
          const r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return
          const dx = mx - (r.left + r.width / 2), dy = my - (r.top + r.height / 2), near = Math.hypot(dx, dy) < Math.max(r.width, r.height) / 2 + 60
          const p = pos.get(el) ?? { x: 0, y: 0 }
          p.x += ((near ? dx * 0.25 : 0) - p.x) * 0.15; p.y += ((near ? dy * 0.25 : 0) - p.y) * 0.15; pos.set(el, p)
          el.style.setProperty('--mx', p.x.toFixed(1) + 'px'); el.style.setProperty('--my', p.y.toFixed(1) + 'px')
        })
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
      off.push(() => { removeEventListener('pointermove', move); cancelAnimationFrame(raf) })
    }
    return () => off.forEach(f => f())
  }, [])
}
