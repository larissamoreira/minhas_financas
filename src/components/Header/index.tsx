import React from 'react';
import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'small' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="Minhas Finanças" />
    </header>
  </Container>
);

export default Header;
