import React from 'react'

function Features() {
  return (
    <div id="features" className="w-screen h-auto flex justify-center text-white bg-black">
      <div className="container h-auto">
        <div className="feat mt-40">
            <div className="det">
                <span className="title">Enjoy on your TV</span>
                <span className="desc">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</span>
            </div>
            <div className="img"></div>
        </div>
        <div className="feat">
            <div className="img"></div>
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
            <div className="img"></div>
        </div>
        <div className="feat">
            <div className="img"></div>
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
