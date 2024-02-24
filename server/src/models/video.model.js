import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema({
   title: {
      type: String,
      required: true,
      lowercase: true,
   }, 
   description: {
      type: String,
   }, 
   poster: {
      type: String,
      required: true,
   }, 
   duration: {
      type: String
   }, 
   rating: {
      type: Number,
      default: 0
   },
   genre: [
      {
         type: String,
      }
   ], 
   actors: [
      {
         type: Schema.Types.ObjectId,
         ref: "Actor"
      }
   ],
   releaseDate: {
      type: String,
      required: true
   }
}, {timestampts: true});

export const Video = mongoose.model("Video", videoSchema);