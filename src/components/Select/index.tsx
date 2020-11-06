import React, { SelectHTMLAttributes } from 'react';

import { Container, TitleOption, List } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ name, options, ...rest }) => {
  return (
    <Container>
      <List value="" id={name} {...rest}>
        <TitleOption value="" disabled hidden>
          Status
        </TitleOption>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </List>
    </Container>
  );
};

export default Select;
