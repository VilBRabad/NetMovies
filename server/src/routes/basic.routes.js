import { getSubscriptionDetails } from "../controllers/basic.controller.js";
import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/get-subscription-plans").post(verifyJWT, getSubscriptionDetails);

export default router;

