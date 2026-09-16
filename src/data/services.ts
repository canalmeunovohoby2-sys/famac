import type { Service } from '../types'

export const servicesHead = {
  eyebrow: 'Serviços',
  title: 'Execução industrial do primeiro corte ao acabamento final.',
  description:
    'Seis frentes de trabalho que se completam para atender desde a peça isolada até a recuperação de conjuntos e equipamentos industriais.',
}

export const services: Service[] = [
  {
    id: 'usinagem',
    index: '01',
    title: 'Usinagem',
    description:
      'Usinagem de peças e componentes com controle dimensional, atenção à tolerância e acabamento conforme desenho técnico.',
    icon: 'usinagem',
    image: {
      src: '/images/servico-usinagem.jpg',
      alt: 'Usinagem de peça metálica em torno industrial',
      placeholder: 'Foto de usinagem',
    },
  },
  {
    id: 'soldas',
    index: '02',
    title: 'Soldas',
    description:
      'Soldagem de conjuntos e estruturas metálicas com preparação de junta, controle do processo e acabamento consistente.',
    icon: 'soldas',
    image: {
      src: '/images/servico-soldas.jpg',
      alt: 'Processo de soldagem em estrutura metálica',
      placeholder: 'Foto de soldagem',
    },
  },
  {
    id: 'fabricacao',
    index: '03',
    title: 'Fabricação',
    description:
      'Fabricação de estruturas, equipamentos e conjuntos metálicos sob medida, a partir de desenho ou peça modelo.',
    icon: 'fabricacao',
    image: {
      src: '/images/servico-fabricacao.jpg',
      alt: 'Fabricação de estrutura metálica em oficina industrial',
      placeholder: 'Foto de fabricação',
    },
  },
  {
    id: 'montagem',
    index: '04',
    title: 'Montagem',
    description:
      'Montagem e ajuste de conjuntos mecânicos e estruturais, com alinhamento e conferência dimensional em oficina ou campo.',
    icon: 'montagem',
    image: {
      src: '/images/servico-montagem.jpg',
      alt: 'Montagem de conjunto mecânico industrial',
      placeholder: 'Foto de montagem',
    },
  },
  {
    id: 'mandrilhamento',
    index: '05',
    title: 'Mandrilhamento de Conchas',
    description:
      'Mandrilhamento de conchas e recuperação de superfícies de grande porte, devolvendo geometria e ajuste ao componente.',
    icon: 'mandrilhamento',
    image: {
      src: '/images/servico-mandrilhamento.jpg',
      alt: 'Mandrilhamento de concha metálica de grande porte',
      placeholder: 'Foto de mandrilhamento',
    },
  },
  {
    id: 'mecanica',
    index: '06',
    title: 'Mecânica',
    description:
      'Serviços mecânicos de manutenção, recuperação e substituição de componentes para manter o equipamento em operação.',
    icon: 'mecanica',
    image: {
      src: '/images/servico-mecanica.jpg',
      alt: 'Manutenção mecânica de componente industrial',
      placeholder: 'Foto de mecânica',
    },
  },
]
