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

    h1 {
        font-weight: 500;
    }

    h3 {
        font-weight: 300;
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

export const WrapperAppFunctions = styled.div`
    display: flex;
    align-self: center;
    margin: 20px 20px;
    width: 80%;
    color: #e5e5e5;
    flex-wrap: wrap;
`;

export const GiantCardLink = styled(CustomLink)`
    display: flex;
    flex: 1;
    text-decoration: none;
    color: #E5E5E5;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 20px;
        flex: 1;
        height: 320px;
        min-width: 100px;
        background: #5E937F;

        img {
            margin-bottom: 12px;
            width: 90px;
    }
    }
`;