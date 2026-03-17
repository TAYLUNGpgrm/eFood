import { styled } from 'styled-components'
import { cores } from '../../styles'
import fundoHeader from '../../Assets/images/Vector.svg'

export const HeaderBar = styled.div`
  background-image: url(${fundoHeader});
  background-size: cover;
  background-repeat: no-repeat;

  background-color: ${cores.rosaClaro};
  padding: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;

  h1 {
    margin-top: 140px;
    max-width: 540px;
    width: 100%;
    font-weight: bold;
    font-size: 36px;
  }
`
