import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import mongoose from "mongoose";

const generateAccessTokenAndRefereshToken = async function (userId, res) {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    return { accessToken };
  } catch (error) {
    console.log(error);
    return res.json({
      statuscode: 500,
      message:
        "Something went Wrong while generating referesh and access token",
    });
  }
};

export const signUp = async (req, res) => {
  try {
    const { username, email, password, gender } = req.body;

    if (!password) {
      return res.json({
        statuscode: 400,
        message: " password is required",
      });
    }
    if (!email) {
      return res.json({
        statuscode: 400,
        message: "email is required",
      });
    }
    if (!username) {
      return res.json({
        statuscode: 400,
        message: "username is required",
      });
    }
    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (existedUser) {
      return res.status(409).json({
        statuscode: 409,
        message: "User with email or username already exists",
      });
    }

    const user = await User.create({
      username: username,
      email: email,
      password: password,
      gender: gender.toLowerCase(),
    });

    if (!user) {
      res.status(500).json({
        statuscode: 500,
        message: "Something went wrong while registering the user",
      });
    }
    console.log(user);
 

    res.status(201).json({
      statuscode: 201,
      message: "Signup Successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      statuscode: 500,
      message: error.message,
    });
  }
};

//signin
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!password) {
      return res.status(400).json({
        statuscode: 400,
        message: " password is required",
      });
    }
    if (!email) {
      return res.status(400).json({
        statuscode: 400,
        message: "email is required",
      });
    }

    const user = await User.findOne({
      $or: [{ email }, { password }],
    });

    if (user?.googleId) {
      return res.status(400).json({
        statuscode: 400,
        message: "This account is registered with Google. Please sign in using Google.",
      });
    }

    if (!user) {
      return res.status(404).json({
        statuscode: 404,
        message: "User does not exist",
      });
    }


    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        statuscode: 401,
        message: "Invalid User credentials",
      });
    }

    const { accessToken } = await generateAccessTokenAndRefereshToken(user._id);

    const LoggedInUser = await User.findById(user._id).select("-password ");

    const options = {
      httpOnly: true,
      secure: false,
    };

    return res.status(200).cookie("accessToken", accessToken, options).json({
      statuscode: 200,
      user: LoggedInUser,
      accessToken,
      message: "Login SuccessFully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      statuscode: 500,
      message: error.message,
    });
  }
};

//logout
export async function userLogout(req, res) {
  

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .clearCookie("accessToken", options)
    .json({
      statuscode: 200,
      message: "User Logged Out",
    });
}

