import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';  // For sending the token to your backend

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Handle normal email/password login here
            const response = await axios.post('/api/login', { email, password });
            console.log(response.data);
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    const handleGoogleLoginSuccess = async (credentialResponse) => {
        console.log(credentialResponse)
        // Optionally decode the token to get user info
        const decoded = jwtDecode(credentialResponse.credential);
        console.log('Decoded Google token:', decoded);

        // Send the token to your backend to authenticate the user
        try {
            const response = await axios.post('/api/auth/google', {
                token: credentialResponse.credential
            });
            console.log('Login success:', response.data);
        } catch (error) {
            console.error('Error authenticating with Google', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
        
            <GoogleOAuthProvider  clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID} >
                <GoogleLogin
                    flow="auth-code"
                    onSuccess={handleGoogleLoginSuccess}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    );
};

export default Login;
