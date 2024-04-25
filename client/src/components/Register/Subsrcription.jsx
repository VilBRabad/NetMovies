import React, { useEffect, useState } from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
// import { useSharedState } from '../../Context/SharedStateContext';
import { useNavigate } from 'react-router-dom';

function Subsrcription() {

    const [Subscriptions, setSubscriptions] = useState([]);
    const [planSelect, setPlanSelect] = useState();

    const navigate = useNavigate();


    const [plan, setPlan] = useState(2);
    const selectPlan = (e, index, id) => {
        // console.log(index, id);
        // console.log(planSelect);
        document.getElementById(plan).classList.remove("selected-card");
        document.getElementById(index).classList.add("selected-card");
        
        setPlan(index);
    }

    useEffect(() => {
        const fetchData = async()=>{
            try {
                const response = await fetch("http://localhost:8000/api/v1/basic/get-subscription-plans", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: JSON.parse(localStorage.getItem("accessToken")),
                    },
                    body: JSON.stringify({}),
                })

                if(response.status !== 200){
                    navigate("/");
                }

                const data = await response.json();
                const res = data.data;
                // console.log(res);
                setSubscriptions(res);
                setPlanSelect(res[2]._id);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();

        // document.getElementById(plan).classList.add("selected-card");
    }, [])

    // const {setSharedValue} = useSharedState();

    const handleClick = ()=>{
        // setSharedValue(planSelect);
        navigate(`/register/payment/${planSelect}`);
    }   



    return (
        <div className="main">
            <div className="mt-4">
                <p>Step 2 of 3</p>
                <p className="text-3xl font-semibold">Choose the plan that’s right for you</p>
            </div>
            <div className="cards gap-2 flex justify-center flex-wrap mt-6 w-full">
                {   
                    Subscriptions?
                    Subscriptions.map((item, index) => (
                        <div key={item._id} id={index} className="sub-card" onClick={(e) => selectPlan(e, index, item._id)}>
                            <div className={`sm-card relative card${index + 1}`}>
                                <p className="text-lg font-bold">{item.title}</p>
                                <p className="text-xs font-semibold">{item.quality}</p>
                                {
                                    plan === index
                                        ?
                                        <IoIosCheckmarkCircle className="absolute right-2 text-[1.5rem] bottom-2" />
                                        : <></>
                                }
                            </div>
                            <div className="content">
                                <div className="relative mt-5">
                                    <p className="titl">Mothly Price</p>
                                    <p className="font-semibold">₹ {item.features[0].monthly_price}</p>
                                    <div className="sub-line"></div>
                                </div>
                                <div className="relative mt-5">
                                    <p className="titl">Video and sound quality</p>
                                    <p className="font-semibold">{item.features[1].video_quality}</p>
                                    <div className="sub-line"></div>
                                </div>
                                <div className="relative mt-5">
                                    <p className="titl">Resolution</p>
                                    <p className="font-semibold">{item.features[2].resolution}</p>
                                    <div className="sub-line"></div>
                                </div>
                                {
                                    !item.features[3].special ? <></>
                                        :
                                        <div className="relative mt-5">
                                            <p className="titl">Spatial audio (immersive sound)</p>
                                            <p className="font-semibold">Included</p>
                                            <div className="sub-line"></div>
                                        </div>
                                }
                                <div className="relative mt-5">
                                    <p className="titl">Supported devices</p>
                                    <p className="font-semibold">{item.features[4].supported_devices}</p>
                                    <div className="sub-line"></div>
                                </div>
                                <div className="relative mt-5">
                                    <p className="titl">Devices your household can watch at the same time</p>
                                    <p className="font-semibold">{item.features[5].no_of_devices}</p>
                                    <div className="sub-line"></div>
                                </div>
                                <div className="relative mt-5">
                                    <p className="titl">Download devices</p>
                                    <p className="font-semibold">{item.features[6].download_devices}</p>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <>Unalbe to load, Please Try again</>
                }
            </div>
            <div className="py-4 text-sm text-[#616161]">
                <span>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Term of use for more details. Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</span>
            </div>
            <div className="w-full flex justify-center my-4">
                <button onClick={handleClick} className="bg-brand h-[2.3rem] text-white w-[7rem] rounded-sm hover:bg-brand/80">Next</button>
            </div>
        </div>
    )
}

export default Subsrcription
