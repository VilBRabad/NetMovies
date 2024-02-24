import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import jani_dushman from "../../images/MoviesPosters/jani_dushman.jpg"
import sholay from "../../images/MoviesPosters/sholay.jpg"
import dhadkan from "../../images/MoviesPosters/dhadkan.jpg"
import dilwale from "../../images/MoviesPosters/dilwale.jpg"
import vishwatma from "../../images/MoviesPosters/vishwatma.jpg"
import nayak from "../../images/MoviesPosters/nayak.jpg"


function Search() {

    const [found, setFound] = useState(false);

    return (
        <div className="h-screen w-screen text-white">
            <div className="md:ml-[8rem] max-md:mt-[5rem]">
                <div className="search flex items-center gap-2 ml-4 mt-6 md:ml-20">
                    <input type="text" className="h-[2.5rem] w-[20rem] text-lg rounded-[1.2rem] outline-0 px-4 bg-white/20 border-2 border-gray-300" placeholder="Search movies, series..." />
                    <IoSearchOutline className="text-3xl text-gray-400 hover:text-white cursor-pointer font-bold" />
                </div>
                <div className="res max-md:ml-4 mt-20">
                    {
                        found?
                        <>
                        <div>
                            <p className="mb-2 text-white/70 text-lg font-semibold">Search Result for "Deewaar"</p>
                            <div className="flex gap-2 max-md:overflow-x-scroll">
                                <img src={sholay} className="h-[15rem] w-[11rem]" alt="" />
                            </div>
                        </div>
                        <div className="recomend mt-6">
                            <p className="mb-2 text-white/70 text-lg font-semibold">Recommeded</p>
                            <div className="flex gap-4 flex-wrap">
                                <img src={jani_dushman} className="h-[15rem] w-[11rem]" alt="" />
                                <img src={sholay} className="h-[15rem] w-[11rem]" alt="" />
                                <img src={dhadkan} className="h-[15rem] w-[11rem]" alt="" />
                                <img src={vishwatma} className="h-[15rem] w-[11rem]" alt="" />
                                <img src={dilwale} className="h-[15rem] w-[11rem]" alt="" />
                                <img src={nayak} className="h-[15rem] w-[11rem]" alt="" />
                                <img src={sholay} className="h-[15rem] w-[11rem]" alt="" />
                            </div>
                        </div>
                        </>
                        :
                        <p className="text-white/50 text-3xl">Search for Movies, Series and more.......</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Search
