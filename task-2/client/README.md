# Client-Side Application

This is a client-side application built with React and Vite. It includes authentication, routing, and a responsive UI using Material UI. The application also leverages Formik for form handling, Axios for HTTP requests, and cookie management with `react-cookie`.


## Overview

The app provides:

- **Material UI** for responsive UI design.
- **React Router** for client-side routing.
- **Formik & Yup** for form handling and validation.
- **React Hot Toast** for notifications.
- **Axios** for API requests.
- **OAuth integration** using Google.
- **Cookie management** for token storage.

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **NPM** or **Yarn**

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo-name.git
   cd your-repo-name
2. Install dependencies:
    ```bash
   npm install


## Theme Management

The app features dynamic theme management (light/dark modes) using:

- Material UI's ThemeProvider: To provide light and dark themes.
- Custom useTheme Hook: For theme mode switching.

## Routing

The app uses React Router DOM for client-side routing. The following routes are configured::
- /: Login page.
- /login: Login page.
- /signup: Signup page.
- /profile: User profile page.

## Components
- Login: Handles user login.
- SignUp: Manages user registration.
- UserProfile: Displays the user's profile.
- Navbar: The navigation bar across the app.
- Toaster: Manages notifications throughout the app.
- CookiesProvider: Wraps the app for managing cookies.

