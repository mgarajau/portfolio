import { useState } from 'react'
import { perfil } from '../data/perfil'
import './Header.css'

// Itens do menu. Cada "href" aponta para o id de uma seção da página (ex.: #sobre).
const itensMenu = [
  { texto: 'Sobre', href: '#sobre' },
  { texto: 'Projetos', href: '#projetos' },
  { texto: 'Contato', href: '#contato' },
]

function Header() {
  // Estado que controla se o menu do celular está aberto ou fechado.
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="header">
      <div className="container header-conteudo">
        <a href="#inicio" className="header-logo">
          {perfil.nome}
        </a>

        {/* Botão "hambúrguer": só aparece no celular (controlado pelo CSS) */}
        <button
          type="button"
          className="header-botao-menu"
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
        </nav>
      </div>
    </header>
  )
}

export default Header
