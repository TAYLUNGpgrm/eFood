import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import { HeaderBar, Links, Logo } from './styles'
import logo from '../../Assets/images/logo.svg'

type Props = {
  tipo: 'home' | 'perfil'
}

const Header = ({ tipo }: Props) => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const handleOpenCart = () => {
    dispatch(open())
  }

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
            {/* Agora o span é dinâmico e clicável */}
            <span onClick={handleOpenCart}>
              {items.length} produto(s) no carrinho
            </span>
          </Links>
        )}
      </div>
    </HeaderBar>
  )
}

export default Header
