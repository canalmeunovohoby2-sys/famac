import { Media } from '../components/Media'
import { IconArrowRight, IconChevronDown, IconWhatsApp } from '../components/Icons'
import { hero } from '../data/site'
import { whatsappUrl } from '../data/contact'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__grid" />
        <span className="hero__glow" />
        <span className="hero__seam" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">{hero.eyebrow}</p>

          <h1 className="hero__title">
            <span className="hero__title-accent">
              <span className="hero__title-rule" aria-hidden="true" />
              {hero.titleAccent}
            </span>{' '}
            {hero.titleRest}
          </h1>

          <p className="hero__lead">{hero.subtitle}</p>

          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp className="hero__icon" />
              {hero.primaryCta}
            </a>
            <a className="btn btn--ghost" href="#servicos">
              {hero.secondaryCta}
              <IconArrowRight className="hero__icon hero__icon--arrow" />
            </a>
          </div>

          <dl className="hero__facts">
            {hero.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__media">
          <div className="hero__frame">
            <Media image={hero.image} className="hero__photo" priority zoom />
            <span className="hero__frame-corner" aria-hidden="true" />
            <div className="hero__frame-label">
              <span className="hero__frame-dot" aria-hidden="true" />
              <span>
                {hero.badges[0]} • {hero.badges[1]} • {hero.badges[2]}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__strip">
        <div className="container hero__strip-inner">
          <span className="hero__strip-label">{hero.stripLabel}</span>
          <ul className="hero__strip-list">
            {hero.badges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
          <a className="hero__scroll" href="#empresa">
            <IconChevronDown className="hero__scroll-icon" />
            <span>Rolar</span>
          </a>
        </div>
      </div>
    </section>
  )
}
