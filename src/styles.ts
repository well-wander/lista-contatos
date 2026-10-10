import styled, { createGlobalStyle } from 'styled-components'

const cores = {
  amarelo: '#ffe14d',
  amareloEscuro: '#ffc800',
  rosa: '#ff2e93',
  turquesa: '#00d1c7',
  roxo: '#6a2cff',
  preto: '#111'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Trebuchet MS', sans-serif;
  }

  body {
    background-color: ${cores.amarelo};
    background-image: radial-gradient(${cores.amareloEscuro} 20%, transparent 21%);
    background-size: 32px 32px;
    color: ${cores.preto};
  }
`

export const Container = styled.main`
  max-width: 640px;
  margin: 0 auto;
  padding: 32px 16px;

  h1 {
    margin-bottom: 24px;
    font-family: 'Permanent Marker', cursive;
    font-size: 40px;
    line-height: 1.1;
    color: ${cores.rosa};
    text-shadow: 3px 3px 0 ${cores.preto};
    transform: rotate(-2deg);
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
  border: 3px solid ${cores.preto};
  border-radius: 8px;
  font-size: 16px;
`

export const Botao = styled.button`
  padding: 8px 12px;
  border: 3px solid ${cores.preto};
  border-radius: 8px;
  background-color: ${cores.turquesa};
  box-shadow: 3px 3px 0 ${cores.preto};
  color: ${cores.preto};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }
`

export const Lista = styled.ul`
  margin-top: 32px;
  list-style: none;
`

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  padding: 16px;
  border: 3px solid ${cores.preto};
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 6px 6px 0 ${cores.rosa};

  &:nth-child(even) {
    box-shadow: 6px 6px 0 ${cores.roxo};
  }

  strong {
    font-size: 18px;
  }

  p {
    overflow-wrap: anywhere;
  }

  ${Botao} + ${Botao} {
    margin-left: 8px;
  }
`
