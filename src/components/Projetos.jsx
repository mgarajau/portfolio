import { projetos } from '../data/projetos'
import { perfil } from '../data/perfil'
import CardProjeto from './CardProjeto'
import './Projetos.css'

function Projetos() {
  return (
    <section id="projetos" className="secao">
      <div className="container">
        <div className="projetos-cabecalho">
          <div>
            <p className="secao-etiqueta">Projetos</p>
            <h2 className="secao-titulo">
              O que eu já <em>construí</em>
            </h2>
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

        <div className="projetos-lista">
          {/* {...projeto} passa todos os campos do objeto como props de uma vez.
              "numero" é a posição do projeto na lista, começando em 1 */}
          {projetos.map((projeto, indice) => (
            <CardProjeto key={projeto.titulo} numero={indice + 1} {...projeto} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projetos
