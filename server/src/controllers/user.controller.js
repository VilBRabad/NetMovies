import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import {SubscriptionPlan} from "../models/subscriptionplan.model.js"
import jwt from "jsonwebtoken";
import { json } from "express";

const generateAccessRefreshTokens = async (user_Id)=>{
    try{    
        const user = await User.findById(user_Id);

        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });
        // console.log(accessToken);
        return {accessToken, refreshToken};
    }
    catch(err){
        throw new ApiError(500, "Something went wrong while generating access/refresh token");
    }
}


const registerUser = asyncHandler(async(req, res)=>{
    const {email, password} = req.body;
    if([email, password].some((fields) => fields?.trim() === "")){
        throw new ApiError(400, "All Fields Required");
    }
    
    // console.log(email, password);
    
    // console.log(mobileNumber);
    const existsUser = await User.findOne({email})
    if(existsUser){
        throw new ApiError(409, "Email already register");
    }
    
    const user = await User.create({
        email: email, 
        password: password
    })
    
    // console.log(user)
    // console.log("Vila");
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
        
    // console.log("Vila");
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering user");
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User register successfully")
    );
})

const buySubscription = asyncHandler(async(req, res)=>{
    console.log(req.user);
    const userId = req.user._id;
    console.log("CheckPoint - 1");
    const planId = req.body._id
    // const planId = objId.pa
    console.log("PlanId: ", planId);

    if(planId === null){
        throw new ApiError(401, "Plan is invalid"); 
    }

    const plan = await SubscriptionPlan.findById(
        planId
    );
    console.log(plan);
    const user = await User.findByIdAndUpdate(
        userId,
        {
            $set: {
                subscriptionPlan: plan._id
            }
        }
    );
    console.log(user);
    // console.log("Plan : ", plan);

    return res.status(200).json(
        new ApiResponse(
            200, 
            {},
            "Buy Subscriptions"
        )
    )
})

const loginUser = asyncHandler(async(req, res)=>{
    const {email, password} = req.body;

    if(email == "" || password == ""){
        throw new ApiError(400, "Email or password required!");
    }

    const user = await User.findOne({email});

    if(!user){
        throw new ApiError(404, "User Not Found");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new ApiError(402, "Invalid Passwoord!");
    }

    //generate access, refresh tokens
    const {accessToken, refreshToken} = await generateAccessRefreshTokens(user._id);
    // console.log(Token);
    // console.log(accessToken);
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    // console.log(loggedInUser);
    // console.log(loggedInUser.subscriptionPlan);

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200,
            {
                user: loggedInUser,
                accessToken,
                refreshToken
            },
            "User Logged in Successfully"
        )
    );
})


const logoutUser = asyncHandler(async(req, res)=>{
    // console.log(req.user);
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "Logout user Successfully!"));
})

const refershAccessToken = asyncHandler(async(req, res)=>{
    const incommingRefreshToke = req.cookies?.refershToken || req.body.refreshToken;

    if(!incommingRefreshToke){
        throw new ApiError(401, "Unauthorized refresh Token");
    }

    try {
        const decodedToken = jwt.verify(
            incommingRefreshToke,
            process.env.REFRESH_TOKEN_SECRET
        );
        
        if(!decodedToken){
            throw new ApiError(401, "Invalid refresh token");
        }
    
        const user = await User.findById(decodedToken?._id);
    
        if(!user){
            throw new ApiError(401, "Invalid refresh token");
        }
    
        if(incommingRefreshToke !== user?.refreshToken){
            throw new ApiError(401, "Refresh token is expire or used");
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessRefreshTokens(user._id);
    
        return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    accessToken,
                    refreshToken: newRefreshToken
                },
                "Access token refresh"
            )
        )
    } catch (error) {
        throw new ApiError(401, "Something wrong while generating access token");
    }

})


const isUserSubscribed = asyncHandler(async(req, res)=>{
    const user_id = req.user._id;
    // console.log("User is: ", req.user);

    const user = await User.findById(user_id);

    // console.log("user is: ", user);
    if(!user.subscriptionPlan){
        return res.status(300).json(
            new ApiResponse(300, {}, "Not Subscribed")
        )
    }
    return res.status(200)
    .json(
        new ApiResponse(200, {}, "Login successfully")
    );
})

const isUserLoggedIn = asyncHandler(async(req, res)=>{
    return res.status(200).json(new ApiResponse(200, {}, "User logged in"));
})

export {
    registerUser,
    loginUser,
    logoutUser,
    refershAccessToken,
    buySubscription,
    isUserSubscribed,
    isUserLoggedIn,
}