// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./db.js";

const express =require("express")
const dotenv =require("dotenv")
const connectDB =require("./db.js")


const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
connectDB();

app.get("/", (req, res) => {
  res.send("api is running... ");
});

app.listen(process.env.PORT, () => {
  console.log(`server running  on port ${PORT}`);
});

