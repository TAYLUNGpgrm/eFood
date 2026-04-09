import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import Button from '../Button'
import Checkout from './Checkout'
import Payment from './Payment'
import Success from './Success'
import * as S from './styles'

type CartStage = 'cart' | 'delivery' | 'payment' | 'success'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [currentStage, setCurrentStage] = useState<CartStage>('cart')
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acumulador, item) => {
      return (acumulador += item.preco)
    }, 0)
  }

  const closeCart = () => {
    dispatch(close())
    setCurrentStage('cart')
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const finishOrder = () => {
    dispatch(clear()) // Limpa o carrinho no Redux
    setCurrentStage('cart')
    dispatch(close())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {currentStage === 'cart' && (
          <>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <S.CartItem>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{parseToBrl(item.preco)}</span>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      type="button"
                      title="Clique para remover este item"
                    />
                  </S.CartItem>
                </li>
              ))}
            </ul>
            <S.Prices>
              Valor total <span>{parseToBrl(getTotalPrice())}</span>
            </S.Prices>
            <Button
              type="button"
              variant="secondary"
              title="Clique para continuar com a entrega"
              onClick={() => setCurrentStage('delivery')}
            >
              Continuar com a entrega
            </Button>
          </>
        )}

        {currentStage === 'delivery' && (
          <Checkout
            onBack={() => setCurrentStage('cart')}
            onConfirm={() => setCurrentStage('payment')}
          />
        )}

        {currentStage === 'payment' && (
          <Payment
            onBack={() => setCurrentStage('delivery')}
            onConfirm={() => setCurrentStage('success')}
          />
        )}

        {currentStage === 'success' && <Success onFinished={finishOrder} />}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
