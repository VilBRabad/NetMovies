import React, { useState } from 'react'
import jani_dushman from "../../images/MoviesPosters/jani_dushman.jpg"
import sholay from "../../images/MoviesPosters/sholay.jpg"
import dhadkan from "../../images/MoviesPosters/dhadkan.jpg"
import dilwale from "../../images/MoviesPosters/dilwale.jpg"
import vishwatma from "../../images/MoviesPosters/vishwatma.jpg"
import nayak from "../../images/MoviesPosters/nayak.jpg"
import baazigar from "../../images/MoviesPosters/baazigar.jpg"
import ishq from "../../images/MoviesPosters/ishq.jpg"

function History() {

    const [found, setFound] = useState(false);

    return (
        <div className="h-screen w-screen text-white">
            <div className="md:ml-[8rem] ml-4 mt-[5rem]">
                <p className="text-xl text-white/70 font-bold">History</p>
                <div className="flex gap-4 mt-3 flex-wrap">
                    {
                        found ?
                            <>
                                <img src={sholay} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={ishq} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={nayak} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={dhadkan} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={vishwatma} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={baazigar} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={dilwale} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={jani_dushman} className="h-[13rem] w-[10rem]" alt="" />
                            </>
                            :
                            <>
                                <div className="h-[15rem] w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default History
