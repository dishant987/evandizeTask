import { use, serializeUser, deserializeUser } from "passport";
import { default as User } from "../models/user.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ googleId: profile.id });
      if (!user) {
        user = await new User({
          username: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
        }).save();
      }
      done(null, user);
    }
  )
);

serializeUser((user, done) => done(null, user.id));
deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
