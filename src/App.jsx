import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Rodape from './components/Rodape'

// O App monta a página juntando os componentes, na ordem em que aparecem.
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Contato />
      </main>
      <Rodape />
    </>
  )
}

export default App
