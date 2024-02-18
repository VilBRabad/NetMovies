import React from 'react'
import languageLogo from "../images/language.svg";


function Footer() {
  return (
    <div id="footer" className="relative pt-8 pb-6 flex justify-center bg-black text-gray-500">
      <div className="container relative">
        <div className="line max-md:w-[90%] absolute top-0"></div>
        
        <div className="pt-4">
            <span>Questions? Call 0000-000-0000</span>
        </div>
        <div className="options mt-4 flex flex-wrap gap-4 w-full justify-between">
            <div className="option">
                <span>FQA</span>
                <span>Invest Relations</span>
                <span>Privacy</span>
                <span>Speed Test</span>
            </div>
            <div className="option">
                <span>Help Centre</span>
                <span>Jobs</span>
                <span>Cookie Preferences</span>
                <span>Legal Notices</span>
            </div>
            <div className="option">
                <span>Account</span>
                <span>Ways to Watch</span>
                <span>Corporate Information</span>
                <span>Only on NetMovies</span>
            </div>
            <div className="option">
                <span>Media Centre</span>
                <span>Terms of Use</span>
                <span>Contact Us</span>
            </div>
        </div>
        <div className="w-[7rem] my-4 flex gap-2 bg-gray-950/60 p-1 px-4 border rounded-[4px] border-gray-500 cursor-pointer"> 
            <img src={languageLogo} alt="" className="text-gray-400"/>
            English
        </div>
        <div>
          NetMovies India
        </div>
      </div>
    </div>
  )
}

export default Footer
