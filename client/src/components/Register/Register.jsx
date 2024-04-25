import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSharedState } from '../../Context/SharedStateContext';

function Register() {

  const [password, setPassword] = useState("");
  const { sharedValue, setSharedValue } = useSharedState();
  const navigate = useNavigate();

  useEffect(() => {
    if (sharedValue === null) {
      navigate("/");
    }
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: sharedValue,
          password: password
        }),
      });

      if (response.status === 201) {
        const loginRes = await fetch('http://localhost:8000/api/v1/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: sharedValue,
            password: password
          }),
        });

        if(loginRes.status === 200){
          const {data} = await loginRes.json();
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
          localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
          window.alert("User created successfully");
          navigate("/register/subscription");
        }
        else{
          window.alert("Account created successfull, Please login to complete registration.");
          navigate("/sign-in");
        }
      }
      else if (response.status === 409) {
        window.alert("User is Already Exists, Please Login...!");
        setSharedValue(null);
        navigate("/sign-in");
      }
      else {
        window.alert("Server Error, Please try again after some time....");
        setSharedValue(null);
      }
    } catch (error) {
      window.alert("Server Error, Please try again after some time....");
      setSharedValue(null);
      // console.log(error);
    }
  }

  return (
    <div className="main w-full flex-col flex items-center">
      <div className="w-full mt-4">
        <span className="pl-14 text-gray-600">Step 1 of 3</span>
      </div>
      <form onSubmit={handleSubmit} className="regi-card flex flex-col gap-3 items-center justify-center border mt-20 h-[30rem] w-[30rem] max-sm:w-[98%] bg-white shadow-lg">
        <span className="text-2xl font-bold">Create Password</span>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" value={sharedValue} className="text-gray-500" readOnly name='email' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' />
        </div>
        <button type="submit" className="h-[2.4rem] w-[75%] bg-brand text-white hover:bg-brand/80 flex items-center justify-center">Next</button>
        <span className="text-sm">Terms & conditions*</span>
      </form>
    </div>
  )
}

export default Register
