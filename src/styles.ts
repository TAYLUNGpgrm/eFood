import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFF8F2',
  whiteCard: '#FFFFFF',
  pink: '#E66767',
  pinkLight: '#FFEBD9'
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
    background-color: ${colors.white};
    color: ${colors.pink};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
