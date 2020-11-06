import React, { useState } from 'react';
import { Formik } from 'formik';
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

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Cadastro de Lançamento</Title>
        <Subtitle>Preencha os dados do seu lançamento.</Subtitle>
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
                  placeholder="Título"
                  type="text"
                />
                {touched.title && errors.title && <span>*{errors.title}</span>}
              </InputWrapper>
              <InputWrapper>
                <Input
                  id="value"
                  name="value"
                  placeholder="Valor"
                  type="number"
                />
                {touched.value && errors.value && <span>*{errors.value}</span>}
              </InputWrapper>
              <InputWrapper>
                <Input
                  id="date"
                  name="date"
                  placeholder="Data do Lançamento"
                  type="date"
                />
                {touched.date && errors.date && <span>*{errors.date}</span>}
              </InputWrapper>
              <InputWrapper>
                <Select
                  id="status"
                  name="status"
                  value={status}
                  placeholder="Data do Lançamento"
                  onChange={e => {
                    setStatus(e.target.value);
                  }}
                  options={[
                    { value: 'Finzalido', label: 'Finalizado' },
                    { value: 'Pendente', label: 'Pendente' },
                    { value: 'Criado', label: 'Criado' },
                  ]}
                />
                {touched.date && errors.date && <span>*{errors.date}</span>}
              </InputWrapper>
              <Button type="submit">Concluir cadastro</Button>
            </StyledForm>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default CreateEntry;
