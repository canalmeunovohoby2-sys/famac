import { useEffect, useState } from 'react'
import { IconWhatsApp } from './Icons'
import { whatsappUrl } from '../data/contact'
import './WhatsAppFloat.css'

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      className={`wa-float ${visible ? 'is-visible' : ''}`}
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a FAMAC Caldeiraria pelo WhatsApp"
    >
      <span className="wa-float__ring" aria-hidden="true" />
      <IconWhatsApp className="wa-float__icon" />
      <span className="wa-float__text">Fale com a FAMAC</span>
    </a>
  )
}
