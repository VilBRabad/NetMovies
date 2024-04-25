import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { SubscriptionPlan } from "../models/subscriptionplan.model.js";

const getSubscriptionDetails = asyncHandler(async(req, res)=>{
    const subscriptionPlan = await SubscriptionPlan.find({});
    
    if(!subscriptionPlan){
        throw new ApiError(500, "Server Error");
    }

    return res.status(200)
    .json(
        new ApiResponse(200, subscriptionPlan, "Subscription Found")
    )
})

export {getSubscriptionDetails};