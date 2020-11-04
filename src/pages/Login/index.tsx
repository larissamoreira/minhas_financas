import React from 'react';
import Header from '../../components/Header';

import {Container} from './styles';

const Login: React.FC = () => {
  return (
    <>
      <Header size="small" />
      <Container>
          <h1>Login</h1>
      </Container>
    </>
  )
}

export default Login;