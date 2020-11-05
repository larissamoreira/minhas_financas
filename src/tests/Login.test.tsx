import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';

describe('Login Form', () => {
  test('should show errors and change values', async () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );

    const emailInput = getByPlaceholderText('Seu email');
    const passwordInput = getByPlaceholderText('Sua senha');
    const submitButton = getByTestId('submit');

    fireEvent.click(submitButton);

    await waitFor(() => getByText('*Email is required'));
    await waitFor(() => getByText('*Password is required'));

    fireEvent.change(emailInput, { target: { value: 'email@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'myPassword' } });

    fireEvent.click(submitButton);

    expect(emailInput).toHaveValue('email@test.com');
    expect(passwordInput).toHaveValue('myPassword');
  });
});
