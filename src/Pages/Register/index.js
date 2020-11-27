import React, { useRef, useState, useContext } from 'react';
import Input from '../../components/Input/index';
import * as Yup from 'yup';
import Button from '../../components/Button';

import {
    Container,
    BackgroundArea,
    FormArea,
    Form,
    Link,
    Wrapper
} from './styles';

const Register = () => {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
        const schema = Yup.object().shape({
            email: Yup.string()
                .required('Email obrigatório').email('Digite um e-mail válido'),
            password: Yup.string()
                .required('A senha é obrigatória').min(6,'Mínimo de 6 caracteres'),
        });
        
        await schema.validate(data, {
            abortEarly: false,
        });

        console.log(data);

        formRef.current?.setErrors({});

        reset();
    } catch (err) {
        if (err instanceof Yup.ValidationError) {
            const validationErrors = {};

            err.inner.forEach(error => {
              validationErrors[error.path] = error.message;
            });
          
            formRef.current?.setErrors(validationErrors);

            return;
        } 
    }
  }


  return (
      <Container>
          <BackgroundArea>
            <img src="./nature.jpg" alt=""/>
          </BackgroundArea>

          <FormArea>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Cadastre-se</h1>
                <Wrapper>
                    <Input placeholder="Nome" type="email" name="email" />
                    <Input placeholder="Email" type="password" name="password" />
                    <Input placeholder="Senha" type="password" name="password" />
                    <Input placeholder="CPF" type="password" name="password" />
                    <Input placeholder="RG" type="password" name="password" />
                    <Input placeholder="Data de nascimento" type="password" name="password" />
                    <Input placeholder="Telefone 1" type="password" name="password" />
                    <Input placeholder="Telefone 2" type="password" name="password" />
                </Wrapper>
                
                <Button title="CADASTRAR" type="submit">ENTRAR</Button>
            </Form>

            <Link to="/login">
                Voltar para o login
            </Link>
          </FormArea>
      </Container>
  );
}

export default Register;