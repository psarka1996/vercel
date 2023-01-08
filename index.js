import express from "express"
import dotenv from "dotenv";
import connectDB from "./db.js";

const PORT = process.env.PORT || 5000


dotenv.config();



const app=express();

app.get("/", (req, res) => {
    res.send("api is running... ");
  });


app.listen(process.env.PORT,()=>{
    console.log(`server running  on port ${PORT}`);
})

connectDB()