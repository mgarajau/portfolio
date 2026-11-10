import { tecnologias } from '../data/perfil'
import './FaixaTecnologias.css'

// Faixa azul com as tecnologias passando da direita para a esquerda.
// A lista aparece DUAS vezes seguidas: quando a primeira termina de passar,
// a segunda está exatamente no mesmo lugar, e a animação recomeça sem "pulo".
function FaixaTecnologias() {
  return (
    <div className="faixa">
      <div className="faixa-trilho">
        {[0, 1].map((copia) => (
          // A segunda cópia é só visual: leitores de tela ignoram (aria-hidden)
          <ul key={copia} className="faixa-lista" aria-hidden={copia === 1}>
            {tecnologias.map((tecnologia) => (
              <li key={tecnologia}>{tecnologia}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default FaixaTecnologias
