import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth';

export const PrivateRouter = ( { children } ) => {

   const {logged} = useContext( AuthContext) ;
   const {pathname,search} = useLocation();

   const lastPath = pathname + search;

   localStorage.setItem('lastPath',lastPath);

   console.log('re-render');
//    console.log(pathname,search);

  return (logged)
  ? children
  : <Navigate to="/login"/>
    
}
