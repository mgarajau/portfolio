import { sobre, trajetoria } from '../data/perfil'
import './Sobre.css'

function Sobre() {
  return (
    <section id="sobre" className="secao">
      <div className="container">
        {/* Cabeçalho padrão de seção: etiqueta pequena + título */}
        <p className="secao-etiqueta">Sobre mim</p>
        <h2 className="secao-titulo">
          Da automação industrial ao <em>desenvolvimento</em>
        </h2>

        <div className="sobre-grid">
          {/* Coluna da esquerda: texto. O primeiro parágrafo ganha destaque pelo CSS */}
          <div className="sobre-texto">
            {/* .map() percorre o array e cria um <p> para cada parágrafo */}
            {sobre.map((paragrafo, indice) => (
              <p key={indice}>{paragrafo}</p>
            ))}
          </div>

          {/* Coluna da direita: linha do tempo dentro de um card */}
          <aside className="trajetoria-card">
            <h3 className="trajetoria-titulo-card">Trajetória</h3>

            <ol className="trajetoria">
              {trajetoria.map((item) => (
                <li key={item.titulo + item.local} className="trajetoria-item">
                  <span className="trajetoria-periodo">{item.periodo}</span>
                  <strong className="trajetoria-titulo">{item.titulo}</strong>
                  <span className="trajetoria-detalhe">
                    {item.local}
                    <span className="trajetoria-tipo">{item.tipo}</span>
                  </span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Sobre
