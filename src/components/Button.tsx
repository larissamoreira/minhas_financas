import React from 'react';
import styled from 'styled-components';

interface Props {
  type: "button" | "submit" | "reset" | undefined
  text: string
  handleClick?: () => {}
}

const StyledButton = styled.button`
  background-color: #93D7ED;
  border: none;
  border-radius: 20px;
  width: 97px;
  height: 25px;
  text-align: center;

  &:hover {
    background-color: #55b2d0;
  }
`

const Button: React.FC<Props> = ({ text, type, handleClick }) => (
  <StyledButton onClick={handleClick} type={type}>
    {text}
  </StyledButton>
)

export default Button;