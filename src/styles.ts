import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background-color: #f2f2f2;
    color: #222;
  }
`

export const Container = styled.main`
  max-width: 640px;
  margin: 0 auto;
  padding: 32px 16px;

  h1 {
    margin-bottom: 24px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
`

export const Campo = styled.input`
  flex: 1 1 100%;
  padding: 8px;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 16px;
`

export const Botao = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #1e5fbf;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
`

export const Lista = styled.ul`
  margin-top: 24px;
  list-style: none;
`

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
  padding: 16px;
  border-radius: 4px;
  background-color: #fff;

  p {
    overflow-wrap: anywhere;
  }

  ${Botao} + ${Botao} {
    margin-left: 8px;
  }
`
