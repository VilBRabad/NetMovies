import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Search from './Search/Search'

function HomeLogged() {
  return (
    <div id="register" className="relative min-h-screen w-screen flex flex-col">
        <p className="fixed text-brand font-logo text-[2rem] font-bold left-2 md:left-16 top-4 z-30">NetMovies</p>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Search/>}/>
        </Routes>
    </div>
  )
}

export default HomeLogged
