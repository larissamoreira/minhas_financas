import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

const Login: React.FC = () => {
  const { t } = useTranslation('login');

  const LoginSchema = yup.object().shape({
    email: yup.string().email(t('invalidEmail')).required(t('emailRequired')),
    password: yup.string().required(t('passwordRequired')),
  });

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>{t('title')}</Title>
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
                  placeholder={t('email')}
                  type="email"
                />
                {touched.email && errors.email && <span>*{errors.email}</span>}
              </InputWrapper>
              <InputWrapper>
                <Input
                  id="password"
                  name="password"
                  placeholder={t('password')}
                  type="password"
                />
                {touched.password && errors.password && (
                  <span>*{errors.password}</span>
                )}
              </InputWrapper>
              <Button type="submit" data-testid="submit">
                {t('login')}
              </Button>
            </StyledForm>
          )}
        </Formik>
        <RegisterLink>
          <p>{t('notRegistered')}</p>
          <Link to="/createUser">{t('register')}</Link>
        </RegisterLink>
      </Container>
    </>
  );
};

export default Login;
