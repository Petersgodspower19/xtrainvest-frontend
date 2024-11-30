import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AppLayout from './AppLayout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      </Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
