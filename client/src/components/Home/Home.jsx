import React, { useEffect, useState } from 'react'
import { FaPlay, FaPlus } from "react-icons/fa6";
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

import { motion } from "framer-motion";
import {Link} from "react-router-dom";

function Home() {

  const popularMovieData = [
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
  }, [indx]);

  useEffect(() => {
    const imageSlider = document.getElementById("img");
    imageSlider.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('${popularMovieData[indx].poster}')`;
    imageSlider.style.backgroundSize = "cover";
    imageSlider.style.backgroundRepeat = "no-repeat";
    imageSlider.style.backgroundPosition = "center";
  }, [indx])

  const [found, setFound] = useState(true);

  return (
    <>
      <div id="home" className="relative gap-6 min-h-screen w-screen bg-black md:justify-end overflow-hidden z-[1]">
        <div id="img"
          className="fixed top-0 right-0 h-[50vh] md:h-[100vh] w-[75%] max-md:w-full z-[5]">
        </div>
        <motion.div key={indx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="fixed max-md:mt-[15rem] md:top-[12rem] max-md:w-full flex flex-col text-white max-md:gradient z-[6] pl-[1rem] md:left-[8rem]">
          <p className="text-4xl text-white transition font-bold mb-2 xl:text-[4rem] xl:h-16">{popularMovieData[indx].title}</p>
          <div className="text-gray-400">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="text-nowrap">{popularMovieData[indx].year} </span>
              <span className="text-nowrap">| {popularMovieData[indx].qaulity} </span>
              <span className="text-nowrap">| {popularMovieData[indx].rating}/10 IMDB | </span>
              <div className="flex flex-wrap ml-1 text-sm">
                {
                  popularMovieData[indx].category.map((cate, index) => (
                    <div className="border mr-1 px-1 rounded-md" key={index}>{cate}</div>
                  ))
                }
              </div>
            </div>
            <div className="w-[80%] md:w-[40%]">
              <span>{popularMovieData[indx].description}</span>
            </div>
          </div>
          <div className="flex gap-4 mt-3">
            <Link to="./sholay"><button className="bg-brand h-[2.4rem] w-[9rem] rounded-sm hover:bg-brand/80">Watch Now</button></Link>
            <div className="flex flex-col items-center cursor-pointer">
              <FaPlus className="text-xl" />
              <span className="text-xs">My List</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="md:pl-[9rem] px-2 pt-[8rem] h-screen w-screen bg-gradient-to-t from-black via-black to-black/0 -mt-[23rem] md:-mt-[19rem] z-[9]">
        <div className="popular text-white">
          <p className="mb-2 text-lg font-semibold">Popular on NetMovies</p>
          <div className="flex gap-2 max-md:overflow-x-scroll">
            { 
              found?
              popularMovieData.map((post, index) => (
                <img key={index} src={post.poster} 
                className={`h-[15rem] w-[11rem] ${index===indx?"border-4":""}`} alt=""  
                onClick={()=>
                  setIndx(index)
                }/>
              ))
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
        <div className="text-white mt-4">
          {
            found?
            <>
              <p className="mb-2 text-lg font-semibold">People also like</p>
              <div className="flex gap-2 max-md:overflow-x-scroll">
                <img src={baazigar} className="h-[15rem] w-[11rem]" alt="" />
                <img src={hum_he_bemisal} className="h-[15rem] w-[11rem]" alt="" />
                <img src={ishq} className="h-[15rem] w-[11rem]" alt="" />
                <img src={janvar} className="h-[15rem] w-[11rem]" alt="" />
                <img src={jis_des_me_ganga_rehta_h} className="h-[15rem] w-[11rem]" alt="" />
                <img src={judge_mujrim} className="h-[15rem] w-[11rem]" alt="" />
              </div>
            </>
            :
            <>
            <p className="mb-2 text-lg font-semibold">People also like</p>
            <div className="flex gap-2">
                <div className="h-[15rem] w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                <div className="h-[15rem] w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                <div className="h-[15rem] w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                <div className="h-[15rem] w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                <div className="h-[15rem] w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                <div className="h-[15rem] w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
                <div className="h-[15rem] w-[11rem] rounded-md animate-pulse bg-gray-400"></div>
            </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Home
