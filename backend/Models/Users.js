import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  usermailid: {
    type: String,
    unique: true,
  },
  password: String,
  confirmpassword: String,
  Image: String,
});

export const user = mongoose.model("user", userSchema);
