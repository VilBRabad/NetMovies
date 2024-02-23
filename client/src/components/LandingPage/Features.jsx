import React from 'react'
import tv from "../../images/tv.png";
import downloadImage from "../../images/mobile-0819.jpg";
import videoSource from  "../../images/video-tv-in-0819.m4v";
import stranger from "../../images/boxshot.png";
import { GoDownload } from "react-icons/go";
import vikram from "../../images/second-last.png";
import kidImg from "../../images/kid-img.png";

function Features() {
  return (
    <div id="features" className="w-screen h-auto flex justify-center text-white bg-black">
      <div className="container h-auto max-lg:max-w-[100%]">
        <div className="feat mt-40">
            <div className="det">
                <span className="title">Enjoy on your TV</span>
                <span className="desc">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</span>
            </div>
            <div className="img relative">
              <img src={tv} alt=""  className="relative z-[6]"/>
              {/* <div className="absolute bg-slate-400 h-10 w-[10rem] z-10 top-0"></div> */}
              <video className="absolute w-[75%] max-md:top-[26.5%]  top-[24%] right-[12%] z-[4]" autoPlay playsInline muted loop>
                <source src={videoSource} type="video/mp4" />
              </video>
            </div>
        </div>
        <div className="feat max-sm:flex-wrap-reverse">
            <div className="img relative flex items-center justify-center">
              <img src={downloadImage} alt=""  className="z-[3] relative"/>
              <div className="absolute flex justify-between items-center bg-black/90 h-[6rem] w-[65%] border-2 border-gray-500 rounded-3xl w-full z-[5] bottom-10">
                <div className="h-full flex items-center">
                  <img src={stranger} className="h-[80%] ml-4" alt="" />
                  <div className="ml-4">
                    <p>Stragers Things</p>
                    <p className="text-xs text-blue-600">Downloding.....</p>
                  </div>
                </div>
                <GoDownload className="mr-6 text-2xl"/>
              </div>
            </div>
            <div className="det">
                <span className="title">Download your shows to watch offline</span>
                <span className="desc">Save your favourites easily and always have something to watch.</span>
            </div>
        </div>
        <div className="feat">
            <div className="det">
                <span className="title">Watch everywhere</span>
                <span className="desc">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span>
            </div>
            <div className="img">
              <img src={vikram} className="" alt="" />
            </div>
        </div>
        <div className="feat mb-4 max-sm:flex-wrap-reverse">
            <div className="img">
              <img src={kidImg} className="" alt="" />
            </div>
            <div className="det">
                <span className="title">Create profiles for kids</span>
                <span className="desc">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
