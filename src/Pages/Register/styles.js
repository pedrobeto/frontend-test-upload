import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import { Link as CustomLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    color: #fff;
    align-items: center;
    justify-content: space-between;
`;

export const FormArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 60px;
    justify-content: center;

    h1 {
        color: #313131;
        font-weight: 400;
        margin-bottom: 12px;
    }
`;

export const Form = styled(Unform)`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    border-bottom: 2px solid #e3e3e3;
    h1 {
        font-weight: 500;
        color: #313131;
        margin-bottom: 14px;
    }
`;

export const BackgroundArea = styled.div`
    font-size: 20px;
    display: flex;
    height: 100%;

    img {
        height: 100%;
    }
`;

export const Link = styled(CustomLink)`
    margin-top: 50px;
    text-decoration: none;
    color: #313131;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

