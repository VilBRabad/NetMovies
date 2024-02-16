import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({ 
   email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
   },
   fullName: {
      type: String,
      required: true,
      lowercase: true,
      index: true
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
      trim: true
   },
   dateOfBirth: {
      type: String,
      required: true
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


userSchema.pre("save", async function(next){
   if(!this.isModified("password")){
      return next();
   }

   this.password = await bcrypt.hash(this.password, 10);
   return next();
})



//** Custome Methods
userSchema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password, this.password);
}

//Token Generation
userSchema.methods.generateAccessToken = async function(){
   return jwt.sign(
      {
         _id: this._id,
         fullName: this.fullName,
         email: this.email
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
         expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      }
   )
}

userSchema.methods.generateRefreshToken = async function(){
   return jwt.sign(
      {
         _id: this._id
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
         expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
   )
}


export const User = mongoose.model("User", userSchema);