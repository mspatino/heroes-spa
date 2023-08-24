import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
// import { DcPage } from '../heroes/pages/DcPage'
// import { MarvelPage } from '../heroes/pages/MarvelPage'

import { HeroeRoutes } from '../heroes'


export const AppRouter = () => {
  return (
    <>
    <Routes>
         {/* <Route path="/*" element={ <MarvelPage />} /> */}
         <Route path="login" element={<LoginPage />} />
         
         <Route path="/*" element={<HeroeRoutes />} />
         
    </Routes>

    </>
  )
}
