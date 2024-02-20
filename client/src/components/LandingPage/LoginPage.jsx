import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="h-screen w-screen bg-home-bg bg-cover text-white flex justify-center">
        <div className="container">
            <Navbar/>
            <div className="form h-[90%] flex items-center justify-center">
                <form className="bg-black/70 w-[28rem] h-[30rem] flex gap-4 flex-col items-center pt-12">
                    <p className="text-2xl font-bold mb-2">Sign in</p>
                    <div className="flex flex-col w-[70%]">
                        <input type="text" name="email" placeholder="Email or Phone number"/>
                    </div>
                    <div className="flex flex-col w-[70%]">
                        <input type="password" placeholder="Password"/>
                    </div>
                    <button className="bg-brand mt-5 h-[2.7rem] w-[7rem] text-lg hover:bg-brand/80 rounded-sm">Sign in</button>
                    <p>Forgot Password?</p>
                    <p className="text-gray-400">New to Netmovies? <span className="cursor-pointer hover:text-white"><Link to="/">Sign up now</Link></span></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
