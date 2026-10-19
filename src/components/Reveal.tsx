import type { ReactNode } from 'react'
import { useInView } from '../hooks/useReveal'
export default function Reveal({ children, delay = 0, className = '', variant = 'up' }: { children: ReactNode; delay?: number; className?: string; variant?: 'up' | 'left' | 'scale' }) {
  const [ref, seen] = useInView<HTMLDivElement>()
  return <div ref={ref} className={`reveal ${variant} ${seen ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}
