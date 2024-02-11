import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async()=>{
   try{
      const connInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);
      console.log("Database Connected !! DB Host: ", connInstance.connection.host);
   }
   catch{
      console.log("Error to connect database.!");
      precess.exit(1);
   }   
}

export default connectDB;


