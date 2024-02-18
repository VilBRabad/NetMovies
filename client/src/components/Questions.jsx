import React from 'react'

function Questions() {

    const questionsList = [
        {
            question: "What is Netmovies?",
            description: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        },
        {
            question: "How much does Netflix cost?",
            description: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
        },
        {
            question: "Where can I watch?",
            description: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        },
        {
            question: "How do I cancel?",
            description: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },
        {
            question: "What can I watch on Netflix?",
            description: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        },
        {
            question: "Is Netflix good for kids?",
            description: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        },
    ]


    const hideAnswer = (index, e)=>{
        const x = document.getElementsByClassName("show");
        // console.log(x);
        const openEle = document.getElementById(index).classList;
        const plus = e.target.children[1]
        // console.log(openEle);
        if(openEle.contains('show')){
            openEle.remove("show");
            plus.style.transform = "rotate(0deg)";
            return;
        }
        else{
            if(x.length == 0) {
                openEle.add("show");
                plus.style.transform = "rotate(45deg)";
                return;
            }
            else{
                plus.style.transform = "rotate(45deg)";
                const prevPlus = x[0].parentNode.children[0].childNodes[1];
                prevPlus.style.transform = "rotate(0deg)";
                x[0].classList.remove("show");
                openEle.add("show");
            }

        }

    }

  return ( 
    <div id="questions" className="min-h-[100vh] w-screen flex justify-center text-white bg-black">
      <div className="container flex flex-col items-center w-full pt-20">
        <span className="text-4xl font-bold">Frequently Asked Questions</span>
        <div className="quet flex flex-col gap-2 items-center mt-8 w-full">
            {
                questionsList.map((item, index)=>(
                    <div className="card" key={index}>
                        <div className="head" onClick={(e)=> hideAnswer(index, e)}>
                            <span>{item.question}</span>
                            <span className="plus">+</span>
                        </div>
                        <div id={index} className="description">
                            <span>{item.description}</span>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="log mt-8 flex flex-col max-sm:w-[100%]">
            <span className="text-xl text-center">Ready to watch? Enter your email to create or restart your membership.</span>
            <div className="mt-2 flex flex-wrap max-sm:gap-4 justify-center"> 
                <input type="email" placeholder="Email Address" className="h-[3rem] w-[23rem] text-lg border rounded-[4px] border-gray-400 outline-0 px-4 mr-2 bg-gray-900/60" />
                <button className="h-[3rem] w-[10rem] rounded-[4px] text-lg bg-brand">Get Started</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Questions
