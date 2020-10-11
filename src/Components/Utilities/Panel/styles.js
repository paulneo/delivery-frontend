import styled from "styled-components";

export const Content = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 4px #c9c9c9;
  border-radius: 10px;
  padding:${props => props.padding ? '30px 20px' : '0px'};
  height: 100%;
  box-sizing: border-box;
  width: 100%;
`;
