import React from 'react'
import {
    Container,
    CustomButton
} from './styles';

function Button({ title }) {
    return (
        <Container>
            <CustomButton>{title}</CustomButton>
        </Container>
    )
}

export default Button;