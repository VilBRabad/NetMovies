import React from 'react'
import languageLogo from "../../images/language.svg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';


function Navbar({isLogin}) {

    const navigate = useNavigate();

    const setLanguage = (val, e)=>{
        const textSpace = document.getElementById("textSpace");
        if(val == 1){
            textSpace.innerHTML = "English"
        }
        else{
            textSpace.innerHTML = "हिन्दी"
        }
    }

    const clickHandler = ()=>{
        if(isLogin){
            navigate("/in");
        }
        else{
            navigate("/sign-in");
        }
    }

    return (
        <div className="nav h-[10%] gap-6 flex-wrap max-sm:gap-2 pt-10 w-full flex justify-between pt-6 items-center">
            <div className="logo">
                <span className="text-brand font-logo text-[2.8rem] font-semibold"><Link to="/">NETMOVIES</Link></span>
            </div>
            <div className="btns flex gap-2 xl:w-[19%] text-[1.1rem] justify-between">
                <div id="language" className="relative w-[55%] flex justify-between gap-2 bg-gray-950/60 py-1 pl-4 px-2 border rounded-[4px] border-gray-500 cursor-pointer">
                    <img src={languageLogo} alt="" />
                    <span id="textSpace">English</span>
                    <MdOutlineArrowDropDown className="dropbtn text-2xl" />
                    <div className="absolute flex flex-col w-[8.3rem] h-[4rem] rounded-sm top-full justify-evenly left-0 bg-slate-600 hidden">
                        <span className="pl-4 hover:bg-slate-500" onClick={(e) => setLanguage(1, e)}>English</span>
                        <span className="pl-4 hover:bg-slate-500" onClick={(e) => setLanguage(0, e)}>हिन्दी</span>
                    </div>
                </div>
                <div onClick={clickHandler} className="bg-brand p-1 px-4 rounded-[4px] cursor-pointer hover:bg-brand/80">{isLogin?"Go Home":"Sign in"}</div>
            </div>
        </div>
    )
}

export default Navbar
