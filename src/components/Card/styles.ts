import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
  background-color: ${cores.brancoCard};
  color: ${cores.rosa};
  position: relative;
  border: solid 1px ${cores.rosa};
  border-radius: 1px;

  img {
    border-radius: 1px;
  }
`

export const Infos = styled.div`
  padding: 8px;
  line-height: 22px;

  p {
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 14px;
  }

  button {
    background-color: ${cores.rosa};
    color: ${cores.rosaClaro};
    border: none;
    padding: 4px;
    margin-top: 16px;
    font-weight: bold;
    border-radius: 1px;
    transition: transform 08s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
      border: none;
      border-radius: 2px;
    }
  }
`

export const Nota = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  cursor: pointer;
`

export const Tag = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  padding: 4px 6px;
  font-size: 12px;
  font-weight: bold;
  margin-left: 8px;
  display: inline-block;
  border-radius: 1px;
  border: none;
`
