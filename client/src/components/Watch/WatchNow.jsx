import React, { useEffect, useState } from 'react'
import dharmendra from "../../images/Casts/Dharmendra.jpg"
import amitab from "../../images/Casts/amitab.jpg"
import hema from "../../images/Casts/hema.png"
import jaya from "../../images/Casts/jaya.jpg"

function WatchNow() {

    const [isLoad, setIsLoad] = useState(false);

    const handleLoad = () => {
        setIsLoad(true);
    }

    return (
        <div className="min-h-screen w-screen flex flex-col items-center text-white">
            <div className="relative w-[95%] md:w-[80%] md:min-h-[70vh] h-[50vh] flex flex-col items-center mt-[5rem]">
                {!isLoad && (<div className="absolute md:min-h-[70vh] h-[50vh] w-[100%] bg-gray-400 animate-pulse"></div>)}
                <iframe
                    className="md:h-[70vh] h-[50vh] w-[100%]"
                    src="https://www.youtube.com/embed/rpDnANNEtTo?si=SgapeYVUlWRZ9QGN&amp;start=9"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    onLoad={handleLoad}
                ></iframe>
            </div>
            <div className="w-[95%] md:w-[80%] w-full mt-6">
                <p className="text-3xl font-bold mb-1">Sholay</p>
                <p className="text-sm">8.1/10 <span className="bg-yellow-500 px-2 rounded-sm text-black">IMDB</span></p>
                <div className="mt-8 text-white/70">
                    <p className="text-lg text-white">Movie Information</p>
                    <p className="text-md">
                        <span className="font-bold">Description: </span>
                        <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae veritatis vero sequi laudantium at nobis, sed quae odit quidem. Officia, fugiat reprehenderit expedita laborum perferendis esse quibusdam minus impedit necessitatibus?</span>
                    </p>
                    <p>Release Data: 17 June 2021</p>
                    <p>Genre: Action, Drama, Rommace, Adventure</p>
                </div>
                <div className="mt-4 mb-16">
                    <p className="text-lg font-bold">Casts</p>
                    <div className="flex flex-wrap mt-4 gap-4">
                        <div className="flex flex-col items-center">
                            <img src={dharmendra} className="h-[5rem] w-[5rem] rounded-full" alt="" />
                            <p>Dharmendra Deol</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={amitab} className="h-[5rem] w-[5rem] rounded-full" alt="" />
                            <p>Amitab Bachchan</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={hema} className="h-[5rem] w-[5rem] rounded-full" alt="" />
                            <p>Hema Malini</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={jaya} className="h-[5rem] w-[5rem] rounded-full" alt="" />
                            <p>Jaya Bachchan</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[95%] md:w-[80%] mb-[8rem]">
                <div className="w-full border-b-2 mb-2">
                    <p className="text-lg font-bold: ">Comments:</p>
                </div>
                <div className="flex gap-2 border-b-2 pb-2 border-white/30 mt-6">
                    <textarea type="text" placeholder="Comment on here....." className="w-[80%] md:w-[50%] h-[3rem] p-2 border rounded-lg bg-white/10" />
                    <div className="bg-brand h-[3rem] flex items-center px-6 rounded-md text-lg">Post</div>
                </div>
                <div className="mt-6 ml-4 flex flex-col gap-2">
                    <div className="border-b pb-2 border-white/30">
                        <p className="text-sm text-white/50">Vilas Rabad</p>
                        <p className="">One of the best movie....... love it</p>
                    </div>
                    <div className="border-b pb-2 border-white/30">
                        <p className="text-sm text-white/50">Rohit Fasale</p>
                        <p className="">Great Movie.....</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchNow
