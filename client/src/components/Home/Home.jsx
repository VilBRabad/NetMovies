import React, { useEffect, useState } from 'react'
import { FaPlay, FaPlus } from "react-icons/fa6";
import deewaar from "../../images/MoviesPosters/Deewaar.jpg"
import dilwale from "../../images/MoviesPosters/dilwale.jpg"
import zanjeer from "../../images/MoviesPosters/zanjeer2.jpg"
import jani from "../../images/MoviesPosters/jani.jpg"
import karan from "../../images/MoviesPosters/karan.jpg"
import sainik from "../../images/MoviesPosters/sainik.jpg"
import lahoo from "../../images/MoviesPosters/lahu-ke-do-rang-film_orig.jpg"
import sholay from "../../images/MoviesPosters/sholay.jpg"
import judge from "../../images/MoviesPosters/judge.jpg"
import { motion } from "framer-motion";

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
      poster: zanjeer,
      title: "Zanjeer",
      year: "1973",
      qaulity: "HD",
      rating: "7.5",
      category: [
        "Action", "Crime", "Drama", "Thriller"
      ],
      description: "A young Vijay Khanna witnesses the murder of his parents committed by a man of unknown identity with a white horse on his charm bracelet Zanjeer. Due to this traumatic event, Vijay has recurring nightmares of a white stallion...."
    },
    {
      poster: jani,
      title: "Jaani Dushman",
      year: "1979",
      qaulity: "Full HD",
      rating: "8.1",
      category: [
        "Action", "Rommance", "Horror", "Mystery"
      ],
      description: "Divya and Karan Saxena are in love and engaged. Karan has a younger step-brother, Vivek, whom he looks after as if he was his brother. Divya and Vivek study in the same college as their best-friends group....."
    },
    {
      poster: deewaar,
      title: "Deewaar",
      year: "1975",
      qaulity: "HD",
      rating: "8",
      category: [
        "Action", "Crime", "Drama", "Thriller"
      ],
      description: "Deewaar is a 1975 Indian action crime drama film written by Salim–Javed and directed by Yash Chopra. Released worldwide on 24 January 1975, the film stars an ensemble cast of Shashi Kapo...."
    },
    {
      poster: sholay,
      title: "Sholay",
      year: "1975",
      qaulity: "Full HD",
      rating: "8.1",
      category: [
        "Action", "Adventure", "Drama", "Comedy"
      ],
      description: "Jai and Veeru are small-time crooks who are released from prison, where they are recruited by a as the duo had saved Thakur from a train robbery which makes Thakur to recruit them for the mission with an additional ₹20,000 reward....."
    },
    {
      poster: sainik,
      title: "Sainik",
      year: "1993",
      qaulity: "Full HD",
      rating: "6",
      category: [
        "Action", "Rommance", "Drama"
      ],
      description: "This movie is about army officer Suraj Dutt, who is the son of Yashpal Dutt. Suraj goes to meet his sister Minni at a women's college before he falls in love with Alka. They soon get married, but Suraj is called for a year-long mission...."
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
            <button className="bg-brand h-[2.4rem] w-[9rem] rounded-sm hover:bg-brand/80">Watch Now</button>
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
              popularMovieData.map((post, index) => (
                <img src={post.poster} 
                className={`h-[8rem] w-[12rem] ${index===indx?"border-4":""}`} alt=""  
                onClick={()=>
                  setIndx(index)
                }/>
              ))
            }
          </div>
        </div>
        <div className="text-white mt-4">
            <p className="mb-2 text-lg font-semibold">People also like</p>
            <div className="flex gap-2 max-md:overflow-x-scroll">
              <img src={zanjeer} className="h-[8rem] w-[12rem]" alt="" />
              <img src={judge} className="h-[8rem] w-[12rem]" alt="" />
              <img src={lahoo} className="h-[8rem] w-[12rem]" alt="" />
              <img src={karan} className="h-[8rem] w-[12rem]" alt="" />
              <img src={dilwale} className="h-[8rem] w-[12rem]" alt="" />
              <img src={deewaar} className="h-[8rem] w-[12rem]" alt="" />
            </div>
            <div className="flex gap-2 mt-3 max-md:overflow-x-scroll">
              <img src={karan} className="h-[8rem] w-[12rem]" alt="" />
              <img src={zanjeer} className="h-[8rem] w-[12rem]" alt="" />
              <img src={deewaar} className="h-[8rem] w-[12rem]" alt="" />
              <img src={lahoo} className="h-[8rem] w-[12rem]" alt="" />
              <img src={dilwale} className="h-[8rem] w-[12rem]" alt="" />
              <img src={judge} className="h-[8rem] w-[12rem]" alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
