import { useState, type FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { adicionar, editar, type Contato } from '../store/contatos'
import { Botao, Campo, Form } from '../styles'

type Props = {
  contato?: Contato
  aoConcluir?: () => void
}

// Sem `contato` adiciona um novo; com `contato` edita o existente
const Formulario = ({ contato, aoConcluir }: Props) => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState(contato?.nome ?? '')
  const [email, setEmail] = useState(contato?.email ?? '')
  const [telefone, setTelefone] = useState(contato?.telefone ?? '')

  const salvar = (evento: FormEvent) => {
    evento.preventDefault()

    if (contato) {
      dispatch(editar({ id: contato.id, nome, email, telefone }))
    } else {
      dispatch(adicionar({ nome, email, telefone }))
      setNome('')
      setEmail('')
      setTelefone('')
    }

    aoConcluir?.()
  }

  return (
    <Form onSubmit={salvar}>
      <Campo
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome completo"
        aria-label="Nome completo"
        required
      />
      <Campo
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
        aria-label="E-mail"
        required
      />
      <Campo
        type="tel"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        placeholder="Telefone"
        aria-label="Telefone"
        required
      />
      <Botao type="submit">{contato ? 'Salvar' : 'Adicionar'}</Botao>
      {contato && (
        <Botao type="button" onClick={aoConcluir}>
          Cancelar
        </Botao>
      )}
    </Form>
  )
}

export default Formulario
