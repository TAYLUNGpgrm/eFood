import ListaComponent from '../../components/Lista' // Importa o visual
import { Restaurante, Prato } from '../../services/api'

type Props = {
  tipo: 'home' | 'perfil'
  restaurantes?: Restaurante[]
  pratos?: Prato[] // Adicione esta linha para o container aceitar pratos
}

const Lista = ({ tipo, restaurantes, pratos }: Props) => {
  // Repassa o que receber para o componente de components/Lista
  return (
    <ListaComponent tipo={tipo} restaurantes={restaurantes} pratos={pratos} />
  )
}

export default Lista
