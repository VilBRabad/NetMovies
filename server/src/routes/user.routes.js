import { Router } from "express";
import { 
    logoutUser, 
    loginUser, 
    registerUser, 
    refershAccessToken,
    buySubscription,
    isUserSubscribed,
    isUserLoggedIn
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/refresh-token").post(refershAccessToken);
//secure routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/buy-subscription").post(verifyJWT, buySubscription);
router.route("/is-subscribed").post(verifyJWT, isUserSubscribed);
router.route("/is-logged-in").get(verifyJWT, isUserLoggedIn);


export default router;