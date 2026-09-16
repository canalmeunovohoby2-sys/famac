import { Logo } from '../components/Logo'
import { IconArrowUpRight, IconInstagram, IconMail, IconPin, IconWhatsApp } from '../components/Icons'
import {
  ADDRESS,
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_ITEMS,
  WHATSAPP_DISPLAY,
  mailtoUrl,
  whatsappUrl,
} from '../data/contact'
import { services } from '../data/services'
import { site } from '../data/site'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <span className="footer__seam" aria-hidden="true" />
      <span className="footer__grid" aria-hidden="true" />

      <div className="container footer__inner">
        <div className="footer__col footer__col--brand">
          <a className="footer__logo" href="#inicio" aria-label={`${site.name} — início`}>
            <Logo size={58} />
          </a>

          <p className="footer__tagline">
            Serviços industriais de usinagem, soldas, fabricação, montagem, mandrilhamento de conchas e mecânica.
          </p>

          <span className="footer__rule" aria-hidden="true" />

          <a className="footer__social" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <IconInstagram className="footer__social-icon" />
            {INSTAGRAM_HANDLE}
          </a>
        </div>

        <nav className="footer__col" aria-label="Serviços">
          <h2 className="footer__title">Serviços</h2>
          <ul className="footer__links footer__links--numbered">
            {services.map((service) => (
              <li key={service.id}>
                <a href="#servicos">
                  <span className="footer__index" aria-hidden="true">
                    {service.index}
                  </span>
                  <span className="footer__label">{service.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Navegação">
          <h2 className="footer__title">Navegação</h2>
          <ul className="footer__links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
                  <span className="footer__label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__title">Contato</h2>
          <ul className="footer__contact">
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <span className="footer__contact-icon" aria-hidden="true">
                  <IconWhatsApp />
                </span>
                <span className="footer__contact-text">{WHATSAPP_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a href={mailtoUrl()}>
                <span className="footer__contact-icon" aria-hidden="true">
                  <IconMail />
                </span>
                <span className="footer__contact-text">{EMAIL}</span>
              </a>
            </li>
            <li>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${ADDRESS.street}, ${ADDRESS.district}, ${ADDRESS.city} - ${ADDRESS.state}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="footer__contact-icon" aria-hidden="true">
                  <IconPin />
                </span>
                <span className="footer__contact-text">
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.district} —{' '}
                  <span className="footer__nowrap">
                    {ADDRESS.city} - {ADDRESS.state}
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bar">
        <p className="footer__copy">
          © {year} {site.name}. Todos os direitos reservados.
        </p>

        <a className="footer__top" href="#inicio">
          Voltar ao topo
          <span className="footer__top-icon" aria-hidden="true">
            <IconArrowUpRight />
          </span>
        </a>
      </div>
    </footer>
  )
}
