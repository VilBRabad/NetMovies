import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useSharedState } from '../../Context/SharedStateContext';

function Home() {

  const [inputValue, setInputValue] = useState("");
  const { setSharedValue } = useSharedState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSharedValue(inputValue);
    navigate("/register");
  }

  const [isLogin, setIsLogin] = useState(false);

  const isUserLoggedIn = async () => {
    try {
      if(!localStorage.getItem("accessToken")){
        return;
      }
      const res = await fetch("http://localhost:8000/api/v1/users/is-logged-in", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: JSON.parse(localStorage.getItem("accessToken")),
        },
      })

      if(res.status === 200){
        setIsLogin(true);
      }
      else{
        setIsLogin(false);
      }
    } catch (error) {
      setIsLogin(false);
      console.log("Not loggin");
    }
  }

  useEffect(()=>{
    isUserLoggedIn();
  }, [])

  return (
    <div id="home" className="relative h-[100vh] w-screen flex items-center justify-center text-white bg-home-bg bg-cover">
      <div className="container h-full">
        <Navbar isLogin={isLogin}/>
        <div className="main flex flex-col w-full h-[85%] items-center justify-center">
          <span className="text-5xl font-bold text-center max-sm:text-4xl">Unlimited movies, TV shows and more</span>
          <span className="mt-2 text-lg">Watch anywhere. Cancel anytime.</span>
          <span className="mt-2 text-xl text-center">Ready to watch? Enter your email to create or restart your membership.</span>
          {
            !isLogin?
              <form onSubmit={handleSubmit} className="mt-2 flex flex-wrap gap-2 justify-center">
                <input type="email" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Email Address" className="h-[3rem] max-sm:w-[94%] w-[23rem] text-lg border rounded-[4px] border-gray-400 outline-0 px-4 mr-2 bg-gray-900/60" />
                <button type="submit" className="h-[3rem] w-[10rem] rounded-[4px] text-lg bg-brand hover:bg-brand/80">Get Started</button>
              </form>
            :
            <></>
          } 
        </div>
      </div>
    </div>
  )
}

export default Home
