import mongoose, {Schema} from "mongoose";

const mylistSchema = mongoose.Schema({
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }, 
    video: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    }
})

export const Mylist = mongoose.model("Mylist", mylistSchema);