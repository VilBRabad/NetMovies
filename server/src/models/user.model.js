import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({ 
   email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
   },
   mobileNumber: {
      type: String, 
      required: true,
      trim: true,
      unique: true
   },
   password: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
   },
   dateOfBirth: {
      type: Date,
      required: true
   },
   gender: {
      type: String,
      lowercase: true,
   },
   avatar: {
      type: String,
   },
   watchHistory: [
      {
         type: Schema.Types.ObjectId,
         ref: "Video"
      }
   ],
   watchList: [
      {
         type: Schema.Types.ObjectId,
         ref: "Video"
      }
   ],
   refreshToken: {
      type: String
   }, 
   
}, {timestamps: true});

export const User = mongoose.model("User", userSchema);