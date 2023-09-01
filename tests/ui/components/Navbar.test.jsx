import { fireEvent, render , screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}))

describe('Pruebas en <Navbar />', () => { 

    const contextValue = {
        logged: true,
        user: {
            id: 'ABC',
            name: 'Max'
        },
        logout: jest.fn(),
    }

    beforeEach( () => jest.clearAllMocks());
    
     test('debe de mostrar el nombre del usuario loggeado', () => { 

        render(
            <AuthContext.Provider value={ contextValue }>
               <MemoryRouter>
                    <Navbar />
                </MemoryRouter>     
            </AuthContext.Provider>
        )

        // screen.debug();
        expect( screen.getByText('Max')).toBeTruthy();

     });

     test('debe de llamar el logout y el navigate cuando se hace click en el boton de logout', () => { 

        render(
            <AuthContext.Provider value={ contextValue }>
               <MemoryRouter>
                    <Navbar />
                </MemoryRouter>     
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');

        fireEvent.click( logoutBtn );
        
        
       // screen.debug();
        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockUseNavigate ).toHaveBeenCalledWith('/login',{replace : true});



     });

 })