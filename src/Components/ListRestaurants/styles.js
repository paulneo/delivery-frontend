import styled from 'styled-components'

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Restaurant = styled.div`
    width: 95%;
    height: 100%;
    margin-top: 25px;
`;

export const Title = styled.div`
    font-size: 35px;
`;

export const SearchRes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonRes = styled.div`
    display: flex;
    // height: 28px;
    // width: 102px;
    // align-items: center;
    // justify-content: center;
    & a {
        width: 100px;
    }        
`;

export const ChangeRes = styled.div`
  height: 28px;
  width: 102px;
  background: #08c497;
  border-radius:40px;
  display:flex;
  align-items:center;
  justify-content:center;
  color: white;
  font-size:15px;
  margin-right: 15px;
`;

export const InputRes = styled.div`
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Search = styled.div`
  height: 34px;
  width: 34px;
  border-radius:40px;
  display:flex;
  align-items:center;
  justify-content:center;
  color: #08c497;
  font-size:25px;
`;
