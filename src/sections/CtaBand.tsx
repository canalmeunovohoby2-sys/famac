import { Reveal } from '../components/Reveal'
import { IconMail, IconWhatsApp } from '../components/Icons'
import { ctaBand } from '../data/content'
import { mailtoUrl, whatsappUrl } from '../data/contact'
import './CtaBand.css'

export function CtaBand() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta__bg" aria-hidden="true">
        <span className="cta__grid" />
        <span className="cta__glow" />
      </div>

      <div className="container cta__inner">
        <Reveal className="cta__content">
          <p className="eyebrow eyebrow--accent">{ctaBand.eyebrow}</p>
          <h2 className="cta__title" id="cta-title">
            {ctaBand.title}
          </h2>
          <p className="cta__text">{ctaBand.description}</p>
        </Reveal>

        <Reveal className="cta__actions" delay={140}>
          <a className="btn btn--primary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            <IconWhatsApp className="cta__icon" />
            {ctaBand.button}
          </a>
          <a className="btn btn--ghost" href={mailtoUrl()}>
            <IconMail className="cta__icon" />
            {ctaBand.secondary}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
