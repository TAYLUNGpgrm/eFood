import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { Prato } from '../../services/api'

import Button from '../Button' // Importando o novo componente centralizado
import * as S from './styles'
import estrela from '../../Assets/images/estrela.png'
import fechar from '../../Assets/images/close.png'

type Props = {
  id: number
  titulo: string
  nota?: number
  descricao: string
  capa: string
  infos?: string[]
  tipo: 'home' | 'perfil'
  preco?: number
  porcao?: string
}

const Card = ({
  titulo,
  nota,
  descricao,
  capa,
  infos,
  tipo,
  id,
  preco,
  porcao
}: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    const prato: Prato = {
      id,
      nome: titulo,
      descricao,
      foto: capa,
      preco: preco ?? 0,
      porcao: porcao ?? ''
    }

    dispatch(add(prato))
    dispatch(open())
    setModalEstaAberto(false)
  }

  return (
    <>
      <S.CardContainer tipo={tipo}>
        <img src={capa} alt={titulo} />

        {tipo === 'home' && infos && (
          <S.Tags>
            {infos.map((info) => (
              <S.Tag key={info}>{info}</S.Tag>
            ))}
          </S.Tags>
        )}

        <S.Infos tipo={tipo}>
          <S.Nota tipo={tipo}>
            <h3>{titulo}</h3>
            {tipo === 'home' && (
              <span>
                {nota}
                <img src={estrela} alt="estrela" />
              </span>
            )}
          </S.Nota>
          <p>{descricao}</p>

          {tipo === 'home' ? (
            <Button
              type="link"
              to={`/perfil/${id}`}
              title={`Clique para saber mais sobre ${titulo}`}
            >
              Saiba mais
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => setModalEstaAberto(true)}
              title={`Clique para ver detalhes de ${titulo}`}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </S.CardContainer>

      <S.Modal className={modalEstaAberto ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <header>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => setModalEstaAberto(false)}
            />
          </header>
          <div>
            <img src={capa} alt={titulo} />
            <aside>
              <h4>{titulo}</h4>
              <p>{descricao}</p>
              {porcao && <p>Serve: {porcao}</p>}

              <Button
                type="button"
                variant="secondary"
                onClick={handleAddToCart}
                title="Clique para adicionar este prato ao seu carrinho"
              >
                Adicionar ao carrinho - R$ {preco?.toFixed(2).replace('.', ',')}
              </Button>
            </aside>
          </div>
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </S.Modal>
    </>
  )
}

export default Card
