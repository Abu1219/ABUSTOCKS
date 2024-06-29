import express from "express";

import user from "../Models/Users.js";
const router = express.Router();

// add New User
router.post("/adduser", async (req, res) => {
  const { userName, userMail, password } = req.body;

  try {
    // Check if a user with the given username already exists in the database
    const existingUser = await user.findOne({
      $or: [{ userName: userName }, { userMail: userMail }],
    });

    // If no existing user is found, proceed to create a new user
    if (existingUser === null) {
      const newUser = new user({
        userName,
        userMail,
        password,
      });

      // Save the new user to the database
      await newUser.save();

      // Respond with a status of 201 (Created) and a success message
      return res.status(201).send({
        message: `${userName} user Added`,
        loaction: "Login",
      });
    }

    // If an existing user is found, respond with a status of 200 (OK) and an appropriate message
    return res.status(200).send({
      message: "username / Mail  already exists try with another name",
      loaction: "Register",
    });
  } catch (error) {
    // If there is an error (e.g., MongoDB connection error), respond with a 500 status and an error message
    console.error("Error connecting to MongoDB:", error);
    return res.send({ message: "Server error. Please try again later." });
  }
});

// login

router.post("/login", async (req, res) => {
  const { userName, password } = await req.body;

  const findUser = await user.findOne({ userName }); //find the user

  //response not Use available

  if (!findUser) {
    return res.status(404).send({ message: "username doesn't exists" });
  }

  if (findUser.password !== password) {
    return res.status(401).send({ message: "Password is incorrect" });
  }
  res.status(200).send({ message: "Loggedin Sussecs", data: findUser });
});

export default router;
