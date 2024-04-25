import mongoose from "mongoose";

const subscriptionPlanSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    quality: {
        type: String
    },
    features: [
        {
            monthly_price: {
                type: Number
            }, 
            video_quality: {
                type: String
            },
            resolution: {
                type: String
            },
            special: {
                type: String
            },
            supported_devices:{
                type: String
            },
            no_of_devices: {
                type: Number
            },
            download_devices: {
                type: Number
            }
        }
    ]
})

export const SubscriptionPlan = mongoose.model("SubscriptionPlan", subscriptionPlanSchema);