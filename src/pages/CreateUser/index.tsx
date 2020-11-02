import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { StyledForm, Container, InputWrapper, Span, Title } from './styles';

import './styles';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const SignupSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Your password must have at least 8 characters.').required('Password is required')
})

export const CreateUser: React.FC<{}> = () => (
  <Container>
    <Title>Sign up</Title>
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={
        (values: FormValues) => console.log(values)
      }
      validationSchema={SignupSchema}>
      {({ errors, touched }) => (
        <StyledForm>
          <InputWrapper>
            <Input id="name" name="name" placeholder="Seu nome" type="text" />
            {touched.name && errors.name && <Span>* {errors.name}</Span>}
          </InputWrapper>
          <InputWrapper>
            <Input id="email" name="email" placeholder="Seu email" type="email" />
            {touched.email && errors.email && <Span>* {errors.email}</Span>}
          </InputWrapper>
          <InputWrapper>
            <Input id="password" name="password" placeholder="Sua senha" type="password" />
            {touched.password && errors.password && <Span>* {errors.password}</Span>}
          </InputWrapper>
          <Button type="submit"> Salvar </Button>
        </StyledForm>
      )}
    </Formik>
  </Container>
)

export default CreateUser;