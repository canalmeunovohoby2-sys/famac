import { Reveal } from '../components/Reveal'
import { differentials, differentialsHead } from '../data/content'
import './Differentials.css'

export function Differentials() {
  return (
    <section className="section section--light differentials">
      <div className="container">
        <Reveal className="differentials__head">
          <p className="eyebrow eyebrow--accent">{differentialsHead.eyebrow}</p>
          <h2 className="section-title">{differentialsHead.title}</h2>
        </Reveal>

        <ul className="differentials__list">
          {differentials.map((item, index) => (
            <Reveal as="li" key={item.title} className="differentials__item" delay={index * 70}>
              <span className="differentials__index">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="differentials__bar" aria-hidden="true" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
