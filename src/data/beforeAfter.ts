import type { BeforeAfterItem } from '../types'

export const beforeAfterHead = {
  eyebrow: 'Antes e Depois',
  title: 'Transformação que você pode ver.',
  description:
    'Arraste o divisor para comparar o estado do componente antes do serviço e o resultado depois da execução. Use o botão ampliar para ver em tela cheia.',
}

export const beforeAfterLabels = {
  before: 'Antes',
  after: 'Depois',
  zoom: 'Ampliar',
  close: 'Fechar',
  slider: 'Comparar antes e depois',
  sideBySide: 'Lado a lado',
  comparator: 'Comparador',
}

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: 'servico-01',
    label: 'Serviço realizado',
    service: 'Recuperação e usinagem de componente',
    description: 'Descreva aqui o serviço realizado neste trabalho.',
    ratio: '7 / 8',
    before: {
      src: '/images/antes-01.jpeg',
      alt: 'Componente industrial antes do serviço da FAMAC Caldeiraria',
      placeholder: 'Adicione a imagem ANTES',
    },
    after: {
      src: '/images/depois-02.jpeg',
      alt: 'Componente industrial depois do serviço da FAMAC Caldeiraria',
      placeholder: 'Adicione a imagem DEPOIS',
    },
  },
]
