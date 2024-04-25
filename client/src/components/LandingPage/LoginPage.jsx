import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';

function LoginPage() {

    const navigate = useNavigate();
    const cookies = new Cookies();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginFormHandler = async (e) => {
        e.preventDefault();
        try {
            const loginRes = await fetch('http://localhost:8000/api/v1/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            });
    
            if (loginRes.status === 200) {
                const {data} = await loginRes.json();
                console.log(data.accessToken);
                cookies.set('accessToken', JSON.stringify(data.accessToken));
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
                localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
                
                const isRegCompleted = await fetch("http://localhost:8000/api/v1/users/is-subscribed", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: JSON.parse(localStorage.getItem("accessToken")),
                    },
                    body: JSON.stringify({})
                })
                // console.log(isRegCompleted);
                if(isRegCompleted.status === 200){
                    window.alert("Login Successfully");
                    console.log("completed");
                    navigate("/in");
                }
                else if(isRegCompleted.status === 300){
                    window.alert("Login Successfully");
                    console.log("Not completed");
                    navigate("/register/subscription");
                }
                else{
                    window.alert("Server Error");
                }
            }
            else{
                window.alert("Invalid credentials");
            }
        } catch (error) {
            window.alert("Invalid request");
            console.log(error);
        }
    }


    return (
        <div className="h-screen w-screen bg-home-bg bg-cover text-white flex justify-center">
            <div className="container">
                <Navbar />
                <div className="form h-[90%] flex items-center justify-center">
                    <form onSubmit={loginFormHandler} className="bg-black/70 w-[28rem] h-[30rem] flex gap-4 flex-col items-center pt-12">
                        <p className="text-2xl font-bold mb-2">Sign in</p>
                        <div className="flex flex-col w-[70%]">
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Email or Phone number" 
                                value={email}
                                onChange={e =>setEmail(e.target.value)}
                                />
                        </div>
                        <div className="flex flex-col w-[70%]">
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                />
                        </div>
                        <button type='submit' className="bg-brand mt-5 h-[2.7rem] w-[7rem] text-lg hover:bg-brand/80 rounded-sm">Sign in</button>
                        <p>Forgot Password?</p>
                        <p className="text-gray-400">New to Netmovies? <span className="cursor-pointer hover:text-white"><Link to="/">Sign up now</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
