import React from 'react'
import Register from './Register'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Subsrcription from './Subsrcription'
import Payment from "./Payment"
import Suceess from './Suceess'
import PageNotFound from '../PageNotFound'

function RegisterLandingPage() {
  return (
    <div id="register" className="relative min-h-screen w-screen bg-white flex flex-col items-center">
        <Navbar/>
        <div className="container h-full">
            <Routes>
                <Route exact path="/" element={<Register/>}/>
                <Route exact path="/2" element={<Subsrcription/>}/>
                <Route exact path="/3" element={<Payment/>}/>
                <Route exact path="/success-message" element={<Suceess/>}/>
                <Route exact path="/:path" element={<PageNotFound/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default RegisterLandingPage
