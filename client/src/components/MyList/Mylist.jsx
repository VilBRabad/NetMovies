import React from 'react'
import deewaar from "../../images/MoviesPosters/Deewaar.jpg"
import dilwale from "../../images/MoviesPosters/dilwale.jpg"
import zanjeer from "../../images/MoviesPosters/zanjeer2.jpg"
import jani from "../../images/MoviesPosters/jani.jpg"
import karan from "../../images/MoviesPosters/karan.jpg"
import sainik from "../../images/MoviesPosters/sainik.jpg"
import lahoo from "../../images/MoviesPosters/lahu-ke-do-rang-film_orig.jpg"
import sholay from "../../images/MoviesPosters/sholay.jpg"
import judge from "../../images/MoviesPosters/judge.jpg"

function Mylist() {
    return (
        <div className="h-screen w-screen text-white">
            <div className="md:ml-[8rem] ml-4 mt-[5rem]">
                <p className="text-xl text-white/70 font-bold">My List</p>
                <div className="flex gap-2 mt-3 flex-wrap">
                    <img src={karan} className="h-[8rem] w-[12rem]" alt="" />
                    <img src={zanjeer} className="h-[8rem] w-[12rem]" alt="" />
                    <img src={deewaar} className="h-[8rem] w-[12rem]" alt="" />
                    <img src={lahoo} className="h-[8rem] w-[12rem]" alt="" />
                    <img src={dilwale} className="h-[8rem] w-[12rem]" alt="" />
                    <img src={judge} className="h-[8rem] w-[12rem]" alt="" />
                    <img src={jani} className="h-[8rem] w-[12rem]" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Mylist
