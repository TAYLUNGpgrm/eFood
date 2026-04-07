import { useState } from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'
import estrela from '../../Assets/images/estrela.png'
import fechar from '../../Assets/images/close.png' // Verifique se o nome é close.png ou fechar.png

type Props = {
  id: number
  titulo: string
  nota?: number
  descricao: string
  capa: string
  infos?: string[]
  tipo: 'home' | 'perfil'
}

const Card = ({ titulo, nota, descricao, capa, infos, tipo, id }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

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
              <button>Adicionar ao carrinho</button>
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
