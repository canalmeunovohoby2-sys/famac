import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { IconArrowUpRight, serviceIcons } from '../components/Icons'
import { services, servicesHead } from '../data/services'
import { whatsappUrl } from '../data/contact'
import './Services.css'

export function Services() {
  const [activeId, setActiveId] = useState(services[0].id)
  const active = services.find((service) => service.id === activeId) ?? services[0]

  return (
    <section className="section section--dark services" id="servicos">
      <div className="container">
        <div className="section-head section-head--split">
          <Reveal>
            <p className="eyebrow eyebrow--accent">{servicesHead.eyebrow}</p>
            <h2 className="section-title">{servicesHead.title}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>{servicesHead.description}</p>
          </Reveal>
        </div>

        <div className="services__layout">
          <ul className="services__list" onMouseLeave={() => setActiveId(services[0].id)}>
            {services.map((service, index) => {
              const Icon = serviceIcons[service.icon]
              const isActive = service.id === active.id
              return (
                <Reveal
                  as="li"
                  key={service.id}
                  delay={index * 60}
                  className={`services__item ${isActive ? 'is-active' : ''}`}
                >
                  <a
                    className="services__row"
                    href={whatsappUrl(
                      `Olá! Vim pelo site da FAMAC e gostaria de solicitar um orçamento de ${service.title}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setActiveId(service.id)}
                    onFocus={() => setActiveId(service.id)}
                  >
                    <span className="services__index" aria-hidden="true">
                      {service.index}
                    </span>

                    <span className="services__icon" aria-hidden="true">
                      <Icon />
                    </span>

                    <span className="services__body">
                      <span className="services__title">{service.title}</span>
                      <span className="services__description">{service.description}</span>
                    </span>

                    <span className="services__go" aria-hidden="true">
                      <IconArrowUpRight />
                    </span>
                  </a>
                </Reveal>
              )
            })}
          </ul>

          <Reveal className="services__panel" delay={140}>
            <div className="services__panel-inner">
              <div className="services__panel-video-wrap">
                <video
                  className="services__panel-video"
                  src="/VIDEO.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
