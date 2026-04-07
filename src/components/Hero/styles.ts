import styled from 'styled-components'
import { colors } from '../../styles'

export const Banner = styled.div<{ $capa: string }>`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.$capa});
  position: relative;
  color: ${colors.white};

  &::after {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 32px 0;
  }
`

export const Tipo = styled.p`
  font-size: 32px;
  font-weight: 100;
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 900;
`
