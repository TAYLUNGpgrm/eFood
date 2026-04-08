import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`

export const CartContainer = styled.aside`
  background-color: ${colors.pink}; // Tema pink
  width: 360px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  padding: 32px 8px;
  z-index: 2;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`

export const CartItem = styled.li`
  background-color: ${colors.pinkLight}; // Tema pinkLight
  display: flex;
  padding: 8px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${colors.pink};
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    color: ${colors.pink};
    font-size: 14px;
  }

  button {
    background-image: url('caminho/para/seu/icone/lixeira.png'); // Adicione seu ícone de lixeira
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.white}; // Tema white
  margin: 40px 0 16px;
  font-weight: 700;
`

export const ButtonCheckout = styled.button`
  background-color: ${colors.pinkLight};
  color: ${colors.pink};
  border: none;
  padding: 4px;
  width: 100%;
  font-weight: 700;
  cursor: pointer;
`
