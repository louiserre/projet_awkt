import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Importez BrowserRouter
import axios from 'axios';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AuthContext } from 'store/authContext';
import { SignIn } from 'pages/signin/SignIn';

// Mock Axios pour simuler les appels réseau
jest.mock('axios');

describe('SignIn Component', () => {
  

  test('connexion signIn', async () => {
    const mockResponsePost = {
      data: {
        id_user: 1,
        name: 'John',
        firstName: 'Doe',
        email: 'john.doe@example.com',
        role: 'user',
        acessToken: 'access-token',
        refreshToken: 'refresh-token',
        crsftoken: 'csrf-token',
      },
    };

    axios.post.mockResolvedValue(mockResponsePost);

    render(      
      <SignIn />        
    );

    // Définir les valeurs des champs de formulaire
    fireEvent.change(screen.getByTestId('emailInput'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByTestId('passwordInput'), { target: { value: 'password123' } });

    // Soumettre le formulaire en cliquant sur le bouton de soumission
    fireEvent.click(screen.getByTestId('submitButton'));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      /*expect(mockLogin).toHaveBeenCalledWith(
        1, 'John', 'Doe', 'john.doe@example.com', 'user', 'access-token', 'refresh-token', 'csrf-token'
      );*/
    });
  });

  
});