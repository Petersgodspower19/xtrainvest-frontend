import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
     <Header />

     <main className="flex-grow">
        <Outlet />
     </main>
       <Footer />
    </div>
  )
}

export default AppLayout
