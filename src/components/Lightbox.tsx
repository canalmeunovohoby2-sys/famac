import { useEffect, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { IconClose } from './Icons'
import { useBodyLock } from '../hooks/useUi'
import './Lightbox.css'

type LightboxProps = {
  open: boolean
  onClose: () => void
  label: string
  toolbar?: ReactNode
  children: ReactNode
}

export function Lightbox({ open, onClose, label, toolbar, children }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useBodyLock(open)

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      previous?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={label}>
      <button type="button" className="lightbox__backdrop" onClick={onClose} tabIndex={-1} aria-hidden="true" />

      <div className="lightbox__panel">
        <div className="lightbox__bar">
          <span className="lightbox__label">{label}</span>
          <div className="lightbox__tools">
            {toolbar}
            <button
              ref={closeRef}
              type="button"
              className="lightbox__close"
              onClick={onClose}
              aria-label="Fechar"
            >
              <IconClose />
            </button>
          </div>
        </div>

        <div className="lightbox__body">{children}</div>
      </div>
    </div>,
    document.body,
  )
}
