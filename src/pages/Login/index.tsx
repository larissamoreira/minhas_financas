import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

import {
  Container,
  InputWrapper,
  StyledForm,
  RegisterLink,
  Title,
} from './styles';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

interface FormValues {
  email: string;
  password: string;
}

const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login: React.FC = () => {
  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Fazer login</Title>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values: FormValues) => console.log(values)}
          validationSchema={LoginSchema}
        >
          {({ errors, touched }) => (
            <StyledForm data-testid="form">
              <InputWrapper>
                <Input
                  id="email"
                  name="email"
                  placeholder="Seu email"
                  type="email"
                />
                {touched.email && errors.email && <span>*{errors.email}</span>}
              </InputWrapper>
              <InputWrapper>
                <Input
                  id="password"
                  name="password"
                  placeholder="Sua senha"
                  type="password"
                />
                {touched.password && errors.password && (
                  <span>*{errors.password}</span>
                )}
              </InputWrapper>
              <Button type="submit" data-testid="submit">
                Entrar
              </Button>
            </StyledForm>
          )}
        </Formik>
        <RegisterLink>
          <p>Não tem conta?</p>
          <Link to="/createUser">Cadastre-se</Link>
        </RegisterLink>
      </Container>
    </>
  );
};

export default Login;
