import React from 'react'
import Navbar from './Navbar'

function RegisterLandingPage({Component}) {
  return (
    <div id="register" className="relative min-h-screen w-screen bg-white flex flex-col items-center">
        <Navbar/>
        <div className="container h-full">
          <Component/>
        </div>
    </div>
  )
}

export default RegisterLandingPage
