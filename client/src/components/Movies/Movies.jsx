import React, { useEffect, useState } from 'react'
import jani_dushman from "../../images/MoviesPosters/jani_dushman.jpg"
import sholay from "../../images/MoviesPosters/sholay.jpg"
import dhadkan from "../../images/MoviesPosters/dhadkan.jpg"
import dilwale from "../../images/MoviesPosters/dilwale.jpg"
import vishwatma from "../../images/MoviesPosters/vishwatma.jpg"
import nayak from "../../images/MoviesPosters/nayak.jpg"

import baazigar from "../../images/MoviesPosters/baazigar.jpg"
import hum_he_bemisal from "../../images/MoviesPosters/hum_he_bemisal.jpg"
import ishq from "../../images/MoviesPosters/ishq.jpg"
import janvar from "../../images/MoviesPosters/janvar.jpg"
import jis_des_me_ganga_rehta_h from "../../images/MoviesPosters/jis_des_me_ganga_rehta_h.jpg"
import judge_mujrim from "../../images/MoviesPosters/judge_mujrim.jpg"
import { FaPlus } from "react-icons/fa6";

function Movies() {

    const moviesData = [
        {
            poster: dilwale,
            title: "Dilwale",
            year: "1994",
            qaulity: "Full HD",
            rating: "8.1",
            category: [
                "Action", "Rommance"
            ],
            description: "Dilwale is a 1994 Indian Hindi-language romantic action film starring Ajay Devgn, Sunil Shetty, Raveena Tandon and Paresh Rawal. Originally Divya Bharti signed for the lead, but due to her sudden demise, she was replaced by Tandon...."
        },
        {
            poster: jani_dushman,
            title: "Jaani Dushman: Ek Anokhi Kahani",
            year: "1973",
            qaulity: "HD",
            rating: "2.7",
            category: [
                "Action", "Crime", "Horror", "Thriller"
            ],
            description: "A young Vijay Khanna witnesses the murder of his parents committed by a man of unknown identity with a white horse on his charm bracelet Zanjeer. Due to this traumatic event, Vijay has recurring nightmares of a white stallion...."
        },
        {
            poster: dhadkan,
            title: "Dhadkan",
            year: "1979",
            qaulity: "Full HD",
            rating: "6.5",
            category: [
                "Action", "Rommance"
            ],
            description: "Anjali Chauhan Verma (Shilpa Shetty) is the only daughter of a wealthy businessman in love with Dev Chopra (Suniel Shetty). Dev is of humble means but Anjali's father reluctantly agrees to meet him. However he rejects Dev for apparent rudeness and uncivilized behavior....."
        },
        {
            poster: vishwatma,
            title: "Vishwatma",
            year: "1975",
            qaulity: "HD",
            rating: "6.5",
            category: [
                "Action", "Thriller"
            ],
            description: "Prabhat Singh is an honest and dedicated police officer, but he usually has no time for his family and due to this, his father is constantly at loggerheads with him. Prabhat's father believes in peace and opposes violence....."
        },
        {
            poster: sholay,
            title: "Sholay",
            year: "1975",
            qaulity: "Full HD",
            rating: "8.1",
            category: [
                "Action", "Adventure", "Drama",
            ],
            description: "Jai and Veeru are small-time crooks who are released from prison, where they are recruited by a as the duo had saved Thakur from a train robbery which makes Thakur to recruit them for the mission with an additional ₹20,000 reward....."
        },
        {
            poster: nayak,
            title: "Nayak",
            year: "2001",
            qaulity: "Full HD",
            rating: "7.8",
            category: [
                "Action", "Thriller"
            ],
            description: "Shivaji Rao Gaekwad is an ambitious television cameraman, working for QTV along with his friend Topi. While on his job, Rao is assigned to record riots triggered by a fight between college students and a bus driver and accidentally records a conversation in which the Chief Minister of Maharashtra Balraj Chauhan takes an indifferent stand, so as not to lose his voter base....."
        },
    ]

    const [indx, setIndx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndx((prevIndx) => (prevIndx === 5 ? 0 : prevIndx + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [indx])

    useEffect(() => {
        const slider = document.getElementById("slider");
        if(!slider) return;
        slider.style.background = `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(201, 0, 0, 0.5), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1), rgba(201, 0, 0, 0.5), rgba(0, 0, 0, 1)), url('${moviesData[indx].poster}') no-repeat`;
        slider.style.backgroundSize = "cover"
        slider.style.backgroundPosition = "center"
    }, [indx])

    const [found, setFound] = useState(false);

    return (
        <div className="h-screen w-screen text-white">
            <div className="md:ml-[8rem] max-md:px-4 mt-[5rem] flex flex-col items-">
                <div>
                    <p className="mb-2 text-lg font-semibold">Popular on NetMovies</p>
                    <div className="flex remove-scroll gap-4 overflow-x-scroll">
                        {
                            found?
                            <>
                                <img src={jani_dushman} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={sholay} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={dhadkan} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={vishwatma} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={judge_mujrim} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={dilwale} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={nayak} className="h-[13rem] w-[10rem]" alt="" />
                            </>
                            :
                            <>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                            </>
                        }
                    </div>
                </div>

                <div className="min-h-[20rem] w-full flex max-lg:flex-col gap-[2rem] items-center justify-start mt-6">
                    <p className="max-w-[15rem] max-lg:w-auto max-md:text-xl text-3xl text-white/60 font-bold">Latest Movies</p>
                        {
                            found?
                                <div className="relative h-auto w-[49rem] max-lg:w-[90%] max-md:flex-col-reverse max-xl:w-[80%] h-[20rem] overflow-hidden flex justify-evenly items-center">
                                    <div id="slider" className="slider absolute opacity-[0.7] z-[1] blur h-full w-[49vw] max-md:w-full flex justify-center"></div>
                                    <div className="bottom-4 z-[3] w-[90%] max-md:py-6 md:w-[50%]">
                                        <p className="text-white">
                                            <span className="text-3xl font-semibold">{moviesData[indx].title}</span>
                                            <span className="text-xs ml-2">{moviesData[indx].rating}/10 <span className="bg-yellow-500 px-1 py-[1px] text-black rounded-sm font-semibold">IMDB</span></span>
                                        </p>
                                        <p className="text-white/70 text-sm w-[98%]">{moviesData[indx].description}</p>
                                        <div className="flex gap-4 mt-4">
                                            <button className="h-[2rem] rounded-sm w-[6rem] bg-brand hover:bg-brand/80">Watch Now</button>
                                            <button className="flex flex-col items-center justify-center text-white/70"><FaPlus /><p className="text-xs"> My List</p></button>
                                        </div>
                                    </div>
                                    <div className="z-[2] relative">
                                        <img src={moviesData[indx].poster} className="sm:h-[18rem] my-2 h-[13rem] max-md:mt-4 shado rounded-md" alt="" />
                                    </div>
                                </div>
                            :
                            <div className="bg-gray-400 animate-pulse relative w-[49rem] max-lg:w-[90%] max-xl:w-[80%] h-[20rem] rounded-xl overflow-hidden">
                                
                            </div>
                        }
                        
                </div>

                <div className="mt-4 mb-4">
                    <p className="mb-2 text-lg font-semibold">Top Action Movies</p>
                    <div className="flex remove-scroll gap-4 overflow-x-scroll">
                        {
                            found?
                            <>
                                <img src={baazigar} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={sholay} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={jani_dushman} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={hum_he_bemisal} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={vishwatma} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={judge_mujrim} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={janvar} className="h-[13rem] w-[10rem]" alt="" />
                            </>
                            :
                            <>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                            </>
                        }
                    </div>
                </div>

                <div className="mt-4 mb-16">
                    <p className="mb-2 text-lg font-semibold">Best Rommantics</p>
                    <div className="flex remove-scroll gap-4 overflow-x-scroll">
                        {
                            found?
                            <>
                                <img src={dilwale} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={dhadkan} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={vishwatma} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={ishq} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={nayak} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={judge_mujrim} className="h-[13rem] w-[10rem]" alt="" />
                                <img src={jis_des_me_ganga_rehta_h} className="h-[13rem] w-[10rem]" alt="" />
                            </>
                            :
                            <>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                                <div className="h-[15rem] min-w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies
