import bcrypt from "bcryptjs";
import { createToken } from "../utils/jwtUtils.js";
import { default as User } from "../models/user.js";

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const salt = await bcrypt.getSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({ username, email, password: hashedPassword });
  await user.save();

  const token = createToken(user._id);
  res
    .cookie("token", token, { httpOnly: true })
    .status(201)
    .send("User registered!");
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).send("Email or password is wrong");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Invalid password");

  const token = createToken(user._id);
  res.cookie("token", token, { httpOnly: true }).send("Logged in!");
};

const googleLogin = (req, res) => {
  const token = createToken(req.user._id);
  res.cookie("token", token, { httpOnly: true }).redirect("/dashboard");
};

export  { signup, login, googleLogin };
