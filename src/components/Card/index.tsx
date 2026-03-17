import { CardContainer, Infos, Nota } from './styles'
import estrela from '../../Assets/images/estrela.svg'
import { Tag } from './styles'
import { Tags } from './styles'

type Props = {
  titulo: string
  nota: string
  descricao: string
  capa: string
  infos: string[]
}

const Card = ({ titulo, nota, descricao, capa, infos }: Props) => (
  <CardContainer>
    <img src={capa} alt="hioki_sushi" />
    <Tags>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Tags>
    <Infos>
      <Nota>
        <h3>{titulo}</h3>
        <span>
          {nota}
          <img src={estrela} alt="estrela" />
        </span>
      </Nota>
      <p>{descricao}</p>
      <button>Saiba mais</button>
    </Infos>
  </CardContainer>
)

export default Card
