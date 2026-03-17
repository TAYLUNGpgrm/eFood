import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#FFF8F2',
  brancoCard: '#FFFFFF',
  rosa: '#E66767',
  rosaClaro: '#FFEBD9'
}

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  text-decoration: none;
}

  body{
    background-color: ${cores.branco};
    color: ${cores.rosa};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
