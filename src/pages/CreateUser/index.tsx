import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Input, Button } from '../../components/';
import './styles';
import { StyledForm, Container, InputWrapper, Span, Title } from './styles';

interface MyFormValues {
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
        (values: MyFormValues) => console.log(values)
      }
      validationSchema={SignupSchema}>
      {({ errors, touched }) => (
        <StyledForm>
          <InputWrapper>
            <Input id="name" name="name" placeholder="Seu nome" />
            {touched.name && errors.name && <Span>* {errors.name}</Span>}
          </InputWrapper>
          <InputWrapper>
            <Input id="email" name="email" placeholder="Seu email" />
            {touched.email && errors.email && <Span>* {errors.email}</Span>}
          </InputWrapper>
          <InputWrapper>
            <Input id="password" name="password" placeholder="Sua senha" />
            {touched.password && errors.password && <Span>* {errors.password}</Span>}
          </InputWrapper>
          <Button text="Salvar" type="submit" />
        </StyledForm>
      )}
    </Formik>
  </Container>
)

export default CreateUser;