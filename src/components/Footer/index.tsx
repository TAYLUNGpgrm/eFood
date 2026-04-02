import { FooterStyles, Logos } from './styles'
import logo from '../../Assets/images/logo.svg'
import insta from '../../Assets/images/insta.svg'
import face from '../../Assets/images/face.svg'
import twitter from '../../Assets/images/twitter.svg'

const Footer = () => (
  <FooterStyles>
    <img src={logo} alt="logo" />
    <Logos>
      <img src={insta} alt="insta" />
      <img src={twitter} alt="face" />
      <img src={face} alt="twitter" />
    </Logos>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </FooterStyles>
)

export default Footer
