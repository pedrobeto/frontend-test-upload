import React, { useRef, useContext } from 'react';
import Input from '../../components/Input/index';
import * as Yup from 'yup';
import history from '../../history';
import Button from '../../components/Button';

import {
    Container,
    BackgroundArea,
    FormArea,
    Form,
    Link
} from './styles';

import AuthContext from '../../context/auth';

const Login = () => {
  const { signed, signIn, user } = useContext(AuthContext);
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
        
        signIn(data.email, data.password);

        console.log(user);

        formRef.current?.setErrors({});

        reset();

        history.push('/dashboard');
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
          <FormArea>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Faça seu login</h1>
                <Input placeholder="Email" type="email" name="email" />
                <Input placeholder="Senha" type="password" name="password" />
                <Button title="ENTRAR" type="submit">ENTRAR</Button>
            </Form>

            <Link to="/register">
                Criar conta
            </Link>
          </FormArea>
          
          <BackgroundArea>
            <img src="./nature.jpg" alt=""/>
          </BackgroundArea>
      </Container>
  );
}

export default Login;