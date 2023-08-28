import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

const { login } = useContext(AuthContext);    

const navigate = useNavigate();    

const onLogin = () => {

    //si localStorage.getItem('lastPath')  es nula devuelve la segunda expresion --> '/'
    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Sari Patiño');


    // navigate('/',{ replace: true});
    navigate(lastPath,{ replace: true});
}


  return (
    <div className='container mt-5'>
    <h1>Login</h1>    
    <hr/>
    <button className="btn btn-primary"
    onClick={ onLogin }>
    Login
    </button>

    </div>

  )
}
