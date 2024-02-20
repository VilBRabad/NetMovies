import React from 'react'
import Register from './Register'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Subsrcription from './Subsrcription'
import Payment from "./Payment"
import Suceess from './Suceess'

function RegisterLandingPage() {
  return (
    <div id="register" className="relative min-h-screen w-screen flex flex-col items-center">
        <Navbar/>
        <div className="container h-full">
            <Routes>
                <Route path="/" element={<Register/>}/>
                <Route path="/2" element={<Subsrcription/>}/>
                <Route path="/3" element={<Payment/>}/>
                <Route path="/success-message" element={<Suceess/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default RegisterLandingPage
