import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, type Contato as ContatoType } from '../store/contatos'
import { Botao, Item } from '../styles'
import Formulario from './Formulario'

const Contato = ({ contato }: { contato: ContatoType }) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)

  if (editando) {
    return (
      <Item>
        <Formulario contato={contato} aoConcluir={() => setEditando(false)} />
      </Item>
    )
  }

  return (
    <Item>
      <div>
        <strong>{contato.nome}</strong>
        <p>{contato.email}</p>
        <p>{contato.telefone}</p>
      </div>
      <div>
        <Botao onClick={() => setEditando(true)}>Editar</Botao>
        <Botao onClick={() => dispatch(remover(contato.id))}>Remover</Botao>
      </div>
    </Item>
  )
}

export default Contato
