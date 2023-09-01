import { render , screen ,configure } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PrivateRouter } from "../../src/router/PrivateRouter";

describe('Pruebas en <PrivateRouter />', () => { 


    test('Debe de mostrar el children si esta autenticado', () => { 

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            use: {
                id: 'ABC',
                name: 'Max'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRouter>
                    <h1>Ruta privada</h1>
                    </PrivateRouter>
                </MemoryRouter>

            </AuthContext.Provider>

        );        

//         screen.debug();

        expect( screen.getByText('Ruta privada') ).toBeTruthy();    
        
        // me aseguro de que el localStorage haya sido llamado con el lastPath    
        expect ( localStorage.setItem ).toHaveBeenCalled();    
        expect ( localStorage.setItem ).toHaveBeenCalledWith('lastPath','/search?q=batman');

     })


 })