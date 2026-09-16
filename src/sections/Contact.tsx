import { Reveal } from '../components/Reveal'
import { IconArrowUpRight, IconInstagram, IconMail, IconPin, IconWhatsApp } from '../components/Icons'
import { contactHead } from '../data/content'
import {
  ADDRESS,
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  mailtoUrl,
  mapsPlaceUrl,
  whatsappUrl,
} from '../data/contact'
import './Contact.css'

const channels = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: WHATSAPP_DISPLAY,
    description: 'Canal direto para orçamentos e dúvidas técnicas.',
    href: whatsappUrl(),
    icon: IconWhatsApp,
    external: true,
  },
  {
    id: 'email',
    label: 'E-mail',
    value: EMAIL,
    description: 'Envie desenhos, especificações e detalhes do serviço.',
    href: mailtoUrl(),
    icon: IconMail,
    external: false,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: INSTAGRAM_HANDLE,
    description: 'Acompanhe os trabalhos e serviços executados.',
    href: INSTAGRAM_URL,
    icon: IconInstagram,
    external: true,
  },
  {
    id: 'endereco',
    label: 'Endereço',
    value: `${ADDRESS.street} — ${ADDRESS.district}`,
    description: `${ADDRESS.city} - ${ADDRESS.state}, ${ADDRESS.country}`,
    href: mapsPlaceUrl(),
    icon: IconPin,
    external: true,
  },
]

export function Contact() {
  return (
    <section className="section section--mono contact" id="contato">
      <div className="container">
        <div className="section-head section-head--split">
          <Reveal>
            <p className="eyebrow eyebrow--accent">{contactHead.eyebrow}</p>
            <h2 className="section-title">{contactHead.title}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>{contactHead.description}</p>
          </Reveal>
        </div>

        <ul className="contact__grid">
          {channels.map((channel, index) => {
            const Icon = channel.icon
            return (
              <Reveal as="li" key={channel.id} delay={index * 80} className="contact__card">
                <a
                  className="contact__link"
                  href={channel.href}
                  {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="contact__icon" aria-hidden="true">
                    <Icon />
                  </span>

                  <span className="contact__body">
                    <span className="contact__label">{channel.label}</span>
                    <span className="contact__value">{channel.value}</span>
                    <span className="contact__description">{channel.description}</span>
                  </span>

                  <span className="contact__go" aria-hidden="true">
                    <IconArrowUpRight />
                  </span>
                </a>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
