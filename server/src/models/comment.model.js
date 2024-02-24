import mongoose, {Schema} from "mongoose";

const commentSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    commentBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    commentTo: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    }

}, {timestamps: true})

export const Comment = mongoose.model("Comment", commentSchema);