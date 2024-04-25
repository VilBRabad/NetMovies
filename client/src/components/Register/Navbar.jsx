import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();

    const signOutClickHandle = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/v1/users/logout", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: JSON.parse(localStorage.getItem("accessToken")),
                },
                body: JSON.stringify({}),
            })
            console.log(response);
            const res = await response.json();
            console.log(res);
            if(response.status === 200){
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("user");
                console.log("Logout Successfully");
                window.alert("Logout Successfully");
                navigate("/");
            }
            else{
                console.log("server error");
                window.alert("server error1");
            }

        } catch (error) {
            window.alert("Server Error");
            console.log(error);
        }
    }

    return (
        <div className="nav px-6 relative flex items-center justify-between w-full shadow-md py-2">
            <span className="text-brand font-logo text-[2.8rem] font-semibold">NETMOVIES</span>
            <span
                className="text-lg mr-8 cursor-pointer"
                onClick={signOutClickHandle}
            >Sign out</span>
        </div>
    )
}

export default Navbar
