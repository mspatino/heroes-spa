import React from 'react'
import { HeroeList } from '../components'

export const DcPage = ({ publisher }) => {

   return (
    <>
    <h1>DC Comics</h1>
    <hr />
    <HeroeList publisher='DC Comics'/>
    
    </>
    
  )
}
