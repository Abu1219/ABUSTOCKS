import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    watchList: [],
  },
  {
    timestamps: true,
  }
);

//Encrypt the password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};
const User = mongoose.model("User", userSchema);

export default User;
