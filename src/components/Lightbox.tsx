import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { Img } from '../data/config'
export default function Lightbox({ items, index, onClose, onIndex }: { items: Img[]; index: number; onClose: () => void; onIndex: (i: number) => void }) {
  const n = items.length, x0 = useRef(0), close = useRef<HTMLButtonElement>(null)
  const go = (d: number) => onIndex((index + d + n) % n)
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1) }
    addEventListener('keydown', k); document.body.style.overflow = 'hidden'; close.current?.focus()
    return () => { removeEventListener('keydown', k); document.body.style.overflow = '' }
  })
  const it = items[index]
  return (
    <div className="lb" data-lenis-prevent role="dialog" aria-modal="true" aria-label="Pregled fotografije" onClick={onClose}
      onTouchStart={e => (x0.current = e.touches[0].clientX)}
      onTouchEnd={e => { const d = e.changedTouches[0].clientX - x0.current; if (Math.abs(d) > 50) go(d < 0 ? 1 : -1) }}>
      <button ref={close} className="lb-x" onClick={onClose} aria-label="Zatvori"><X /></button>
      <button className="lb-n l" onClick={e => { e.stopPropagation(); go(-1) }} aria-label="Prethodna slika"><ChevronLeft /></button>
      <img key={it.src} src={it.src} alt={it.alt} onClick={e => e.stopPropagation()} />
      <button className="lb-n r" onClick={e => { e.stopPropagation(); go(1) }} aria-label="Sledeća slika"><ChevronRight /></button>
      <p className="lb-c">{index + 1} / {n}</p>
    </div>
  )
}
