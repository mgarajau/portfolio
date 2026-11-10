export const perfil = {
  nome: 'Matheus Garajau',
  cargo: 'Desenvolvedor de Software',
  local: 'Belo Horizonte, MG',
  resumo:
    'Sou estudante de Engenharia de Software e desenvolvo aplicações web com JavaScript e React. ' +
    'Trago da automação industrial a atenção a detalhes e a responsabilidade de quem já cuidou de sistemas críticos.',
  links: {
    github: 'https://github.com/mgarajau',
    linkedin: 'https://www.linkedin.com/in/matheus-garajau/',
  },
  email: 'matheusgarajaucontato@gmail.com',
}

// Seção "Sobre": cada item do array vira um parágrafo.
export const sobre = [
  'Venho da indústria. Como técnico em automação na FUNED, monitorei por 2 anos sistemas ' +
    'supervisórios de câmaras frias que armazenam soros e vacinas, um ambiente em que uma falha ' +
    'pode custar insumos de saúde pública.',
  'Foi ali que percebi o quanto gosto de entender como os sistemas funcionam por dentro. ' +
    'Hoje estudo Engenharia de Software e construo projetos com JavaScript e React, sempre com foco em ' +
    'código organizado e interfaces que funcionam bem em qualquer tela.',
  'Estou buscando minha primeira oportunidade na área de tecnologia, seja como desenvolvedor júnior, ' +
    'estagiário ou em outra posição de entrada.',
]

export const trajetoria = [
  {
    tipo: 'Formação',
    titulo: 'Engenharia de Software',
    local: 'Estácio',
    periodo: 'Em andamento',
  },
  {
    tipo: 'Formação',
    titulo: 'Curso de Engenheiro de Software',
    local: 'Escola DNC',
    periodo: '2024 – 2026',
  },
  {
    tipo: 'Experiência',
    titulo: 'Técnico de Automação',
    local: 'FUNED – Fundação Ezequiel Dias',
    periodo: 'abr 2024 – mar 2026',
  },
]

// Tecnologias que passam na faixa animada logo abaixo do topo.
export const tecnologias = [
  'JavaScript',
  'React',
  'HTML5',
  'CSS3',
  'Node.js',
  'React Router',
  'Git',
  'GitHub',
  'Responsividade',
  'APIs REST',
]

// Seção "Habilidades": as mesmas tecnologias, organizadas em grupos.
export const habilidades = [
  {
    grupo: 'Front-end',
    descricao: 'Interfaces organizadas em componentes e que funcionam bem em qualquer tela.',
    itens: ['JavaScript', 'React', 'React Router', 'HTML5', 'CSS3', 'Responsividade'],
  },
  {
    grupo: 'Back-end e dados',
    descricao: 'Consumo de APIs e primeiros passos no servidor com JavaScript.',
    itens: ['Node.js', 'APIs REST'],
  },
  {
    grupo: 'Ferramentas',
    descricao: 'Versionamento do código e publicação dos projetos.',
    itens: ['Git', 'GitHub'],
  },
]
