import { authReducer } from "../../../src/auth";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en el authReducer', () => { 

    test('debe de retornar el estado por defecto', () => {  

    const state = authReducer({logged: false},{});    
    expect( state ).toEqual({logged: false});

    });




    test('Debe de llamar el login autenticar y establecer el usuario', () => {  
        const action = {
            type: types.login,
            payload: { 
                id: '123', 
                name: 'juan'
            }
        }    
        const state = authReducer({logged:false},action);

        expect( state ).toEqual({
            logged: true,
            user: action.payload});

    });


    test('debe (logout) de borrar el name del usuario y logged en false', () => {  

        const state = {
            logged: true,
            user: { 
                id: '123', 
                name: 'juan'
            }
        }    

        const action = {
            type: types.logout,
           }
        const newState = authReducer(state,action);    

        expect( newState ).toEqual({
            logged: false,
            user: action.payload
        });

    });


 })