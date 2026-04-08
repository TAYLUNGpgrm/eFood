import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux' // Adicionamos apenas o necessário

import { add, open } from '../../store/reducers/cart' // Importamos as ações
import { Prato } from '../../services/api' // Importamos a interface

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
  preco?: number // Mantemos para o Redux saber o valor
  porcao?: string // Mantemos para o Redux saber a porção
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
  const dispatch = useDispatch() // Hook para disparar ações

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
            <Link to={`/perfil/${id}`}>Saiba mais</Link>
          ) : (
            <button onClick={() => setModalEstaAberto(true)}>
              Adicionar ao carrinho
            </button>
          )}
        </S.Infos>
      </S.CardContainer>

      {/* Seu Modal original, apenas conectando o botão final */}
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

              {/* Agora este botão dispara a função que integra com o Redux */}
              <button onClick={handleAddToCart}>
                Adicionar ao carrinho - R$ {preco?.toFixed(2).replace('.', ',')}
              </button>
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
