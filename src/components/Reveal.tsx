import { useEffect, useRef, type ElementType, type ReactNode } from 'react'

let sharedObserver: IntersectionObserver | null = null

function getObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            sharedObserver?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
  }
  return sharedObserver
}

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
  style?: React.CSSProperties
}

export function Reveal({ children, as: Tag = 'div', className = '', delay = 0, style }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = getObserver()
    if (!observer) {
      node.classList.add('is-visible')
      return
    }
    observer.observe(node)
    return () => observer.unobserve(node)
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms`, ...style } as React.CSSProperties}
    >
      {children}
    </Tag>
  )
}
