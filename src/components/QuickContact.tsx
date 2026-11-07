import { Phone } from 'lucide-react'
import { BUSINESS } from '../data/config'

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
    </svg>
  )
}

function ViberIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.782 15.65c-.563-.338-1.85-.92-2.148-.823-.332.106-.605.547-.84.85-.183.238-.415.264-.73.136-.938-.382-1.745-.98-2.42-1.656-.636-.638-1.173-1.402-1.516-2.285-.124-.321-.088-.538.156-.75.253-.22.617-.58.74-1 .118-.403-.048-1.503-.497-2.155-.372-.54-.85-1.19-1.272-1.32-.423-.131-.836.088-1.127.323-.746.602-1.144 1.444-1.127 2.409.027 1.554.767 3.01 1.744 4.195 1.34 1.624 3.033 2.809 5.01 3.513 1.05.375 2.115.42 3.125-.03.737-.329 1.25-.92 1.488-1.687.218-.707.03-1.074-.603-1.455zm-1.705-8.41c-1.312-1.096-2.92-1.624-4.636-1.716-.364-.02-.553.18-.558.487-.005.305.176.51.538.533 1.52.099 2.92.569 4.07 1.554 1.054.903 1.698 2.052 1.895 3.428.05.347.247.514.542.483.3-.03.473-.23.44-.572-.229-1.643-.998-3.023-2.291-4.214zm1.884-1.83c-1.79-1.583-3.95-2.39-6.326-2.553-.377-.026-.576.168-.582.478-.007.308.18.51.558.538 2.167.16 4.126.902 5.753 2.35 1.577 1.403 2.559 3.179 2.872 5.275.053.35.252.518.548.484.301-.033.474-.236.438-.58-.352-2.37-1.464-4.38-3.261-5.992z" />
    </svg>
  )
}

export default function QuickContact() {
  return (
    <aside className="quick-dock" aria-label="Brzi kontakt: Poziv, WhatsApp i Viber">
      <div className="quick-dock-items">
        <a
          href={BUSINESS.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-btn dock-wa"
          aria-label={`WhatsApp chat sa majstorom (${BUSINESS.phoneDisplay})`}
          title={`WhatsApp chat sa majstorom (${BUSINESS.phoneDisplay})`}
        >
          <WhatsAppIcon size={22} />
          <span className="dock-text">WhatsApp</span>
        </a>

        <a
          href={BUSINESS.viberHref}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-btn dock-vi"
          aria-label={`Viber chat sa majstorom (${BUSINESS.phoneDisplay})`}
          title={`Viber chat sa majstorom (${BUSINESS.phoneDisplay})`}
        >
          <ViberIcon size={22} />
          <span className="dock-text">Viber</span>
        </a>

        <a
          href={BUSINESS.phoneHref}
          className="dock-btn dock-call"
          aria-label={`Pozovite majstora (${BUSINESS.phoneDisplay})`}
          title={`Pozovite majstora: ${BUSINESS.phoneDisplay}`}
        >
          <span className="dock-pulse" aria-hidden="true" />
          <Phone size={20} aria-hidden="true" />
          <span className="dock-text">Pozovite</span>
        </a>
      </div>
    </aside>
  )
}
