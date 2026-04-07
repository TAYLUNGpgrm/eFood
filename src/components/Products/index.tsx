import { CardContainer, Button } from './styles'

type Props = {
  foto: string
  nome: string
  descricao: string
}

const Product = ({ foto, nome, descricao }: Props) => (
  <CardContainer>
    <img src={foto} alt={nome} />
    <h3>{nome}</h3>
    <p>{descricao}</p>
    <Button>Adicionar ao carrinho</Button>
  </CardContainer>
)

export default Product
