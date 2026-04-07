import close from '../../Assets/images/close.png'
import * as S from './styles'

// Definimos a interface aqui dentro para não depender de imports externos e evitar erros
interface Restaurante {
  id: number
  titulo: string
  nota: string
  descricao: string
  capa: string
  infos: string[]
}

type Props = {
  item: Restaurante | null
  isVisible: boolean
  onClose: () => void
}

const Modal = ({ item, isVisible, onClose }: Props) => {
  if (!isVisible || !item) return null

  return (
    <S.ModalContainer>
      <S.Overlay onClick={onClose} />
      <S.ModalContent className="container">
        <S.CloseIcon src={close} onClick={onClose} alt="Fechar" />
        <img src={item.capa} alt={item.titulo} />
        <div>
          <h3>{item.titulo}</h3>
          <p>{item.descricao}</p>
          <button>Adicionar ao carrinho</button>
        </div>
      </S.ModalContent>
    </S.ModalContainer>
  )
}

export default Modal
