import { useCallback, useEffect, useRef, useState } from 'react'
import { Logo } from '../components/Logo'
import { IconArrowRight, IconClose, IconMenu, IconWhatsApp } from '../components/Icons'
import {
  ADDRESS,
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_ITEMS,
  WHATSAPP_DISPLAY,
  whatsappUrl,
} from '../data/contact'
import { useActiveSection, useBodyLock, useScrolled } from '../hooks/useUi'
import './Navbar.css'

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export function Navbar() {
  const scrolled = useScrolled(24)
  const active = useActiveSection(SECTION_IDS)
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false })
  const [progress, setProgress] = useState(0)
  const listRef = useRef<HTMLUListElement>(null)

  const current = hovered ?? active

  const moveIndicator = useCallback((id: string | null) => {
    const list = listRef.current
    if (!list) return
    const target = id ? list.querySelector<HTMLElement>(`a[data-nav="${id}"]`) : null
    if (!target) return
    setIndicator({ left: target.offsetLeft, width: target.offsetWidth, ready: true })
  }, [])

  useEffect(() => {
    moveIndicator(current)
  }, [current, moveIndicator])

  useEffect(() => {
    const reposition = () => moveIndicator(current)
    window.addEventListener('resize', reposition)
    document.fonts?.ready.then(reposition)
    return () => window.removeEventListener('resize', reposition)
  }, [current, moveIndicator])

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
    }
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  useBodyLock(open)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="navbar__bar">
        <div className="container navbar__inner">
          <a
            className="navbar__brand"
            href="#inicio"
            onClick={() => setOpen(false)}
            aria-label="FAMAC Caldeiraria — início"
          >
            <Logo size={47} />
          </a>

          <nav className="navbar__nav" aria-label="Navegação principal">
            <ul ref={listRef} onMouseLeave={() => setHovered(null)}>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    data-nav={item.id}
                    className={active === item.id ? 'is-active' : ''}
                    aria-current={active === item.id ? 'true' : undefined}
                    onMouseEnter={() => setHovered(item.id)}
                    onFocus={() => setHovered(item.id)}
                    onBlur={() => setHovered(null)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li className="navbar__indicator-track" aria-hidden="true">
                <span
                  className="navbar__indicator"
                  style={{
                    width: `${indicator.width}px`,
                    transform: `translate3d(${indicator.left}px, 0, 0)`,
                    opacity: indicator.ready ? 1 : 0,
                  }}
                />
              </li>
            </ul>
          </nav>

          <div className="navbar__actions">
            <a
              className="btn btn--primary btn--sm navbar__cta"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp className="navbar__cta-icon" />
              Solicitar orçamento
            </a>

            <button
              type="button"
              className="navbar__toggle"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </div>

      <span
        className="navbar__progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${progress})`, opacity: progress > 0.005 ? 1 : 0 }}
      />

      <div id="menu-mobile" className="navbar__mobile" aria-hidden={!open}>
        <nav aria-label="Navegação principal (mobile)">
          <ul className="navbar__mobile-list">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.id} style={{ transitionDelay: `${index * 40 + 60}ms` }}>
                <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                  <span className="navbar__mobile-index" aria-hidden="true">
                    0{index + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__mobile-foot">
          <a
            className="btn btn--primary btn--block"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <IconWhatsApp />
            Solicitar orçamento
          </a>

          <dl className="navbar__mobile-info">
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  {WHATSAPP_DISPLAY}
                </a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  {INSTAGRAM_HANDLE}
                </a>
              </dd>
            </div>
            <div>
              <dt>Endereço</dt>
              <dd>
                {ADDRESS.street} — {ADDRESS.district}, {ADDRESS.city} - {ADDRESS.state}
              </dd>
            </div>
          </dl>

          <a className="navbar__mobile-link" href="#contato" onClick={() => setOpen(false)}>
            Ver contato completo
            <IconArrowRight className="navbar__mobile-arrow" />
          </a>
        </div>
      </div>
    </header>
  )
}
