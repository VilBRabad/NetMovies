import React, { useEffect, useState } from 'react'
import deewaar from "../../images/MoviesPosters/Deewaar.jpg"
import dilwale from "../../images/MoviesPosters/dilwale.jpg"
import zanjeer from "../../images/MoviesPosters/zanjeer2.jpg"
import jani from "../../images/MoviesPosters/jani.jpg"
import karan from "../../images/MoviesPosters/karan.jpg"
import sainik from "../../images/MoviesPosters/sainik.jpg"
import lahoo from "../../images/MoviesPosters/lahu-ke-do-rang-film_orig.jpg"
import sholay from "../../images/MoviesPosters/sholay.jpg"
import judge from "../../images/MoviesPosters/judge.jpg"
import { FaPlus } from "react-icons/fa6";

function Movies() {

    const moviesData = [
        {
            title: "Sholay",
            rating: 8.1,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere ullam corporis temporibus expedita fugiat eligendi error repudiandae quidem.....",
            poster: sholay
        },
        {
            title: "Deewaar",
            rating: 8.0,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere ullam corporis temporibus expedita fugiat eligendi error repudiandae quidem.....",
            poster: deewaar
        },
        {
            title: "Jani Dushman",
            rating: 7.8,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere ullam corporis temporibus expedita fugiat eligendi error repudiandae quidem.....",
            poster: jani
        },
        {
            title: "Judge Mujrim",
            rating: 7.5,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere ullam corporis temporibus expedita fugiat eligendi error repudiandae quidem.....",
            poster: judge
        },
        {
            title: "Dilwale",
            rating: 8.4,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere ullam corporis temporibus expedita fugiat eligendi error repudiandae quidem.....",
            poster: dilwale
        }
    ]

    const [indx, setIndx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndx((prevIndx) => (prevIndx === 4 ? 0 : prevIndx + 1));
        }, 5000);
    
        return () => clearInterval(interval);
      }, [indx])

    useEffect(()=>{
        const slider = document.getElementById("slider");
        slider.style.background = `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(201, 0, 0, 0.5), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1), rgba(201, 0, 0, 0.5), rgba(0, 0, 0, 1)), url('${moviesData[indx].poster}') no-repeat`;
        slider.style.backgroundSize = "cover"
        slider.style.backgroundPosition = "center"
    }, [indx])

    return (
        <div className="h-screen w-screen text-white">
            <div className="md:ml-[8rem] max-md:px-4 mt-[5rem] flex flex-col items-">
                <div>
                    <p className="mb-2 text-lg font-semibold">Popular on NetMovies</p>
                    <div className="flex remove-scroll gap-2 overflow-x-scroll">
                        <img src={lahoo} className="h-[8rem] w-[12rem]" alt="" />
                        <img src={sholay} className="h-[8rem] w-[12rem]" alt="" />
                        <img src={karan} className="h-[8rem] w-[12rem]" alt="" />
                        <img src={deewaar} className="h-[8rem] w-[12rem]" alt="" />
                        <img src={judge} className="h-[8rem] w-[12rem]" alt="" />
                        <img src={dilwale} className="h-[8rem] w-[12rem]" alt="" />
                        <img src={zanjeer} className="h-[8rem] w-[12rem]" alt="" />
                    </div>
                </div>
                
                <div className="min-h-[20rem] w-full flex max-lg:flex-col gap-2 items-center justify-center mt-6">
                    <p className="w-[20%] max-lg:w-auto max-md:text-xl text-3xl text-white/60 font-bold">Latest Movies</p>
                    <div className="relative h-auto w-[49vw] max-lg:w-[90%] max-md:flex-col-reverse max-xl:w-[80%] h-[20rem] overflow-hidden w-full flex justify-between items-center">
                        <div id="slider" className="slider absolute opacity-[0.7] z-[1] blur h-full w-full flex justify-center"></div>
                        <div className="bottom-4 left-6 z-[3] w-[90%] max-md:py-6 md:w-[50%]">
                            <p className="text-white">
                                <span className="text-3xl font-semibold">{moviesData[indx].title}</span>
                                <span className="text-xs ml-2">{moviesData[indx].rating}/10 <span className="bg-yellow-500 px-1 py-[1px] text-black rounded-sm font-semibold">IMDB</span></span>
                            </p>
                            <p className="text-white/70 text-sm w-[98%]">{moviesData[indx].description}</p>
                            <div className="flex gap-4 mt-4">
                                <button className="h-[2rem] rounded-sm w-[6rem] bg-brand hover:bg-brand/80">Watch Now</button>
                                <button className="flex flex-col items-center justify-center text-white/70"><FaPlus/><p className="text-xs"> My List</p></button>
                            </div>
                        </div>
                        <div className="z-[2] relative">
                            <img src={moviesData[indx].poster} className="sm:h-[18rem] my-2 h-[13rem] max-md:mt-4 shado rounded-md" alt="" />
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="mb-2 text-lg font-semibold">Other</p>
                    <div className="flex gap-2 flex-wrap justify-center">
                        <img src={zanjeer} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={judge} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={lahoo} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={karan} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={dilwale} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={deewaar} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={sholay} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={karan} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={deewaar} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={dilwale} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={sholay} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={sainik} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={jani} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={judge} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={jani} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={karan} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={sainik} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={deewaar} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={sholay} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={judge} className="h-[8rem] w-[10rem]" alt="" />
                        <img src={dilwale} className="h-[8rem] w-[10rem]" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies
