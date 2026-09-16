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
}

export function Media({
  image,
  className = '',
  ratio,
  zoom = false,
  priority = false,
  placeholderLabel = 'Adicione a imagem',
  showTag = true,
}: MediaProps) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(image?.src) && !failed

  return (
    <div
      className={`media ${zoom ? 'media--zoom' : ''} ${className}`.trim()}
      style={ratio ? ({ '--media-ratio': ratio } as CSSProperties) : undefined}
    >
      {showImage ? (
        <img
          className="media__img"
          src={image!.src}
          alt={image!.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
        />
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
