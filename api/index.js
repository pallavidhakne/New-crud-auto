import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://pallavi:pallavi@crudauth.cqigqcr.mongodb.net/")
 
 .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });
const app =express();
app.listen(3000,()=>{
    console.log('Server listening on port 3000');
})