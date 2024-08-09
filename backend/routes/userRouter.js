import express from "express";
import { protector } from "../middleware/authMiddleware.js";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  userProfile,
  updateProfile,
  updateWatchList,
  removeWatchList,
} from "../controller/userController.js";
router.route("/login").post(authUser);
router.route("/register").post(registerUser);
router.route("/logout").post(logoutUser);
router.route("/updateWatchList").put(protector, updateWatchList);
router.route("/removeWatchList").put(protector, removeWatchList);
router
  .route("/profile")
  .get(protector, userProfile)
  .put(protector, updateProfile);

export default router;
