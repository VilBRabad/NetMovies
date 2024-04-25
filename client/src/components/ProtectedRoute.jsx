import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const ProtectedRoute = React.memo((props)=>{
    // const navigate = useNavigate();
    const { Component } = props;

    const navigate = useNavigate();

    const CheckLoggedIn = async()=>{
        try {
            const res = await fetch("http://localhost:8000/api/v1/users/is-logged-in", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // Accept: "application/json"
                    authorization: JSON.parse(localStorage.getItem("accessToken")),
                },
                // credentials: "include"
            })

            if(res.status !== 200){
                console.log("rerer")
                navigate("/sign-in");
            }
        } catch (error) {
            console.log("Error: ", error);
            navigate("/sign-in");
        }
    }

    useEffect(()=>{
        CheckLoggedIn();
    }, []);

    return (
        <Component/>
    )
})

export default ProtectedRoute
