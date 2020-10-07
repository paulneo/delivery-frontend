import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const InputStyle = styled.input`
  margin-bottom: 10px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #c9c9c9;
  font-size: 16px;
  font-weight: 500;
  padding: 16px 60px 15px 17px;
  display: block;
  color: #606060;
  box-sizing: border-box;
  &::placeholder {
    color: #9b9999;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #08c497;
  }
`;

export const ContentInput = styled.div`
  position: relative;
`
export const Icon = styled(FontAwesomeIcon)`
  font-size: 25px;
  color: #08c497;
  position: absolute;
  right: 15px;
  bottom: 10px;
`;