import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="main w-full flex-col flex items-center">
      <div className="w-full mt-4">
        <span className="pl-14 text-gray-600">Step 1 of 3</span>
      </div>
      <div className="regi-card flex flex-col gap-3 items-center justify-center border mt-20 h-[30rem] w-[30rem] max-sm:w-[98%] bg-white shadow-lg">
        <span className="text-2xl font-bold">Create Password</span>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" value="rabadvilas@gmail.com" className="text-gray-500" readOnly name='email' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" name='password' />
        </div>
        <Link to="./2" className="h-[2.4rem] w-[75%] bg-brand text-white hover:bg-brand/80 flex items-center justify-center"><button className="">Next</button></Link>
        <span className="text-sm">Terms & conditions*</span>
      </div>
    </div>
  )
}

export default Register
