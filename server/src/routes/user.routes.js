import { Router } from "express";
import { logoutUser, loginUser, registerUser, refershAccessToken } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

//secure routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refershAccessToken);

export default router;