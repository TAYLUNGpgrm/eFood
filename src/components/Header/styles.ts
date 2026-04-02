import styled from 'styled-components'
import { cores } from '../../styles'
import fundoHeader from '../../Assets/images/Vector.svg'

type Props = {
  tipo: 'home' | 'perfil'
}

export const HeaderBar = styled.header<Props>`
  background-image: url(${fundoHeader});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${cores.rosaClaro};
  padding: ${(props) => (props.tipo === 'home' ? '40px' : '40px 0')};

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    display: ${(props) => (props.tipo === 'home' ? 'block' : 'none')};
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: ${cores.rosa};
    margin-top: 140px;
    max-width: 540px;
  }
`

export const Logo = styled.img`
  width: 125px;
`

export const Links = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  a,
  span {
    color: ${cores.rosa};
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }
`
