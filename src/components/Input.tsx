import React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

interface Props {
  id: string
  name: string
  placeholder: string
  type: string
}

const StyledInput = styled(Field)`
  padding: 10px;
  width: 90%;
`

const Input: React.FC<Props> = ({ id, name, placeholder, type }) => (
  <StyledInput id={id} name={name} placeholder={placeholder} type={type} />
)

export default Input;