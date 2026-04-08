import Card from '../Card'
import { Listagem } from './styles'
import { Restaurante, Prato } from '../../services/api' // Importando as interfaces reais

type Props = {
  tipo: 'home' | 'perfil'
  restaurantes?: Restaurante[]
  pratos?: Prato[] // Agora o TS sabe que essa prop existe!
}

const Lista = ({ tipo, restaurantes, pratos }: Props) => {
  const dadosParaExibir = tipo === 'perfil' ? pratos : restaurantes
  const listaFinal = dadosParaExibir || []

  return (
    <Listagem tipo={tipo}>
      {listaFinal.map((item) => (
        <li key={item.id}>
          <Card
            id={item.id}
            tipo={tipo}
            titulo={'titulo' in item ? item.titulo : (item as Prato).nome}
            capa={'capa' in item ? item.capa : (item as Prato).foto}
            descricao={item.descricao}
            nota={'avaliacao' in item ? item.avaliacao : undefined}
            // --- ADICIONE AS LINHAS ABAIXO ---
            // Se for um Prato, passamos o preço e a porção, senão undefined
            preco={'preco' in item ? item.preco : undefined}
            porcao={'porcao' in item ? item.porcao : undefined}
            // --------------------------------
          />
        </li>
      ))}
    </Listagem>
  )

  return (
    <Listagem tipo={tipo}>
      {listaFinal.map((item) => (
        <li key={item.id}>
          <Card
            id={item.id}
            tipo={tipo}
            // O segredo do Sênior: usar o operador 'in' para checar qual campo usar
            titulo={'titulo' in item ? item.titulo : (item as Prato).nome}
            capa={'capa' in item ? item.capa : (item as Prato).foto}
            descricao={item.descricao}
            nota={'avaliacao' in item ? item.avaliacao : undefined}
          />
        </li>
      ))}
    </Listagem>
  )
}

export default Lista
