import { render , screen  } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';



describe('Pruebas en el <AppRouter />', () => { 

    test('Debe de mostrar el login si no está autenticado', () => { 

        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        //screen.debug();
        expect( screen.getAllByText('Login').length).toBe(2);

    })

    test('debe de mostrar el componente de marvel si esta authenticado ', () => { 

        const contextValue = {
            logged: true,
            use: {
                id: 'ABC',
                name: 'Max'
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        screen.debug(); 
        expect( screen.getByText('MarvelPage') ).toBeTruthy();        
        expect( screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);


     })


 })