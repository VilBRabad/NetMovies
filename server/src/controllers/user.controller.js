import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { json } from "express";

const generateAccessRefreshTokens = async(user_Id)=>{
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
    console.log(req.body);
    const {fullName, email, password, mobileNumber, dateOfBirth} = req.body;
    if([fullName, email, password, mobileNumber, dateOfBirth].some((fields) => fields?.trim() === "")){
        throw new ApiError(400, "All Fields Required");
    }
    
    console.log(mobileNumber);
    const existsUser = await User.findOne({
        $or: [{email}, {mobileNumber}]
    })
    
    if(existsUser){
        throw new ApiError(409, "Email or Mobile Number already register");
    }

    const user = await User.create({
        fullName, 
        email, 
        password, 
        mobileNumber,
        dateOfBirth
    })
    
    console.log("Vila");
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
        
    console.log("Vila");
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering user");
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User register successfully")
    );
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


export {
    registerUser,
    loginUser,
    logoutUser,
    refershAccessToken
}