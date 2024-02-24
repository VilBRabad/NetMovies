import mongoose from "mongoose";

const actorSchema = mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        required: true
    },
    avatar: {
        type: String,
        required: true
    }
})

export const Actor = mongoose.model("Actor", actorSchema);