import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { StyledForm, Container, InputWrapper, Title, Subtitle } from './styles';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const SignupSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Your password must have at least 8 characters.')
    .required('Password is required'),
});

export const CreateUser: React.FC = () => (
  <>
    <Header size="small" />
    <Container>
      <Title>Cadastro</Title>
      <Subtitle>Preencha os dados abaixo para começar.</Subtitle>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values: FormValues) => console.log(values)}
        validationSchema={SignupSchema}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <InputWrapper>
              <Input id="name" name="name" placeholder="Seu nome" type="text" />
              {touched.name && errors.name && <span>*{errors.name}</span>}
            </InputWrapper>
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
            <Button type="submit">Concluir cadastro</Button>
          </StyledForm>
        )}
      </Formik>
    </Container>
  </>
);

export default CreateUser;
