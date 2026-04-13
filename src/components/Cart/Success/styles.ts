import styled from 'styled-components'
import { colors } from '../../../styles'

export const CheckoutContainer = styled.div`
  display: block;

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.pinkLight}; // Cor correta aqui
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.pinkLight}; // Cor correta aqui
    margin-bottom: 24px;
  }
`

export const InputGroup = styled.div`
  margin-bottom: 8px;

  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${colors.pinkLight};
    margin-bottom: 8px;
  }

  input {
    background-color: ${colors.pinkLight};
    border: 1px solid ${colors.pinkLight};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    color: #4b4b4b; // Cor do texto que o usuário digita

    &.error {
      border: 2px solid red;
    }
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
`

export const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`
