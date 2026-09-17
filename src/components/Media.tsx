import { useState, type CSSProperties } from 'react'
import type { ImageAsset } from '../types'

type MediaProps = {
  image?: ImageAsset
  className?: string
  ratio?: string
  zoom?: boolean
  priority?: boolean
  placeholderLabel?: string
  showTag?: boolean
  fit?: 'cover' | 'contain'
}

export function Media({
  image,
  className = '',
  ratio,
  zoom = false,
  priority = false,
  placeholderLabel = 'Adicione a imagem',
  showTag = true,
  fit = 'cover',
}: MediaProps) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(image?.src) && !failed
  const loading = priority ? 'eager' : 'lazy'

  return (
    <div
      className={`media ${zoom ? 'media--zoom' : ''} ${fit === 'contain' ? 'media--contain' : ''} ${className}`.trim()}
      style={ratio ? ({ '--media-ratio': ratio } as CSSProperties) : undefined}
    >
      {showImage ? (
        <>
          {fit === 'contain' && (
            <img
              className="media__backdrop"
              src={image!.src}
              alt=""
              aria-hidden="true"
              loading={loading}
              decoding="async"
              onError={() => setFailed(true)}
            />
          )}
          <img
            className="media__img"
            src={image!.src}
            alt={image!.alt}
            loading={loading}
            decoding="async"
            onError={() => setFailed(true)}
          />
        </>
      ) : (
        <div className="media__ph" role="img" aria-label={image?.placeholder ?? image?.alt ?? placeholderLabel}>
          {showTag && (
            <span className="media__ph-tag">
              <i aria-hidden="true" />
              {image?.placeholder ?? placeholderLabel}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
