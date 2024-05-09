import express from "express";
import mongoose from "mongoose";
import bodyParser from 'express'
import userRouter from './routes/user.js'
import recipeRouter from './routes/recipe.js'

const app = express(); 


app.use(bodyParser.json())

// userRouter
app.use('/api',userRouter)

// recipeRouter
app.use('/api',recipeRouter)

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