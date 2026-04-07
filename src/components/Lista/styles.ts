import styled from 'styled-components'
// Importe a tipagem que criamos no index da Lista

type Props = {
  tipo: 'home' | 'perfil'
}

export const Listagem = styled.ul<Props>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.tipo === 'home' ? '1fr 1fr' : '1fr 1fr 1fr'};
  column-gap: ${(props) => (props.tipo === 'home' ? '80px' : '32px')};
  row-gap: ${(props) => (props.tipo === 'home' ? '48px' : '32px')};
  margin-top: 80px;
  margin-bottom: 120px;
`
