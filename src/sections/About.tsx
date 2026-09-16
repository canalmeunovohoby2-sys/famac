import { Reveal } from '../components/Reveal'
import { IconArrowRight } from '../components/Icons'
import { about } from '../data/site'
import './About.css'

export function About() {
  return (
    <section className="section section--light about" id="empresa">
      <div className="container about__inner">
        <Reveal className="about__media">
          <div className="about__frame">
            <div className="about__video-wrap">
              <video
                className="about__video"
                src={about.video.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={about.video.label}
              />
            </div>
            <span className="about__frame-line" aria-hidden="true" />
            <span className="about__frame-badge">{about.imageBadge}</span>
          </div>
        </Reveal>

        <div className="about__content">
          <Reveal>
            <p className="eyebrow eyebrow--accent">{about.eyebrow}</p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="section-title about__title">{about.title}</h2>
          </Reveal>

          <div className="about__text">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={140 + index * 70}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <ul className="about__list">
            {about.highlights.map((item, index) => (
              <Reveal as="li" key={item.title} delay={240 + index * 80} className="about__item">
                <span className="about__item-index" aria-hidden="true">
                  {`0${index + 1}`}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={480}>
            <a className="about__link" href="#servicos">
              Ver todos os serviços
              <IconArrowRight className="about__link-icon" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
