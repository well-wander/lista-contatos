import { useState, type FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { adicionar, editar, type Contato } from '../store/contatos'
import { Botao, Campo, Form } from '../styles'

type Props = {
  contato?: Contato
  aoConcluir?: () => void
}

// Formata como (11) 91234-5678 ou (11) 1234-5678 enquanto a pessoa digita
const mascararTelefone = (valor: string) =>
  valor
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4,5})(\d{4})$/, '$1-$2')

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
        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        title="Informe um e-mail válido, como nome@exemplo.com"
        required
      />
      <Campo
        type="tel"
        value={telefone}
        onChange={(e) => setTelefone(mascararTelefone(e.target.value))}
        placeholder="Telefone"
        aria-label="Telefone"
        pattern="\(\d{2}\) \d{4,5}-\d{4}"
        title="Informe o DDD e o número, como (11) 91234-5678"
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
