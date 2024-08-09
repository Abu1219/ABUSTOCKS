import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import User from "../models/userModel.js";
import generateToken from "../utility/generateToken.js";

//@desc register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  //obtain the data from req
  const { name, email, password, watchList } = await req.body;
  // Validate required fields
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Invalid data: All fields are required");
  }

  //check existing user
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400);
    throw new Error("User already Exists");
  }

  //create a new user
  const user = await User.create({
    name,
    email,
    password,
    watchList: watchList || [],
  });
  // response with user data created
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      watchList: user.watchList,
    });
  }
});

// @desc Auth user & get TokenExpiredError
// @route    POST/api/users/login
// @access Public

const authUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      watchList: user.watchList,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email/password");
  }
});
const checkAuthStatus = asyncHandler(async (req, res) => {
  if (req.user) {
    res.status(200).json({ user: req.user }); // Send the user data if authenticated
  } else {
    res.status(402);
    throw new Error("not token");
  }
});
//@desc logout
//@route POST/api/users/logout
//@acess public

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
});

//@desc profile
//@route GET/api/users/profile
//@acess  private
const userProfile = asyncHandler(async (req, res) => {
  if (req.user) {
    res.status(200).json({
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      watchList: req.user.watchList,
    });
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});

//@desc updateProfile
//@route PUT/api/users/updateProfile
//@acess  private
const updateProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.watchList = req.body.watchList || user.watchList;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      watchList: updatedUser.watchList,
    });
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});

//@desc updateWatchlist
//@route PUT/api/users/watchList
//@acess  private

const updateWatchList = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  console.log(req.body);

  if (user) {
    const alreadyAdded = user.watchList.some(
      (item) => item.symbol === req.body.symbol
    );
    if (!alreadyAdded) {
      user.watchList.push(req.body);
      const updatedUser = await user.save();
      res.json(updatedUser.watchList);
    } else {
      res.status(400);
      throw new Error("Already Added");
    }
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});
const removeWatchList = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.watchList = user.watchList.filter(
      (el) => el.symbol !== req.body.symbol
    );
    const updatedUser = await user.save();
    res.json(updatedUser.watchList);
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});
export {
  authUser,
  checkAuthStatus,
  registerUser,
  logoutUser,
  userProfile,
  updateProfile,
  updateWatchList,
  removeWatchList,
};
