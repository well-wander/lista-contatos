import { useSelector } from 'react-redux'
import Contato from './components/Contato'
import Formulario from './components/Formulario'
import type { RootState } from './store'
import { Container, EstiloGlobal, Lista } from './styles'

function App() {
  const contatos = useSelector((state: RootState) => state.contatos)

  return (
    <Container>
      <EstiloGlobal />
      <h1>Lista de contatos</h1>
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
