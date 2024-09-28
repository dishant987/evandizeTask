import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cron from "node-cron";
import cookieParser from "cookie-parser";
import helmet from "helmet"; // For security headers
import connect from "./database/conn.js";
import router from "./routes/router.js";
import passport from "passport";
import User from "./models/user.js";
import GoogleStrategy from "passport-google-oauth20";

config(); // Load environment variables

const app = express();

// CORS configuration
const corsOptions = {
  origin: "localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ googleId: profile.id });
      if (!user) {
        user = new User({
          username: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
        });
        await user.save();
      }
      done(null, user);
    }
  )
);
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => done(null, user));
});
app.use(helmet()); // Add security headers

// Static files (if needed)
// app.use(express.static("public"));

// Database connection and server startup
connect()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        `Server connected to http://localhost:${process.env.PORT || 3000}`
      );
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  });

// Routes
app.use("/api", router);

app.get("/", (req, res) => {
  res.json("Get Request");
});

// // Cron job (runs every minute)
// cron.schedule("* * * * *", () => {
//   console.log("Cron job running every minute");
// });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
