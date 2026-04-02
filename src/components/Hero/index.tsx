import { HeroContainer, Categoria, NomeRestaurante } from './styles'

const Hero = () => (
  <HeroContainer>
    <div className="container">
      <Categoria>Italiana</Categoria>
      <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
    </div>
  </HeroContainer>
)

export default Hero
