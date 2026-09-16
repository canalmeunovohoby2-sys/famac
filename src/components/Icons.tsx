import type { ComponentType, SVGProps } from 'react'
import type { ServiceIconName } from '../types'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  xmlns: 'http://www.w3.org/2000/svg',
}

export function IconUsinagem(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="5.5" />
      <circle cx="11" cy="11" r="1.8" />
      <path d="M11 3.4v2M11 16.6v2M3.4 11h2M16.6 11h2M5.6 5.6l1.4 1.4M15 15l1.4 1.4M16.4 5.6L15 7M7 15l-1.4 1.4" />
      <path d="M20 9h8M24 9v14M17 23h11M20 23v3.6M28 23v3.6" />
      <path d="M24 27.5v1.5" />
    </svg>
  )
}

export function IconSoldas(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 24.5h22" />
      <path d="M5 24.5c2.6 0 3.4-5 6-9.5 2.3-4 4.5-6.5 7-6.5" />
      <path d="M18 8.5l3.6 2.1-1.8 3.5-3.6-2.1z" />
      <path d="M22.8 6.6l2.6 1.5M21 12.8l3.4 2" />
      <path d="M4 20.6l1.6.9M6.8 16.4l1.6.9M10 12.6l1.5.9" />
      <path d="M26 24.5c1 0 1.8-.8 1.8-1.8" />
    </svg>
  )
}

export function IconFabricacao(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 27h26" />
      <path d="M6 27V12l8-5v5l8-5v20" />
      <path d="M6 17h8M14 17v10M22 17h4M22 22h4" />
      <path d="M9.5 21.5h1M10 27v-3" />
    </svg>
  )
}

export function IconMontagem(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 3.5l9.5 5.4v10.8L16 25.1 6.5 19.7V8.9z" />
      <path d="M6.5 8.9L16 14.3l9.5-5.4" />
      <path d="M16 14.3v10.8" />
      <circle cx="16" cy="14.3" r="2.2" />
      <path d="M12 27.6h8M16 25.1v4" />
    </svg>
  )
}

export function IconMandrilhamento(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="16" cy="16" r="10.5" />
      <circle cx="16" cy="16" r="6.4" />
      <circle cx="16" cy="16" r="2.2" />
      <path d="M16 5.5v-3M16 29.5v-3M5.5 16h-3M29.5 16h-3" />
      <path d="M9.6 9.6L7.5 7.5M24.5 24.5l-2.1-2.1M22.4 9.6l2.1-2.1M7.5 24.5l2.1-2.1" />
    </svg>
  )
}

export function IconMecanica(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 16h9M19 16h9" />
      <path d="M8 12v8M24 12v8" />
      <circle cx="16" cy="16" r="4.4" />
      <path d="M16 8.4V4M16 28v-4.4M11.6 11.6L8.5 8.5M23.5 23.5l-3.1-3.1M20.4 11.6l3.1-3.1M8.5 23.5l3.1-3.1" />
      <path d="M4 13.5v5M28 13.5v5" />
    </svg>
  )
}

export const serviceIcons: Record<ServiceIconName, ComponentType<IconProps>> = {
  usinagem: IconUsinagem,
  soldas: IconSoldas,
  fabricacao: IconFabricacao,
  montagem: IconMontagem,
  mandrilhamento: IconMandrilhamento,
  mecanica: IconMecanica,
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.6} {...props}>
      <path d="M5 16h21M19.5 9.5L26 16l-6.5 6.5" />
    </svg>
  )
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.6} {...props}>
      <path d="M10 22L22 10M12 10h10v10" />
    </svg>
  )
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.05 3.28 5.02 4.47 2.47.99 2.97.79 3.51.74.54-.05 1.73-.71 1.97-1.4.25-.68.25-1.27.17-1.4-.07-.12-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.13h-.01c-1.5 0-2.97-.4-4.25-1.17l-.3-.18-3.16.83.85-3.08-.2-.32a8.19 8.19 0 01-1.26-4.3c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.26.86 5.81 2.42a8.16 8.16 0 012.41 5.82c0 4.54-3.7 8.23-8.23 8.23z" />
    </svg>
  )
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.5} {...props}>
      <rect x="4" y="4" width="24" height="24" rx="7" />
      <circle cx="16" cy="16" r="6" />
      <circle cx="23" cy="9" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.5} {...props}>
      <rect x="3" y="6.5" width="26" height="19" rx="3" />
      <path d="M4.5 9l10.2 7.4a2.4 2.4 0 002.6 0L27.5 9" />
    </svg>
  )
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.5} {...props}>
      <path d="M16 28.5s9.5-8.1 9.5-14.4A9.5 9.5 0 006.5 14c0 6.4 9.5 14.5 9.5 14.5z" />
      <circle cx="16" cy="13.6" r="3.6" />
    </svg>
  )
}

export function IconRoute(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.5} {...props}>
      <circle cx="7.5" cy="24.5" r="3" />
      <circle cx="24.5" cy="7.5" r="3" />
      <path d="M10.5 24.5h7.7a4.3 4.3 0 000-8.6h-3.9a4.3 4.3 0 010-8.6h7.2" />
    </svg>
  )
}

export function IconExpand(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.6} {...props}>
      <path d="M13 5H5v8M19 27h8v-8M27 13V5h-8M5 19v8h8" />
    </svg>
  )
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.6} {...props}>
      <path d="M7 7l18 18M25 7L7 25" />
    </svg>
  )
}

export function IconDrag(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.8} {...props}>
      <path d="M12 10l-4 6 4 6M20 10l4 6-4 6" />
    </svg>
  )
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.6} {...props}>
      <path d="M8 13l8 8 8-8" />
    </svg>
  )
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.6} {...props}>
      <path d="M4 9h24M4 16h24M4 23h16" />
    </svg>
  )
}
