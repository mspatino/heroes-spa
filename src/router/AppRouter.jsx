import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
// import { DcPage } from '../heroes/pages/DcPage'
// import { MarvelPage } from '../heroes/pages/MarvelPage'

import { DcPage , MarvelPage } from '../heroes'

import { Navbar } from '../ui'

export const AppRouter = () => {
  return (
    <>
    <Navbar />

    <Routes>
         {/* <Route path="/*" element={ <MarvelPage />} /> */}
         <Route path="login" element={<LoginPage />} />
         <Route path="marvel" element={<MarvelPage />} />
         <Route path="dc" element={<DcPage />} />
         <Route path='/' element={ <Navigate to="/login"/>}/>
    </Routes>

    </>
  )
}
