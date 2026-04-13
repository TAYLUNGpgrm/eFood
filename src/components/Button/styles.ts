import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.pink};
  color: ${colors.pinkLight};
  border: none;
  padding: 4px 6px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
  width: 100%;
  text-decoration: none;
  text-align: center;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.pink};
  color: ${colors.pinkLight};
  border: none;
  padding: 4px 6px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  text-align: center;
`

// Estilo para botões dentro da sidebar (fundo claro)
export const ButtonSidebar = styled(ButtonContainer)`
  background-color: ${colors.pinkLight};
  color: ${colors.pink};
`
