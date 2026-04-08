import styled from 'styled-components'
import { colors } from '../../styles' // Usando o nome correto agora

type Props = {
  tipo: 'home' | 'perfil'
}

export const CardContainer = styled.div<Props>`
  background-color: ${(props) =>
    props.tipo === 'home' ? colors.whiteCard : colors.pink};
  color: ${(props) => (props.tipo === 'home' ? colors.pink : colors.pinkLight)};
  position: relative;
  width: 100%;
  border: 2px solid ${colors.pink};
  border-radius: 2px;

  > img {
    display: block;
    width: 100%;
    height: 248px;
    object-fit: cover;
    padding: ${(props) => (props.tipo === 'perfil' ? '8px' : '0')};
  }
`

export const Infos = styled.div<Props>`
  padding: 8px;
  line-height: 22px;

  p {
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 14px;
    display: block;
  }

  button,
  a {
    display: inline-block;
    border-radius: 2px;
    background-color: ${(props) =>
      props.tipo === 'home' ? colors.pink : colors.pinkLight};
    color: ${(props) =>
      props.tipo === 'home' ? colors.pinkLight : colors.pink};
    border: none;
    padding: 4px 6px;
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
    width: ${(props) => (props.tipo === 'home' ? 'auto' : '100%')};
    cursor: pointer;
  }
`

export const Nota = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  span {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 18px;

    img {
      margin-left: 8px;
    }
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`

export const Tag = styled.div`
  background-color: ${colors.pink};
  color: ${colors.pinkLight};
  padding: 4px 6px;
  font-size: 12px;
  font-weight: bold;
  margin-left: 8px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;
  position: relative;
  z-index: 1;
  background-color: ${colors.pink};
  color: ${colors.white};
  padding: 32px;

  header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 8px;

    img {
      cursor: pointer;
      width: 16px;
      height: 16px;
    }
  }

  div {
    display: flex;
    gap: 24px;

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }

    aside {
      h4 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
      }

      p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;
      }

      button {
        background-color: ${colors.pinkLight};
        color: ${colors.pink};
        border: none;
        padding: 4px 8px;
        font-weight: bold;
        cursor: pointer;
        width: auto;
      }
    }
  }
`
