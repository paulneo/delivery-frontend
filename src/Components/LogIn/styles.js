import styled from 'styled-components'

export const Login = styled.div`
    background: #FFF;
    border: 1px solid #DDDDDD;
    border-radius: 10px;
    display: flex;
    flex-direction: column; 
    justify-content:center;
    align-items: center;
    width: 460px;
    height: 474px;
`;

export const Title = styled.p`
    font-size: 30px;
    margin-bottom: 50px;
    
`;

export const HaveAccount = styled.p`
    font-size: 16px;
    & a {
        color: #EA3546;
        text-decoration: none;
    }
`;
