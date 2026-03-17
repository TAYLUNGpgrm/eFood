import styled from 'styled-components'
import { cores } from '../../styles'

export const Listagem = styled.ul`
  margin-top: 80px;
  margin-bottom: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  list-style: none;
  row-gap: 48px;
  border: solid 2.5px ${cores.rosa};
  padding: 0;
  width: 100%;
`
