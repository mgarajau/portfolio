import { perfil } from '../data/perfil'
import './Rodape.css'

function Rodape() {
  // new Date().getFullYear() pega o ano atual: o rodapé nunca fica desatualizado
  const anoAtual = new Date().getFullYear()

  return (
    <footer className="rodape">
      <div className="container rodape-conteudo">
        <p>
          © {anoAtual} {perfil.nome} · Feito com React
        </p>

        <nav className="rodape-links" aria-label="Links do rodapé">
          <a href={perfil.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={perfil.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#inicio">
            Voltar ao topo <span aria-hidden="true">↑</span>
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Rodape
