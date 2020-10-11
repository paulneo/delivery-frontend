import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Close = styled(FontAwesomeIcon)`
  font-size:14px;
  cursor: pointer;
  position: absolute;
  top: 10%;
  right: 3%;
  font-size: 18px;
`

export  const Content  = styled.div`
  display: ${props => props.active ? 'block' : 'none' };
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.28);
  z-index: 1000;
`
export const Panel = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 4px #c9c9c9;
  border-radius: 10px;
  padding:30px 20px;
  height: 100%;
  box-sizing: border-box;
  width: ${ props => props.width};
  height:auto;
  position: relative;
`;


export const Title  = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: #3E3E3E;
  text-align:center;
  width:100%;
  position: relative;
`
