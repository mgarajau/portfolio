// Lista de projetos exibidos no portfólio.
// Para adicionar um projeto novo: coloque o print em public/projetos/ e acrescente um objeto aqui.

export const projetos = [
  {
    titulo: 'Site de Arquitetura',
    descricao:
      'Site institucional com 4 páginas e navegação via React Router. Componentes reutilizáveis ' +
      'e lista de projetos carregada de uma API REST com fetch e async/await.',
    imagem: 'projetos/site-arquitetura.jpg',
    tecnologias: ['React', 'Vite', 'React Router', 'APIs REST'],
    linkOnline: 'https://mgarajau.github.io/site-arquitetura-react/',
    linkCodigo: 'https://github.com/mgarajau/site-arquitetura-react',
  },
  {
    titulo: 'Lista de Tarefas',
    descricao:
      'Aplicação para adicionar, concluir e remover tarefas, feita com JavaScript puro. ' +
      'As tarefas ficam salvas no localStorage e continuam lá ao recarregar a página.',
    imagem: 'projetos/lista-tarefas.jpg',
    tecnologias: ['JavaScript', 'DOM', 'localStorage'],
    linkOnline: 'https://mgarajau.github.io/task-list/',
    linkCodigo: 'https://github.com/mgarajau/task-list',
  },
  {
    titulo: 'Blog Responsivo',
    descricao:
      'Página de blog com HTML semântico e layout que se adapta a celular, tablet e desktop ' +
      'usando Media Queries.',
    imagem: 'projetos/blog-responsivo.jpg',
    tecnologias: ['HTML5', 'CSS3', 'Media Queries'],
    linkOnline: 'https://mgarajau.github.io/blog-responsivo/',
    linkCodigo: 'https://github.com/mgarajau/blog-responsivo',
  },
]
