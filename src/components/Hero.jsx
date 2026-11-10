import { perfil } from '../data/perfil'
import { projetos } from '../data/projetos'
import './Hero.css'

function Hero() {
  const primeiroNome = perfil.nome.split(' ')[0]

  // Linhas do "cartão de perfil" à direita, escrito como se fosse um objeto JavaScript
  const linhasCartao = [
    { chave: 'nome', valor: `'${perfil.nome}'` },
    { chave: 'cargo', valor: `'${perfil.cargo}'` },
    { chave: 'local', valor: `'${perfil.local}'` },
    { chave: 'stack', valor: "['React', 'JavaScript']" },
    { chave: 'projetos', valor: projetos.length },
  ]

  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-texto">
          <span className="hero-etiqueta">Aberto a oportunidades</span>

          <h1>
            Olá, eu sou {primeiroNome}.
            <br />
            <em className="hero-cargo">{perfil.cargo}.</em>
          </h1>

          <p className="hero-resumo">{perfil.resumo}</p>

          <div className="hero-botoes">
            <a href="#projetos" className="botao botao-principal">
              Ver projetos <span aria-hidden="true">→</span>
            </a>
            <a href="#contato" className="botao botao-secundario">
              Entrar em contato
            </a>
          </div>

          <ul className="hero-redes">
            <li>
              <a href={perfil.links.github} target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href={perfil.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Cartão decorativo. aria-hidden porque as mesmas informações já estão no texto */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-cartao">
            <div className="hero-cartao-topo">
              <span className="hero-cartao-bolinhas">
                <i />
                <i />
                <i />
              </span>
              <span className="hero-cartao-arquivo">perfil.js</span>
            </div>

            <pre className="hero-cartao-codigo">
              <code>
                <span className="cod-palavra">const</span> dev = {'{\n'}
                {linhasCartao.map((linha) => (
                  <span key={linha.chave}>
                    {'  '}
                    <span className="cod-chave">{linha.chave}</span>:{' '}
                    <span className="cod-valor">{linha.valor}</span>,{'\n'}
                  </span>
                ))}
                {'}'}
              </code>
            </pre>
          </div>

          {/* Selo rosa girando, com o texto em círculo */}
          <div className="hero-selo">
            <svg viewBox="0 0 120 120">
              <defs>
                <path id="circulo-selo" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
              </defs>
              {/* textLength estica o texto para dar a volta completa no círculo */}
              <text>
                <textPath href="#circulo-selo" textLength="272" lengthAdjust="spacing">
                  disponível ✦ júnior ✦ estágio ✦
                </textPath>
              </text>
            </svg>
            <span className="hero-selo-centro">✦</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
