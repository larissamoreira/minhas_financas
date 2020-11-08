import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { StyledForm, Container, InputWrapper, Title, Subtitle } from './styles';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

export const CreateUser: React.FC = () => {
  const { t } = useTranslation('createUser');

  const SignupSchema = yup.object().shape({
    name: yup.string().required(t('name')),
    email: yup.string().email(t('invalidEmail')).required(t('emailRequired')),
    password: yup
      .string()
      .min(8, t('passwordRequired'))
      .required(t('passwordRequired')),
  });

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>{t('title')}</Title>
        <Subtitle>{t('subtitle')}</Subtitle>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={(values: FormValues) => console.log(values)}
          validationSchema={SignupSchema}
        >
          {({ errors, touched }) => (
            <StyledForm>
              <InputWrapper>
                <Input
                  id="name"
                  name="name"
                  placeholder={t('name')}
                  type="text"
                />
                {touched.name && errors.name && <span>*{errors.name}</span>}
              </InputWrapper>
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
              <Button type="submit">{t('register')}</Button>
            </StyledForm>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default CreateUser;
