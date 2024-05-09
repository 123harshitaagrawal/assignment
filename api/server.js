import express from "express";
import mongoose from "mongoose";

const app = express(); 
mongoose
  .connect(
    "mongodb+srv://harshitaagrawal026:z3PrkDOVeD6L8WHs@cluster0.omfkcni.mongodb.net/",
    {
      dbName: "mern",
    }
  )
  .then(() => console.log("MongoDB is Connected..!"))
  .catch((err) => console.log(err.message));

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));

//username:harshitaagrawal026
//password:z3PrkDOVeD6L8WHs