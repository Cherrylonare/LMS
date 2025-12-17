import express from 'express';
import { registerUser, login, getUserProfile, logout, updateProfile } from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import multer from 'multer';
const upload = multer({ dest: 'uploads/profile/' });
const router = express.Router();

router.route("/registerUser").post(registerUser);
router.route("/login").post(login);
router.route("/profile").get(isAuthenticated, getUserProfile);
router.route("/logout").get(logout);
router.route("/profile/update").put(isAuthenticated, upload.single("profilePhoto"), updateProfile);
export default router;  
