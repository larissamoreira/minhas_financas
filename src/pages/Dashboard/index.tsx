import React from 'react';
import { FiEdit, FiPlus, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import income from '../../assets/entradas.svg';
import outcome from '../../assets/saídas.svg';
import total from '../../assets/total.svg';

import Button from '../../components/Button';
import Header from '../../components/Header';

import {
  Container,
  CardContainer,
  Card,
  TableContainer,
  ButtonContainer,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header size="large" />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <img src={income} alt="Income" />
            </header>
            <h1 data-testid="balance-income">R$ 3.000,00</h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <img src={outcome} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">R$ 300,00</h1>
          </Card>
          <Card total>
            <header>
              <p>Total</p>
              <img src={total} alt="Total" />
            </header>
            <h1 data-testid="balance-total">R$ 2.700,00</h1>
          </Card>
        </CardContainer>
        <ButtonContainer>
          <Link to="/createEntry">
            <Button>
              <FiPlus size={18} />
              Adicionar Lançamento
            </Button>
          </Link>
        </ButtonContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Valor</th>
                <th>Status</th>
                <th>Data</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="title">Salário</td>
                <td className="income">R$ 3.000,00</td>
                <td>Concluído</td>
                <td>20/10/2020</td>
                <td>
                  <FiEdit size={24} />
                  <FiTrash size={24} />
                </td>
              </tr>
              <tr>
                <td className="title">Conta de Luz</td>
                <td className="outcome">- R$ 200,00</td>
                <td>Hosting</td>
                <td>24/10/2020</td>
                <td>
                  <FiEdit size={24} />
                  <FiTrash size={24} />
                </td>
              </tr>
              <tr>
                <td className="title">Feira</td>
                <td className="outcome">- R$ 100,00</td>
                <td>Concluído</td>
                <td>30/10/2020</td>
                <td>
                  <FiEdit size={24} />
                  <FiTrash size={24} />
                </td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
