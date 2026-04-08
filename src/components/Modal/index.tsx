import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Prato } from '../../services/api' // Importando a interface global que você criou

import close from '../../Assets/images/close.png'
import * as S from './styles'

type Props = {
  item: Prato | null // O modal exibe um Prato
  isVisible: boolean
  onClose: () => void
}

const Modal = ({ item, isVisible, onClose }: Props) => {
  const dispatch = useDispatch()

  if (!isVisible || !item) return null

  const addToCart = () => {
    dispatch(add(item)) // Adiciona o prato ao Redux
    dispatch(open()) // Abre o carrinho automaticamente para o usuário ver
    onClose() // Fecha o modal
  }

  return (
    <S.ModalContainer>
      <S.Overlay onClick={onClose} />
      <S.ModalContent className="container">
        <S.CloseIcon src={close} onClick={onClose} alt="Fechar" />
        <header>
          <img src={item.foto} alt={item.nome} />
        </header>
        <div>
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
          <p>Serve: de {item.porcao}</p>
          {/* Botão formatado com o preço do prato */}
          <button onClick={addToCart}>
            Adicionar ao carrinho - R$ {item.preco.toFixed(2).replace('.', ',')}
          </button>
        </div>
      </S.ModalContent>
    </S.ModalContainer>
  )
}

export default Modal
