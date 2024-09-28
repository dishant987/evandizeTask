import { OAuth2Client } from "google-auth-library";
import { User } from "../models/user.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleSignIn = async (req, res) => {
  try {
    const { token } = req.body;

    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID, // Your Google Client ID
    });

    const payload = ticket.getPayload();
    const { sub: googleId, email, name, picture } = payload;

    // Check if the user already exists
    let user = await User.findOne({ email });

    if (user) {
      // User exists, check if they already have a googleId
      if (!user.googleId) {
        // Update the existing user with googleId and profileImage
        user.googleId = googleId;
        user.profileImage = picture; // Optionally update profile picture
        await user.save();
      }
    } else {
      // Create a new user if it doesn't exist
      user = new User({
        username: name,
        email,
        googleId,
        profileImage: picture,
      });
      await user.save();
    }

    // Generate access token
    const accessToken = user.generateAccessToken();

    const options = {
      httpOnly: true,
      secure: false,
    };

    return res.status(200).cookie("accessToken", accessToken, options).json({
      statuscode: 200,
      user,
      accessToken,
      message: "Login successfully via Google",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statuscode: 500,
      message: "Google authentication failed",
    });
  }
};
