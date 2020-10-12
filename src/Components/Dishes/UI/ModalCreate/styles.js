import styled from "styled-components";

export const Title = styled.p`
  margin-bottom: 20px;
  color: #606060;
  font-size:20px;
  font-weight:bold;
`;
export const Form = styled.div`
  margin-bottom: 40px;
  margin: 20px;
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
`;
export const AddMore = styled.div`
  height: 34px;
  width: 34px;
  background: #08c497;
  border-radius:40px;
  display:flex;
  align-items:center;
  justify-content:center;
  color: white;
  font-size:16px;
`;

export const FormPorcion = styled.div`
    margin-bottom: 90px;
    & div {
        display: flex;
    } & input {
        margin: 0 10px;
    }
`;