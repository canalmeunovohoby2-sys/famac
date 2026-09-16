import type { NavItem } from '../types'

export const WHATSAPP_NUMBER = '5534997777554'
export const WHATSAPP_DISPLAY = '(34) 99777-7554'
export const EMAIL = 'famaccaldeiraria@gmail.com'
export const INSTAGRAM_HANDLE = '@famaccaldeiraria'
export const INSTAGRAM_URL = 'https://instagram.com/famaccaldeiraria'

export const COMPANY_NAME = 'FAMAC Caldeiraria'

export const ADDRESS = {
  street: 'Rua Renato Teodoro, 1115',
  district: 'Distrito Industrial',
  city: 'Araxá',
  state: 'MG',
  country: 'Brasil',
}

export const ADDRESS_FULL = `${ADDRESS.street}, ${ADDRESS.district}, ${ADDRESS.city} - ${ADDRESS.state}, ${ADDRESS.country}`

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da FAMAC e gostaria de solicitar um orçamento.'

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function mailtoUrl(subject = 'Contato pelo site da FAMAC'): string {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`
}

export function mapsEmbedUrl(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_FULL)}&z=16&hl=pt-BR&output=embed`
}

export function mapsRouteUrl(): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS_FULL)}`
}

export function mapsPlaceUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_FULL)}`
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Empresa', id: 'empresa' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Antes e Depois', id: 'antes-depois' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Contato', id: 'contato' },
]
