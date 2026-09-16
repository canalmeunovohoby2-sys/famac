import { Reveal } from '../components/Reveal'
import { IconArrowUpRight, IconMail, IconPin, IconRoute, IconWhatsApp } from '../components/Icons'
import { locationHead } from '../data/content'
import { ADDRESS, EMAIL, WHATSAPP_DISPLAY, mailtoUrl, mapsEmbedUrl, mapsPlaceUrl, mapsRouteUrl, whatsappUrl } from '../data/contact'
import './Location.css'

export function Location() {
  return (
    <section className="section section--light location" id="localizacao">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow eyebrow--accent">{locationHead.eyebrow}</p>
            <h2 className="section-title">{locationHead.title}</h2>
          </Reveal>
        </div>

        <div className="location__inner">
          <Reveal className="location__info">
            <ul className="location__list">
              <li>
                <span className="location__icon" aria-hidden="true">
                  <IconPin />
                </span>
                <div>
                  <span className="location__label">Endereço</span>
                  <address className="location__value">
                    {ADDRESS.street}
                    <br />
                    {ADDRESS.district}
                    <br />
                    {ADDRESS.city} - {ADDRESS.state}
                    <br />
                    {ADDRESS.country}
                  </address>
                </div>
              </li>

              <li>
                <span className="location__icon" aria-hidden="true">
                  <IconWhatsApp />
                </span>
                <div>
                  <span className="location__label">WhatsApp</span>
                  <a className="location__value" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </li>

              <li>
                <span className="location__icon" aria-hidden="true">
                  <IconMail />
                </span>
                <div>
                  <span className="location__label">E-mail</span>
                  <a className="location__value" href={mailtoUrl()}>
                    {EMAIL}
                  </a>
                </div>
              </li>
            </ul>

            <div className="location__actions">
              <a className="btn btn--primary btn--sm" href={mapsRouteUrl()} target="_blank" rel="noopener noreferrer">
                <IconRoute className="location__action-icon" />
                Abrir rota
              </a>
              <a className="btn btn--outline btn--sm" href={mapsPlaceUrl()} target="_blank" rel="noopener noreferrer">
                Ver no Google Maps
                <IconArrowUpRight className="location__action-icon" />
              </a>
            </div>
          </Reveal>

          <Reveal className="location__map" delay={120}>
            <iframe
              title={`Mapa da localização da FAMAC Caldeiraria — ${ADDRESS.street}, ${ADDRESS.city} - ${ADDRESS.state}`}
              src={mapsEmbedUrl()}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
