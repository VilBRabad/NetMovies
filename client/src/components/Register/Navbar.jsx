import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="nav px-6 relative flex items-center justify-between w-full shadow-md py-2">
            <span className="text-brand font-logo text-[2.8rem] font-semibold"><Link to="/">NETMOVIES</Link></span>
            <span className="text-lg mr-8 cursor-pointer"><Link to="/">Sign out</Link></span>
        </div>
    )
}

export default Navbar
