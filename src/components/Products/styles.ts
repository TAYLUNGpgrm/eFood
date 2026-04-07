import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  background-color: ${colors.pink};
  color: ${colors.pinkLight};
  padding: 8px;

  img{
    width: 100%
    height: 168px;
    object-fit: cover;
}

h3 {
  font-size: 16px;
  font-weght: bold 900;
  margin: 8px 0;
}

p {
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
}
`

export const Button = styled.button`
  background-color: ${colors.pinkLight};
  color: ${colors.pink};
  border: none;
  padding: 4px;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
`
