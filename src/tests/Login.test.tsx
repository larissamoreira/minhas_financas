import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import Login from '../pages/Login';
import i18n from '../config/i18n';

describe('Login Form', () => {
  i18n.changeLanguage('pt');

  test('should show errors and change values', async () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </I18nextProvider>,
    );

    const emailInput = getByPlaceholderText('E-mail');
    const passwordInput = getByPlaceholderText('Senha');
    const submitButton = getByTestId('submit');

    fireEvent.click(submitButton);

    await waitFor(() => getByText('*Campo de e-mail obrigatório'));
    await waitFor(() => getByText('*Campo de senha obrigatório'));

    fireEvent.change(emailInput, { target: { value: 'email@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'myPassword' } });

    fireEvent.click(submitButton);

    expect(emailInput).toHaveValue('email@test.com');
    expect(passwordInput).toHaveValue('myPassword');
  });
});
