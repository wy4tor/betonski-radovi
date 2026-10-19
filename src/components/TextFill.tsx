import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
// Reč po reč: slova se popunjavaju bojom u skladu sa scroll progresom.
export default function TextFill({ children, onDark = false }: { children: string; onDark?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current!, w = el.querySelectorAll('.w')
    const from = onDark ? 'rgba(255,255,255,.16)' : 'rgba(29,34,39,.16)', to = onDark ? '#ffffff' : '#1D2227'
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { gsap.set(w, { color: to }); return }
    const c = gsap.context(() => { gsap.fromTo(w, { color: from }, { color: to, stagger: 0.15, ease: 'none', scrollTrigger: { trigger: el, start: 'top 85%', end: 'bottom 45%', scrub: true } }) }, el)
    return () => c.revert()
  }, [onDark])
  return <span ref={ref}>{children.split(' ').map((t, i) => <span key={i} className="w">{t}{' '}</span>)}</span>
}
