import { useEffect, useState } from 'react'

export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.2, 0.5, 1] },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [ids])

  return active
}

export function useBodyLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return
    document.body.classList.add('is-locked')
    return () => document.body.classList.remove('is-locked')
  }, [locked])
}
