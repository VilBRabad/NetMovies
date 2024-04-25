import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
   origin: process.env.CORS_ORIGIN,
   credentials: true
}))

app.use(cookieParser());
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.json({limit: "16kb"}));


import userRouter from "./routes/user.routes.js";
import basicRouter from "./routes/basic.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/basic", basicRouter);


export {app};