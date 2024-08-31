import express  from "express";
import dotenv from "dotenv";

import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageroutes.js";
import userRoutes from "./routes/userroutes.js";


import connectMongoDB from "./db/connectMongoDB.js";
//import Message from "./models/messagemodel.js";
dotenv.config();
const app=express();
const PORT =process.env.PORT || 8000;


app.use(express.json());

app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

/*
app.get("/", (req,res) => {
    //root route http://localhost:8000/
    res.send("Hello World!!");
});
*/

app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server Running on port ${PORT}`);
});
