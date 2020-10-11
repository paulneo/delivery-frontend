import styled from 'styled-components'


export  const Content  = styled.div`
  color: ${props => props.active ? '#F2F2F2' : '#4F4F4F'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  font-size: 15px;
  background: ${props => props.active ? '#08C497' : '#fff'};
  box-shadow: 0px 1px 4px #C9C9C9;
  padding: 8px 20px;
  width: fit-content;
  border-radius: 40px;
  margin: 0 10px;
  cursor: pointer;
`