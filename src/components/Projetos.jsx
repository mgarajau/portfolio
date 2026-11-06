import { projetos } from '../data/projetos'
import { perfil } from '../data/perfil'
import CardProjeto from './CardProjeto'
import './Projetos.css'

function Projetos() {
  return (
    <section id="projetos" className="secao">
      <div className="container">
        <p className="secao-etiqueta">Projetos</p>
        <h2 className="secao-titulo">O que eu já construí</h2>

        <div className="projetos-grid">
          {/* {...projeto} passa todos os campos do objeto como props de uma vez */}
          {projetos.map((projeto) => (
            <CardProjeto key={projeto.titulo} {...projeto} />
          ))}
        </div>

        <a
          href={`${perfil.links.github}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="botao botao-secundario projetos-ver-mais"
        >
          Ver todos no GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

export default Projetos
