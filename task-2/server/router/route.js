import { Router } from "express";
import * as controller from "../controller/controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { googleSignIn } from "../controller/googleController.js";
const router = Router();

router.route("/users/signup").post(controller.signUp);
router.route("/users/google-signin").post(googleSignIn);
router.route("/users/signin").post(controller.signIn);
router.route("/users/logout").post(verifyJWT, controller.userLogout);

export default router;
