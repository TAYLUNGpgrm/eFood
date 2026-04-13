import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.pink};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ul {
    list-style: none;
  }
`

export const Prices = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${colors.pinkLight};
  margin-bottom: 16px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.pinkLight};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${colors.pink};
    font-weight: 900;
    font-size: 18px;
  }

  span {
    display: block;
    color: ${colors.pink};
    font-weight: 400;
    font-size: 14px;
    margin-top: 16px;
  }

  button {
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-image: url('../../assets/images/lixeira.png'); // Verifique este caminho
  }
`

// Novos containers para Checkout e Payment
export const CheckoutContainer = styled.div`
  display: block;

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.pinkLight};
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.pinkLight};
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
    color: #4b4b4b;

    &.error {
      border: 2px solid red;
    }
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
`
