import styled from 'styled-components';
import { Link as CustomLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    color: #fff;
    align-items: center;
    justify-content: space-between;
`;

export const Link = styled(CustomLink)`
    margin-top: 50px;
    text-decoration: none;
    color: #E5E5E5;
    width: 100%;
`;

export const ContentArea = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 28px 20px;
    width: 100%;
    flex: 1;
    color: #313131;
    justify-content: space-between;

    a {
        color: #5E937F;
    }

    p { 
        text-transform: uppercase;
    }

    input {
        margin-top: 32px;
        padding: 10px 30px;
        border-radius: 20px;
        border: none;
        width: 520px;
        margin-bottom: 8px;
    }
`;

export const DashMenuArea = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    background: #5E937F;
    align-items: center;

    p {
        margin-top: 12px;
        font-weight: 300;
        font-size: 24px;
    }

    img {
        margin-top: 28px;
        width: 120px;
        border-radius: 50%;
    }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 120px;
    width: 100%;
    color: white;

    ul {
        width: 100%;
        list-style: none;
        text-decoration: none;
        color: red;
    }

    li {
        width: 100%;
        text-align: center;
        margin-top: 6px;
        padding: 4px 6px;
        text-transform: uppercase;
        color: white;
        font-weight: 400;
        transition: 0.5s;

        &:hover {
            background: #E5E5E5;

            a {
                color: #5E937F;
            }
        }
    }
`;

export const ProfileCard = styled.div`
    display: flex;
    width: 600px;
    height: 270px;
    background: #dfdfdf;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    border-radius: 10px;
    font-size: 16px;
    color: #fff;
    margin: 24px;
    align-self: center;

    img {
        width: 180px;
        margin-right: 40px;
    }
`;

export const BackArea = styled.div`
    align-self: flex-end;
    font-weight: 400;
`;

export const TextArea = styled.div`
    color: #313131;
    strong {
        font-weight: 600;
        text-transform: none;
    }
    p {
        text-transform: none;
    }
`;
