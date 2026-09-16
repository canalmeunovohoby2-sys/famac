import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { Media } from './Media'
import { IconArrowRight, IconDrag } from './Icons'
import type { ImageAsset } from '../types'
import './BeforeAfterSlider.css'

type BeforeAfterSliderProps = {
  before: ImageAsset
  after: ImageAsset
  labels: { before: string; after: string; slider: string }
  ratio?: string
  maxHeight?: string
  initial?: number
  priority?: boolean
}

export function BeforeAfterSlider({
  before,
  after,
  labels,
  ratio = '16 / 10',
  maxHeight,
  initial = 54,
  priority = false,
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(initial)
  const [dragging, setDragging] = useState(false)
  const [touched, setTouched] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const ratioNumber = useMemo(() => {
    const parts = ratio.split('/').map((part) => Number.parseFloat(part.trim()))
    if (parts.length === 2 && parts[0] > 0 && parts[1] > 0) {
      return parts[0] / parts[1]
    }
    return 1.6
  }, [ratio])

  const clamp = (next: number) => Math.min(100, Math.max(0, next))

  const updateFromX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect || rect.width === 0) return
    setValue(clamp(((clientX - rect.left) / rect.width) * 100))
  }, [])

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    setTouched(true)
    setDragging(true)
    containerRef.current?.setPointerCapture(event.pointerId)
    updateFromX(event.clientX)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    updateFromX(event.clientX)
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    setDragging(false)
    if (containerRef.current?.hasPointerCapture(event.pointerId)) {
      containerRef.current.releasePointerCapture(event.pointerId)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    const step = event.shiftKey ? 10 : 2
    const actions: Record<string, () => void> = {
      ArrowLeft: () => setValue((current) => clamp(current - step)),
      ArrowRight: () => setValue((current) => clamp(current + step)),
      ArrowUp: () => setValue((current) => clamp(current - step)),
      ArrowDown: () => setValue((current) => clamp(current + step)),
      Home: () => setValue(0),
      End: () => setValue(100),
    }
    const action = actions[event.key]
    if (!action) return
    event.preventDefault()
    setTouched(true)
    action()
  }

  useEffect(() => {
    if (!dragging) return
    const previous = document.body.style.userSelect
    document.body.style.userSelect = 'none'
    return () => {
      document.body.style.userSelect = previous
    }
  }, [dragging])

  return (
    <div
      className={`ba ${dragging ? 'is-dragging' : ''} ${touched ? 'is-touched' : ''}`}
      style={
        {
          '--ba-ratio': ratio,
          '--ba-ratio-n': ratioNumber,
          '--ba-max-h': maxHeight ?? '2400px',
          '--ba-value': `${value}%`,
        } as CSSProperties
      }
    >
      <div
        ref={containerRef}
        className="ba__stage"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="ba__layer">
          <Media image={before} className="ba__media" priority={priority} showTag={false} />
        </div>

        <div className="ba__layer ba__layer--after">
          <Media image={after} className="ba__media" showTag={false} />
        </div>

        <span className="ba__tag ba__tag--before">{labels.before}</span>
        <span className="ba__tag ba__tag--after">{labels.after}</span>

        <div className="ba__divider" aria-hidden="true">
          <span className="ba__divider-line" />
          <span
            className="ba__handle"
            role="slider"
            tabIndex={0}
            aria-label={labels.slider}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(value)}
            aria-valuetext={`${Math.round(value)}%`}
            onKeyDown={handleKeyDown}
          >
            <IconDrag className="ba__handle-icon" />
          </span>
        </div>

        <div className="ba__hint" aria-hidden="true">
          <IconDrag className="ba__hint-icon" />
          <span>Arraste para comparar</span>
        </div>
      </div>

      <div className="ba__steps">
        <button
          type="button"
          className="ba__step ba__step--prev"
          onClick={() => {
            setTouched(true)
            setValue((current) => clamp(current - 6))
          }}
          aria-label={`Ver mais de ${labels.before}`}
        >
          <IconArrowRight />
        </button>
        <span className="ba__steps-bar" aria-hidden="true">
          <span className="ba__steps-fill" />
        </span>
        <button
          type="button"
          className="ba__step"
          onClick={() => {
            setTouched(true)
            setValue((current) => clamp(current + 6))
          }}
          aria-label={`Ver mais de ${labels.after}`}
        >
          <IconArrowRight />
        </button>
      </div>
    </div>
  )
}
