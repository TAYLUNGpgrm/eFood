import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterStyles = styled.footer`
  background-color: ${colors.pinkLight};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 125px;
    margin-bottom: 32px;
  }

  p {
    color: ${colors.pink};
    font-size: 10px;
    text-align: center;
    max-width: 480px;
    width: 100%;
    line-height: 12px;
    margin-top: 0;
  }
`

export const Logos = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`
