import { useCallback, useEffect, useMemo, useState } from 'react'
import { Lightbox } from '../components/Lightbox'
import { Media } from '../components/Media'
import { Reveal } from '../components/Reveal'
import { IconArrowRight, IconExpand } from '../components/Icons'
import { projects, projectsHead } from '../data/projects'
import type { ProjectItem } from '../types'
import './Projects.css'

type Positioned = { project: ProjectItem; index: number }

function ratioValue(ratio: string): number {
  const parts = ratio.split('/').map((part) => Number.parseFloat(part.trim()))
  return parts.length === 2 && parts[0] > 0 && parts[1] > 0 ? parts[0] / parts[1] : 1.33
}

function columnsFor(width: number): number {
  if (width <= 620) return 1
  if (width <= 1100) return 2
  return 3
}

function distribute(items: Positioned[], columnCount: number): Positioned[][] {
  const columns: Positioned[][] = Array.from({ length: columnCount }, () => [])
  const heights = new Array<number>(columnCount).fill(0)

  const byHeight = [...items].sort(
    (a, b) =>
      1 / ratioValue(b.project.ratio ?? '4 / 3') - 1 / ratioValue(a.project.ratio ?? '4 / 3'),
  )

  for (const item of byHeight) {
    const height = 1 / ratioValue(item.project.ratio ?? '4 / 3')
    const shortest = heights.indexOf(Math.min(...heights))
    columns[shortest].push(item)
    heights[shortest] += height + 0.14
  }

  return columns.map((column) => [...column].sort((a, b) => a.index - b.index))
}

export function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [columnCount, setColumnCount] = useState(() =>
    typeof window === 'undefined' ? 3 : columnsFor(window.innerWidth),
  )

  const isOpen = openIndex !== null
  const current = isOpen ? projects[openIndex] : null

  useEffect(() => {
    let frame = 0
    const onResize = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        setColumnCount(columnsFor(window.innerWidth))
      })
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const columns = useMemo(
    () =>
      distribute(
        projects.map((project, index) => ({ project, index })),
        columnCount,
      ),
    [columnCount],
  )

  const close = useCallback(() => setOpenIndex(null), [])

  const step = useCallback((direction: 1 | -1) => {
    setOpenIndex((index) => {
      if (index === null) return index
      return (index + direction + projects.length) % projects.length
    })
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, step])

  return (
    <section className="section section--dark projects" id="projetos">
      <div className="container">
        <div className="section-head section-head--split">
          <Reveal>
            <p className="eyebrow eyebrow--accent">{projectsHead.eyebrow}</p>
            <h2 className="section-title">{projectsHead.title}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>{projectsHead.description}</p>
          </Reveal>
        </div>

        <div
          className="projects__grid"
          style={{ '--cols': columnCount } as React.CSSProperties}
        >
          {columns.map((column, columnIndex) => (
            <div className="projects__column" key={columnIndex}>
              {column.map(({ project, index }) => (
                <Reveal
                  as="article"
                  key={project.id}
                  delay={(index % 3) * 90}
                  className="projects__card"
                  style={{ '--media-ratio': project.ratio ?? '4 / 3' } as React.CSSProperties}
                >
                  <button
                    type="button"
                    className="projects__button"
                    onClick={() => setOpenIndex(index)}
                    aria-label={`Ampliar ${project.title}`}
                  >
                    <Media image={project.image} className="projects__media" zoom />

                    <span className="projects__overlay" aria-hidden="true" />

                    <span className="projects__caption">
                      {project.category && <span className="projects__category">{project.category}</span>}
                      <span className="projects__title">{project.title}</span>
                    </span>

                    <span className="projects__expand" aria-hidden="true">
                      <IconExpand />
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Lightbox open={isOpen} onClose={close} label={current?.title ?? 'Projeto'}>
        {current && (
          <div className="projects__lightbox">
            <Media
              image={current.image}
              className="projects__lightbox-media"
              ratio={current.ratio ?? '16 / 9'}
              priority
            />

            <div className="projects__lightbox-foot">
              <div className="lightbox__caption">
                {current.category && <span className="projects__category">{current.category}</span>}
                <h3>{current.title}</h3>
                {current.description && <p>{current.description}</p>}
              </div>

              <div className="projects__nav">
                <button
                  type="button"
                  className="projects__nav-btn projects__nav-btn--prev"
                  onClick={() => step(-1)}
                  aria-label="Projeto anterior"
                >
                  <IconArrowRight />
                </button>
                <span className="projects__nav-count">
                  {String((openIndex ?? 0) + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  className="projects__nav-btn"
                  onClick={() => step(1)}
                  aria-label="Próximo projeto"
                >
                  <IconArrowRight />
                </button>
              </div>
            </div>
          </div>
        )}
      </Lightbox>
    </section>
  )
}
