import styled from 'styled-components'
import img from '../../../../Images/portada.jpg'

export const Content = styled.div`
//   padding:15px;
//   background-image: ${`url(${img})`};
//   background-size: contain;
//   background-repeat: no-repeat;
  box-shadow: 0px 2px 4px #E1E1E1;
  border-radius: 10px;
  margin-bottom:15px;
//   display: flex;
//   align-items: flex-end;
//   justify-content: stretch;
//   height: 300px;
`
export const Title = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #3E3E3E;
  width:100%;
`
export const ContentTitle = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`
export const Action = styled.div`
  display:flex;
  align-items:center;
  justify-content: flex-end;
  width:100%;
`
export const Button = styled.div`
  border-radius:40px;
  background: #08C497;
  font-weight: 500;
  font-size: 10px;
  color: #FFFFFF;
  padding:8px;
  cursor: pointer;
`
export const Restaurant = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height: 40px;
    padding: 0 15px;
`;

export const Img = styled.div`
background-image: ${`url(${img})`};
height: 200px;
background-size: cover;
background-position: center;
position: relative;
border-radius: 10px 10px 0 0;
`;