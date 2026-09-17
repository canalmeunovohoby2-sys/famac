import { useState } from 'react'
import { BeforeAfterSlider } from '../components/BeforeAfterSlider'
import { Lightbox } from '../components/Lightbox'
import { Media } from '../components/Media'
import { Reveal } from '../components/Reveal'
import { IconExpand } from '../components/Icons'
import { beforeAfterHead, beforeAfterItems, beforeAfterLabels } from '../data/beforeAfter'
import './BeforeAfter.css'

type ViewMode = 'comparator' | 'sideBySide'

export function BeforeAfter() {
  const [activeId, setActiveId] = useState(beforeAfterItems[0].id)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [viewMode, setViewMode] = useState<ViewMode>('comparator')

  const active = beforeAfterItems.find((item) => item.id === activeId) ?? beforeAfterItems[0]
  const single = beforeAfterItems.length === 1

  return (
    <section className="section section--light ba-section" id="antes-depois">
      <div className="container">
        <div className="section-head section-head--split">
          <Reveal>
            <p className="eyebrow eyebrow--accent">{beforeAfterHead.eyebrow}</p>
            <h2 className="section-title">{beforeAfterHead.title}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>{beforeAfterHead.description}</p>
          </Reveal>
        </div>

        <Reveal className="ba-section__stage" delay={80}>
          {!single && (
            <div className="ba-section__tabs" aria-label="Trabalhos antes e depois">
              {beforeAfterItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={item.id === active.id}
                  className={item.id === active.id ? 'is-active' : ''}
                  onClick={() => setActiveId(item.id)}
                >
                  <span className="ba-section__tab-index" aria-hidden="true">
                    {item.label.replace(/\D/g, '')}
                  </span>
                  {item.label}
                </button>
              ))}
            </div>
          )}

          <div className="ba-section__body">
            <BeforeAfterSlider
              key={active.id}
              before={active.before}
              after={active.after}
              labels={beforeAfterLabels}
              ratio={active.ratio ?? '16 / 10'}
              maxHeight="clamp(440px, 52vw, 720px)"
            />

            <div className="ba-section__meta">
              <div className="ba-section__meta-text">
                <span className="ba-section__meta-label">{active.label}</span>
                <h3>{active.service}</h3>
                <p>{active.description}</p>
              </div>

              <button
                type="button"
                className="btn btn--outline ba-section__zoom"
                onClick={() => setLightboxOpen(true)}
              >
                <IconExpand className="ba-section__zoom-icon" />
                {beforeAfterLabels.zoom}
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <Lightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        label={`${active.label} — ${beforeAfterLabels.before} e ${beforeAfterLabels.after}`}
        toolbar={
          <div className="lightbox__toggle">
            <button
              type="button"
              className={viewMode === 'comparator' ? 'is-active' : ''}
              onClick={() => setViewMode('comparator')}
            >
              {beforeAfterLabels.comparator}
            </button>
            <button
              type="button"
              className={viewMode === 'sideBySide' ? 'is-active' : ''}
              onClick={() => setViewMode('sideBySide')}
            >
              {beforeAfterLabels.sideBySide}
            </button>
          </div>
        }
      >
        {viewMode === 'comparator' ? (
          <BeforeAfterSlider
            before={active.before}
            after={active.after}
            labels={beforeAfterLabels}
            ratio={active.ratio ?? '16 / 10'}
            maxHeight="min(62vh, 620px)"
          />
        ) : (
          <div className="lightbox__pair">
            <figure>
              <Media
                image={active.before}
                className="lightbox__pair-media"
                ratio={active.ratio ?? '4 / 3'}
                fit="contain"
              />
              <figcaption>{beforeAfterLabels.before}</figcaption>
            </figure>
            <figure>
              <Media
                image={active.after}
                className="lightbox__pair-media"
                ratio={active.ratio ?? '4 / 3'}
                fit="contain"
              />
              <figcaption>{beforeAfterLabels.after}</figcaption>
            </figure>
          </div>
        )}

        <div className="lightbox__caption">
          <h3>{active.service}</h3>
          <p>{active.description}</p>
        </div>
      </Lightbox>
    </section>
  )
}
