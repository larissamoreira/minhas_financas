import React, { useState } from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
// import * as yup from 'yup';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { StyledForm, Container, InputWrapper, Title, Subtitle } from './styles';

interface FormValues {
  title: string;
  value: number;
  date: string;
  status: string;
}

const CreateEntry: React.FC = () => {
  const [status, setStatus] = useState('');
  const { t } = useTranslation('createEntry');

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>{t('titlePage')}</Title>
        <Subtitle>{t('subtitle')}</Subtitle>
        <Formik
          initialValues={{ title: '', value: 0, date: '', status: '' }}
          onSubmit={(values: FormValues) => console.log(values)}
        >
          {({ errors, touched }) => (
            <StyledForm>
              <InputWrapper>
                <Input
                  id="title"
                  name="title"
                  placeholder={t('title')}
                  type="text"
                />
                {touched.title && errors.title && <span>*{errors.title}</span>}
              </InputWrapper>
              <InputWrapper>
                <Input
                  id="value"
                  name="value"
                  placeholder={t('amount')}
                  type="number"
                />
                {touched.value && errors.value && <span>*{errors.value}</span>}
              </InputWrapper>
              <InputWrapper>
                <Input
                  id="date"
                  name="date"
                  placeholder={t('date')}
                  type="date"
                />
                {touched.date && errors.date && <span>*{errors.date}</span>}
              </InputWrapper>
              <InputWrapper>
                <Select
                  id="status"
                  name="status"
                  value={status}
                  placeholder={t('date')}
                  onChange={e => {
                    setStatus(e.target.value);
                  }}
                  options={[
                    { value: 'Finalizado', label: t('statusClosed') },
                    { value: 'Pendente', label: t('statusPending') },
                    { value: 'Criado', label: t('statusCreated') },
                  ]}
                />
                {touched.date && errors.date && <span>*{errors.date}</span>}
              </InputWrapper>
              <Button type="submit">{t('finishRegistration')}</Button>
            </StyledForm>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default CreateEntry;
