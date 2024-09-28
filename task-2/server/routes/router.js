import { Router } from "express";
import { signup, login, googleLogin } from "../controllers/authController.js";
import passport from "passport";

const router = Router();

// Signup
router.post("/signup", signup);

// Login
router.post("/login", login);

// Google Auth
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  googleLogin
);

export default router;
