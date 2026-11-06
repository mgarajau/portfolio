import { perfil } from '../data/perfil'
import './Contato.css'

function Contato() {
  return (
    <section id="contato" className="secao">
      <div className="container">
        {/* Um bloco destacado (caixa verde-clara) para chamar atenção */}
        <div className="contato-caixa">
          <p className="secao-etiqueta">Contato</p>
          <h2 className="secao-titulo contato-titulo">Vamos conversar?</h2>
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
              className="botao botao-principal"
            >
              Falar no LinkedIn <span aria-hidden="true">↗</span>
            </a>

            {/* Renderização condicional: o botão só aparece se o e-mail estiver preenchido */}
            {perfil.email && (
              <a href={`mailto:${perfil.email}`} className="botao botao-secundario">
                Enviar e-mail
              </a>
            )}

            <a
              href={perfil.links.github}
              target="_blank"
              rel="noreferrer"
              className="botao botao-secundario"
            >
              Ver GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
