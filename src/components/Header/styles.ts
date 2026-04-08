import styled from 'styled-components'
import { colors } from '../../styles'
import fundoHeader from '../../Assets/images/Vector.svg'

type Props = {
  tipo: 'home' | 'perfil'
}

export const HeaderBar = styled.header<Props>`
  background-image: url(${fundoHeader});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${colors.pinkLight};
  border-bottom: 2px dotted ${colors.pink};

  /* Mantemos o topo com 40px e zeramos o bottom para controle total pelo H1 */
  padding: ${(props) => (props.tipo === 'home' ? '40px 0 0' : '64px 0')};
  width: 100%;

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: ${(props) => (props.tipo === 'home' ? 'column' : 'row')};
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  h1 {
    display: ${(props) => (props.tipo === 'home' ? 'block' : 'none')};
    font-family: 'Roboto', sans-serif;

    /* Aqui está o toque 'gótico'/pesado: */
    font-weight: 900;
    font-size: 36px;
    line-height: 100%; /* Ajustado conforme o Figma indica */

    text-align: center;
    color: ${colors.pink};
    margin-top: 210px; /* Seu valor que deu certo! */
    margin-bottom: 40px;
    max-width: 539px; /* Valor exato do Figma */
  }
`

export const Logo = styled.img`
  width: 125px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
`

export const Links = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  width: 100%;

  a,
  span {
    color: ${colors.pink};
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }
`
