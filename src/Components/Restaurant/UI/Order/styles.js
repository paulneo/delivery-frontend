import styled from 'styled-components'

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #3E3E3E;
  text-align: center;
  margin-bottom: 30px;

`
export const Footer =styled.div`
  margin-top:15px;
`
export const Body =styled.div`
  height:380px;
  overflow:auto;
  padding: 0px 10px;
  ::-webkit-scrollbar {
  width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #E1E1E1; 
  }
  ::-webkit-scrollbar-thumb {
    background: #606060; 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`

export const Total =styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  background: #E1E1E1;
  border-radius: 10px;
  padding:25px 15px;
  margin-bottom:15px;
`
export const Text =styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #3E3E3E;
  margin:0;
`

