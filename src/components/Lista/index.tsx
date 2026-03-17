import Card from '../Card'
import restaurantes from '../../containers/Lista/dados'
import { Listagem } from './styles'

const Lista = () => (
  <Listagem>
    {restaurantes.map((item) => (
      <li key={item.id}>
        <Card
          titulo={item.titulo}
          nota={item.nota}
          descricao={item.descricao}
          capa={item.capa}
          infos={item.infos}
        />
      </li>
    ))}
  </Listagem>
)

export default Lista
