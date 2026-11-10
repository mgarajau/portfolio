import { habilidades } from '../data/perfil'
import './Habilidades.css'

function Habilidades() {
  return (
    <section id="habilidades" className="secao habilidades">
      <div className="container">
        <p className="secao-etiqueta">Habilidades</p>
        <h2 className="secao-titulo">
          Ferramentas que uso no <em>dia a dia</em>
        </h2>

        <div className="habilidades-grid">
          {habilidades.map((grupo, indice) => (
            <article key={grupo.grupo} className="habilidade-card">
              {/* padStart deixa o número com 2 dígitos: 1 -> "01" */}
              <span className="habilidade-numero">{String(indice + 1).padStart(2, '0')}</span>
              <h3>{grupo.grupo}</h3>
              <p>{grupo.descricao}</p>

              <ul className="chips">
                {grupo.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Habilidades
