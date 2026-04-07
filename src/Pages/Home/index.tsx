import Header from '../../components/Header'
import Lista from '../../components/Lista'
import { Container } from '../../styles'
import Footer from '../../components/Footer'
import { useGetRestaurantesQuery } from '../../services/api' // Importe o hook

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  if (isLoading) return <h3>Carregando...</h3>

  return (
    <>
      <Header tipo="home" />
      <Container>
        {/* Agora passamos os dados que vieram da API para a Lista */}
        <Lista tipo="home" restaurantes={restaurantes || []} />
      </Container>
      <Footer />
    </>
  )
}

export default Home
