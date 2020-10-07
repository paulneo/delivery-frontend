import styled from "styled-components";

export const InputStyle = styled.input`
  margin-bottom: 10px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #c9c9c9;
  font-size: 16px;
  padding: 15px 17px;
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
