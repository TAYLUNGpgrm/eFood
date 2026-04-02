import { Link } from 'react-router-dom'
import { HeaderBar, Links, Logo } from './styles'
import logo from '../../Assets/images/logo.svg'

type Props = {
  tipo: 'home' | 'perfil'
}

const Header = ({ tipo }: Props) => {
  return (
    <HeaderBar tipo={tipo}>
      <div className="container">
        {tipo === 'home' ? (
          <>
            <Logo src={logo} alt="efood" />
            <h1>
              Viva experiências gastronômicas <br /> no conforto da sua casa
            </h1>
          </>
        ) : (
          <Links>
            <Link to="/">Restaurantes</Link>
            <Logo src={logo} alt="efood" />
            <span>0 produto(s) no carrinho</span>
          </Links>
        )}
      </div>
    </HeaderBar>
  )
}

export default Header
