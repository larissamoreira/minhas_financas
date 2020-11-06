import React, { useRef, useState } from 'react';

import { Formik, Form as FormikForm } from 'formik';

import { FiX } from 'react-icons/fi';

import { Container, Content, Form, InfoBlock } from './styles';
import Button from '../Button';
import Input from '../Input';

interface IEntryFormProps {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editMode?: boolean;
}

interface IEntryData {
  title: string;
  value: number;
  status: boolean;
  date: Date;
}

const EntryForm: React.FC = () => {
  const [openFormEntry, setOpenFormEntry] = useState(false);
  return (
    <>
      <Container>
        <Content>
          <FiX
            onClick={() => setOpenFormEntry(false)}
            name="Fechar"
            className="close-icon"
          />
          {/* <FiX className="close-icon" /> */}
          {/* <h1>{editMode ? 'Editar tarefa' : 'Criar tarefa'}</h1> */}
          {/* <Formik
          initialValues={{ title: '', value= 0, status: false, date: '' }}
          onSubmit={{} => ()}
          >
          <FormikForm

            >
              <InfoBlock>
                <span>Título</span>
                <Input
                  name="title"
                  // icon={FiFileText}
                  type="text"
                  placeholder="Título da tarefa"
                />
              </InfoBlock>

              <InfoBlock>
                <span>Descrição</span>
                <Input
                  name="description"
                  // icon={FiFileText}
                  type="text"
                  placeholder="Descrição da tarefa"
                />
              </InfoBlock>

              <InfoBlock>
                <span>Data de entrega</span>
                <Input
                  name="taskDate"
                  type="date"
                  placeholder="Data de entrega"
                />
              </InfoBlock>
              <Button type="submit">{editMode ? 'Editar' : 'Criar'}</Button>
            </FormikForm>

          </Formik> */}
        </Content>
      </Container>
    </>
  );
};

export default EntryForm;
