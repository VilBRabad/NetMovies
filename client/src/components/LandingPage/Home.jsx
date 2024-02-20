import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Home() {


  return (
    <div id="home" className="relative h-[100vh] w-screen flex items-center justify-center text-white bg-home-bg bg-cover">
        <div className="container h-full">
            <Navbar/>
            <div className="main flex flex-col w-full h-[85%] items-center justify-center">
                <span className="text-5xl font-bold text-center max-sm:text-4xl">Unlimited movies, TV shows and more</span>
                <span className="mt-2 text-lg">Watch anywhere. Cancel anytime.</span>
                <span className="mt-2 text-xl text-center">Ready to watch? Enter your email to create or restart your membership.</span>
                <div className="mt-2 flex flex-wrap gap-2 justify-center"> 
                    <input type="email" placeholder="Email Address" className="h-[3rem] max-sm:w-[94%] w-[23rem] text-lg border rounded-[4px] border-gray-400 outline-0 px-4 mr-2 bg-gray-900/60" />
                    <Link to="/register"><button className="h-[3rem] w-[10rem] rounded-[4px] text-lg bg-brand hover:bg-brand/80">Get Started</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
