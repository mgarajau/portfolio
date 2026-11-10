import { useState } from 'react'
import { perfil } from '../data/perfil'
import './Header.css'

const itensMenu = [
  { texto: 'Sobre', href: '#sobre' },
  { texto: 'Habilidades', href: '#habilidades' },
  { texto: 'Projetos', href: '#projetos' },
]

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  // Iniciais do nome para o "selo" do logo: "Matheus Garajau" -> "MG"
  const iniciais = perfil.nome
    .split(' ')
    .map((parte) => parte[0])
    .join('')

  return (
    <header className="header">
      <div className="container header-conteudo">
        <a href="#inicio" className="header-logo">
          <span className="header-logo-selo" aria-hidden="true">
            {iniciais}
          </span>
          {perfil.nome}
        </a>

        {/* Botão "hambúrguer": só aparece no celular (controlado pelo CSS) */}
        <button
          type="button"
          className={`header-botao-menu ${menuAberto ? 'aberto' : ''}`}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Quando menuAberto é true, a classe "aberto" é adicionada e o menu aparece */}
        <nav
          id="menu-principal"
          className={`header-nav ${menuAberto ? 'aberto' : ''}`}
          aria-label="Menu principal"
        >
          {itensMenu.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuAberto(false)}>
              {item.texto}
            </a>
          ))}

          {/* "Contato" ganha destaque de botão */}
          <a href="#contato" className="header-cta" onClick={() => setMenuAberto(false)}>
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
