import { useEffect, useRef, useState } from 'react'
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null); const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold })
    io.observe(el); return () => io.disconnect()
  }, [threshold])
  return [ref, seen] as const
}
// Jedan pasivan scroll listener (rAF) upisuje --sy; sve parallax transformacije su CSS transform.
export function useParallax() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let t = false
    const f = () => { t = false; document.documentElement.style.setProperty('--sy', String(Math.min(scrollY, 1400))) }
    const on = () => { if (!t) { t = true; requestAnimationFrame(f) } }
    addEventListener('scroll', on, { passive: true }); f()
    return () => removeEventListener('scroll', on)
  }, [])
}
