import React, { useEffect, useState } from 'react'
import { GoHome, GoHistory } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { LuClapperboard } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Navbar() {
  const [pos, setPos] = useState(100)

  useEffect(()=>{
    const line = document.getElementById("lin");
    const width = window.innerWidth;
    if(width <=  768){
      line.style.transform = `translateX(${pos}%)`;
    }
    else{
      line.style.transform = `translateY(${pos}%)`;
    }

  }, [pos]);

  return (
    <div className="max-md:home-nav max-md:h-[8rem] fixed w- max-md:w-screen bottom-0 md:top-0 left-0 flex max-md:flex-col-reverse items-center z-10 max-md:z-30">
      <div className="h-[22rem] max-md:h-4 max-md:w-[83%] w-1 max-md:mt-4 relative">
        <div id="lin" className={`h-[53px] w-[5px] max-md:h-[5px] max-md:w-[53px] bg-brand transition ease-out left-0`}></div>
      </div>
      <div className="relative flex flex-col max-md:flex-row max-md:justify-center items-center gap-8 md:ml-4 text-3xl text-gray-500 z-40">
        <Link to="./search"><IoSearchOutline className="hover:text-white cursor-pointer" onClick={()=>setPos(0)}/></Link>
        <Link to="./"><GoHome className="hover:text-white cursor-pointer" onClick={()=>setPos(100)}/></Link>
        <Link to="./movies"><LuClapperboard className="hover:text-white cursor-pointer" onClick={()=>setPos(220)}/></Link>
        <Link to="./my-list"><FaPlus className="hover:text-white cursor-pointer" onClick={()=>setPos(340)}/></Link>
        <Link to="./history"><GoHistory className="hover:text-white cursor-pointer" onClick={()=>setPos(460)}/></Link>
        <Link to="./account"><FaRegCircleUser className="hover:text-white cursor-pointer" onClick={()=>setPos(570)}/></Link>
      </div>
    </div>
  )
}

export default Navbar
