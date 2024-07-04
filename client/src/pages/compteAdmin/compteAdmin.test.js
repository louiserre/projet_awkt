import  {CompteAdmin}  from 'pages/compteAdmin/CompteAdmin';
import axios from 'axios';
import { render, fireEvent , screen, waitFor  } from '@testing-library/react';
import '@testing-library/jest-dom';


// Mock Axios pour simuler les appels réseau
jest.mock('axios');

describe('CompteAdmin', () => {  

  test('Récupère données de la méthode get', async () => {
    
    // Données de réponse simulées
    const responseData = { data: [{ 
      created_at:"2024-05-03T10:06:48.000Z",
      email:"lulu.louiserre@gmail.com",
      firstName:"virginia",
      id_contact:4,
      message:"bonjour je souhaite avoir des informations sur la formation tir",
      name:"louiserre",
      status:0,
      type_formation:"tir",
      updated_at:"2024-05-03T10:06:48.000Z"
    }] };;

    // Simulation de la réponse de la requête GET
    //axios.get = jest.fn().mockResolvedValue(responseData);
    axios.get.mockResolvedValue(responseData);

    // Rendu du composant
    render(      
        <CompteAdmin />     
    );

    //Sélectionnez le bouton et simulez un clic
    const button = screen.getByText('Consulter la liste des demandes d\'informations');
    fireEvent.click(button);

    // Attendre que la requête GET soit effectuée
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
    
  });
});