import React from 'react'
import "./app.css"
import { Route, Routes } from 'react-router-dom'
import Login from './Page/Login'
import Register from './Page/Register'
import Home from './Page/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'

export default function App() {
  return (
    <div className='app'>
      <Header/>
      {/* <Body/> */}
      <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      <Footer/>
      
    </div>
  )
}
