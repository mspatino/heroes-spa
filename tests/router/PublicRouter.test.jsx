import { render , screen ,configure } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PublicRouter } from '../../src/router/PublicRouter';

describe('Prubas en <PublicRouter />', () => { 


    test('Debe de mostrar el children si no esta autenticado', () => { 

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue } >
                <PublicRouter>
                    <h1>Ruta pública</h1>
                </PublicRouter>

            </AuthContext.Provider>

        );        

//         screen.debug();

        expect( screen.getByText('Ruta pública') ).toBeTruthy();    


     })

     test('debe de navegar si esta autenticado', () => { 
        // tengo q asegurarme que la pagina de marvel se renderizo

        const contextValue = {
            logged: true,
            use: {
                id: 'ABC',
                name: 'Max'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={['/marvel']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRouter>
                               <h1>Ruta pública</h1>
                           </PublicRouter> 
                        }/>
                        <Route path='marvel' element={<h1>Página Marvel</h1>}/>
                    </Routes>
                

                </MemoryRouter>
                

            </AuthContext.Provider>
        );    

        //screen.debug();
        expect( screen.getByText('Página Marvel') ).toBeTruthy(); 

      })


 })