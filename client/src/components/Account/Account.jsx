import React from 'react'
import { useNavigate } from 'react-router-dom';

function Account() {

  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/users/logout", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: JSON.parse(localStorage.getItem("accessToken")),
        },
        body: JSON.stringify({}),
      })
      // console.log(response);
      // const res = await response.json();
      // console.log(res);
      if (response.status === 200) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        console.log("Logout Successfully");
        // window.alert("Logout Successfully");
        navigate("/");
      }
      else {
        console.log("server error");
        window.alert("server error1");
      }

    } catch (error) {
      window.alert("Server Error");
      console.log(error);
    }
  }

  return (
    <div className="h-screen w-screen text-white">
      <div className="mb-24 md:ml-[8rem] flex flex-col max-md:items-center mt-[5rem]">
        <p className="text-2xl font-bold mb-4">Profile</p>
        <div className="details flex flex-col gap-4 ml-6 text-xl">
          <div className="bg-white/10 w-[98%] sm:w-[28.5rem] rounded-xl p-4 flex flex-col gap-2">
            <p>Name: Vilas Rabad</p>
            <p>Gender: Male</p>
            <p>DOB: 03 July 2002</p>
            <p>Email Id: rabadvilas11@gmail.com</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-brand h-[3rem] w-[15rem] hover:bg-brand/80 rounded-md">Change Password</button>
            <button className="bg-brand h-[3rem] w-[13rem] hover:bg-brand/80 rounded-md">Edit Profile</button>
          </div>
          <p className="text-white/60 mt-4">Subscription</p>
          <div className=" subs w-[98%] sm:w-[28.5rem] h-[7rem] flex items-center justify-between px-4 rounded-xl bg-gradient-to-br from-[#003EB7] via-[#370064] to-[#7A0606]">
            <div>
              <p className="font-bold">Premium</p>
              <p className="text-sm ml-2">4K + HDR</p>
              <p className="text-sm ml-2">Expire on 03 July 2024</p>
            </div>
            <div>
              <span className="text-4xl font-bold mr-6">₹ 649</span>
            </div>
          </div>
          <button onClick={logoutHandler} className="w-[10rem] h-[3rem] bg-slate-500 rounded-md hover:bg-slate-600">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Account
