Client-Side Application
This is a client-side application built with React and Vite. The app includes authentication, routing, and responsive UI components powered by Material UI. It leverages modern React features like hooks, context, and efficient state management tools like Formik and Axios.

Table of Contents
Overview
Prerequisites
Installation
Available Scripts
Dependencies
App Structure
Theme Management
Components
Conclusion
Overview
This application features:

Material UI (MUI): Responsive design with Material UI components.
React Router: Client-side navigation for a multi-page experience.
Formik & Yup: Form handling and validation.
React Hot Toast: User notifications.
Axios: To handle API requests.
OAuth Authentication: Integration with Google OAuth for login.
Cookie Management: Using react-cookie for storing tokens.
Prerequisites
Make sure you have the following installed:

Node.js (v14+)
NPM or Yarn
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo-name.git
cd your-repo-name
Install the dependencies:

bash
Copy code
npm install
Available Scripts
The following scripts are available in the project:

Start Development Server:

bash
Copy code
npm run dev
Build for Production:

bash
Copy code
npm run build
Preview Production Build:

bash
Copy code
npm run preview
Lint the Project:

bash
Copy code
npm run lint
Dependencies
Core Dependencies:
React: ^18.3.1
React DOM: ^18.3.1
Axios: ^1.7.2 - HTTP client for API requests.
Formik: ^2.4.6 - Form management.
Yup: ^1.4.0 - Form validation.
React Router DOM: ^6.25.1 - For routing between pages.
React Cookie: ^7.2.0 - For managing cookies.
React Hot Toast: ^2.4.1 - Toast notifications.
Material UI & Styling:
@mui/material: ^5.16.6 - Core MUI components.
@mui/icons-material: ^5.16.6 - Material icons.
@emotion/react: ^11.13.0 - Emotion for styling.
@emotion/styled: ^11.13.0 - Emotion’s styled components.
Dev Dependencies:
Vite: ^5.3.4 - The development server and build tool.
ESLint: ^8.57.0 - Linting for JavaScript/JSX code quality.
@vitejs/plugin-react-swc: ^3.5.0 - React support with SWC for faster builds.
App Structure
App.jsx
Theme Management: The app uses Material UI’s createTheme() and ThemeProvider to switch between light and dark themes based on user preference.
Routing: Utilizes React Router to manage different routes (/, /login, /signup, and /profile).
Notifications: react-hot-toast is used to show toasts in the app for user feedback.
Cookies: The react-cookie library helps manage cookies like session or authentication tokens.
Theme Management
The application supports dynamic light and dark mode switching, managed using:

Material UI ThemeProvider: Provides the correct theme (dark/light) throughout the app.
ThemeContext: A custom hook, useTheme(), provides the current mode (light or dark) and allows toggling between modes.
Components
Login: The login form for user authentication.
SignUp: The sign-up form for new user registration.
UserProfile: Displays authenticated user information.
Navbar: A responsive navigation bar displayed on all pages.
ThemeContext: Manages dark and light modes across the app.