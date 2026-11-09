import { perfil } from '../data/perfil'
import './Hero.css'


function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-texto">
          <span className="hero-etiqueta">Aberto a oportunidades</span>

          <h1>
            Olá, eu sou {perfil.nome.split(' ')[0]}.
            <br />
            <span className="hero-cargo">{perfil.cargo}.</span>
          </h1>

          <p className="hero-resumo">{perfil.resumo}</p>

          <div className="hero-botoes">
            <a href="#projetos" className="botao botao-principal">
              Ver projetos
            </a>
            <a href="#contato" className="botao botao-secundario">
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
