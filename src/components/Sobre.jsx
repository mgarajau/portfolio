import { sobre, trajetoria, tecnologias } from '../data/perfil'
import './Sobre.css'

function Sobre() {
  return (
    <section id="sobre" className="secao">
      <div className="container">
        {/* Cabeçalho padrão de seção: etiqueta pequena + título */}
        <p className="secao-etiqueta">Sobre mim</p>
        <h2 className="secao-titulo">Da automação industrial ao desenvolvimento</h2>

        <div className="sobre-grid">
          {/* Coluna da esquerda: texto + tecnologias */}
          <div>
            {/* .map() percorre o array e cria um <p> para cada parágrafo */}
            {sobre.map((paragrafo, indice) => (
              <p key={indice} className="sobre-paragrafo">
                {paragrafo}
              </p>
            ))}

            <h3 className="sobre-subtitulo">Tecnologias</h3>
            <ul className="sobre-tecnologias">
              {tecnologias.map((tecnologia) => (
                <li key={tecnologia}>{tecnologia}</li>
              ))}
            </ul>
          </div>

          {/* Coluna da direita: linha do tempo */}
          <ol className="trajetoria">
            {trajetoria.map((item) => (
              <li key={item.titulo + item.local} className="trajetoria-item">
                <span className="trajetoria-tipo">{item.tipo}</span>
                <strong className="trajetoria-titulo">{item.titulo}</strong>
                <span className="trajetoria-detalhe">
                  {item.local} · {item.periodo}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Sobre
