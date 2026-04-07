import { Restaurante } from '../../services/api'
import { Banner, Tipo, Titulo } from './styles'
import { Container } from '../../styles'

type Props = {
  restaurante: Restaurante
}

const Hero = ({ restaurante }: Props) => (
  <Banner $capa={restaurante.capa}>
    <Container className="container">
      <Tipo>{restaurante.tipo}</Tipo>
      <Titulo>{restaurante.titulo}</Titulo>
    </Container>
  </Banner>
)

export default Hero
