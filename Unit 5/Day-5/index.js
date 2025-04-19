const express = require("express");
const mongoose =require("mongoose")
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.listen(8080, async () => {
 try{
    await mongoose.connect("mongodb://127.0.0.1:27017/nem305")  
    console.log("connected to DB")
 }catch(err){
    console.log("Failed to connect DB")
 }
 console.log("server started")
});
