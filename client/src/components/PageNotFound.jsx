import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center text-white bg-black">
        <span className="text-[20rem] absolute text-white/10 font-bold z-[1]">404</span>
        <span className="text-4xl font-bold z-[2]">Page Not Found</span>
        <Link to="/" className="z-[5]"><button className="bg-brand h-[2.2rem] w-[6rem] mt-2 rounded-md hover:bg-brand/80">Home</button></Link>
    </div>
  )
}

export default PageNotFound
