import './CardProjeto.css'

// Componente de UM card. Ele recebe os dados de um projeto por "props"
// e não sabe nada dos outros projetos: só desenha o que recebeu.
function CardProjeto({ titulo, descricao, imagem, tecnologias, linkOnline, linkCodigo }) {
  return (
    <article className="card-projeto">
      {/* Clicar na imagem também abre o projeto online.
          tabIndex={-1} e aria-hidden: quem usa teclado ou leitor de tela não passa duas vezes
          pelo mesmo link, porque o "Ver online" logo abaixo já leva ao mesmo lugar. */}
      <a
        href={linkOnline}
        target="_blank"
        rel="noreferrer"
        className="card-projeto-imagem"
        tabIndex={-1}
        aria-hidden="true"
      >
        {/* BASE_URL vale "/" no computador e "/portfolio/" no GitHub Pages */}
        <img src={`${import.meta.env.BASE_URL}${imagem}`} alt="" loading="lazy" />
      </a>

      <div className="card-projeto-corpo">
        <h3>{titulo}</h3>
        <p>{descricao}</p>

        <ul className="card-projeto-tecnologias">
          {tecnologias.map((tecnologia) => (
            <li key={tecnologia}>{tecnologia}</li>
          ))}
        </ul>

        <div className="card-projeto-links">
          <a href={linkOnline} target="_blank" rel="noreferrer">
            Ver online <span aria-hidden="true">↗</span>
          </a>
          <a href={linkCodigo} target="_blank" rel="noreferrer">
            Código <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default CardProjeto
