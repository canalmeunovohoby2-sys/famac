import type { CSSProperties } from 'react'
import { site } from '../data/site'
import './Logo.css'

type LogoProps = {
  className?: string
  showWordmark?: boolean
  size?: number
  style?: CSSProperties
}

export function Logo({
  className = '',
  showWordmark = site.showLogoWordmark,
  size = 40,
  style,
}: LogoProps) {
  return (
    <span
      className={`logo ${className}`.trim()}
      style={{ ...style, ['--logo-h' as string]: `${size}px` }}
    >
      <img
        className="logo__mark"
        src={site.logo}
        alt={`${site.name} — logotipo`}
        width={site.logoWidth}
        height={site.logoHeight}
        decoding="async"
      />
      {showWordmark ? (
        <span className="logo__text">
          <span className="logo__name">{site.wordmark}</span>
          <span className="logo__sub">{site.wordmarkSub}</span>
        </span>
      ) : null}
    </span>
  )
}
