import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Contato = {
  id: number
  nome: string
  email: string
  telefone: string
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [] as Contato[],
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ultimoId = state.at(-1)?.id ?? 0
      state.push({ id: ultimoId + 1, ...action.payload })
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indice = state.findIndex((c) => c.id === action.payload.id)
      if (indice >= 0) state[indice] = action.payload
    },
    remover: (state, action: PayloadAction<number>) =>
      state.filter((c) => c.id !== action.payload)
  }
})

export const { adicionar, editar, remover } = contatosSlice.actions
export default contatosSlice.reducer
