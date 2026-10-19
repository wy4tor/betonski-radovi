import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useReveal'
// Spreman za buduće proverene podatke: <Counter to={...} />. Trenutno se koristi samo za korake 01–04.
export default function Counter({ to, pad = 2, duration = 1000 }: { to: number; pad?: number; duration?: number }) {
  const [ref, seen] = useInView<HTMLSpanElement>(0.5); const [v, setV] = useState(0)
  useEffect(() => {
    if (!seen) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setV(to); return }
    let raf = 0; const s = performance.now()
    const tick = (n: number) => { const p = Math.min((n - s) / duration, 1); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(tick) }
    raf = requestAnimationFrame(tick); return () => cancelAnimationFrame(raf)
  }, [seen, to, duration])
  return <span ref={ref} aria-label={String(to).padStart(pad, '0')}>{String(v).padStart(pad, '0')}</span>
}
