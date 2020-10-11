import styled from 'styled-components'
import img from '../../../../Images/portada.jpg'

export  const Content  = styled.div`
  height: 122px;
  background-image: ${`url(${img})`};
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 10px 10px 0 0;
  margin-bottom:18px;
`
export  const Title  = styled.div`
  position: absolute;
  font-weight: bold;
  font-size: 30px;
  color: #FFFFFF;
  top: 15px;
  left: 20px;
  z-index: 10;
`
export const Background  = styled.div`
  height: 122px;
  position: absolute;
  width:100%;
  background: rgba(0, 0, 0, 0.46);
  border-radius: 10px 10px 0 0;

`