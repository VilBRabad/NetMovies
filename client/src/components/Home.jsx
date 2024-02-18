import React from 'react';
import languageLogo from "../images/language.svg";

function Home() {
  return (
    <div id="home" className="relative h-[100vh] w-screen flex items-center justify-center text-white bg-home-bg bg-cover">
        <div className="container h-full">
            <div className="nav h-[10%] gap-6 flex-wrap max-sm:gap-2 pt-10 w-full flex justify-between pt-6 items-center">
                <div className="logo">
                    <span className="text-brand font-logo text-[2.8rem] font-semibold">NETMOVIES</span>
                </div>
                <div className="btns flex gap-2 xl:w-[17%] text-[1.1rem] justify-between">
                    <div className="flex gap-2 bg-gray-950/60 p-1 px-4 border rounded-[4px] border-gray-500 cursor-pointer"> 
                        <img src={languageLogo} alt="" />
                        English
                    </div>
                    <div className="bg-brand p-1 px-4 rounded-[4px] cursor-pointer">Sign in</div>
                </div>
            </div>
            <div className="main flex flex-col w-full h-[85%] items-center justify-center">
                <span className="text-5xl font-bold text-center max-sm:text-4xl">Unlimited movies, TV shows and more</span>
                <span className="mt-2 text-lg">Watch anywhere. Cancel anytime.</span>
                <span className="mt-2 text-xl text-center">Ready to watch? Enter your email to create or restart your membership.</span>
                <div className="mt-2 flex flex-wrap gap-2 justify-center"> 
                    <input type="email" placeholder="Email Address" className="h-[3rem] max-sm:w-[94%] w-[23rem] text-lg border rounded-[4px] border-gray-400 outline-0 px-4 mr-2 bg-gray-900/60" />
                    <button className="h-[3rem] w-[10rem] rounded-[4px] text-lg bg-brand">Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
