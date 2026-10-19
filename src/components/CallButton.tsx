import { Phone } from 'lucide-react'
import { BUSINESS } from '../data/config'
export default function CallButton({ label, size = '', icon = true }: { label: string; size?: string; icon?: boolean }) {
  return <a href={BUSINESS.phoneHref} className={`btn ${size}`}>{icon && <Phone size={20} aria-hidden />}<span>{label}</span></a>
}
