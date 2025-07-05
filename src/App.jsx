import { useEffect, useState } from 'react'

import './App.css'

import { callProduct, callSingleProduct } from './Service/allAPI'

function App() {
 


useEffect(() => {
  mGetProduct();
  mGetSingleProduct();
},[])


const mGetProduct = async() =>
{
  const response = await callProduct({})

  console.log(response)
}
 

const mGetSingleProduct = async() =>
{
  const response = await callSingleProduct({})

  console.log("SingleProduct : " , response)
}

  return (
    <>
      <div><p>Test</p></div>
    </>
  )
}

export default App
