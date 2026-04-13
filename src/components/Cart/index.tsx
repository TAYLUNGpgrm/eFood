import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import Button from '../Button'
import Checkout, { CheckoutValues } from './Checkout'
import Payment from './Payment'
import Success from './Success'
import * as S from './styles'

// 1. Definindo a interface para os itens do carrinho
interface CartItem {
  id: number
  nome: string
  preco: number
  foto: string
}

type CartStage = 'cart' | 'delivery' | 'payment' | 'success'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [currentStage, setCurrentStage] = useState<CartStage>('cart')
  const [deliveryData, setDeliveryData] = useState<CheckoutValues>()
  const [orderId, setOrderId] = useState('')
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    // 2. Substituído 'any' pela interface 'CartItem'
    return items.reduce((acc: number, item: CartItem) => {
      return (acc += item.preco)
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
    dispatch(clear())
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
              {/* 3. Substituído 'any' por 'CartItem' para evitar o erro do linter */}
              {items.map((item: CartItem) => (
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
            {items.length > 0 && (
              <Button
                type="button"
                variant="secondary"
                title="Clique para continuar com a entrega"
                onClick={() => setCurrentStage('delivery')}
              >
                Continuar com a entrega
              </Button>
            )}
          </>
        )}

        {currentStage === 'delivery' && (
          <Checkout
            onBack={() => setCurrentStage('cart')}
            onConfirm={(values) => {
              setDeliveryData(values)
              setCurrentStage('payment')
            }}
          />
        )}

        {currentStage === 'payment' && deliveryData && (
          <Payment
            deliveryData={deliveryData}
            onBack={() => setCurrentStage('delivery')}
            onConfirm={(id) => {
              setOrderId(id)
              setCurrentStage('success')
            }}
          />
        )}

        {currentStage === 'success' && (
          <Success orderId={orderId} onFinished={finishOrder} />
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
