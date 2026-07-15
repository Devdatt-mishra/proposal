import { Route, Routes } from 'react-router-dom'
import './App.css'
import SecondPage from './components/2nd'
import Home from './components/home'
import Test from './components/home'
import { useState } from 'react'
import ThirdPage from './components/3rd'

function App() {
  

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
         <Route path='/third' element={<ThirdPage/>} ></Route>
      <Route path='/secondpage' element={<SecondPage/>} ></Route>
    
    </Routes>
    
    
      
    </>
  )
}

export default App
