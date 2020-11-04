import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
}

const Input: React.FC<Props> = ({ id, name, ...rest }) => (
  <Container id={id} name={name} {...rest} />
)

export default Input;
