# Task - Backend Server

This project is a backend server built with **Node.js** and **Express.js**, providing user authentication, Google sign-in, and user session management. It uses **MongoDB** with **Mongoose** for database operations and various libraries such as **JWT**, **bcrypt**, and **Nodemailer** for secure authentication and email handling.


## Overview

The backend server includes the following features:

- User authentication (signup, login, logout) with JWT-based token management.
- Integration with Google for social login.
- MongoDB as the database, connected using Mongoose.
- Handling secure cookies using `cookie-parser`.
- Cross-Origin Resource Sharing (CORS) configuration.
- Email handling using Nodemailer.

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (Ensure a local or remote MongoDB instance is running)
- **NPM** or **Yarn**

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo-name.git
   cd your-repo-name


## Install dependencies: 
 
    ```bash npm install
```

## Environment Variables:

Create a .env file at the root of your project with the following values:

PORT=3000
DOMAIN=http://localhost:3000
MONGO_URI=mongodb://localhost:27017/your-database-name
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

## API Routes:

User Authentication Routes

- POST /api/users/signup: Sign up a new user.
Request Body: { username, email, password }

- POST /api/users/signin: Sign in an existing user.
Request Body: { email, password }

- POST /api/users/logout: Logs out the user. (Requires JWT authentication)

## Google OAuth Routes:

- POST /api/users/google-signin: Handles Google Sign-In.
Request Body: { idToken }






