import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Components/Home'
import Product from '../Components/Product'
import AddProduct from '../Components/AddProduct'
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>} />
      <Route path='/addproduct' element={<AddProduct/>}/>
      {/* <Route path='/addproduct' element={<AddProduct/>}/> */}
    </Routes>
  )
}

export default Router
