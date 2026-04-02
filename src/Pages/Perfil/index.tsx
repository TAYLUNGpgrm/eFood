import Header from '../../components/Header'
import Lista from '../../components/Lista'
import { Container } from '../../styles'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'

const Perfil = () => (
  <>
    <Header tipo="perfil" />
    <Hero />
    <Container>
      <Lista />
    </Container>
    <Footer />
  </>
)

export default Perfil
