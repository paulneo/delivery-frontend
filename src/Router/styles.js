import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = styled.div`
  background: #ea3546;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 60px;
  position: relative;
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: #fff;
  margin: 0px 25px;
  cursor: pointer;
`;

export const Profile = styled.div`
  position: relative;
`
export const Links = styled.div`
  display: ${(props) => (props.active ? "flex" : "none ")} !important;
  position: absolute;
  width: 200px;
  background: #e93546;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  right: 50px;
  top: 90px;
  padding: 10px;
  & a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    margin: 5px;
  }
`;

export const Logo = styled.div`
  width:100px;
`
export const Margin = styled.div`
  margin:50px;
`