import React from 'react'

function Questions() {

    const questionsList = [
        {
            question: "What is Netmovies?",
            description: ""
        },
        {
            question: "How much does Netflix cost?",
            description: ""
        },
        {
            question: "Where can I watch?",
            description: ""
        },
        {
            question: "How do I cancel?",
            description: ""
        },
        {
            question: "What can I watch on Netflix?",
            description: ""
        },
        {
            question: "Is Netflix good for kids?",
            description: ""
        },
    ]

  return ( 
    <div id="questions" className="min-h-screen w-screen flex justify-center text-white bg-black">
      <div className="container flex flex-col items-center w-full pt-20">
        <span className="text-4xl font-bold">Frequently Asked Questions</span>
        <div className="quet flex flex-col gap-2 items-center mt-8 w-full">
            {
                questionsList.map((item, index)=>(
                    <div className="card" key={index}>
                        <span>{item.question}</span>
                        <span className="plus">+</span>
                    </div>
                ))
            }
        </div>
        <div className="log mt-8">
            <span className="text-xl">Ready to watch? Enter your email to create or restart your membership.</span>
            <div className="mt-2 flex justify-center"> 
                <input type="email" placeholder="Email Address" className="h-[3rem] w-[23rem] text-lg border rounded-[4px] border-gray-400 outline-0 px-4 mr-2 bg-gray-900/60" />
                <button className="h-[3rem] w-[10rem] rounded-[4px] text-lg bg-brand">Get Started</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Questions
