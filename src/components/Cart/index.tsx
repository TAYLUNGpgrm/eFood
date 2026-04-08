import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { Prato } from '../../services/api' // Importando a interface para tipar o map
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  // Cálculo do valor total com proteção para valores nulos
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco ?? 0)
    }, 0)
  }

  if (!isOpen) return null

  return (
    <S.Overlay onClick={() => dispatch(close())}>
      <S.CartContainer onClick={(e) => e.stopPropagation()}>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item: Prato) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    {/* Proteção contra o erro de toFixed em valores indefinidos */}
                    <span>
                      R$ {(item.preco ?? 0).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  {/* Adicionado title para acessibilidade e tipo button */}
                  <button
                    type="button"
                    title="Remover item do carrinho"
                    onClick={() => dispatch(remove(item.id))}
                  />
                </S.CartItem>
              ))}
            </ul>

            <S.PriceContainer>
              <p>Valor total</p>
              <span>R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
            </S.PriceContainer>

            <S.ButtonCheckout>Continuar com a entrega</S.ButtonCheckout>
          </>
        ) : (
          <p style={{ color: '#FFF8F2', textAlign: 'center' }}>
            O carrinho está vazio.
          </p>
        )}
      </S.CartContainer>
    </S.Overlay>
  )
}

export default Cart
