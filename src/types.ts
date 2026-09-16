export type ImageAsset = {
  src?: string
  alt: string
  placeholder?: string
}

export type ServiceIconName =
  | 'usinagem'
  | 'soldas'
  | 'fabricacao'
  | 'montagem'
  | 'mandrilhamento'
  | 'mecanica'

export type Service = {
  id: string
  index: string
  title: string
  description: string
  icon: ServiceIconName
  image?: ImageAsset
}

export type BeforeAfterItem = {
  id: string
  label: string
  service: string
  description: string
  ratio?: string
  before: ImageAsset
  after: ImageAsset
}

export type ProjectItem = {
  id: string
  title: string
  category?: string
  description?: string
  ratio?: string
  image?: ImageAsset
}

export type Differential = {
  index: string
  title: string
  description: string
}

export type NavItem = {
  label: string
  id: string
}
