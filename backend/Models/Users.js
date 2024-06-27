import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String },
  userMail: String,
  password: String,
});

const user = mongoose.model("User", userSchema);

export default user;
