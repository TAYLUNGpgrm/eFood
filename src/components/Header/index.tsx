import logo from '../../Assets/images/logo.svg'
import { HeaderBar } from './styles'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="logo" />
    <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
  </HeaderBar>
)

export default Header
