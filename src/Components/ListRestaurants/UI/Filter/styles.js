import styled from 'styled-components'


export  const Content  = styled.div`
  padding: 9px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap:wrap;
  width:100%;
  border: 1px solid #E1E1E1;
  border-right:none;
  border-left:none;
  box-sizing: border-box;
  margin-bottom:30px;
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
`
export const InputRes = styled.div`
    width: 35%;
    display: flex;
    align-items: center;
    position: relative;
    left:30px;
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
  position: relative;
  right: 30px;
`;

export const Tags = styled.div`
  display:flex;
  flex-direction:row;
`;
