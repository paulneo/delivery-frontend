import styled from 'styled-components'

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Login = styled.div`
    background: #FFF;
    border: 1px solid #DDDDDD;
    border-radius: 10px;
    width: 418px;
    height: 432px;
    text-align: center;
    padding: 42px;
`;

export const Title = styled.p`
    font-size: 30px;
    margin-bottom: 75px;
    margin-top: 0;

`;

export const InputForm = styled.div`
    margin-bottom: 50px;
`;

export const ButtonForm = styled.div`
    margin-top: 75px;
`;

export const HaveAccount = styled.p`
    margin-top: 30px;
    font-size: 16px;
    & a {
        color: #EA3546;
        text-decoration: none;
    }
`;