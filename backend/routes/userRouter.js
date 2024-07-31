import express from "express";
import { protector } from "../middleware/authMiddleware.js";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  userProfile,
  updateProfile,
} from "../controller/userController.js";
router.route("/login").post(authUser);
router.route("/register").post(registerUser);
router.route("/logout").post(logoutUser);
router
  .route("/profile")
  .get(protector, userProfile)
  .put(protector, updateProfile);

export default router;
