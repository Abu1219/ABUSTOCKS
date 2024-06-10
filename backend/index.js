import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import { user } from "./Models/Users.js";

const app = express();

app.listen(process.env.PORT, () => {
  console.log("PORT IS RUNNING");
});

app.get("/", (req, res) => {
  res.send("Server is running");
});
mongoose
  .connect(process.env.mongodbUrl)
  .then(() => {
    console.log("App db is connected");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.get(8080, (req, res) => {
  res.send({ message: "serveris running" });
});
app.post("/Signup", async (req, res) => {
  try {
    const newUser = {
      username: req.body.username,
      usermailid: req.body.usermailid,
      password: req.body.password,
      image: req.image || null,
    };
    console.log(newUser);
    const addeduser = await user.create(newUser);
    console.log(addeduser);
    return res.status(201).send(addeduser);
  } catch (error) {
    console.log(error.message);
  }
});
