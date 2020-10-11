import styled from 'styled-components'

export const Content = styled.div`
  padding:15px;
  border-radius: 10px;
  background: #F5F5F5;
  border-radius: 10px;
  margin-bottom:15px;
`
export const Icon = styled.div`
  height: 24px;
  width: 24px;
  background: ${props => props.color};
  border-radius:40px;
  display:flex;
  align-items:center;
  justify-content:center;
  color: white;
  font-size:14px;
  margin: 0 5px;
  cursor: pointer;
`;
export const Title = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #3E3E3E;
  margin:0;
`
export const ContentTitle = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`
export const Action = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-around;
`
export const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  color: #606060;
  margin: 5px 0;
`
export const Button = styled.div`
  border-radius:40px;
  background: #08C497;
  border-radius: 20px;
  font-weight: 500;
  font-size: 14px;
  color: #FFFFFF;
  padding:8px 13px;
  cursor: pointer;
`
export const Footer = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  margin-top:15px;
`
export const Number = styled.div`
  font-size: 14px;
  color: #FFFFFF;
  border-radius:20px;
  padding: 2px 14px;
  background:#08C497;
`