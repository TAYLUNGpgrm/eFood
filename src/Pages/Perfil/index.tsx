import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Lista from '../../containers/Lista'
import Footer from '../../components/Footer'
import { Container } from '../../styles'
import { useGetRestauranteQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante, isLoading } = useGetRestauranteQuery(id || '')

  if (isLoading || !restaurante) return <h3>Carregando...</h3>

  return (
    <>
      <Header tipo="perfil" />
      <Hero restaurante={restaurante} />
      <Container>
        <Lista tipo="perfil" pratos={restaurante.cardapio} />
      </Container>
      <Footer />
    </>
  )
}

export default Perfil
