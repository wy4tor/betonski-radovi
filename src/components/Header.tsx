import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BUSINESS, NAV } from '../data/config'
import CallButton from './CallButton'
export default function Header() {
  const [s, setS] = useState(false), [o, setO] = useState(false)
  useEffect(() => { const f = () => setS(scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  return (
    <header className={`hdr ${s || o ? 'solid' : ''}`}>
      <div className="wrap hdr-in">
        <a href="#pocetna" className="logo">{BUSINESS.name}</a>
        <nav className={`nav ${o ? 'open' : ''}`} aria-label="Glavna navigacija">
          {NAV.map(n => <a key={n.href} href={n.href} onClick={() => setO(false)}>{n.label}</a>)}
        </nav>
        <div className="hdr-cta"><CallButton label="POZOVITE MAJSTORA" size="sm" /></div>
        <button className="burger" onClick={() => setO(!o)} aria-expanded={o} aria-label={o ? 'Zatvori meni' : 'Otvori meni'}>{o ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}
