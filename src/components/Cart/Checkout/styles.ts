import styled from 'styled-components'
import { colors } from '../../../styles'

export const CheckoutContainer = styled.div`
  color: ${colors.pinkLight};

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`

export const InputGroup = styled.div`
  margin-bottom: 8px;

  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  input {
    background-color: ${colors.pinkLight};
    border: 1px solid ${colors.pinkLight};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    font-weight: 700;
    color: #4b4b4b;

    &.error {
      border: 2px solid red;
    }
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;

  ${InputGroup} {
    width: 100%;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`
