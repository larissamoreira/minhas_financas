import React from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header size="large" />
      <Container>
          <h1>Dashboard</h1>
      </Container>
    </>
  )
}

export default Dashboard;