import { useSelector } from 'react-redux'
import Contato from './components/Contato'
import Formulario from './components/Formulario'
import type { RootState } from './store'
import { Container, EstiloGlobal, Lista, Subtitulo } from './styles'

function App() {
  const contatos = useSelector((state: RootState) => state.contatos)

  return (
    <Container>
      <EstiloGlobal />
      <h1>Lista de contatos das garotas</h1>
      <Subtitulo>Direto de Bel-Air, sem o tio Phil saber.</Subtitulo>
      <Formulario />
      <Lista>
        {contatos.map((contato) => (
          <Contato key={contato.id} contato={contato} />
        ))}
      </Lista>
    </Container>
  )
}

export default App
