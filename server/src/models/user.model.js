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
   password: {
      type: String,
      required: true,
      trim: true
   },
   fullName: {
      type: String,
      lowercase: true,
      index: true
   },
   subscriptionPlan: {
      type: Schema.Types.ObjectId,
      ref: "SubscriptionPlan"
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