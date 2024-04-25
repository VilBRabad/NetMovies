import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
   path: "./.env"
});


connectDB()
.then(()=>{
   app.listen(process.env.PORT || 8000, ()=>{
      console.log("Server running on PORT: ", process.env.PORT);
   })
})
.catch((err)=>{
   console.log("DB connection Error, ", err);
})

