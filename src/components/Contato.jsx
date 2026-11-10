import { perfil } from '../data/perfil'
import './Contato.css'

function Contato() {
  return (
    <section id="contato" className="secao contato">
      <div className="container">
        {/* Bloco azul grande, com detalhes em rosa, para chamar atenção */}
        <div className="contato-caixa">
          <p className="secao-etiqueta contato-etiqueta">Contato</p>
          <h2 className="contato-titulo">
            Vamos <em>conversar?</em>
          </h2>
          <p className="contato-texto">
            Estou em busca da minha primeira oportunidade em tecnologia. Tenho interesse em vagas
            de desenvolvedor júnior, estágio e outras posições de entrada, presenciais em{' '}
            {perfil.local}, híbridas ou remotas.
          </p>

          <div className="contato-botoes">
            <a
              href={perfil.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="botao contato-botao-rosa"
            >
              Falar no LinkedIn <span aria-hidden="true">↗</span>
            </a>

            {/* Renderização condicional: o botão só aparece se o e-mail estiver preenchido */}
            {perfil.email && (
              <a href={`mailto:${perfil.email}`} className="botao contato-botao-claro">
                Enviar e-mail
              </a>
            )}

            <a
              href={perfil.links.github}
              target="_blank"
              rel="noreferrer"
              className="botao contato-botao-claro"
            >
              Ver GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Estrelas decorativas no canto */}
          <span className="contato-estrela contato-estrela-1" aria-hidden="true">✦</span>
          <span className="contato-estrela contato-estrela-2" aria-hidden="true">✦</span>
        </div>
      </div>
    </section>
  )
}

export default Contato
