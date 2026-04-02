import styled from 'styled-components'
import Macarron from '../../Assets/images/heroMacarron.png'

export const HeroContainer = styled.div`
  display: block;
  height: 280px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${Macarron});
  position: relative;
  padding: 32px 0;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
`

export const Categoria = styled.p`
  font-weight: 100;
  font-size: 32px;
  color: #ffffff;
`

export const NomeRestaurante = styled.h2`
  font-weight: 900;
  font-size: 32px;
  color: #ffffff;
`
