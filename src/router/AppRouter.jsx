import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
// import { DcPage } from '../heroes/pages/DcPage'
// import { MarvelPage } from '../heroes/pages/MarvelPage'

import { HeroeRoutes } from '../heroes'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'


export const AppRouter = () => {
  return (
    <>
    <Routes>
         
         {/* <Route path="login" element={<LoginPage />} /> */}
         <Route path='/login' element={
            <PublicRouter>
                <LoginPage />
            </PublicRouter>
         }/>
         
         {/* <Route path="/*" element={<HeroeRoutes />} /> */}
         <Route path="/*" element={
         <PrivateRouter>
            <HeroeRoutes />
         </PrivateRouter>
         }/>
         
    </Routes>

    </>
  )
}
